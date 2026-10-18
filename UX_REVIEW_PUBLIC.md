# UX, information architecture and website design review — v0.7

Date: 2026-10-19. Scope: barellevi.com public static portfolio and its Hebrew/English variants.

## Method and evidence

A code-based expert review informed by:
- Nielsen Norman Group, [Ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/), reviewed in 2024: visibility of system status, recognition over recall, user control, consistency, minimalist design.
- NN/g, [About Us Information on Websites](https://www.nngroup.com/articles/about-us-information-on-websites/): authentic, transparent professional biography helps visitors build trust.
- Baymard Institute, [Homepage and Category Navigation UX](https://baymard.com/research-articles/ecommerce-navigation-best-practice), 2026: category clarity, current-scope cues, information scent and manageable navigation. **Retail UX findings are used as transferable heuristics, not as portfolio-specific experimental evidence.**
- W3C, [Right-to-left authoring](https://www.w3.org/TR/i18n-html-tech-bidi/) and [Language of Page](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page): set the correct HTML `lang` and `dir`, respect bidirectional terminology and logical flow.
- web.dev, [Core Web Vitals](https://web.dev/articles/vitals): LCP, INP and CLS should be measured in real user conditions, not inferred from screenshot appearance.

This document describes editorial/UX findings and changes made in code. It does **not** claim a representative usability study, measured search ranking, WCAG certification or published field performance data.

## Observations and decisions

| Area | Previously observed | Implemented | Remaining considerations |
|---|---|---|---|
| Information architecture | The same project appeared in several track filters; visitors lacked a definitive primary category. | Exactly four primary categories; all 16 projects assigned once, a visible category landing overview and subsection labels. | Test category vocabulary with actual recruiters. |
| Navigation | Global navigation expanded to many links, including interactive-lab details. | Reduced the primary nav to core choices (categories, work, blueprint, biography, job links); secondary destinations remain in context. | Confirm visual hierarchy and thumb reach on small phones. |
| Professional story | Abstract hero and methods without a clear human profile. | About section separates individual contributor, management and team-leadership experience; clearly qualified prior figures. | Add an actual authorized professional portrait and approved CV links only if the owner provides them. |
| Recruiting and relevance | Role paths existed, but mainly changed the same category filter. | Five dedicated, shareable position views with tailored project selections and clear job-context labels. | Verify wording against each actual job posting; no unsupported requirements or degrees. |
| Language and accessibility | English-only default. | Parallel Hebrew routes, RTL document attributes, explicit language switching that retains job paths, localized project copy. | Human review of Hebrew nuance, keyboard, bidirectional model tokens and screen reader reading order. |
| Transparency | Product imagery and diagrams could be mistaken for photographs of the actual installation. | Product/reference labels and published method vs evidence limitations kept visible. | Replace third-party hotlinks with licensed/owner-provided original photos. |
| Interaction | Interactive network diagrams rely on selection and mode switches. | Explicit labels, active states, keyboard-compatible native buttons and reduced-motion patterns. | Run comprehensive WCAG check and keyboard test on every deep page. |
| Performance | External font CSS + several external hardware photographs may affect layout/loading. | Main hero requests high priority; offscreen photos lazy load, local SVG fallbacks in place. | **Not measured:** LCP <=2.5s, INP <=200ms, CLS <=0.1 at p75 are targets, not current scores. Use field data and Lighthouse/CrUX when available. |
| Conversion | Only GitHub profile as proven contact route. | Specific About/role navigation makes professional intent legible. | Add an owner-approved direct contact channel or professional LinkedIn URL. Do not invent or expose a private email. |

## Acceptance checklist

- 16 cards rendered on the full catalog, with unique primary category and no duplicates.
- 4 clearly labeled category landing cards and 4 dedicated pages in each language.
- 5 job-specific URLs in each language; language switch preserves the route.
- A 3-part professional profile with no unsupported academic degree, SQL claim, unverified production metrics or venture name.
- HTML language = Hebrew and direction = RTL on Hebrew routes, English = LTR.
- Mobile page horizontal overflow check, all main routes, interactive project modals, technical cases and diagram modes verified in GitHub Actions browser tests.
- Automated secret/identifier scanning retained for every push.
- GitHub Pages deployment succeeds.

## Priority follow-up

P1: Examine browser QA screenshots, personally read the bilingual copy and compare actual job descriptions before distribution.
P1: Confirm image-use rights and replace stock photo where an owner-authorized genuine setup photograph is available.
P2: Run a proper Lighthouse and axe accessibility audit for mobile and desktop; remediate critical issues, measure LCP/INP/CLS from field traffic.
P2: Add approved, visible direct professional contact, plus downloadable CV links that preserve approved versions.
P3: Run five 5-minute usability tests: ask employers to find relevant infrastructure work, team-leadership evidence and how to contact within 30 seconds.
