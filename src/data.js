/* Private editorial drafts based on PORTFOLIO_REVIEW.md, reviewed 18 Oct 2026.
   Employer-related summaries are NOT authorized for external publication.
   No internal network topology, clients, source code, credentials, screenshots or metrics. */
window.PORTFOLIO = {
  tracks: {
    all: { label: "THE FULL PICTURE", desc: "Cross-disciplinary work, from physical infrastructure to interfaces people actually use." },
    infrastructure: { label: "INFRASTRUCTURE & SYSTEMS", desc: "Resilient services, virtualization, network diagnostics, monitoring, and physical hardware." },
    automation: { label: "AUTOMATION & INTELLIGENCE", desc: "Connected workflows, practical AI integration, and intuitive interfaces around complex processes." },
    operations: { label: "TECHNICAL OPERATIONS", desc: "Investigation, recovery, reliability, and support where engineering meets operations." },
    leadership: { label: "TECHNOLOGY & PRODUCT LEADERSHIP", desc: "Translating requirements into systems, coordinating decisions, and building better processes." }
  },
  images: {
    switches: "https://images.unsplash.com/photo-1680992046626-418f7e910589?auto=format&fit=crop&w=1000&q=82",
    circuits: "https://images.unsplash.com/photo-1592659762303-90081d34b277?auto=format&fit=crop&w=1000&q=82",
    keyboard: "https://images.unsplash.com/photo-1643425959065-e96192696446?auto=format&fit=crop&w=1000&q=82",
    servers: "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?auto=format&fit=crop&w=1000&q=82",
    camera: "https://images.unsplash.com/photo-1757440010307-0f28f06fdd2b?auto=format&fit=crop&w=1000&q=82"
  },
  profiles: {
    all: {
      eyebrow:"ENGINEERING · OPERATIONS · SYSTEMS",
      title:"From complexity<br>to <em>clarity.</em>",
      subtitle:"I turn technical challenges into reliable, usable systems — bridging infrastructure, automation, product thinking, and the people who depend on them.",
      note:"A cross-disciplinary technology portfolio"
    },
    infrastructure: {
      eyebrow:"INFRASTRUCTURE · NETWORKS · RESILIENCE",
      title:"Built for<br><em>resilience.</em>",
      subtitle:"From physical hardware and networking to virtualization and observability — designing for systems that must keep working.",
      note:"Infrastructure & systems engineering"
    },
    automation: {
      eyebrow:"AUTOMATION · INTEGRATION · PRODUCT",
      title:"Less friction.<br><em>More flow.</em>",
      subtitle:"Designing practical automation, connected services, and interfaces that make complicated work feel simple.",
      note:"Automation & applied AI"
    },
    operations: {
      eyebrow:"DIAGNOSTICS · OPERATIONS · RELIABILITY",
      title:"Find the signal.<br><em>Fix the system.</em>",
      subtitle:"An evidence-led approach to troubleshooting, service recovery and real-world technical operations.",
      note:"Technical operations & reliability"
    },
    leadership: {
      eyebrow:"PRODUCT THINKING · TEAMS · EXECUTION",
      title:"Ideas into<br><em>working systems.</em>",
      subtitle:"Turning ambiguous problems into clear requirements, sound engineering decisions, and coordinated delivery.",
      note:"Technical & product leadership"
    }
  },
  components: [
    {
      key:"compute", number:"01",title:"Compute",detail:"The physical foundation",visual:"/assets/server-stack.svg",photo:"servers",
      caption:"A hardware view of resources, isolation, recovery and capacity.",
      facts:["Host lifecycle","Virtualization","Recovery paths"],accent:"A reliable service starts with an understood host."
    },
    {
      key:"network",number:"02",title:"Network",detail:"The connective tissue",visual:"/assets/network-switch.svg",photo:"switches",
      caption:"A signal path is only as strong as its weakest and least visible link.",
      facts:["Layer boundaries","Connectivity","Observability"],accent:"Follow the packet, not the assumption."
    },
    {
      key:"edge",number:"03",title:"Edge & devices",detail:"Where software touches reality",visual:"/assets/automation-flow.svg",photo:"circuits",
      caption:"Physical inputs, local decisions, and graceful degradation.",
      facts:["Sensors & state","Local control","Interoperability"],accent:"Make the physical/digital boundary legible."
    },
    {
      key:"interface",number:"04",title:"Operator interface",detail:"The human control plane",visual:"/assets/terminal.svg",photo:"keyboard",
      caption:"Make important actions comprehensible, safe and repeatable.",
      facts:["Clear feedback","Human handoff","Accessible flow"],accent:"Complexity belongs behind the interface."
    }
  ],
  caseStudies: {
    P11: {
      challenge:"Validation is difficult when storage paths, cluster behavior and recovery assumptions are interconnected.",
      approach:"Reconcile the observed state, stage changes, and test specific failure paths rather than treating a design document as proof.",
      evidence:"The 18 October readiness report records quorum, host/path-loss and shared-storage tests, plus HA recovery for one selected guest. These reported results were not rerun in this review.",
      limits:"Independent backup acceptance, physical network redundancy and final production approval remain outstanding.",
      evidenceLabel:"Recorded operational report"
    },
    P12: {
      challenge:"Per-user delivery times, parallel messaging sessions and duplicate sends interact in ways that are easy to miss.",
      approach:"Keep channel processes separate, persist scheduling preferences and duplicate-send state, and make recovery explicit.",
      evidence:"Earlier deployment transcripts report 131 passing Telegram tests and working services. Current delivery health was not checked during the review.",
      limits:"Ownership separation, current runtime layout, deployment revision and content permissions still need confirmation.",
      evidenceLabel:"Recorded tests and service reports"
    },
    P02: {
      challenge:"Calendar timing and device events create ordering, state and identity problems between local control and interface.",
      approach:"Separate UI and control logic, keep scheduling in the control core, and validate a bounded prototype before promising vendor support.",
      evidence:"A repository commit under the confirmed user identity reports 18 passing end-to-end tests for an earlier state; output was not independently inspected.",
      limits:"The later specification does not prove installed hardware support or complete vendor integrations.",
      evidenceLabel:"Repository evidence and recorded test claim"
    },
    P05: {
      challenge:"Heterogeneous security events can be difficult to normalize, query and interpret without a clear operational view.",
      approach:"Normalize events before display, validate query field types and tune visualization to the environment.",
      evidence:"Dashboard and collector artifacts were observed. A 4 October chat reports single-node index health changing from yellow to green without deleting data; not rechecked.",
      limits:"Live event-flow coverage, alert quality and newer requested integrations are not established.",
      evidenceLabel:"Observed repository artifacts + operational report"
    },
    P14: {
      challenge:"An interactive experience must maintain puzzle order and saved progress without exposing content ahead of time.",
      approach:"Use a static browser application, validate persisted state and test navigation and date boundaries.",
      evidence:"A local session dated 11 October reports a successful build, six passing tests and a ready deployment; tests were not independently repeated.",
      limits:"Current public availability and personal media rights still need confirmation.",
      evidenceLabel:"Recorded build and deployment report"
    }
  },
  projects: [
    {id:"P11",slug:"virtualization-lab",title:"Virtualization & resilience",subtitle:"From isolated hosts to a testable system.",description:"Exploring the decisions, dependencies, and validation steps behind an infrastructure modernization effort.",detail:"A systems-level study in making a virtualization environment observable and testable. Decisions are presented conceptually, without internal topology or production assertions.",role:"Technical direction, operational review, validation planning",tech:["Proxmox","Virtualization","Storage","HA"],tracks:["infrastructure","operations","leadership"],visual:"servers",stage:"Case-study review",approval:"employer",year:"2026",featured:true},
    {id:"P12",slug:"messaging-automation",title:"Messaging, on a schedule",subtitle:"Personalized delivery across two channels.",description:"A multi-channel messaging service shaped around language choice, local time, archives, and operational control.",detail:"A personal-project candidate using separate messaging processes, scheduling preferences, and operational recovery patterns. Current deployment and ownership separation need final confirmation.",role:"Product requirements, service boundaries, operational iteration",tech:["Node.js","Telegram","WhatsApp","PM2"],tracks:["automation","operations","leadership"],visual:"circuits",stage:"Previously operational",approval:"ownership",year:"2026",featured:true},
    {id:"P05",slug:"security-observability",title:"Signals into insight",subtitle:"Security telemetry made legible.",description:"An operational monitoring concept that organizes event data into an interface people can reason about.",detail:"Architecture, visualization, and data-quality work around a monitoring pipeline. No internal rules, event data, security posture claims, or environment details are included.",role:"Architecture review, dashboard direction, diagnostics",tech:["Wazuh","OpenSearch","Grafana","WebGL"],tracks:["infrastructure","operations","leadership"],visual:"circuits",stage:"Case-study review",approval:"employer",year:"2026",featured:true},
    {id:"P02",slug:"smart-home-prototype",title:"Physical meets digital",subtitle:"A thoughtful edge-control prototype.",description:"Exploring local device state, calendar-based control, and an interface designed for the physical world.",detail:"A prototype spanning the interface and a local control core. Later requirements should not be mistaken for implemented device integrations.",role:"Requirements, prototype stabilization, interface and architecture review",tech:["Python","MQTT","Next.js","Docker"],tracks:["automation","infrastructure","leadership"],visual:"circuits",stage:"Prototype",approval:"employer",year:"2026",featured:true},
    {id:"P04",slug:"field-operations-product",title:"Operations, unified",subtitle:"Making back-office complexity usable.",description:"Application workflows connecting document handling, coordination, inventory, and field activity.",detail:"Document processing, background synchronization, and field-facing UI work are represented at a high level. Business records and unverified impact metrics are excluded.",role:"Product iteration, workflow integration, implementation review",tech:["React","TypeScript","Node.js","Prisma"],tracks:["automation","operations","leadership"],visual:"keyboard",stage:"Case-study review",approval:"employer",year:"2026",featured:true},
    {id:"P14",slug:"interactive-puzzle",title:"A small digital experience",subtitle:"Storytelling through interaction.",description:"An interactive puzzle journey with progression, state persistence, and carefully paced reveals.",detail:"A personal interactive web project, with browser-based state and a lightweight deployment model. Personal media and narrative details are excluded.",role:"Experience design, requirements, deployment and testing direction",tech:["React","Vite","TypeScript","Motion"],tracks:["automation","leadership"],visual:"keyboard",stage:"Personal project",approval:"ownership",year:"2026",featured:true},
    {id:"P01",slug:"service-orchestration",title:"Conversation orchestration",subtitle:"When automation knows when to hand over.",description:"A service intake workflow linking events, messaging, and human-operated response.",detail:"A sanitized overview of event handling, multi-provider integration, and human handoff. No live customer, account, or infrastructure identifiers are included.",role:"Integration requirements, fallback behavior, review and testing",tech:["Node.js","Redis","Webhooks","Chatwoot"],tracks:["automation","operations","leadership"],visual:"switches",stage:"Case-study review",approval:"employer",year:"2026"},
    {id:"P06",slug:"video-event-review",title:"Video into events",subtitle:"Careful detection, accountable review.",description:"An experimental analytics workflow pairing event signals with reviewable media context.",detail:"Experimental object-detection evaluation is differentiated from established recording. No physical locations, video frames, detection thresholds, or accuracy claims are published.",role:"Integration direction, evaluation, operational review",tech:["Python","Frigate","MQTT","React"],tracks:["automation","infrastructure","operations"],visual:"camera",stage:"Experimental evaluation",approval:"employer",year:"2026"},
    {id:"P09",slug:"desktop-streaming",title:"A display becomes a stream",subtitle:"Local-first desktop capture architecture.",description:"A Windows capture workflow with an independent streaming path and supporting management portal.",detail:"A technical overview of local capture separated from cloud management. Release readiness and signing are unverified.",role:"Architecture direction, implementation and deployment review",tech:["Rust","Windows","H.264","Next.js"],tracks:["infrastructure","automation","operations"],visual:"keyboard",stage:"Pilot review",approval:"employer",year:"2026"},
    {id:"P07",slug:"telephony-control",title:"A control plane for voice",subtitle:"Product boundaries in a complex stack.",description:"Multi-account administration patterns for telephony services and device management.",detail:"A work-in-progress architecture. Administrative functionality must not be presented as proven calling functionality or production readiness.",role:"Technical product direction, reviews and prioritization",tech:["TypeScript","PostgreSQL","Asterisk","Docker"],tracks:["infrastructure","automation","leadership"],visual:"servers",stage:"Incomplete acceptance",approval:"employer",year:"2026"},
    {id:"P10",slug:"static-support-web",title:"Web support, simplified",subtitle:"Fast pages with deliberate boundaries.",description:"A static-first business interface with staged form integration and considered design choices.",detail:"A static-site baseline and interface work, separate from unverified production support intake or third-party preview results.",role:"Page structure, build process, deployment review",tech:["HTML","CSS","Python","Nginx"],tracks:["automation","operations","leadership"],visual:"keyboard",stage:"Staging baseline",approval:"employer",year:"2026"},
    {id:"P13",slug:"music-reference-studio",title:"Music & reference studio",subtitle:"A personal exploration in organized media.",description:"An experimental tool for managing references and asynchronous media workflows.",detail:"An early personal prototype. The music-processing path was reported to use demonstration mode, not a validated analysis engine.",role:"Product concept, scope, service separation, review",tech:["Node.js","Python","Workers","Gemini"],tracks:["automation","leadership"],visual:"keyboard",stage:"Prototype",approval:"ownership",year:"2026"},
    {id:"P03",slug:"thermal-printing",title:"The last-mile printer",subtitle:"Bridging browser output and physical labels.",description:"An implementation study in lightweight Windows-to-printer integration.",detail:"Source and documentation were reviewed; a complete installer and field acceptance remain unverified.",role:"Repository preparation and documentation; implementation attribution to verify",tech:["Python","Windows","Printing"],tracks:["infrastructure","operations"],visual:"circuits",stage:"Implementation review",approval:"employer",year:"2026"},
    {id:"P08",slug:"infrastructure-operations",title:"Better operational handoffs",subtitle:"Reducing configuration drift.",description:"A reusable approach to inventory, access configuration, and operational documentation.",detail:"A sanitized process example with no internal inventories, credentials, access paths, or operational commands.",role:"Configuration standards, documentation and workflow direction",tech:["Git","SSH","PowerShell"],tracks:["infrastructure","operations","leadership"],visual:"switches",stage:"Documentation",approval:"employer",year:"2026"},
    {id:"P15",slug:"usability-review-workflow",title:"A repeatable design critique",subtitle:"Turning judgment into a reusable workflow.",description:"A structured AI-assisted usability-review process, deliberately invoked when needed.",detail:"A reusable workflow artifact. Independent execution and use rights require confirmation.",role:"Specification, invocation model, workflow review",tech:["Markdown","Codex","Cursor"],tracks:["automation","leadership"],visual:"keyboard",stage:"Workflow review",approval:"check",year:"2026"},
    {id:"P16",slug:"auth-forwarding-repair",title:"Debug the development path",subtitle:"Isolate the failure. Preserve the rest.",description:"An operational repair study focused on local authentication forwarding.",detail:"Connectivity was reported restored, while completed sign-in was not confirmed. No internal ports or access details are included.",role:"Problem isolation, recovery requirements, validation direction",tech:["SSH","OAuth","Windows"],tracks:["operations","infrastructure"],visual:"switches",stage:"Repair review",approval:"check",year:"2026"}
  ]
};