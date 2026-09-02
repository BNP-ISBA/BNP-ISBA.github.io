# BNP-ISBA website

Source of <https://bnp-isba.github.io> — the site of the Bayesian
Nonparametrics Section of the International Society for Bayesian Analysis.

Plain HTML, CSS and a little JavaScript. No framework, no dependencies, no
build step, nothing to install.

## Preview your changes

**Double-click any `.html` file.** That's it — it opens in your browser and
looks exactly like the live site. No local server, no commands.

## Where things live

```
index.html  events.html  webinars.html  officers.html
bylaws.html  clauses.html  proposals.html
│
├── assets/
│   ├── js/partials.js   ← the navigation, the news, the footer.
│   │                      Edited once, used by all six pages.
│   ├── js/site.js         puts those pieces into each page and runs the
│   │                      menu button. You should not need to touch it.
│   ├── css/site.css       the whole design. Colours, fonts and spacing are
│   │                      the variables in the `:root` block at the top.
│   ├── css/abstract.css   styling for the abstract pages
│   ├── files/             the ISBA proposals PDF and the budget spreadsheet,
│   │                      linked from proposals.html
│   └── legacy/            the old HTML5UP "Editorial" theme, no longer used —
│                          safe to delete once you are happy with the new site
│
├── abstracts/           one page per webinar abstract
└── images/              board member portraits
```

## Common edits

| I want to…                    | Edit                                          |
| ----------------------------- | --------------------------------------------- |
| Add a news item (home page)   | `assets/js/partials.js` → `NEWS`               |
| Add or rename a nav entry     | `assets/js/partials.js` → `NAV`                |
| Change the footer or contacts | `assets/js/partials.js`                        |
| Add a webinar                 | `webinars.html` — copy the `<tr>` template     |
| Add an event                  | `events.html` — copy a `<tr>`                  |
| Change a board member         | `officers.html` — copy an `<article>` block    |
| Update the proposal guidance  | `proposals.html`                               |
| Change the colours or spacing | `assets/css/site.css`, the `:root` block       |

### Editing `partials.js`

The shared pieces are ordinary HTML wrapped in backticks:

```js
const NAV = `
  <ul>
    <li><a href="index.html">Home</a></li>
    ...
  </ul>
`;
```

Write HTML inside the backticks exactly as you would in an `.html` file. Only
two character sequences are special there — a backtick `` ` `` and `${` — and
neither occurs in normal prose, so in practice you can just type.

If something goes wrong, open the browser console (F12): the script says which
fragment it could not find.

### Adding an abstract

Copy any file in `abstracts/`, replace the title and text, then link to it from
`webinars.html`:

```html
<a class="tag" href="abstracts/Your_File.html">Abstract</a>
```

## Notes

* The navigation is a bar across the top of every page. The "Latest News"
  column appears on the home page only — it is the `class="with-news"` on
  `#wrapper` in `index.html` that turns it on.
* Every page in `abstracts/` follows one shape: an `<h1>` title, one or more
  `<p>` paragraphs, and an optional `<p class="credit">` for the joint-work
  or reference line. Copy any of them when adding a new abstract.
* The long listing tables (events, webinars) carry `class="list-table"`,
  which sets them a step smaller than body text. Add it to any new one.
* `proposals.html` is reached from the Events and Clauses pages, not from the
  navigation bar. The budget spreadsheet is served from `assets/files/` as
  issued by ISBA.
* Dark mode follows the reader's system setting; nothing to configure.
* There is no analytics script. The old Universal Analytics tag
  (`UA-90234804-1`) was removed — Google shut that product down in 2023 and it
  no longer collected anything.
* Portraits are stored at 512×512. Please keep new ones small; the page shows
  them at 128 px.
