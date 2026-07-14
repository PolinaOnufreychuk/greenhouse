# Visual References — Style Analysis

Reference set (6 images) provided by client to anchor final design direction. Notes below capture the specific techniques to reuse, not the literal content.

## What's in each reference

1. **BBC Earth "Real Happiness Project"** — full-bleed cinematic forest photo/video with bold white display type overlaid directly on the image (no card/container). Cut-out butterfly stickers (flat illustration, not photographic) scattered over the photo at different depths/sizes, breaking the boundary between "photo" and "graphic." Circular badge/logo centered top. Minimal chrome (share icon, fullscreen icon, audio waveform indicator bottom-right) gives it an "experience," not a "webpage," feel. Pill-shaped ghost-button CTA. Italic serif subhead contrasts with bold sans headline — one deliberate type-pairing moment rather than a uniform type system.

2. **Yardwork "thank you for shopping"** — collage/cutout energy: oversized condensed sans headline in mixed case running across a photo, overlapping a rotated sticker badge (brand tag). Typography itself behaves like a design object, not just a message.

3. **Yardwork "coming soon"** — soft-focus/blurred photography used as an atmospheric *frame* around a sharp, high-contrast content card (cream/olive card floating center). A hand-drawn line-art mascot overlaps the photo boundary. Marquee/ticker bar as a graphic top accent. Big wordmark lockup anchors the bottom.

4. **Goal-tracking app hero** — dark, moody macro nature photography (mushrooms) as backdrop; a real floating UI card (with shadow, avatar stack, progress bar) is composited into the photo, plus pill tag buttons. Shows how *photography + interface elements* can coexist in one frame, not just photography + illustration.

5. **Surf & Turf** — editorial slab-serif headlines, muted earthy palette (cream/olive/blue, no saturated primary colors), a 3D-feeling globe with floating stat-badge callouts positioned around it, split before/after comparison cards with mini sparkline charts, big repeated wordmark bookending the page top and bottom.

6. **Materra** — giant wordmark set directly over full-bleed aerial photography, mission statement layered on photo, logo bar (social proof), split image compositions, dashboard/UI screenshots overlaid on photography for "proof," bold pull-quote stat blocks set directly on photo backgrounds, patterned/colored footer with oversized wordmark.

## Synthesized principles to carry into the Butterfly Greenhouse design

- **Type sits directly on photography**, not inside white cards — headlines are large, confident, and treated as a graphic element in their own right.
- **Cut-out/sticker graphics break the photo's rectangle** — butterflies, badges, tags overlap photo edges and float at different depths rather than sitting in a separate illustration zone. This is the single most important shared trait across all 6 refs and maps directly to the brief's "mix photography with sticker graphics."
- **Muted, confident color palettes** — none of these references use loud/cartoon color; accent colors (orange, blue, olive) appear in small doses (a badge, a button, a sparkline), while photography and neutral tones (cream, near-black, white) carry the page. This is the visual proof that "colorful but premium" is achievable — color as accent, not wallpaper.
- **Real interface elements composited into photography** (stat cards, floating data badges, progress cards) — a technique we can borrow directly for the "Тропіки в цифрах" and "Оберіть квиток" sections: floating fact/price cards over photographic backgrounds instead of plain white sections.
- **Soft-focus photography as atmosphere, sharp content as focus** — usable for transitional/breather moments (e.g. between the Zones section and the Species section).
- **Bookending with an oversized wordmark** top and bottom — gives a sense of a cohesive, branded "experience" rather than a stack of generic sections.
- **Minimal chrome details** (share/fullscreen icons, audio toggle, ticker bar) signal "this is an experience" rather than "this is a brochure" — small UI touches worth borrowing sparingly (e.g. an ambient-sound toggle in the Hero, per the original brief's motion ideas).

## Hero concept: exterior-to-interior scroll transition

Client's idea: hero opens on the greenhouse exterior; as the user scrolls, the camera appears to move toward the building, the doors open, and the view transitions into the interior for the second section (the facts/description block).

Two ways to build this, in order of recommendation given no custom video asset exists yet:

1. **Scroll-linked scale + mask-reveal cross-dissolve (recommended for v1)** — two high-quality stills/loops (exterior, interior), driven by scroll position (GSAP ScrollTrigger or Framer Motion `useScroll`): the exterior image scales up slightly and its opacity fades as a door-shaped `clip-path` on the interior layer expands from the center outward, revealing the interior underneath. Feels like "walking through the door" without needing a custom frame-by-frame video shoot. Fully achievable with two photos/short loops, GPU-cheap, easy to keep 60fps, has a clean `prefers-reduced-motion` fallback (instant crossfade).
2. **Canvas frame-sequence scrub (Apple-style, upgrade path later)** — a pre-rendered sequence of frames (photographed or 3D-rendered camera move through the door) drawn to a canvas and scrubbed by scroll position, like Apple product pages. Most cinematic, but requires either a professional video shoot/render of that exact camera move or 3D production — worth planning for once real photography/video assets exist, not a v1 blocker.

Recommendation: build v1 with approach 1 using two strong photographs (can start with high-quality stock/placeholder tropical-greenhouse exterior + interior shots), architected so swapping in a real frame-sequence later (approach 2) doesn't require restructuring the section — same scroll-trigger, different render target (canvas instead of two DOM layers).
