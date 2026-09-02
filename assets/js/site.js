/* ==========================================================================
   BNP-ISBA — site script
   --------------------------------------------------------------------------
   Three small jobs, no dependencies, no build step:

     1. Fragments     — fills every <div data-partial="topbar"> with the
                        matching entry from assets/js/partials.js, so the top
                        bar, the news and the footer live in one place.
     2. Current page  — marks the matching nav link with aria-current="page".
     3. Menu button   — shows and hides the navigation on narrow screens.

   The fragments arrive through a plain <script> tag, which browsers allow
   even when a page is opened straight from disk. So the site works by
   double-clicking any .html file — no local server needed.

   You do not normally need to edit this file. To change the navigation, the
   news or the footer, edit assets/js/partials.js instead.
   ========================================================================== */

(function () {
  "use strict";

  /* ---------------------------------------------------------------- 1. */
  function insertPartials() {
    const fragments = window.PARTIALS;
    if (!fragments) {
      console.error("assets/js/partials.js did not load — " +
                    "check the <script> tags at the bottom of the page.");
      return;
    }
    document.querySelectorAll("[data-partial]").forEach((slot) => {
      const name = slot.getAttribute("data-partial");
      if (name in fragments) {
        slot.innerHTML = fragments[name];
      } else {
        console.error('No fragment named "' + name + '" in partials.js');
      }
    });
  }

  /* ---------------------------------------------------------------- 2. */
  function markCurrentPage() {
    const here = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("#nav a").forEach((link) => {
      if (link.getAttribute("href") === here) {
        link.setAttribute("aria-current", "page");
      }
    });
  }

  /* ---------------------------------------------------------------- 3. */
  function setUpMenu() {
    const toggle = document.querySelector(".nav-toggle");
    const nav    = document.getElementById("nav");
    if (!toggle || !nav) return;

    const setOpen = (open) => {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    };

    toggle.addEventListener("click", () =>
      setOpen(!nav.classList.contains("is-open")));

    // Following a link, pressing Escape or widening the window all close it.
    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setOpen(false);
    });
    const wide = window.matchMedia && window.matchMedia("(min-width: 60rem)");
    if (wide && wide.addEventListener) {
      wide.addEventListener("change", (mq) => { if (mq.matches) setOpen(false); });
    }
  }

  /* ------------------------------------------------------------- start */

  function start() {
    insertPartials();
    markCurrentPage();
    setUpMenu();
  }

  // The script sits at the end of <body>, so the page is normally ready.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
