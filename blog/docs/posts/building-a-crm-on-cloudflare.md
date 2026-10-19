---
comments: true
description: How a small file manager I built for a friend's CA firm grew into a client portal and CRM, running on Cloudflare's free tier.
---

# from file manager to crm, at $0/month

`2026-10-19` · *build notes*

<figure class="nid-video" markdown>
  <video controls autoplay muted loop playsinline preload="metadata"
         poster="../media/file-manager-promo-poster.jpg"
         aria-label="Promo video: invite-only sign-in, Google Drive or R2 storage, a drag-and-drop file browser, public upload links, email attachments filed by subject code, clients, service requests and the client portal">
    <source src="media/file-manager-promo.mp4" type="video/mp4">
    Your browser can't play this video. <a href="media/file-manager-promo.mp4">Download the MP4</a>.
  </video>
  <figcaption>39 seconds, the whole product. Made with <a href="https://github.com/heygen-com/hyperframes">HyperFrames</a>.</figcaption>
</figure>

A friend of mine runs a CA firm, and a CA firm runs on files. Every GST
filing, tax return and audit starts with collecting documents from the firm's
clients: invoices, bank statements, Form 16s, the lot. Lots of clients, lots of
files, all needing to end up in the right folder.

So about ten weeks ago I pushed the first commit of a small file manager to help with
that. I also wanted it as a learning project: a real app with real users, built
on a stack I wanted to get good at. 42 pull requests later, it's
an invite-only **portal and CRM**. The firm's clients sign in, drop their
documents in, raise service requests and follow the work. The firm tracks every
filing in one thread, and email attachments file themselves into the right
folder.

All of it runs on one Cloudflare Worker, and the hosting bill is **$0 a month**.

## the stack

```text
                    ┌──────────── Worker (one origin) ────────────┐
browser ───────────▶│  /*      → Static Assets (Next.js export)   │
                    │  /api/*  → Hono router                      │
                    └───────┬──────────────┬──────────────┬───────┘
                            │              │              │
                       D1 (SQLite)   Durable Objects    Secrets
                            │
                            ▼
                    StorageProvider ─┬──▶ Google Drive
                                     └──▶ R2 bucket
```

