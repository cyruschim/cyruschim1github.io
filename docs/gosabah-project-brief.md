# GoSabah.com — Project Brief

Distilled from three source documents submitted to the Ministry of Tourism, Culture and
Environment Sabah (KePKAS), originally prepared under the working name **VisitSabah.net**:

1. *VisitSabah.net Website Sitemap, Site Structure and Development Framework* — full submission paper (28 Jul 2026)
2. *Executive Planning Summary* — condensed leadership brief (29 Jul 2026)
3. *Full Menu Diagram Book* — the complete 17-volume, 469-page sitemap diagram set

Per project instruction, every reference to **VisitSabah.net** below has been renamed to
**GoSabah.com**. The full structured sitemap (all 469 pages, URLs, page-family types) lives in
[`docs/gosabah-sitemap.json`](./gosabah-sitemap.json).

> **Scope note carried over from the source documents:** these three documents are an
> *information-architecture and content-governance* package — positioning, sitemap, navigation,
> page families, CMS approach, delivery roadmap. They **explicitly do not** define final brand
> identity, colour palette, typography, art direction, or the actual photo/video library — those
> are called out as "matters intentionally deferred" and "final brand identity pending" is listed
> as an open risk in the source paper itself. If brand CI and photo do/don't material exists
> elsewhere (e.g. still in the Cowork project), it still needs to be supplied separately.

---

## 1. Positioning

**GoSabah.com — The Official Sabah Visitor Experience Gateway.** An initiative under KePKAS.

Not a static attraction directory — a connected visitor-service platform spanning inspiration,
planning, on-trip assistance, official programmes and responsible travel. It should **not** be
treated as KePKAS's internal portal, a replacement for specialist agency sites, an OTA/merchant of
record, a general news site, an ungoverned commercial directory, or a temporary campaign microsite.

## 2. Why it's needed

Sabah's proposition (mountains, islands, marine environments, biodiversity, heritage, living
cultures, food, crafts, communities, major events) is too broad for a simple attraction list.
Visitor information is currently fragmented across agencies, programmes, operators and third-party
channels. SET, STEP and Visit Sabah Year 2027 need visible public journeys that connect back to
permanent content instead of becoming isolated microsites.

## 3. Audiences (priority needs → platform response)

| Audience | Priority needs | Platform response |
|---|---|---|
| First-time international/regional visitors | Orientation, logistics, safety, itinerary confidence | Discover, Five Wonders, first-time guidance, itineraries |
| Domestic Malaysian visitors & Sabah residents | Short breaks, events, nearby activities, value | Events, nearby map, seasonal/local discovery |
| Families, couples, solo, senior travellers | Suitability, pacing, convenience, trust | Traveller guides, suitability fields, filters |
| Accessibility / faith-related needs | Reliable, specific, respectful info | Accessible Sabah, halal-friendly guidance, verified facilities |
| Adventure, marine, wildlife, cultural travellers | Depth, permits, ethics, seasonality | Five Wonders, safety, responsible guidance, providers |
| SET participants / STEP-oriented visitors | How to participate, progress, verify | Programme journeys, maps, status, verification |
| Travel trade, media, creators, MICE | Authoritative info, assets, official pathways | Campaign, media, trade, official ecosystem pages |

## 4. Visitor lifecycle (drives the sitemap, not a promo page list)

| Stage | Visitor question | Primary response |
|---|---|---|
| Dream / Discover | Why Sabah, what's possible? | Homepage, Discover Sabah, Five Wonders, Stories |
| Compare / Plan | What suits me, how to organise? | Destinations, activities, maps, itineraries, stay, saved trip |
| Prepare | What must I know before travelling? | Entry, connectivity, transport, seasons, health, safety, permits, accessibility |
| Explore | What's near me, open, relevant now? | Mobile map, destination status, events, alerts, Ask Sabah AI |
| Participate | How do I join official experiences? | SET, STEP, Visit Sabah Year 2027 |
| Remember / Return | How do I retain the journey / find what's new? | Saved Sabah, stories, events, emerging destinations, campaign legacy |

## 5. Information-architecture method (5 lenses)

- **Geographic** — Region → district → destination/place → attraction/activity
- **Thematic** — Five Wonders (Peak, Deep, Wild, Ancient, Culture) → topic → related content
- **Task** — Plan → getting there → getting around → stay → timing → essentials → itinerary → provider
- **Programme** — SET, STEP, VSY2027 each get dedicated journeys but reuse destinations/activities/providers/events via relationships, never duplication
- **Content-type** — events, stories, operators, guides, accommodation, itineraries, alerts, media as reusable structured types

