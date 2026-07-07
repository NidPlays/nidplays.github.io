/* Mounts giscus (comments & reactions via GitHub Discussions) into the
   .giscus-mount container rendered by overrides/partials/comments.html.

   With instant navigation enabled, page content is swapped via XHR and
   inline scripts inside the content area run unreliably. This script is
   loaded once outside the content area, so its MutationObserver survives
   navigation and re-mounts the widget whenever a new page provides an
   empty container. */

(function () {
  "use strict";

  var CONFIG = {
    src: "https://giscus.app/client.js",
    "data-repo": "NidPlays/nidplays.github.io",
    "data-repo-id": "MDEwOlJlcG9zaXRvcnkzNjMzODk5MDE=",
    "data-category": "Comments",
    "data-category-id": "DIC_kwDOFajjzc4DAobh",
    "data-mapping": "pathname",
    "data-strict": "1",
    "data-reactions-enabled": "1",
    "data-emit-metadata": "0",
    "data-input-position": "top",
    "data-theme": "transparent_dark",
    "data-lang": "en",
    "data-loading": "lazy",
    crossorigin: "anonymous",
  };

  function mount() {
    var container = document.querySelector(".giscus-mount");
    if (!container || container.childElementCount > 0) return;

    var script = document.createElement("script");
    for (var key in CONFIG) script.setAttribute(key, CONFIG[key]);
    script.async = true;
    container.appendChild(script);
  }

  mount();

  /* Re-mount after instant navigation swaps the page content. The observer
     is cheap: mount() bails immediately unless an empty container exists. */
  new MutationObserver(mount).observe(document.body, {
    childList: true,
    subtree: true,
  });
})();
