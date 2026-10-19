/* Public portfolio: user-confirmed 2026-10-18 backup completion; technical specifics not independently verified. */
window.PORTFOLIO = {
  "tracks": {
    "all": {
      "label": "THE FULL PICTURE",
      "desc": "Cross-disciplinary work, from physical infrastructure to interfaces people actually use."
    },
    "infrastructure": {
      "label": "INFRASTRUCTURE & SYSTEMS",
      "desc": "Resilient services, virtualization, network diagnostics, monitoring, and physical hardware."
    },
    "automation": {
      "label": "AUTOMATION & INTELLIGENCE",
      "desc": "Connected workflows, practical AI integration, and intuitive interfaces around complex processes."
    },
    "operations": {
      "label": "TECHNICAL OPERATIONS",
      "desc": "Investigation, recovery, reliability, and support where engineering meets operations."
    },
    "leadership": {
      "label": "TECHNOLOGY & PRODUCT LEADERSHIP",
      "desc": "Translating requirements into systems, coordinating decisions, and building better processes."
    }
  },
  "images": {
    "switches": "https://images.unsplash.com/photo-1680992046626-418f7e910589?auto=format&fit=crop&w=1000&q=82",
    "circuits": "https://images.unsplash.com/photo-1592659762303-90081d34b277?auto=format&fit=crop&w=1000&q=82",
    "keyboard": "https://images.unsplash.com/photo-1643425959065-e96192696446?auto=format&fit=crop&w=1000&q=82",
    "servers": "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?auto=format&fit=crop&w=1000&q=82",
    "camera": "https://images.unsplash.com/photo-1757440010307-0f28f06fdd2b?auto=format&fit=crop&w=1000&q=82",
    "scv3020": "https://www.karma-group.ru/upload/iblock/3e9/scv3020.webp",
    "intelS3520": "https://www.piospartslap.de/media/image/product/26228/lg/intel-ssdsckjb150g7-m2-2280-150gb-6g-sata-boss-ssd.jpg"
  },
  "profiles": {
    "all": {
      "eyebrow": "ENGINEERING · OPERATIONS · SYSTEMS",
      "title": "From complexity<br>to <em>clarity.</em>",
      "subtitle": "I turn technical challenges into reliable, usable systems — bridging infrastructure, automation, product thinking, and the people who depend on them.",
      "note": "A cross-disciplinary technology portfolio"
    },
    "infrastructure": {
      "eyebrow": "INFRASTRUCTURE · NETWORKS · RESILIENCE",
      "title": "Built for<br><em>resilience.</em>",
      "subtitle": "From physical hardware and networking to virtualization and observability — designing for systems that must keep working.",
      "note": "Infrastructure & systems engineering"
    },
    "automation": {
      "eyebrow": "AUTOMATION · INTEGRATION · PRODUCT",
      "title": "Less friction.<br><em>More flow.</em>",
      "subtitle": "Designing practical automation, connected services, and interfaces that make complicated work feel simple.",
      "note": "Automation & applied AI"
    },
    "operations": {
      "eyebrow": "DIAGNOSTICS · OPERATIONS · RELIABILITY",
      "title": "Find the signal.<br><em>Fix the system.</em>",
      "subtitle": "An evidence-led approach to troubleshooting, service recovery and real-world technical operations.",
      "note": "Technical operations & reliability"
    },
    "leadership": {
      "eyebrow": "PRODUCT THINKING · TEAMS · EXECUTION",
      "title": "Ideas into<br><em>working systems.</em>",
      "subtitle": "Turning ambiguous problems into clear requirements, sound engineering decisions, and coordinated delivery.",
      "note": "Technical & product leadership"
    }
  },
  "components": [
    {
      "key": "compute",
      "number": "01",
      "title": "Compute",
      "detail": "The physical foundation",
      "visual": "/assets/server-stack.svg",
      "photo": "servers",
      "caption": "A hardware view of resources, isolation, recovery and capacity.",
      "facts": [
        "Host lifecycle",
        "Virtualization",
        "Recovery paths"
      ],
      "accent": "A reliable service starts with an understood host."
    },
    {
      "key": "network",
      "number": "02",
      "title": "Network",
      "detail": "The connective tissue",
      "visual": "/assets/network-switch.svg",
      "photo": "switches",
      "caption": "A signal path is only as strong as its weakest and least visible link.",
      "facts": [
        "Layer boundaries",
        "Connectivity",
        "Observability"
      ],
      "accent": "Follow the packet, not the assumption."
    },
    {
      "key": "edge",
      "number": "03",
      "title": "Edge & devices",
      "detail": "Where software touches reality",
      "visual": "/assets/automation-flow.svg",
      "photo": "circuits",
      "caption": "Physical inputs, local decisions, and graceful degradation.",
      "facts": [
        "Sensors & state",
        "Local control",
        "Interoperability"
      ],
      "accent": "Make the physical/digital boundary legible."
    },
    {
      "key": "interface",
      "number": "04",
      "title": "Operator interface",
      "detail": "The human control plane",
      "visual": "/assets/terminal.svg",
      "photo": "keyboard",
      "caption": "Make important actions comprehensible, safe and repeatable.",
      "facts": [
        "Clear feedback",
        "Human handoff",
        "Accessible flow"
      ],
      "accent": "Complexity belongs behind the interface."
    }
  ],
  "caseStudies": {
    "P11": {
      "challenge": "Virtualization resilience requires coordinated compute, shared storage, quorum, backup execution and practical recovery procedures.",
      "approach": "Separate host failover from recoverability. Review storage paths and quorum behavior, implement backup/recovery workflows and validate results stage by stage.",
      "evidence": "The earlier readiness report documented cluster checks, quorum/path testing, selected guest HA recovery, a saved backup and an isolated restore. The project owner confirmed on 18 October 2026 that the wider backup/recovery phase has subsequently been completed.",
      "limits": "The specific backup product, independent storage arrangement, retention policy, protected guest count and latest recovery/RPO/RTO measurements have not been independently inspected in this portfolio update. Completion of backup work is distinct from blanket production approval.",
      "evidenceLabel": "Virtualization and backup/recovery case study"
    },
    "P05": {
      "challenge": "Security and operational signals arrive in different formats and lose meaning without context and consistent field mapping.",
      "approach": "Collect and normalize events, verify schemas and make topology and severity legible in a dashboard.",
      "evidence": "Event collection, visualization and dashboard-related work is documented in the source review.",
      "limits": "Coverage, active detections, network identifiers and environment-specific rules are intentionally omitted.",
      "evidenceLabel": "Observability architecture"
    },
    "P12": {
      "challenge": "Messaging delivery involves per-user schedules, language preferences, reconnects and duplicate-send hazards.",
      "approach": "Isolate channel processes, make schedules explicit, persist relevant delivery state and build recovery into operations.",
      "evidence": "Working bot features and deployment/test activity are described in the project record. The site presents engineering decisions rather than live usage metrics.",
      "limits": "No subscriber data, group identifiers or current service health are disclosed.",
      "evidenceLabel": "Personal automation case study"
    },
    "P02": {
      "challenge": "State, timing and hardware behavior can drift between a local control process and the interface people use.",
      "approach": "Keep automation logic in the local core, model device state explicitly, and distinguish prototype controls from planned vendor integrations.",
      "evidence": "A bounded prototype and earlier recorded tests exist in the source review.",
      "limits": "Planned product capabilities are not stated as shipped hardware integrations.",
      "evidenceLabel": "Device control prototype"
    },
    "P04": {
      "challenge": "Documents, accounting sync and field work involve asynchronous operations, inconsistent records and distinct desktop/mobile needs.",
      "approach": "Keep local views responsive while background jobs run, provide a manual-review path for extraction errors and tailor interfaces by work context.",
      "evidence": "Implementation activity across imports, sync, dispatch and UI is recorded; the public version explains patterns only.",
      "limits": "Customer records, financial numbers, integrations' credentials and proprietary workflow screens are excluded.",
      "evidenceLabel": "Workflow engineering"
    },
    "P14": {
      "challenge": "A narrative-driven puzzle must maintain order, progress state and consistent time-dependent behavior.",
      "approach": "Use browser-based state with validation, clear stage transitions and automated regression checks.",
      "evidence": "A deployed single-page experience and tests are reported in historical project records.",
      "limits": "Personal media and private story elements are not included.",
      "evidenceLabel": "Interactive web experience"
    }
  },
  "projects": [
    {
      "id": "P17",
      "slug": "data-center-infrastructure",
      "title": "Data center infrastructure & operations",
      "subtitle": "Physical systems, connected services and operational continuity.",
      "description": "Cross-environment work across data center infrastructure, physical and virtual servers, storage, enterprise systems and monitoring.",
      "detail": "A cross-career infrastructure case study: physical and virtual servers, enterprise storage, systems administration, monitoring and technical operations across multiple organizational environments. This is a composite of documented experience, not a claim that a single complete DC was built from scratch. Site-specific topologies and identifiers are excluded.",
      "role": "Hands-on infrastructure engineering, systems configuration, troubleshooting and coordination",
      "tech": [
        "Data center",
        "Servers",
        "Networking",
        "SAN / Fibre Channel",
        "VMware / Proxmox",
        "Windows Server",
        "Monitoring"
      ],
      "tracks": [
        "infrastructure",
        "operations",
        "leadership"
      ],
      "visual": "servers",
      "stage": "Infrastructure experience",
      "year": "Career experience",
      "featured": true
    },
    {
      "id": "P11",
      "slug": "virtualization-lab",
      "title": "Virtualization, SAN & recovery",
      "subtitle": "Cluster resilience and completed backup implementation.",
      "description": "Proxmox virtualization, shared storage, quorum and HA testing, with the backup/recovery phase confirmed complete by the project owner.",
      "detail": "An engineering project across compute, SAN storage paths, quorum, virtualization recovery and completed backup/recovery work. An earlier technical report documented a saved backup and an isolated restore; on 18 October 2026 the project owner confirmed that the broader backup implementation was completed. Exact backup product, retention policy and recovery metrics were not independently rechecked for this publication. All diagrams are generalized, not as-built company architecture.",
      "role": "Technical direction, physical infrastructure coordination, troubleshooting, backup/recovery project oversight and validation planning",
      "tech": [
        "Proxmox",
        "Virtualization",
        "Storage",
        "HA",
        "Backup & recovery"
      ],
      "tracks": [
        "infrastructure",
        "operations",
        "leadership"
      ],
      "visual": "scv3020",
      "stage": "Infrastructure & recovery",
      "year": "2026",
      "featured": true
    },
    {
      "id": "P12",
      "slug": "messaging-automation",
      "title": "Messaging, on a schedule",
      "subtitle": "Personalized delivery across two channels.",
      "description": "A multi-channel messaging service shaped around language choice, local time, archives, and operational control.",
      "detail": "Separate Telegram and WhatsApp services handle preferences, language, local delivery schedules and archival retrieval. Reliability considerations include session recovery, resource isolation and duplicate-send prevention.",
      "role": "Product requirements, service boundaries, operational iteration",
      "tech": [
        "Node.js",
        "Telegram",
        "WhatsApp",
        "PM2"
      ],
      "tracks": [
        "automation",
        "operations",
        "leadership"
      ],
      "visual": "circuits",
      "stage": "Personal automation",
      "year": "2026",
      "featured": true
    },
    {
      "id": "P05",
      "slug": "security-observability",
      "title": "Signals into insight",
      "subtitle": "Security telemetry made legible.",
      "description": "An operational monitoring concept that organizes event data into an interface people can reason about.",
      "detail": "An observability architecture that collects events, normalizes fields and presents relevant context to operators. Detection rules, monitored assets and site-specific controls are not disclosed.",
      "role": "Architecture review, dashboard direction, diagnostics",
      "tech": [
        "Wazuh",
        "OpenSearch",
        "Grafana",
        "WebGL"
      ],
      "tracks": [
        "infrastructure",
        "operations",
        "leadership"
      ],
      "visual": "circuits",
      "stage": "Observability",
      "year": "2026",
      "featured": true
    },
    {
      "id": "P02",
      "slug": "smart-home-prototype",
      "title": "Physical meets digital",
      "subtitle": "A thoughtful edge-control prototype.",
      "description": "Exploring local device state, calendar-based control, and an interface designed for the physical world.",
      "detail": "A prototype spanning the interface and a local control core. Later requirements should not be mistaken for implemented device integrations.",
      "role": "Requirements, prototype stabilization, interface and architecture review",
      "tech": [
        "Python",
        "MQTT",
        "Next.js",
        "Docker"
      ],
      "tracks": [
        "automation",
        "infrastructure",
        "leadership"
      ],
      "visual": "circuits",
      "stage": "Edge prototype",
      "year": "2026",
      "featured": true
    },
    {
      "id": "P04",
      "slug": "field-operations-product",
      "title": "Operations, unified",
      "subtitle": "Making back-office complexity usable.",
      "description": "Application workflows connecting document handling, coordination, inventory, and field activity.",
      "detail": "Document processing, background synchronization, and field-facing UI work are represented at a high level. Business records and unverified impact metrics are excluded.",
      "role": "Product iteration, workflow integration, implementation review",
      "tech": [
        "React",
        "TypeScript",
        "Node.js",
        "Prisma"
      ],
      "tracks": [
        "automation",
        "operations",
        "leadership"
      ],
      "visual": "keyboard",
      "stage": "Product workflows",
      "year": "2026",
      "featured": true
    },
    {
      "id": "P14",
      "slug": "interactive-puzzle",
      "title": "A small digital experience",
      "subtitle": "Storytelling through interaction.",
      "description": "An interactive puzzle journey with progression, state persistence, and carefully paced reveals.",
      "detail": "A personal interactive web project, with browser-based state and a lightweight deployment model. Personal media and narrative details are excluded.",
      "role": "Experience design, requirements, deployment and testing direction",
      "tech": [
        "React",
        "Vite",
        "TypeScript",
        "Motion"
      ],
      "tracks": [
        "automation",
        "leadership"
      ],
      "visual": "keyboard",
      "stage": "Interactive web",
      "year": "2026",
      "featured": true
    },
    {
      "id": "P01",
      "slug": "service-orchestration",
      "title": "Conversation orchestration",
      "subtitle": "When automation knows when to hand over.",
      "description": "A service intake workflow linking events, messaging, and human-operated response.",
      "detail": "A sanitized overview of event handling, multi-provider integration, and human handoff. No live customer, account, or infrastructure identifiers are included.",
      "role": "Integration requirements, fallback behavior, review and testing",
      "tech": [
        "Node.js",
        "Redis",
        "Webhooks",
        "Chatwoot"
      ],
      "tracks": [
        "automation",
        "operations",
        "leadership"
      ],
      "visual": "switches",
      "stage": "System integration",
      "year": "2026"
    },
    {
      "id": "P06",
      "slug": "video-event-review",
      "title": "Video into events",
      "subtitle": "Careful detection, accountable review.",
      "description": "An experimental analytics workflow pairing event signals with reviewable media context.",
      "detail": "Experimental object-detection evaluation is differentiated from established recording. No physical locations, video frames, detection thresholds, or accuracy claims are published.",
      "role": "Integration direction, evaluation, operational review",
      "tech": [
        "Python",
        "Frigate",
        "MQTT",
        "React"
      ],
      "tracks": [
        "automation",
        "infrastructure",
        "operations"
      ],
      "visual": "camera",
      "stage": "Event analytics",
      "year": "2026"
    },
    {
      "id": "P09",
      "slug": "desktop-streaming",
      "title": "A display becomes a stream",
      "subtitle": "Local-first desktop capture architecture.",
      "description": "A Windows capture workflow with an independent streaming path and supporting management portal.",
      "detail": "An engineering exploration of Windows display capture, encoding, service boundaries and local streaming, separated from optional management services. Proprietary algorithms and internal implementation artifacts are not reproduced.",
      "role": "Architecture direction, implementation and deployment review",
      "tech": [
        "Rust",
        "Windows",
        "H.264",
        "Next.js"
      ],
      "tracks": [
        "infrastructure",
        "automation",
        "operations"
      ],
      "visual": "keyboard",
      "stage": "Windows systems",
      "year": "2026"
    },
    {
      "id": "P07",
      "slug": "telephony-control",
      "title": "A control plane for voice",
      "subtitle": "Product boundaries in a complex stack.",
      "description": "Multi-account administration patterns for telephony services and device management.",
      "detail": "A conceptual multi-tenant communications control plane with administrative UI, persistence and worker processes. Administrative features are not presented as completed production calling capability.",
      "role": "Technical product direction, reviews and prioritization",
      "tech": [
        "TypeScript",
        "PostgreSQL",
        "Asterisk",
        "Docker"
      ],
      "tracks": [
        "infrastructure",
        "automation",
        "leadership"
      ],
      "visual": "servers",
      "stage": "Communications",
      "year": "2026"
    },
    {
      "id": "P10",
      "slug": "static-support-web",
      "title": "Web support, simplified",
      "subtitle": "Fast pages with deliberate boundaries.",
      "description": "A static-first business interface with staged form integration and considered design choices.",
      "detail": "A static-site baseline and interface work, separate from unverified production support intake or third-party preview results.",
      "role": "Page structure, build process, deployment review",
      "tech": [
        "HTML",
        "CSS",
        "Python",
        "Nginx"
      ],
      "tracks": [
        "automation",
        "operations",
        "leadership"
      ],
      "visual": "keyboard",
      "stage": "Web engineering",
      "year": "2026"
    },
    {
      "id": "P13",
      "slug": "music-reference-studio",
      "title": "Music & reference studio",
      "subtitle": "A personal exploration in organized media.",
      "description": "An experimental tool for managing references and asynchronous media workflows.",
      "detail": "An early personal prototype. The music-processing path was reported to use demonstration mode, not a validated analysis engine.",
      "role": "Product concept, scope, service separation, review",
      "tech": [
        "Node.js",
        "Python",
        "Workers",
        "Gemini"
      ],
      "tracks": [
        "automation",
        "leadership"
      ],
      "visual": "keyboard",
      "stage": "Media prototype",
      "year": "2026"
    },
    {
      "id": "P03",
      "slug": "thermal-printing",
      "title": "The last-mile printer",
      "subtitle": "Bridging browser output and physical labels.",
      "description": "An implementation study in lightweight Windows-to-printer integration.",
      "detail": "Source and documentation were reviewed; a complete installer and field acceptance remain unverified.",
      "role": "Repository preparation and documentation; implementation attribution to verify",
      "tech": [
        "Python",
        "Windows",
        "Printing"
      ],
      "tracks": [
        "infrastructure",
        "operations"
      ],
      "visual": "circuits",
      "stage": "Device integration",
      "year": "2026"
    },
    {
      "id": "P08",
      "slug": "infrastructure-operations",
      "title": "Better operational handoffs",
      "subtitle": "Reducing configuration drift.",
      "description": "A reusable approach to inventory, access configuration, and operational documentation.",
      "detail": "A sanitized process example with no internal inventories, credentials, access paths, or operational commands.",
      "role": "Configuration standards, documentation and workflow direction",
      "tech": [
        "Git",
        "SSH",
        "PowerShell"
      ],
      "tracks": [
        "infrastructure",
        "operations",
        "leadership"
      ],
      "visual": "switches",
      "stage": "System operations",
      "year": "2026"
    },
    {
      "id": "P15",
      "slug": "usability-review-workflow",
      "title": "A repeatable design critique",
      "subtitle": "Turning judgment into a reusable workflow.",
      "description": "A structured AI-assisted usability-review process, deliberately invoked when needed.",
      "detail": "A reusable workflow artifact. Independent execution and use rights require confirmation.",
      "role": "Specification, invocation model, workflow review",
      "tech": [
        "Markdown",
        "Codex",
        "Cursor"
      ],
      "tracks": [
        "automation",
        "leadership"
      ],
      "visual": "keyboard",
      "stage": "AI workflow design",
      "year": "2026"
    },
    {
      "id": "P16",
      "slug": "auth-forwarding-repair",
      "title": "Debug the development path",
      "subtitle": "Isolate the failure. Preserve the rest.",
      "description": "An operational repair study focused on local authentication forwarding.",
      "detail": "Connectivity was reported restored, while completed sign-in was not confirmed. No internal ports or access details are included.",
      "role": "Problem isolation, recovery requirements, validation direction",
      "tech": [
        "SSH",
        "OAuth",
        "Windows"
      ],
      "tracks": [
        "operations",
        "infrastructure"
      ],
      "visual": "switches",
      "stage": "Troubleshooting",
      "year": "2026"
    }
  ],
  "hardwareModels": [
    {
      "id": "dell-scv3020",
      "name": "Dell EMC SCv3020",
      "type": "SAN / Storage Array",
      "model": "SCv3020",
      "confidence": "Model identified from earlier project context",
      "project": "P11",
      "image": "https://www.karma-group.ru/upload/iblock/3e9/scv3020.webp",
      "source": "https://www.dell.com/support/product-details/en-us/product/storage-scv3020",
      "imageSource": "https://www.karma-group.ru/catalog/dell-emc-storage-serii-sc/dell-scv3020",
      "alt": "Reference product photograph of Dell EMC SCv3020 storage array, front view",
      "description": "Exact-model reference photography for the storage layer of the virtualization and availability project.",
      "context": "Reference photograph of the model, not the user's installed unit."
    },
    {
      "id": "intel-s3520",
      "name": "Intel SSD DC S3520",
      "type": "Boot / Local Storage",
      "model": "SSDSCKJB150G7 · 150 GB · M.2 2280",
      "confidence": "Model observed in prior Proxmox boot context",
      "project": "P11",
      "image": "https://www.piospartslap.de/media/image/product/26228/lg/intel-ssdsckjb150g7-m2-2280-150gb-6g-sata-boss-ssd.jpg",
      "source": "https://www.intel.com/content/dam/www/public/us/en/documents/declaration-of-conformity/solid-state-drives/ssd-s3520-m2-sata-declaration.pdf",
      "imageSource": "https://www.piospartslap.de/?a=26228&lang=eng",
      "alt": "Reference product photograph of Intel DC S3520 M.2 SSD model SSDSCKJB150G7",
      "description": "The identifiable local drive model visible in Proxmox installation context; Intel identifies it as a DC S3520 Series M.2 SATA SSD.",
      "context": "Reference product photograph, not a photograph of the installed drive."
    }
  ],
  "hardwareUnknown": [
    {
      "label": "Fujitsu PRIMERGY",
      "detail": "Server manufacturer is known; exact chassis model has not been verified."
    },
    {
      "label": "Check Point",
      "detail": "Firewall brand is known; exact appliance model has not been verified."
    },
    {
      "label": "Cameras, switches and printers",
      "detail": "Exact manufacturer model numbers have not been established in the available sources."
    }
  ]
};
