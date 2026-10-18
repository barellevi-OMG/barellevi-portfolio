# Visual design brief — v0.4

## Principle
A restrained, premium technical editorial portfolio. The experience should feel **alive without being loud**: thoughtful timing, high craftsmanship, real physical texture, carefully measured movement.

### Language
English-first, concise and evidence-conscious. No invented client names, impact statistics, claimed authorship or production readiness. A recruiter sees the relevant lens in 30 seconds and can choose a deeper study.

### Visual system
- Background: dark green-charcoal (`#0b1115`).
- Soft off-white ink (`#edf1ed`) and muted green-gray secondary text.
- Desaturated mint (`#b7d9ca`) for interactive emphasis, antique muted brass (`#d9b992`) for editorial accents.
- Typography: Manrope display headlines and DM Sans body via Google Fonts; provide system fallbacks.
- Photographs: close-up representative hardware; prefer visible material, racks, circuitry, switches, control terminals rather than abstract AI stock scenes.
- Drawings: original schematic SVGs, never actual company diagrams.
- Card visuals: photographs provide texture; diagrams provide comprehension.

### Motion
- Reveal on scroll with gentle vertical translation.
- Restrained image zoom on hover.
- Slow network signal particles and component float only when motion is enabled.
- Pointer parallax kept below roughly 12 CSS pixels.
- `prefers-reduced-motion: reduce` must disable nonessential motion.
- No autoplay 3D, flashy scroll hijacks, page transitions or continuous high-frequency effects.

### Interaction layers
1. Role-specific hero and a project list from one shared data model.
2. Interactive hardware explorer: compute / networking / edge / operator UI, using photographs and switchable SVG schematics.
3. Evidence-labelled project detail overlays with recorded claims clearly attributed.
4. A conceptual network diagnostic sequence: observe → isolate → validate.

### UX gates
- Works at 390px and desktop resolutions, no horizontal overflow.
- All tabs and close controls accessible by keyboard; Escape closes dialogs.
- Hover is enhancement only; tap is fully supported.
- Imagery falls back to local SVGs when a remote photo cannot load.
- No externally published case studies until intellectual-property and claim review.