**Golden rule:** the full sitemap is the complete governed URL estate; the visible primary menu is
a curated orientation layer. Never treat them as the same thing.

## 6. Global navigation

**Primary menu (8 items):** Discover Sabah · Five Wonders · Destinations · Things to Do · Plan Your
Trip · SET · Visit Sabah 2027 · STEP Partners

**Utility nav (top-right):** Search · Explore Map · Saved Trip · Current Alerts · Accessibility
controls · Language selector (collapsed = flag only; expanded = full language names + accessible
labels)

**Ask Sabah AI:** persistent floating assistant, *not* a top-level menu item. Verified sources,
escalation when no authoritative answer exists.

**Mobile:** compact header + full drawer + bottom nav for Discover / Nearby·Map / Plan / SET / Saved.

**Footer:** comprehensive access to itineraries, stay, events, stories, responsible travel, tourism
services, official agencies, support, legal, accessibility, content-correction.

**Navigation rules:** orient before expanding (mega-menus ≠ full sitemap) · preserve context via
breadcrumbs/related links · active alerts before promotional content · search/language/
accessibility/Ask Sabah always reachable · validate wording during wireframes.

## 7. Complete sitemap — 17 branches, 469 pages

Full machine-readable detail (page ID, type, title, URL) is in
[`gosabah-sitemap.json`](./gosabah-sitemap.json). Summary:

| # | Branch | Pages |
|---|---|---|
| 01 | Homepage, Global Platform Pages and Discover Sabah | 30 |
| 02 | Peak and Deep | 21 |
| 03 | Wild, Ancient and Culture | 39 |
| 04 | Destinations, Regions and Districts | 30 |
| 05 | Things to Do | 37 |
| 06 | Plan Your Trip | 57 |
| 07 | Itineraries | 18 |
| 08 | Where to Stay | 15 |
| 09 | Events | 17 |
| 10 | Stories, Editorial and News | 22 |
| 11 | Responsible Travel, Conservation and Community Benefit | 16 |
| 12 | Licensed Tourism Services, Operators, Guides and Tour Products | 16 |
| 13 | Sabah Experience Trail — SET | 36 |
| 14 | Sabah Tourism Excellence Program — STEP | 28 |
| 15 | Visit Sabah Year 2027 | 30 |
| 16 | Official Sabah Tourism Ecosystem | 17 |
| 17 | Search, Maps, Ask Sabah AI, Saved Trips, Utilities and Errors | 40 |
| | **Total** | **469** |

Page-family/type legend used throughout: `HOME` `HUB` `TOPIC` `GUIDE` `LIST` `DETAIL` `RESP`
(responsible-travel) `PROG` (programme) `DIRECT` (directory) `AGENCY` `STATE` (error/operational
state) `UTILITY` `LEGAL` `EVENT` `STORY` `STAY` `ROUTE`. Routes with `{braces}` (e.g.
`/destinations/{region}/{district}/{place}/`) are governed CMS-generated dynamic records, not
hand-built pages.

**Structural vs. navigational parent:** a page's URL/breadcrumb comes from its structural parent
(e.g. region → district); its *navigational* parent is wherever a visitor is likely to discover it
(a destination might be reached via Wild, Culture, an itinerary, or a campaign) — one canonical
record, many discovery routes, never duplicate pages.

## 8. Site-structure & content model

- **One canonical record per real-world entity.** A destination can belong to a region/district,
  express multiple Wonders, support several activities, appear in itineraries, host events, serve
  as a SET checkpoint, and have nearby STEP partners — all without duplicating the page.
- **Archive/expiry states are mandatory:** events (upcoming/active/postponed/cancelled/completed/
  archived), alerts (active/updated/resolved/archived), provider status
  (active/expiring/expired/suspended/withdrawn), VSY2027 needs a legacy state.
- **No dead ends:** every substantive page must offer a next action (destination, map, itinerary,
  event, save, verified provider, official source, or guide).
- **Content classes:** structured entities (Region/District/Destination/Attraction/Activity/
  Species/Community/Historical Period/Practical Guide/Itinerary/Accommodation/Event/Story/
  Operator/SET & STEP records/VSY2027/Agency/Alert/Map data/Media Asset/Translation/SEO+Redirect/
  Ask-Sabah knowledge source/Form submission) — see JSON/source for full governance metadata per
  type (owner, source, status, last-verified date, next-review date, correction route).

