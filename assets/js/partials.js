/* ==========================================================================
   BNP-ISBA — shared page fragments
   --------------------------------------------------------------------------
   THIS IS THE FILE YOU EDIT to change the navigation, the news or the footer.
   Change it once and every page updates.

   Each fragment below is ordinary HTML wrapped in backticks ( ` ).
   Edit the HTML normally. Two characters are special inside backticks:

       `        write it as  \`
       ${       write it as  \${

   Neither appears in normal text, so in practice you can just type.
   ========================================================================== */

/* --- Navigation -----------------------------------------------------------
   Appears in the top bar. To add a page, add one <li>.
   The link to the current page is highlighted automatically.
   ------------------------------------------------------------------------ */
const NAV = `
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="events.html">Events</a></li>
    <li><a href="webinars.html">Webinars</a></li>
    <li><a href="officers.html">Board</a></li>
    <li><a href="bylaws.html">Bylaws</a></li>
    <li><a href="clauses.html">Clauses</a></li>
  </ul>
`;


/* --- Latest news ----------------------------------------------------------
   Shown in the sidebar of the home page only.
   To add an item: copy an <article> block and put it at the top.
   To remove an item: delete its <article> block.
   ------------------------------------------------------------------------ */
const NEWS = `
  <article>
    <p>The <a href="https://bnp15.github.io/"><b>15th International Conference
    on Bayesian Nonparametrics</b></a> will be held in <b>Bergamo, Italy</b>,
    <b>June 28 – July 2, 2027</b>. Stay tuned!</p>
  </article>

  <article>
    <p>The fourth <a href="https://bnpnetworking2026.github.io/"><b>Bayesian
    Nonparametrics Networking Workshop</b></a> was held in <b>Seoul, South
    Korea</b>, <b>July 6–10, 2026</b>.</p>
  </article>

  <article>
    <p>To stay up to date, sign up to our
    <a href="https://groups.google.com/d/forum/bnp-isba">BNP-ISBA Google
    group</a>. <b>Please include your name and affiliation when requesting to
    join.</b></p>
  </article>
`;

/* Archived news, kept out of the page because they are out of date:
     · "Call for contributed talks, deadline December 15, 2024" (BNP 14).
     · "The 14th World Meeting will be hosted in Irvine, California" —
       superseded, BNP 14 took place at UCLA, Los Angeles.
     · BNP 13 (Puerto Varas, 2022) and the 3rd Networking Workshop
       (Singapore, 2024) — both listed on the Events page.                   */


/* ==========================================================================
   The fragments the pages ask for by name, via data-partial="…".
   ========================================================================== */

window.PARTIALS = {

  /* -- Top bar: site name, navigation, and the menu button on phones ------ */
  /* -- Top bar: site name, navigation, the ISBA mark, and the menu button
        on phones. Source order is what the flex layout expects — see 3.1 in
        the stylesheet before reordering. --------------------------------- */
  topbar: `
    <div class="topbar-inner">
      <a href="index.html" class="site-name">BNP-ISBA</a>

      <nav id="nav" aria-label="Main navigation">
        ${NAV}
      </nav>

      <a class="isba-logo" href="https://bayesian.org/"
         title="International Society for Bayesian Analysis">
        <img src="images/isba-logo.png" width="392" height="128"
             alt="International Society for Bayesian Analysis">
      </a>

      <button class="nav-toggle" type="button"
              aria-controls="nav" aria-expanded="false">
        <svg class="icon" aria-hidden="true"><use href="#i-menu"></use></svg>
        <span class="sr-only">Menu</span>
      </button>
    </div>
  `,

  /* -- Sidebar with the latest news. Home page only. ---------------------- */
  news: `
    <h2>Latest News</h2>
    <div class="mini-posts">
      ${NEWS}
    </div>
  `,

  /* -- Page footer -------------------------------------------------------- */
  /* -- Page footer -------------------------------------------------------- */
  footer: `
    <footer class="site-footer">
      <div>
        <p>
          <b>BNP-ISBA</b> — the Bayesian Nonparametrics Section of the
          <a href="https://bayesian.org/">International Society for Bayesian
          Analysis</a>.
        </p>
        <p>
          <a href="mailto:bnp.isba.section@gmail.com">bnp.isba.section@gmail.com</a>
          · <a href="https://groups.google.com/d/forum/bnp-isba">Google group</a>
          · <a href="https://github.com/BNP-ISBA">GitHub</a>
        </p>
      </div>

      <a class="isba-logo" href="https://bayesian.org/"
         title="International Society for Bayesian Analysis">
        <img src="images/isba-logo.png" width="392" height="128"
             alt="International Society for Bayesian Analysis">
      </a>
    </footer>
  `,

  /* -- Icon sprite --------------------------------------------------------
     Every <svg><use href="#i-name"></use></svg> in the site points at one of
     these symbols. Icons are from Feather / Simple Icons (MIT).
     ---------------------------------------------------------------------- */
  icons: `
    <svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">

      <symbol id="i-menu" viewBox="0 0 24 24">
        <path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z"/>
      </symbol>

      <symbol id="i-close" viewBox="0 0 24 24">
        <path d="m12 10.6 5.3-5.3 1.4 1.4-5.3 5.3 5.3 5.3-1.4 1.4-5.3-5.3-5.3 5.3-1.4-1.4 5.3-5.3-5.3-5.3 1.4-1.4 5.3 5.3Z"/>
      </symbol>

      <symbol id="i-user-plus" viewBox="0 0 24 24">
        <path d="M9 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 7c3.9 0 7 1.8 7 4v2H2v-2c0-2.2 3.1-4 7-4Zm0 2c-2.9 0-5 1.2-5 2v.1h10V17c0-.8-2.1-2-5-2Zm10-8h2v3h3v2h-3v3h-2V9h-3V7h3V5Z"/>
      </symbol>

      <symbol id="i-calendar" viewBox="0 0 24 24">
        <path d="M7 2v2h10V2h2v2h2a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h2V2h2Zm13 8H4v10h16V10Zm0-4H4v2h16V6ZM7 12h4v4H7v-4Z"/>
      </symbol>

      <symbol id="i-users" viewBox="0 0 24 24">
        <path d="M9 4a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm7-1a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM9 12.5c3.6 0 6.5 1.6 6.5 3.6V19H2.5v-2.9c0-2 2.9-3.6 6.5-3.6Zm0 2c-2.7 0-4.5 1-4.5 1.6V17h9v-.9c0-.6-1.8-1.6-4.5-1.6Zm7-1.5c3 .1 5.5 1.5 5.5 3.3V19h-4v-2.9c0-1.2-.6-2.2-1.5-3Z"/>
      </symbol>

      <symbol id="i-video" viewBox="0 0 24 24">
        <path d="M3 4h18a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-7v2h4v2H6v-2h4v-2H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm1 2v9h16V6H4Zm6 1.5 5 3-5 3v-6Z"/>
      </symbol>

    </svg>
  `
};
