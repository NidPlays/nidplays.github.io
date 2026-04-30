## 2025-01-28 - Missing ARIA Labels on Icon-Only Footer Links
**Learning:** Icon-only links (like social media icons in the footer) often rely purely on visuals (e.g., `<i>` elements with specific classes) without any textual description. This makes them invisible or uninformative to screen reader users.
**Action:** Always add descriptive `aria-label` attributes to anchor tags (`<a>`) that contain only icons or decorative elements to ensure they are accessible.