## 9. Media & photography — governance rules (not final art direction)

The source paper is explicit: it does **not** set final art direction. It sets these governing
rules for whatever imagery is used:

- **Authenticity:** media must be verified Sabah-specific — no generic tropical/mountain/wildlife/
  cultural stock standing in for Sabah.
- **Rights tracking per asset:** creator, rights owner, licence, attribution, permitted uses,
  release documentation, expiry/withdrawal condition, and every page where it's used.
- **Representation:** community/cultural imagery must be accurate, dignified, properly consented.
  Wildlife imagery must never encourage unsafe proximity, feeding, disturbance or unethical
  handling.
- **Responsive media:** defined focal points + desktop/mobile crops; video needs poster image +
  captions + transcript; a lower-bandwidth alternative for media-heavy pages.

## 10. Multilingual, accessibility, SEO, performance

- **Initial languages:** English, Simplified Chinese, Bahasa Malaysia — as connected variants of
  one canonical record (not duplicate unrelated pages). Language switch keeps the visitor on the
  equivalent page; browser language may suggest but never force a redirect.
- **Accessibility target:** WCAG 2.2 Level AA across full pages and every responsive state —
  navigation, content, forms, maps, media, AI, language switching.
- **Responsive references:** 1440 desktop / 768 tablet / 390 standard mobile / 320 narrow-mobile
  QA check. Content parity is required — mobile is not a reduced promotional version.
- **SEO:** readable/stable/lowercase/language-specific URLs, unique title+H1 per page, JSON-LD
  structured data matching visible content, segmented XML sitemaps with hreflang, redirect
  governance on every slug change.
- **Performance:** field-measured Core Web Vitals (LCP, INP, CLS) treated as an operational
  concern, not a one-off audit.

## 11. Headless CMS direction

Decoupled headless CMS: editors manage structured content/media/translations/workflow in an admin
portal; the public frontend consumes approved content via versioned APIs — so the visual frontend
can evolve without rebuilding the content estate, and the same content can serve future channels
(PWA, app, kiosk, campaign experiences).

Layers: **Content & media** → **Workflow & governance** (roles, revisions, scheduling, audit) →
**API & integration** → **Experience** (site/PWA/future channels) → **Service** (search, maps,
forms, notifications, saved trips, AI orchestration) → **Delivery** (CDN, caching, image
optimisation, security, monitoring).

Editorial workflow: Draft → content-owner review → agency review → safety/legal review (where
applicable) → translation → translation verification → final approval → publish → scheduled
review → update/archive.

## 12. Delivery roadmap — 8 gated phases

1. **Planning & Architecture** (current stage) — sitemap, page inventory, principles, governance
2. **Responsive Wireframes** — global nav, template/page wireframes, states
3. **UX/UI Design** — design system, components, high-fidelity responsive screens
4. **Content Development** — verified multilingual content, metadata, media, source register
5. **Programming & CMS** — frontend, CMS, APIs, search, map, programmes, analytics, staging
6. **QA & UAT** — functional, content, device, accessibility, security, performance sign-off
7. **Launch** — production deploy, migration, redirects, monitoring, backup, hypercare
8. **Maintenance** — content freshness, frontend quality, security, performance, enhancements

## 13. Key risks called out in the source paper

- Final brand identity pending → don't let visual preference mask unresolved IA problems; approve
  architecture independently of it.
- Large content estate → prioritise launch tiers, reusable templates, traceability.
- Unclear content ownership → named owners + review cycles before migration.
- Translation capacity → prioritise critical pages, track per-language completeness.
- Media-rights uncertainty → asset-rights register + controlled fallback assets.
- SET/STEP/VSY2027 rules not final → configurable, approved fields only — no premature public
  promises.
- Scope growth / premature visual decisions → phase gates + change control.

## 14. What's explicitly still missing for this Claude Code project

Confirmed by the source documents themselves as **out of scope** for this IA package — still
needed before final visual design can be considered "approved":

- Final brand identity, colour palette, typography, illustration/animation language
- Actual photograph/video library (rights-cleared, Sabah-verified)
- Final page copy/translations
- Confirmed SET/STEP/VSY2027 operational rules and benefits
- Technology vendor, hosting, budget, schedule decisions

If any of this exists as separate brand-guideline or photo-library material from the Cowork
project, it should be supplied next — everything else (positioning, sitemap, navigation, content
model, governance, CMS direction, delivery phases) is now captured here and in
`gosabah-sitemap.json`.
