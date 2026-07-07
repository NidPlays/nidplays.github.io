/* Styles the header site title like the portfolio brand:
   "nidish" (bright) + "@blog" (dim) + ":~$" (accent).
   The header lives outside the content area, so it persists across
   instant navigation and this only needs to run once. */

(function () {
  "use strict";

  var el = document.querySelector(".md-header__topic:first-child .md-ellipsis");
  if (!el) return;

  var match = el.textContent.trim().match(/^(nidish)(@blog)(:~\$)$/);
  if (!match) return;

  el.textContent = "";
  el.append(match[1]);

  var dim = document.createElement("span");
  dim.className = "nid-brand-dim";
  dim.textContent = match[2];
  el.append(dim);

  var accent = document.createElement("span");
  accent.className = "nid-brand-accent";
  accent.textContent = match[3];
  el.append(accent);
})();
