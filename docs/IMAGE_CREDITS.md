# Photography and component references

Photographs used in the private prototype are representative, third-party images. They do **not** show the user's hardware, a real deployment, or any employer environment. The SVG component illustrations in `assets/` are conceptual artworks made specifically for the prototype.

| Site category | Verified source / photographer | Usage |
| --- | --- | --- |
| Server racks | [Kevin Ache — A rack of servers in a server room](https://unsplash.com/photos/a-rack-of-servers-in-a-server-room-2JJ3wBHu4_0) | Homepage, compute, virtualization |
| Network switching and rack cabling | [Tyler — A rack of electronic equipment in a dark room](https://unsplash.com/photos/a-rack-of-electronic-equipment-in-a-dark-room-OnI_TNcIv9U) | Network component and project images |
| Dark electronic circuit board | [Vishnu Mohanan — Close up of dark blue circuit board](https://unsplash.com/photos/close-up-of-dark-blue-circuit-board-pfR18JNEMv8) | Automation, edge component, projects |
| Security camera | [Adam Hornyak — Security camera mounted on a white wall](https://unsplash.com/photos/security-camera-mounted-on-a-white-wall-bf4kN7qk4ng) | Video-review project |
| Keyboard | Existing Unsplash CDN reference — provenance confirmation still pending | Operator interface; replace if not reliable |

These four source photo pages were checked during the 18 October 2026 design review. Their corresponding image URLs were verified through direct photo links. Photograph licenses are stated on their Unsplash pages; see [Unsplash License](https://unsplash.com/license).

Do not crop, caption, or imply these photographs are the source project's actual devices. For a commercial release, conduct a final image-usage rights and load-time review. Unsplash API users have additional attribution requirements; this site currently hotlinks known URLs without API calls.

## Image-resilience behavior

If an image fails, the site uses an original local schematic SVG fallback rather than rendering a browser broken-image icon. Automated browser QA should test both the photo-loaded and fallback paths.

## Schematic files

- `assets/server-stack.svg`: generic server rack
- `assets/network-switch.svg`: generic network switch
- `assets/terminal.svg`: conceptual terminal
- `assets/cluster.svg`: connected infrastructure
- `assets/automation-flow.svg`: generic automation flow
- `assets/mark.svg`: monogram identity

All are intentionally illustrative and contain no internal architecture or device identifiers.
