/* Public portfolio data. One entry per piece of work; "variants" lists which entries each of the three focused sites shows, and no entry appears in two of them.
   Backup completion on the data center project was confirmed by the project owner on 2026-10-18; technical specifics were not independently verified. */
window.PORTFOLIO = {
  "profiles": {
    "all": {
      "title": "I love challenges,<br><em>solutions more&nbsp;:)</em>",
      "subtitle": "I turn technical challenges into reliable, usable systems — bridging infrastructure, automation, product thinking, and the people who depend on them."
    },
    "infrastructure": {
      "title": "Built for<br><em>resilience.</em>",
      "subtitle": "From physical hardware and networking to virtualization and observability — designing for systems that must keep working."
    },
    "automation": {
      "title": "Less friction.<br><em>More flow.</em>",
      "subtitle": "Designing practical automation, connected services, and interfaces that make complicated work feel simple."
    },
    "operations": {
      "title": "Find the signal.<br><em>Fix the system.</em>",
      "subtitle": "An evidence-led approach to troubleshooting, service recovery and real-world technical operations."
    },
    "leadership": {
      "title": "Ideas into<br><em>working systems.</em>",
      "subtitle": "Turning ambiguous problems into clear requirements, sound engineering decisions, and coordinated delivery."
    }
  },
  "caseStudies": {
    "P17": {
      "challenge": "A data center is only as dependable as the link between its layers. Compute, shared storage, quorum, network segmentation and backup each work on their own and still fail together if nobody has tested them as one system.",
      "approach": "Build in a fixed order and validate each stage before the next: network and segmentation, then hosts and firmware, then the cluster and its storage paths, then core services, and only then backup and restore. Host failover and recoverability are treated as two separate questions.",
      "evidence": "The readiness report documented cluster checks, quorum and storage-path testing, HA recovery of selected guests, a saved backup and an isolated restore. The project owner confirmed on 18 October 2026 that the wider backup and recovery phase has since been completed.",
      "limits": "The retention policy, number of protected guests and current RPO/RTO figures have not been independently inspected for this site. Physical installation and electrical work were outside my responsibility. Diagrams are generalized, not the as-built architecture.",
      "evidenceLabel": "Infrastructure build and recovery case study"
    },
    "P05": {
      "challenge": "Security and operational signals arrive in different formats and lose their meaning without context and consistent field mapping. More events do not mean more insight.",
      "approach": "Collect events with Wazuh, normalize and index them in OpenSearch, and build Grafana views around the questions an operator actually asks: what changed, where, and how serious is it.",
      "evidence": "Event collection, field normalization and dashboard work are documented in the source review.",
      "limits": "Coverage, active detection rules, network identifiers and environment-specific settings are intentionally left out.",
      "evidenceLabel": "Observability architecture"
    },
    "P21": {
      "challenge": "A small office team answers residents of dozens of buildings from one WhatsApp number. Requests get lost in the chat history, nobody can see who is handling what, and the billing system that holds the resident data was not built for service calls.",
      "approach": "Keep the process rules in the server and let the conversation stay flexible. Tickets, permissions and the audit log are deterministic code. The AI assistant only classifies a message into a closed list of actions, and a person can take over a conversation at any point. Resident data stays in the existing billing system and is imported read-only.",
      "evidence": "The pilot is deployed over HTTPS for one building, with 67 automated tests running in CI. A real WhatsApp message from a test phone was received, verified by signature and logged end to end. The read-only import brought in dozens of buildings and several thousand apartments after the importer was changed to tolerate records that did not match the API documentation.",
      "limits": "This is a pilot, not a finished rollout. Outbound WhatsApp replies are waiting for the provider's business verification, and the AI agent is specified but not yet connected to a live model. The client, the buildings and resident data are not published.",
      "evidenceLabel": "Client product in pilot"
    },
    "P12": {
      "challenge": "Messaging delivery involves per-user schedules, language preferences, reconnects and duplicate-send hazards, and a service nobody is watching fails quietly.",
      "approach": "Isolate each channel in its own process, make schedules explicit, persist delivery state, and add a monitor that keeps the incident history separate from the alerts it sends.",
      "evidence": "Verified in source: Telegram inline menus, timezone and custom-time selection, language switching, archive search and pagination; a shared backup module; unit, API and browser test suites; PM2 and HTTPS reverse-proxy configuration; a health dashboard with a 59-minute alert rule.",
      "limits": "Repository code and deployment documentation were reviewed; live service status, backup execution and usage figures were not independently checked. No subscriber or infrastructure identifiers are published.",
      "evidenceLabel": "Messaging and service automation"
    },
    "P02": {
      "challenge": "Software that controls physical equipment has to stay correct when the network drops, when a device answers late, and when the screen and the hardware disagree about the current state.",
      "approach": "Keep the control logic local, model device state explicitly, and separate what is installed and working from what is a prototype or a planned vendor integration.",
      "evidence": "A bounded smart-home prototype with recorded tests exists in the source review.",
      "limits": "Planned capabilities are not presented as shipped integrations. No locations, video frames, detection accuracy or site details are published.",
      "evidenceLabel": "Physical systems"
    }
  },
  "variants": {
    "product": ["P30", "P02", "P20"],
    "system": ["P17", "P05", "P32", "P33"],
    "automation": ["P21", "P35", "P12", "P36"]
  },
  "projects": [
    {
      "id": "P17",
      "slug": "data-center-infrastructure",
      "title": "Enterprise data center build",
      "subtitle": "Compute, network, storage and recovery, from requirements to handoff.",
      "description": "Hands-on configuration of an enterprise data center: HP and Dell switching, a Check Point firewall, a Proxmox VE cluster on a Dell SCv3020 SAN, core services, backup and restore testing.",
      "detail": "One environment, built from start to handoff. The work is described below in three stages, followed by the move of services into it.",
      "parts": [
        ["Building the environment", "I configured the environment hands-on. The work started with requirements and a server and network architecture, then moved through the layers in order: switch configuration, VLANs, routing, network separation and firewall rules; server firmware and management interfaces; operating systems and infrastructure services on Windows Server and Ubuntu Linux; permissions and monitoring. It ended with performance checks, troubleshooting, documentation and handoff. I took part in equipment selection and build sequencing."],
        ["Virtualization, storage and recovery", "A Proxmox VE cluster and its virtual compute, SAN connectivity, storage paths and volume allocation on a Dell SCv3020 array, which I led. The hardware is Dell PowerEdge R640 and Lenovo ThinkSystem SR630 servers on Dell S4128T-ON switches running OS10, and the storage is reached over 10GbE iSCSI on more than one path (multipath, ALUA). While the cluster was being formed the nodes could not reach each other; the cause was name resolution, and correcting the host records and checking communication in both directions removed the block. Resilience was tested separately: quorum behavior, HA recovery of guests, a backup policy built on Proxmox backup and an isolated restore test. A documented full backup run covered 19 virtual machines, about 107 GiB, in about 41 minutes."],
        ["Operating standard", "A working standard for the day after the build: an inventory, access configuration kept in Git, and written procedures, so the environment does not drift from its documentation."],
        ["Moving services in from the cloud", "Preparation for moving services from a cloud provider into this environment. For each service: an isolated copy, a data check, and a cutover plan with a way back. I set the order and decided what moves and what stays in the cloud; telephony stays. Some services have already been brought up and tested on their copies, including services that now start by themselves after a reboot. It is a staged move and it is not finished."]
      ],
      "role": "Hands-on systems and network configuration, storage integration, HA and recovery validation, troubleshooting, documentation and handoff.",
      "tech": ["Proxmox VE", "Dell SCv3020 SAN", "Dell PowerEdge R640", "Lenovo ThinkSystem SR630", "iSCSI multipath", "HP & Dell switching", "Check Point", "VLAN & routing", "Windows Server", "Linux", "Backup & recovery"],
      "tracks": ["infrastructure", "operations", "leadership"],
      "stage": "Infrastructure build",
      "year": "2026"
    },
    {
      "id": "P05",
      "slug": "security-observability",
      "title": "Monitoring and security visibility",
      "subtitle": "Wazuh, OpenSearch and Grafana, arranged around the operator.",
      "description": "An event pipeline that collects security and system events with Wazuh, indexes them in OpenSearch and presents them in Grafana dashboards an operator can act on.",
      "detail": "This page describes the security monitoring platform in three parts: the event pipeline, the operator dashboards and keeping the platform itself healthy.",
      "parts": [
        ["Security event pipeline", "I worked on the path from raw events to a screen someone can use during an incident. Wazuh agents collect events from servers and endpoints, fields are normalized so that different sources can be compared, OpenSearch holds the index, and Grafana dashboards show topology, severity and change over time. The events arrive from several vendors, each in its own format: endpoint protection from ESET PROTECT, firewall events from Check Point, and backup events from Acronis Cyber Protect over mutual TLS. Decoders bring them to one structure and tag every event with the customer it belongs to, so one platform serves several customers. The index holds about 10 million events. Detection rules, monitored assets and site-specific controls are not disclosed."],
        ["Operator dashboards", "I specified and led the Grafana dashboards the operator works from: a unified status view, a topology view, system health and open incidents, with support tickets alongside. They are built for a large operations screen, so the state of things can be read without moving between vendor consoles."],
        ["Keeping the platform healthy", "When the dashboards went empty while the rest of the system kept working, the diagnosis pointed below them: the search engine was rejecting queries under memory pressure (HTTP 429). I led a staged diagnosis and a controlled change: the memory given to the indexer was doubled and only that service was restarted. Queries came back, no further rejections were recorded, and events kept arriving at 150 to 190 a minute during the check. A separate review found that index settings meant for a cluster of several servers had left 84 replica shards unassigned on a single server; correcting the template took the cluster from yellow to green without deleting data or restarting services. A failed HTTPS certificate renewal was traced to the validation request being redirected to a protected service, and fixed with a dedicated validation path."]
      ],
      "role": "Architecture, dashboard specification, data diagnostics and platform troubleshooting.",
      "tech": ["Wazuh", "OpenSearch", "Grafana", "ESET PROTECT", "Check Point", "Acronis", "Linux"],
      "tracks": ["operations", "infrastructure"],
      "stage": "Monitoring & security",
      "year": "2026"
    },
    {
      "id": "P12",
      "slug": "messaging-bot",
      "title": "Messaging and daily-reading bot · pro bono",
      "subtitle": "Telegram and WhatsApp as separate services, with their own monitoring.",
      "description": "A pro bono messaging and daily-reading bot on Telegram and WhatsApp, with scheduled delivery per user, an administration dashboard and its own health monitoring.",
      "detail": "A pro bono project. The bot runs Telegram and WhatsApp as separate service components over shared utilities for dates, time zones, archive and user state, with an Express administration dashboard. The Telegram side has inline menus, localized settings, custom delivery times, archive navigation and search, and scheduled excerpts from a selected book with per-user progress. The repository includes unit, API and browser tests, PM2 process configuration, a daily backup module and a documented HTTPS reverse proxy. The bot has its own monitoring: a health dashboard and background monitor track service status and resource use, keep the incident history separate from notification delivery, and send a Telegram alert only when the same fault has lasted more than 59 minutes. Source availability does not independently establish current runtime health.",
      "role": "Product design, implementation, integration between components and service operations.",
      "tech": ["Node.js", "Telegram", "WhatsApp", "Express", "PM2", "Caddy"],
      "tracks": ["automation", "operations"],
      "stage": "Messaging automation · pro bono",
      "year": "2026"
    },
    {
      "id": "P35",
      "slug": "multichannel-service-desk",
      "title": "Multi-channel CRM on Chatwoot",
      "subtitle": "WhatsApp, website, email and telephony in one service desk.",
      "description": "A customer-service desk on Chatwoot that brings WhatsApp, the website and email into one place, with webhooks connecting automation and human agents. I led its upgrade across five releases without losing the local customizations.",
      "detail": "The need was one place for customer requests that arrive on several channels, connected to the service workflows around them. The work is described below in three parts.",
      "parts": [
        ["The service desk", "A customer-service setup built on Chatwoot, bringing WhatsApp, the website and email into one place. Webhooks and Redis connect the channels, so a conversation can move between automation and a human agent. I specified the service flows, the rules for opening a ticket and the WhatsApp message templates."],
        ["Upgrade without losing customizations", "I led the upgrade across five releases while keeping the local customizations. After the upgrade, incoming WhatsApp messages stopped arriving: one customization no longer matched a method signature in the new version. It was corrected, the worker alone was restarted, and a regression test was added. The upgrade closed with 30 regression tests passing and a WhatsApp message verified end to end."],
        ["Telephony events in the service desk", "Call events from the telephony exchange reach the service desk, so an agent sees who is calling and the call is documented. Opening a ticket for every outgoing call created load and duplicates, so I defined a rule: an outgoing call does not open a new ticket; it is added as a private note to an existing one, and only when the match is unambiguous. The integration passed 22 tests in a test environment."]
      ],
      "role": "Service-flow specification, integration requirements, upgrade lead and regression criteria.",
      "tech": ["Chatwoot", "WhatsApp Cloud API", "Webhooks", "REST API", "Redis", "PostgreSQL", "Sidekiq"],
      "tracks": ["automation", "operations"],
      "stage": "Service automation · live",
      "year": "2026"
    },
    {
      "id": "P36",
      "slug": "video-analytics",
      "title": "Video analysis with Frigate",
      "subtitle": "Object detection on camera video, with a hard rule against false alerts.",
      "description": "AI analysis of security-camera video with Frigate and an object-detection model, aimed at abandoned objects and unusual events. It is in development and testing, not a finished alerting product.",
      "detail": "Analysis of security-camera video with Frigate and an object-detection model (YOLO-World), aimed at abandoned objects and unusual events. The first alerts also fired on an object that was already standing there when the clip began, so I set a hard rule: without proof that the object entered an empty area, there is no alert. Detections that appeared and disappeared between frames were handled by adding diagnostic checks and snapshots. When the write interfaces of the camera sync returned errors, the sync was limited to a dry run, so that no unverified change reached the live system. Detection stability is still being tested; this is development, not a finished alerting product. Moving the processing from CPU to GPU is planned.",
      "role": "Use-case definition, alert conditions, false-alert prevention, field testing and planning the move to GPU.",
      "tech": ["Frigate", "YOLO-World", "OpenVINO", "go2rtc", "MQTT", "Python", "Docker"],
      "tracks": ["automation"],
      "stage": "AI video · in development",
      "year": "2026"
    },
    {
      "id": "P21",
      "slug": "building-service-desk",
      "title": "Building-management service desk",
      "subtitle": "WhatsApp intake, a staff console and a bounded AI assistant.",
      "description": "A service-call system for a property-management company: residents report by WhatsApp, the office works from one shared queue, and every action is logged.",
      "detail": "I am building this system for a property-management company that runs dozens of residential buildings from one shared office WhatsApp number. Residents and caretakers write in WhatsApp; the manager and the office staff work in a Hebrew web console with a shared ticket queue, saved views, search and sorting, due dates with a late flag, fault type and location, a per-ticket timeline, building and apartment pages, and a conversations screen for hand-offs. Building and resident data is imported read-only from the company's existing billing system through its API, so the office keeps one source of truth. The WhatsApp webhook verifies the provider signature, drops duplicate messages by their id, and stores each message before processing it. The assistant can only choose from a closed list of actions: the server checks identity, role, building scope and a daily quota before and after every model call, the assistant never closes a ticket, and once a conversation is handed to staff it stays silent until staff return it. The pilot runs over HTTPS on a dedicated Linux server that I set up and hardened: key-only SSH, firewall, fail2ban, containers behind a reverse proxy, nightly backups with a tested restore, and versioned schema migrations.",
      "role": "Lead developer: requirements with the client, architecture, implementation with AI coding tools, server hardening, deployment and documentation.",
      "tech": ["Python", "Flask", "SQLite", "WhatsApp Cloud API", "Docker Compose", "Caddy", "GitHub Actions", "Linux"],
      "tracks": ["automation", "operations", "leadership"],
      "stage": "Client product · pilot",
      "year": "2026"
    },
    {
      "id": "P02",
      "slug": "smart-home-app",
      "title": "Smart-home control application",
      "subtitle": "A local-first Home OS: one interface over devices from different makers.",
      "description": "A smart-home product I lead from vision to working prototype: a local control core in Python and MQTT, a Next.js interface, and a design that keeps working when the internet connection does not.",
      "detail": "A client-server application with a local control core in Python and MQTT and a Next.js interface, built to keep working when the internet connection does not: device state is modeled explicitly and calendar-based control runs locally. The design puts one layer over devices from different makers (Tuya, Shelly) and covers Shabbat and holiday schedules by the Hebrew calendar, two-way switches and scenes. I led the product vision, the specification and the UX/UI design through several spec versions; the interface was checked from phone width to a full screen, and when a value is unavailable the screen says so instead of showing a stale or invented one. It is a prototype; later requirements are not presented as shipped device integrations.",
      "role": "Product vision, specification, UX/UI design, architecture, and directing development and visual QA with AI coding tools.",
      "tech": ["Python", "MQTT", "Next.js", "React", "Docker", "Tuya", "Shelly"],
      "tracks": ["leadership", "automation"],
      "stage": "Product · prototype",
      "year": "2026"
    },
    {
      "id": "P30",
      "slug": "cloud-pbx-platform",
      "title": "Cloud telephony platform",
      "subtitle": "A multi-tenant PBX, led as a product from requirements to production.",
      "description": "A multi-tenant cloud PBX that I lead as product owner: organizations, extensions, numbers, call routing, IVR and recordings are managed from one portal. It is in production, with 40 organizations and 239 extensions in an October 2026 snapshot.",
      "detail": "The need was to manage the exchanges, extensions, numbers, call routes, recordings and phones of many customers in one system, instead of one installation per customer. The answer is a multi-tenant platform with a management portal, a telephony engine and automation around them. I own the product side: what gets built, in what order, and what counts as done.",
      "parts": [
        ["The product", "One portal manages organizations, extensions, numbers, call routing, IVR and recordings. Calls are handled by Asterisk, Kamailio and RTPengine; the management side is built on NestJS, React, PostgreSQL, Redis and RabbitMQ. The platform is in production: a snapshot from October 2026 showed 40 organizations, 239 extensions and 119 phone numbers."],
        ["My role as product owner", "I write the requirements, make the architecture decisions, design the call-routing logic and the permission model, set the backlog priorities, define acceptance criteria for each feature and approve every release against them. The code is written with AI coding tools under my direction. The portal is covered by 217 unit tests."],
        ["Release management", "After an early deployment overwrote live content, I changed the release process: portal releases are now deployed as immutable versions with a rollback path. A worker rollout that would have reloaded the telephony engine on every start was stopped before it could affect live calls."],
        ["On the roadmap", "Two features are in testing. Zero-touch provisioning: assigning a phone to a customer and an extension from the portal through Grandstream's device-management service, with the device's management status kept separate from its SIP registration status. And a pilot of automatic voice answering in Hebrew that identifies the request and opens a service ticket, with a fallback to the regular IVR."]
      ],
      "role": "Product owner: requirements, architecture decisions, routing and permission design, backlog prioritization, acceptance testing and release management.",
      "tech": ["Asterisk", "Kamailio", "RTPengine", "NestJS", "React", "PostgreSQL", "Redis", "RabbitMQ", "Grandstream GDMS"],
      "tracks": ["leadership", "automation"],
      "stage": "Cloud platform · live",
      "year": "2026"
    },
    {
      "id": "P32",
      "slug": "unified-nvr-viewing",
      "title": "One interface for several camera recorders",
      "subtitle": "Live view and playback across recorders, without a program per vendor.",
      "description": "Live view and playback from several Hikvision NVRs in one interface. RTSP access was verified on all six recorders tested, with an inventory of 33 cameras and a target of about 100.",
      "detail": "The site ran several network video recorders, each watched through its own vendor program. I specified one viewing interface for all of them: live view and playback, with cameras grouped by area (parking, entrances, buildings and public spaces). The connection is RTSP through go2rtc. I tested recorder compatibility and compared the build against commercial alternatives. RTSP access was verified on all six recorders tested; the inventory holds 33 cameras with a target of about 100; and in the live-view pilot the first frame came up within one to two seconds. Playback of recordings is in a staging environment.",
      "role": "Requirements, area model, recorder compatibility testing and evaluation of commercial alternatives.",
      "tech": ["Hikvision NVR", "RTSP", "go2rtc", "ONVIF", "H.264 / H.265"],
      "tracks": ["infrastructure"],
      "stage": "Video systems · pilot",
      "year": "2026"
    },
    {
      "id": "P33",
      "slug": "field-systems",
      "title": "Cameras, access control and telephony in the field",
      "subtitle": "The physical systems of a site, from firmware to the user.",
      "description": "Day-to-day administration of Hikvision camera systems, access controllers, IP intercoms and VoIP exchanges with Grandstream phones, including firmware updates.",
      "detail": "Managing Hikvision camera systems, access controllers, IP intercoms and VoIP exchanges with Grandstream phones, including firmware updates on phones, exchanges, routers and network equipment. One of the sites has 24 doors on access controllers. The work includes checking equipment compatibility before purchase, and training and supporting the people who use the systems.",
      "role": "Configuration, firmware lifecycle, compatibility checks, troubleshooting and user support.",
      "tech": ["Hikvision", "Grandstream", "VoIP", "Access control", "IP intercom", "CCTV"],
      "tracks": ["infrastructure", "operations"],
      "stage": "Physical systems",
      "year": "2026"
    },
    {
      "id": "P20",
      "slug": "telegrass-operations",
      "title": "TeleGrass · technology and operations leadership",
      "subtitle": "Managing teams, workflows and day-to-day operations.",
      "description": "Co-founded TeleGrass and led its technology and operations work from March 2017 to March 2019.",
      "detail": "I directly managed 11–12 senior managers within an organization of about 150 managers and worked with a development lead and four developers. I led recruitment, training, procedure design and incident response, coordinated operations with support, content and marketing, and led delivery of a multi-stage identity verification workflow and an intake bot. Reported scale during the period was more than 1.5 million unique active users and about 4,500 vendors.",
      "role": "Co-founder and technology and operations lead, responsible for coordinating management and development, setting priorities and handling operational incidents.",
      "tech": ["Operations", "Team leadership", "Process design", "Automation"],
      "tracks": ["leadership", "operations"],
      "stage": "Operations leadership",
      "year": "2017–2019"
    }
  ]
};
