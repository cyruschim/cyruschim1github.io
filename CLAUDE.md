# GoSabah.com

Official Sabah visitor experience gateway, an initiative under KePKAS (Ministry of Tourism,
Culture and Environment Sabah). Originally planned under the working name VisitSabah.net — all
project references now use **GoSabah.com**.

Read these before doing IA, sitemap, page, or navigation work:

- `docs/gosabah-project-brief.md` — positioning, audiences, navigation, content model, governance,
  media rules, CMS direction, delivery roadmap. Distilled from the client's submission paper,
  executive summary and full menu diagram book.
- `docs/gosabah-sitemap.json` — the complete 469-page sitemap across 17 branches (page id, type,
  title, URL) in machine-readable form.
- `docs/gosabah-brand-guideline.md` — the proposed CI system: brand story, logo lockups/clear-space/
  minimum sizes, colour palette (hex values + roles), typography (Sora / Plus Jakarta Sans / DM
  Serif Display / Noto Sans fallback). Distilled from the client's brand identity manual PDF.
- `docs/reference/` — a homepage layout the user likes (built by another AI under the old
  VisitSabah.net name) whose **header and footer structure is to be followed for all future
  builds**. See `docs/reference/README.md` first — it flags that this file's own colour/type/logo
  are a different provisional system and must be swapped for the approved brand CI above, not
  reused as-is.

**Not yet supplied:** vector master logo artwork (only a raster screenshot has been interpreted so
far — hex values are sampled, not confirmed), and a rights-cleared, verified-Sabah photo/video
library. Treat colour hex values and any visual system in the repo as provisional until vector
masters and physical proofs confirm them. Photography style direction (what to use/avoid) is now
captured in `docs/gosabah-brand-guideline.md` §6 — read it before placing any imagery: it also
records repeated mistakes to never repeat (AI-generated "cultural" imagery, non-Sabah locations,
wrong wildlife species, watermarked stock).

## Live build

- `index.html` + `css/gosabah.css` + `js/gosabah.js` — the actual GoSabah.com homepage build.
  Structure/behaviour (header, footer, section sequence, mobile nav) follows
  `docs/reference/` per instruction; fully re-skinned with the approved brand CI (colours,
  Sora/Plus Jakarta Sans/DM Serif Display type, provisional journey-bird logo). All card/hero
  imagery is currently CI-coloured gradient placeholders — no photography has been placed yet,
  pending a real, rights-cleared, verified-Sabah image source (see photography rules above).
