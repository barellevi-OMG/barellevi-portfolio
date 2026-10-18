# Architecture and design decisions

## ADR-001 — One data model, multiple career narratives
Maintain four track views from the same project records. A change to a claim should update all views.

## ADR-002 — Static-first, dependency-free
Start with HTML/CSS/JS to avoid build/deployment complexity and server costs. A later move to a framework requires demonstrated value.

## ADR-003 — No use of Oracle VM for v0.3
Existing production bots/services take priority. Cloudflare Pages remains a possible future static host.

## ADR-004 — Representative images plus original SVG
Hardware and system visuals should make the portfolio tactile. Stock imagery must be visibly non-project-specific; photos cannot be represented as real deployments.

## ADR-005 — Calm motion
Limit movement to reveal, subtle parallax, hovering, thin signal flows. Respect prefers-reduced-motion.

## ADR-006 — Publication gating
Private branch and robots directives do not constitute access control or employer approval. Publication requires per-project permission and factual verification.

## ADR-007 — Single-page route handling
Track and job-specific routes use History API and a static hosting fallback. The URL must also load correctly on direct refresh.
