# AGENTS.md

Instructions for agents (and humans) working on this repo.

## What this is

`psp515/psp515` — GitHub profile repo, doubling as the source for a personal
landing page. The page lives entirely under [`docs/`](docs/): a static Astro
site with no UI framework, deployed to GitHub Pages by
[`.github/workflows/deploy-docs.yml`](.github/workflows/deploy-docs.yml).

The repo root also still holds the GitHub-profile [`README.md`](README.md) —
unrelated to the site, don't touch it when working on `docs/`.

## Setup

```
cd docs
npm install
```

Node 22+. No other services, no `.env` file, no secrets — everything the
site needs is either static content or a public, unauthenticated fetch
(GitHub's REST API, browser-side, at runtime — see Studies below).

## Commands

Run from `docs/`:

| Command | Does |
|---|---|
| `npm run dev` | Dev server with hot reload. |
| `npm run build` | Static build to `docs/dist/`. Fails the whole task if it fails — treat any build error as a real bug, not a warning. |
| `npm run preview` | Serves the built `dist/` (what actually ships) on a local port. |
| `npm run check` | `astro check` — type-checks `.astro` files and the TS data modules against `tsconfig.json` (`astro/tsconfigs/strict`). |

## Testing

There is no test framework (no Vitest/Playwright/etc. configured) and none
should be added speculatively. This is a static content site; the
meaningful checks are:

1. **`npm run build` must succeed.** This is the primary correctness check —
   it type-checks every `.astro` file and catches broken imports, bad props,
   and malformed frontmatter.
2. **`npm run check` for TS-only issues** in `src/data/*.ts` / `src/lib/*.ts`
   before they reach a component.
3. **After building, smoke-test the actual routes** — `npm run preview`,
   then hit each of the six pages and confirm 200s and that nothing is
   visually broken:
   ```
   npm run preview &
   curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4321/
   curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4321/projects/
   curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4321/studies/
   curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4321/pl/
   curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4321/pl/projects/
   curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4321/pl/studies/
   ```
   `astro preview` prints the port it actually bound (it will pick a
   different one if 4321 is busy) — read that from its own log line rather
   than assuming.
4. **When changing `Nav.astro` or `src/lib/paths.ts`**, specifically check
   `aria-current="page"` on the active nav link and `aria-current="true"` on
   the active language toggle, on more than one page — this routing logic
   has no other safety net:
   ```
   grep -o 'aria-current="[^"]*"[^>]*>[A-Za-z]*<' dist/projects/index.html
   ```
5. **The Studies page fetches GitHub at runtime, client-side** — it cannot
   be verified by curling the static HTML (the list is empty until JS runs
   in a browser). If you change `StudiesFeed.astro`, check its three states
   by hand in an actual browser: loading (skeletons), success (real repo
   cards), and failure (rate-limited or offline — the amber error panel with
   "Try again"). There's no CI coverage for this; don't claim it works
   without having actually watched it load once.

There's no linter/formatter configured either — match the existing style in
the file you're editing rather than reaching for a new tool.

## Project structure

```
docs/
  astro.config.mjs      base path (env BASE_PATH, default "/"); site URL
  src/
    data/                all content, typed, bilingual — edit here, not in components
      types.ts            I18n, TimelineEntry, Project, Hobby, etc.
      profile.ts           hero copy, stack groups, status strip, page heads
      timeline.ts           the Timeline page's entries
      projects.ts           the Projects page's cards
      hobbies.ts             the off-hours list
      nav.ts                  nav page list + labels
      icons.ts                 inline SVG paths (backdrop glyphs, account marks, hobby icons)
    lib/
      paths.ts            builds "/", "/pl/", "/projects/", "/pl/projects/" etc. from base + lang
    layouts/
      Layout.astro        <html> shell: fonts, Nav, Backdrop, slot, Footer
    components/            presentation only — take data + lang as props, no content
    pages/                 EN routes: index.astro, projects.astro, studies.astro
      pl/                   PL mirrors of the same three routes
    styles/global.css      all tokens + component CSS (one file, no CSS-in-JS)
  public/favicon.svg
```

## Content model — read this before editing copy

Every piece of user-facing text is an `I18n` object: `{ en: "...", pl: "..." }`.
There is **no runtime language switch** — EN and PL are separate static
routes (`/foo/` vs `/pl/foo/`), each page passes a fixed `lang` prop down
through its components, and components just pick `field[lang]`. When you add
or edit an entry in any `src/data/*.ts` file, both `en` and `pl` are
required — there's no fallback language.

To add a timeline entry: append to the array in `timeline.ts`, alternating
`side: "left" | "right"` is a design choice, not automatic — pick deliberately
so the zig-zag doesn't run three in a row on one side. `kind` picks the node
color (`work` / `edu` / `project` / `life` — see the palette in
`global.css`'s `:root`). Same pattern for `projects.ts`.

## Routing / base path

`astro.config.mjs` reads `BASE_PATH` from the environment; it defaults to
`"/"` because the intended deploy is a custom domain (via Cloudflare) in
front of GitHub Pages, serving from the root. **Only** set
`BASE_PATH=/psp515` if this ever needs to serve as raw GitHub Pages from
`psp515.github.io/psp515` instead. Don't hardcode path prefixes in
components — always go through `import.meta.env.BASE_URL` +
`withBase()` from `src/lib/paths.ts`, or a page/nav link will silently break
under whichever base isn't currently configured.

## Deploy

`.github/workflows/deploy-docs.yml` builds `docs/` with `withastro/action@v4`
and deploys via `actions/deploy-pages@v4`, triggered on push to `main` when
`docs/**` or the workflow file itself changes. No separate step needed
beyond merging to `main` — don't add a manual build/deploy step elsewhere.
