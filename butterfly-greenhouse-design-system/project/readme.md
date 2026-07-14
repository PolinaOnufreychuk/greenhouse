# Butterfly Greenhouse — Design System

## About

**Butterfly Greenhouse** is a new tropical indoor attraction inside the **VenGreenery** ecosystem: visitors walk among hundreds of live, free-flying butterflies, tropical plants, flowers and exotic animals. This is a from-scratch visual identity + design system for the attraction's website, built to feel **magical, warm, immersive, premium, curious, elegant, and playful without being childish**. The primary business goal is emotional: make visitors want to buy a ticket and step inside — this is a storytelling site, not a tourism brochure or zoo directory.

Personality target: **Apple product pages × National Geographic × modern editorial magazine × interactive museum.** Photography always leads; illustration and sticker-style graphics support it; typography is oversized and becomes part of the composition; nothing sits flat.

## Sources provided

- `uploads/лого_метелики_метелик -05.png` — butterfly icon mark (orange, transparent PNG) → copied to `assets/logo/butterfly-mark-outline.png`
- `uploads/лого_метелики_текст_лого_метелик_збоку-02.png` — horizontal lockup with Ukrainian wordmark "Оранжерея метеликів" → copied to `assets/logo/logo-horizontal-ua.png`
- `uploads/лого_метелики_боковий_метелик_2_кольори-08.png` — a two-color side-butterfly logo variant — **could not be read**: its filename contains a combining Unicode character that this environment's file tools reject as "disallowed characters." Not copied. If needed, please re-upload this file under a plain ASCII filename (e.g. `logo-two-color.png`).
- `uploads/pasted-1783677482374-0.png` — identity guide color-palette page (NARDO STUDIO), giving exact HEX/RGB/CMYK/Pantone values for pink, sky blue, orange, red, amber and green → tokens in `tokens/colors.css` now use these exact values, and all gradients were removed from the system per this feedback.
- `uploads/montserrat.zip` — full Montserrat family (OTF + TTF, all weights + italics) → extracted, TTFs for Regular/Medium/SemiBold/Bold/ExtraBold/Light + italics copied to `assets/fonts/`
- `uploads/fonnts.com-217454.zip` — Basenji variable OTF → copied to `assets/fonts/fonnts.com-Basenji_Variable_Regular.otf`
- **`uploads/метелики-identityguide.pdf` (the brand identity guide) was referenced in the brief but never actually arrived in the project** — only the three logo PNGs and two font zips came through. This design system was built from the logo art, the fonts, and the detailed written brief alone. **If you have the identity guide, please re-attach it** — brand colors, exact type rules, illustration style and sticker/label conventions in this system are my best original construction around the real assets, not transcribed from the guide, and should be checked against it.

## Design System Index