- **One Worker serves everything.** The frontend is Next.js 16 built as a
  static export and served from the Worker's Static Assets binding. The API is
  [Hono](https://hono.dev) on `/api/*`. One origin, so no CORS and no second host.
- **D1** (SQLite, through Drizzle) holds workspaces, links, clients, service
  requests and the audit log.
- **Durable Objects** handle the jobs that need one consistent owner: the Drive
  access token, per-link upload quotas, rate limiting and the mail inbox.
- **Supabase Auth** signs people in with a magic link, a password, Google or a
  passkey.
- The UI is shadcn on Base UI with Tailwind v4.

## how it grew

The commit log splits into clear chapters:

| week | what landed |
|---|---|
| **1** | The file manager: browse, upload, multi-select, search, public upload links, a toggle to turn downloads off |
| **1** | A `StorageProvider` seam, so a workspace can live in **Google Drive or an R2 bucket** |
| **1** | **Email ingest**: put `[client_id:acme-4f2a]` in a subject line and the attachments file themselves |
| **4** | Roles and **invite-only client accounts**, plus a client upload portal |
| **4** | **Service requests**, the actual CRM part, with notifications |
| **6** | Sign-in moves to Supabase: magic links, passwords, **passkeys** |
| **7–8** | Performance and security reviews: fewer round trips, stricter CSP, throttled sign-in |
| **10–11** | UX polish: WCAG AA contrast, colour palettes, folder prefetch on hover, a mobile tab bar, animated uploads |

## things i learned

### static export means no dynamic routes

Next's `output: 'export'` can't pre-render `/files/<id>` for an ID that only
exists at runtime. A dynamic route without `generateStaticParams()` fails the
build outright. So the file browser is a single page that reads its state from
a query string: `/files?parentId=…`. The URLs are a little less tidy, and a
whole category of build failure is gone.

### "durable objects are single-threaded" is not the same as atomic

This one bit me. Each public upload link has a `LinkQuota` Durable Object that
tracks how many files and bytes it has taken. Read the counter, check it,
write it back. That's safe because DOs are single-threaded, right?

No. An `await` in the middle (say, `storage.get()`) yields, and another
request can run its own read in that gap. That's a real TOCTOU race. A
500-iteration stress test caught it at about **1 in 150**. Rare enough that a
test firing two requests at once passes about 99% of the time. The fix was to
wrap the counter changes in `blockConcurrencyWhile`.

A second surprise: **a custom error class doesn't survive a Durable Object
stub call.** It arrives as a plain `Error`, with the original class name folded
into `.message`. So `reserve()` returns a result object
(`{ ok: false, reason }`) and never throws.

### authorisation lives in neither auth provider

Two providers are involved, and they're easy to confuse. Supabase proves *who
you are*: one verified email address. Google OAuth is only the firm's Drive
credential, granted once in Settings. Neither one decides *what you can do*.
On every request, the Worker maps the verified address to `admin` (an
allowlist) or `client` (an active client row). Revoking someone takes effect on
their next click, not when their session runs out a week later.

### the safest permission check is a route that doesn't exist

A service request is visible to both the firm and its client, through two
separate route sets. The client can't change a request's status. There's no
`if (role === 'client')` guarding that; **the client route simply doesn't
exist**, so there's no check anyone can forget to add. A request that belongs to
someone else returns `404`, not `403`, because "that one isn't yours" would
confirm the ID is real.

The request thread is an append-only event log, and clients see a filtered view
of it. That filter started as a blocklist, and it leaked: an internal
assignee and an invoice amount rode along on events the client could read. It
is now an **allowlist** per event type, so a new field stays hidden until
someone deliberately exposes it.

### design around the free tier, not against it

The free plan allows 50 subrequests per invocation, and one email attachment
costs three or four of them. Releasing 80 quarantined attachments in one
request would fail around the twelfth, with some files already written. So bulk
release only *queues* them, and a Durable Object files one per second. The
email webhook body is never parsed either, because its shape is undocumented. A
webhook just means "something arrived": the Worker fetches the real data over
the REST API, and a 15-minute cron runs the same scan as a backstop.

## built with ai agents

Most of those 42 PRs came out of [Claude Code](https://claude.com/claude-code)
sessions, and I had Codex review Claude's work along the way. I set the
direction, reviewed every change and merged it. The repo has an `AGENTS.md` that lists the shared
helpers and UX rules every screen follows. It exists because copied code kept
drifting apart until it had to be consolidated. Some other habits that paid off:

- **Ask for review passes as their own PRs.** Several "security and logic
  review" PRs found real defects, the event-log leak among them.
- **A behaviour change needs a test.** The worker suite has 43 test files
  running in `workerd` against real D1, R2 and Durable Objects, with no mocked
  `fetch`.
- **Comments say *why*.** The race above is documented right on the class, so
  the next person (or agent) doesn't "simplify" it away.

### my take

Agents have definitely accelerated development. My favourite part is the cloud
containers: I start several sessions from my phone, then go to my laptop, pull
the changes and test them. A lot of this app was kicked off away from a desk.

Having a second model review the first one helped too. Most of the time Codex
didn't find bugs in what Claude wrote, but sometimes it did, and that oversight
from another LLM is worth a lot.

Where agents still fall short is the loop after the code is written: reviewing,
finding bugs and fixing them. Most of the time they don't get that right on
their own, so that part was still mine. Testing end to end is a must. If this
weren't a hobby project, I'd set up dedicated environments to deploy to, then
have the agents themselves run the end-to-end flows and fix what breaks.

## what's next

Building features as my friend needs them. The latest one: I just redid the
whole mobile UI/UX in a day, moving navigation to a floating bottom tab bar.
After that, scaling it up, I guess.

---

*fin.*
