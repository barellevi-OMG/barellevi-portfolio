# Bar-El Levi — Technology Portfolio

A private, editorial portfolio preview for **barellevi.com**. One experience, four role-oriented views, a reusable project catalog, and a conceptual interactive diagnostic lab.

> **PRIVATE REVIEW BUILD — NOT CLEARED FOR EXTERNAL PUBLICATION.**
> No deployment, DNS changes, or employer content publication has been authorized.

## Current build

- Native HTML, CSS, and vanilla JavaScript: no application framework, database, build system or paid hosting required.
- Responsive, motion-reduced accessible interface with subtle motion and UI illustrations.
- Sixteen conservatively worded project previews, grouped by Infrastructure, Automation, Technical Operations, and Leadership.
- Photos are representative stock images of physical components, **not photos of actual project environments**.
- Interactive project overlays and a three-step simulated network diagnostic.
- Career-specific paths (SPA rewrites required).
- robots noindex and Cloudflare Pages headers suppress crawling, **not access control**. Never deploy unapproved data.

## Development branch

`develop/portfolio-v0.3` contains the current implementation. The default `main` branch stays untouched until review and approval.

## Routes

- `/` — Overview
- `/infrastructure/`
- `/automation/`
- `/operations/`
- `/leadership/`
- `/for/mobileye-infrastructure/`
- `/for/mobileye-technical-operations/`
- `/for/automation-engineering/`

All routes use `_redirects` to load `index.html`; the router reads `location.pathname`. Static hosts without SPA rewrites need an equivalent fallback.

## Project structure

`src/data.js` — editorial projects and career tracks.
`src/app.js` — rendering, navigation, lab simulation, accessible dialog.
`assets/*.svg` — original schematic illustrations drawn for this portfolio.
`styles.css` — responsive design language and motion.
`docs/` — requirements, approvals, decisions and handoff notes.
`tests/check.mjs` — dependency-free validation.

## Preview and deployment

This branch is **not deployed**. After approval and removal of restricted case studies, connect a static host to the approved release branch. Cloudflare Pages is a low-cost candidate. Configure an SPA fallback, verify HTTPS and custom domain, then remove the preview labels and noindex directives **only after final content review**.

The current GitHub profile is used as the contact link. A barellevi.com mailbox has **not** been set up or assumed to exist.

## Editorial status

Based on a Codex-authored draft review dated 2026-10-18. Source results can be old, reported rather than independently re-tested, and require contribution verification. Projects P01–P11 require employer approval. P12–P14 require ownership confirmation. P15–P16 require a context and rights check. Detailed private evidence does not belong in a public build. See `docs/CONTENT_APPROVAL.md`.

## Imagery

Unsplash photography (individual source IDs and credits in `docs/IMAGE_CREDITS.md`). These are editorial illustrations only. Never imply a stock photo depicts an actual deployment.

## Development handoff

Read `AGENTS.md`, `docs/PROJECT_CONTEXT.md`, `docs/ROADMAP.md`, `docs/DECISIONS.md`, and `docs/CONTENT_APPROVAL.md` before changing the site.