- `styles.css` — the single entry point; imports everything below.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css` (also holds radius/shadow/motion), `fonts.css` (`@font-face`), `base.css` (resets).
- `assets/logo/` — butterfly mark + horizontal lockup.
- `assets/fonts/` — Basenji (variable) + Montserrat (TTF weights + italics).
- `guidelines/` — foundation specimen cards, grouped for the Design System tab: `colors/`, `type/`, `spacing/`, `brand/`.
- `components/` — reusable UI primitives (see below).
- `ui_kits/website/` — homepage recreation (`index.html`) composed from the components + page sections (`Hero.jsx`, `StatsStrip.jsx`, `MeetTheButterflies.jsx`, `QuoteBlock.jsx`, `TicketsSection.jsx`, `FAQSection.jsx`, `Footer.jsx`).
- `SKILL.md` — portable skill file for using this system in Claude Code.

### Components

No codebase or Figma file defined a component inventory for this brand — everything below is an intentional, from-scratch set sized to what an immersive-attraction marketing site needs (see brief: buttons, nav, cards, stickers/badges/tags, tickets CTA, FAQ, stats).

- `components/core/Button.jsx` — primary/secondary/ghost pill button, md/lg
- `components/core/Card.jsx` — full-bleed photographic editorial card (portrait/wide/square) with scrim + overlay title
- `components/core/Sticker.jsx` — rotated sticker-style call-out badge, for overlaying photography
- `components/core/Tag.jsx` — small inline pill label (species, zone, topic)
- `components/core/FAQItem.jsx` — expandable question row
- `components/navigation/Navigation.jsx` — sticky nav, transparent-over-photo → glass-on-scroll
- `components/marketing/TicketCard.jsx` — pricing tier card with a featured/highlighted state
- `components/marketing/StatBlock.jsx` — oversized number + label stat

## Content Fundamentals

No real copywriting samples were provided (no site copy, no marketing deck) — the voice below is constructed from the brief's stated emotional targets (magical, warm, curious, elegant, playful-not-childish) and is a starting point, not a transcription of house style. Treat it as a hypothesis to validate against real marketing copy if you have any.

- **Address:** speak to "you" — the visitor, generally a parent/family decision-maker. Second person, warm and direct: *"Walk into a living rainbow."* Avoid third-person institutional voice ("Guests will enjoy…").
- **Sentence rhythm:** short, declarative, sensory. Prefer fragments over long compound sentences — headlines read like the opening lines of a nature documentary, not a brochure. *"Hundreds of free-flying butterflies, tropical blooms and warm humid air."*
- **Casing:** sentence case everywhere, including headlines and buttons ("Get Tickets" is the one exception as a CTA convention — treat button labels as title case, everything else sentence case).
- **Emoji:** not used. The brand already has a bright, playful visual language via illustration and stickers — emoji would compete with it and cheapen the premium tone. Use a Sticker component or a checkmark glyph (✓) instead of an emoji glyph.
- **Numbers as texture, not data:** stats ("60+ species," "26°C," "500 butterflies today") are used sparingly as oversized display moments to convey scale and wonder — never as a dashboard or dense statistics table.
- **Tone words to keep:** magical, warm, alive, curious, gentle, tropical, up-close. **Tone words to avoid:** "attraction," "facility," "exhibit," "admission," "guest services" — anything that reads like signage at a municipal zoo.
- **Vibe check:** if a sentence would fit on a National Geographic Kids cover, it's on-brand. If it would fit on a highway billboard for a theme park, rewrite it.

## Visual Foundations

- **Color:** the official brand palette (from the NARDO STUDIO identity guide) anchors everything — orange `#E85218` (primary), red `#DE3714`, tropical green `#009545`, sky blue `#97C7EC`, pink `#EDAACC`, amber `#F8B358`. The four cooler/brighter accents (pink, sky blue, amber, red) are used sparingly and sticker-style, never as backgrounds for large areas. Base surfaces are warm cream/paper, never cool white or gray. **No gradients anywhere in this system** — every fill, overlay and scrim is a flat, solid color.
- **Type:** Basenji (rounded, variable-weight display face) for every headline — it's allowed to get enormous (up to 8.5rem) and become part of the composition, not just sit above a section. Montserrat carries all body copy, captions, labels, and UI chrome.
- **Backgrounds:** full-bleed photography is the default for any section introducing a place, animal, or moment — never a small inset photo in a card next to text. Illustration and sticker graphics sit *on top of* photography (rotated badges, floating call-outs), they never replace it. No flat color blocks as a whole-section background except the dark "canopy" green used for quote/pause moments.
- **Animation:** organic, never mechanical or linear. Standard eases: `--ease-organic` for reveals for/entrances, `--ease-flutter` (slight overshoot) for anything meant to feel alive (a sticker landing, a button press), `--ease-soft-in` for exits. Durations run 180ms (micro) → 900ms (full section reveal). No infinite decorative loops on primary content; motion should always resolve.
- **Hover states:** cards scale their photo up slightly (1.06×) and lift with a warm shadow; buttons lift 2px and scale 1.02×; links shift from the darker link color to the brighter brand orange. Never a hard color swap or underline-snap.
- **Press states:** buttons compress toward the darkest orange step (`--orange-900`) rather than shrinking — weight, not size, communicates the press.
- **Borders:** thin (1.5px), low-contrast, warm-tinted (`--border-default` is ink-tinted, not gray). Used only where a card needs definition against a same-toned background — most cards rely on shadow + photography instead of a border.
- **Shadows:** soft and warm (`box-shadow` colors are ink-tinted, never pure black/gray). A distinct flat "sticker" shadow (`--shadow-sticker`) — a hard-edged offset, no blur — is reserved for badges/stickers to sell the physical, cut-and-placed feel.
- **Corner radii:** organic and generous — 20–32px on cards, a true pill on every button/tag/sticker, and an organic asymmetric "blob" radius token available for decorative shapes. No sharp 4–8px corners anywhere; that reads as generic SaaS.
- **Layout rhythm:** wide container (1360px max), generous section padding (64–144px vertical, responsive), asymmetric editorial grids over rigid 12-col symmetry — image and text blocks are allowed to be different sizes/weights within the same row.
- **Transparency / blur:** used only for the sticky nav once scrolled (`--surface-glass`, backdrop-blur) and for flat scrims over photography — never as a general card treatment.
- **Photography color:** warm, saturated, sunlit — greenhouse light, not studio-flat. Flat, solid-color scrims (`--scrim-dark`, `--scrim-dark-strong`, `--scrim-warm`) sit over photos wherever text needs to stay legible — no gradients, ever.

## Iconography

No icon system, icon font, or SVG icon set was provided in the uploaded files, and the brief doesn't specify one. **Do not invent a generic icon set (Lucide/Heroicons/etc.) as a default** — this brand's "iconography" is the butterfly mark itself plus its own illustration language (per the brief: sticker-style illustrations, decorative labels, organic dividers), which wasn't supplied either. Until real illustration assets are shared:
- Use the butterfly mark (`assets/logo/butterfly-mark-outline.png`) as the one recurring iconographic element (e.g. a small mark before a stat, or as a loading/reveal motif).
- For any functional UI glyph that's unavoidable (an FAQ expand/collapse toggle, a close button), use a plain typographic glyph (`+`, `×`, `✓`) rather than drawing a bespoke icon — this is visible in `FAQItem` and `TicketCard`.
- Emoji are not used (see Content Fundamentals).
- **Ask:** please share any existing butterfly/flower/tropical illustration set or icon sprite — the brief explicitly calls for these to become part of the interface, and none currently exist in this system.

## Caveats & what I need from you

1. **The identity guide PDF never made it into the project** — please re-attach it. Everything visual here (palette beyond the sampled orange, exact type pairing rules, illustration/sticker conventions) is my own construction from the brief + the mark, and should be checked against your real guide.
2. **One logo file couldn't be read** (see Sources above) — its filename has an encoding issue. Please re-upload it with a plain-ASCII filename if you need that specific two-color variant in the system.
3. I did **not** find any butterfly/flower/tropical illustration assets, background textures, or photography in the upload — the brief describes these as core to the brand ("colorful butterfly illustrations," "sticker-style illustrations," "organic patterns") but none were provided as files. The homepage UI kit uses stock/placeholder photography and CSS-drawn shapes only; please share the real illustration set and photography so I can wire them in and replace the placeholders.
4. Basenji's variable font only came as a single Regular-labeled variable OTF (weight axis 100–900) — I mapped it across the whole display scale; no separate Bold static file was provided.
