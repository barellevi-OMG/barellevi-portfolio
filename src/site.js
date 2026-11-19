/* Renders every list-type page of barellevi.com (home, archive, discipline, role, project) from src/data.js.
   Runs after data.js and locale.js. Hebrew and English live side by side in t(en, he). */
(function () {
  "use strict";
  const model = window.PORTFOLIO;
  const main = document.querySelector("#main");
  if (!model || !main) return;

  const he = window.SITE_LANG === "he", base = window.SITE_PREFIX || "", jobs = window.SITE_JOB_PAGES || {};
  const root = window.SITE_ROOT || "", variant = window.SITE_VARIANT || "system";
  const t = (en, iw) => (he ? iw : en);
  const esc = (v) => String(v == null ? "" : v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const arrow = he ? "←" : "→";
  const MAIL = "Barellevi@gmail.com";
  const NAME = t("Bar-El Levi", "בר־אל לוי");

  /* ---------- The three focused sites ----------
     Same pages, same design, same animations. Only the text and the list of projects change.
     Every pair is [English, Hebrew]. The projects each one shows are listed in data.js ("variants"). */
  const VARIANTS = {
    product: {
      name: ["Product management", "ניהול מוצר"],
      idline: ["Product management · From requirements to release · Team leadership", "ניהול מוצר · מאפיון ועד Release · הובלת צוותים"],
      lead: ["I lead technology products from the business need to production: I write the requirements, prioritize the backlog with the development team, define acceptance criteria and manage releases and rollbacks. I co-founded and led a platform with more than 1.5 million users, and today I lead product development with AI coding tools, on top of a deep background in infrastructure.",
        "אני מוביל מוצרים טכנולוגיים מהצורך העסקי ועד Production: כותב את האפיון, מתעדף Backlog מול צוות הפיתוח, מגדיר קריטריוני קבלה ומנהל גרסאות ו־Rollback. הייתי שותף להקמה ולהובלה של פלטפורמה עם יותר מ־1.5 מיליון משתמשים, והיום אני מוביל פיתוח מוצרים בכלי AI, על בסיס רקע עמוק בתשתיות."],
      facts: [["1.5M+", "Users on the platform I co-founded and led", "משתמשים בפלטפורמה שהקמתי והובלתי"], ["~150", "Managers in the organization I led", "מנהלים בארגון שהובלתי"], ["40", "Organizations on the telephony platform", "ארגונים על פלטפורמת הטלפוניה"]],
      workTitle: ["Three products.<br><em>One way of working.</em>", "שלושה מוצרים.<br><em>דרך עבודה אחת.</em>"],
      workLead: ["A multi-tenant cloud platform in production, a smart-home product in prototype, and an organization I co-founded and led. Scroll to follow the signal.", "פלטפורמת ענן רב־ארגונית ב־Production, מוצר בית חכם בשלב אב־טיפוס, וארגון שהייתי שותף להקמתו והובלתי. גללו כדי לעקוב אחרי האות."],
      count: ["Three products", "שלושה מוצרים"],
      stations: [["Platform", "Interface", "People"], ["פלטפורמה", "ממשק", "אנשים"]], stationStart: [0, 1, 2],
      stack: [7, 5, 4],
      stackHead: ["The stack behind the products.<br><em>By name.</em>", "ה־Stack שמאחורי המוצרים.<br><em>בשמות.</em>", "The platforms and tools the products I lead are built on and shipped with.", "הפלטפורמות והכלים שעליהם בנויים המוצרים שאני מוביל, ואיתם הם עולים לאוויר."],
      role: ["I lead the company's products end to end: a cloud telephony platform, a smart-home application and Windows software for monitoring point-of-sale stations. I write the requirements, prioritize, define acceptance criteria and direct development with AI coding tools.",
        "אני מוביל את מוצרי החברה מקצה לקצה: פלטפורמת טלפוניה בענן, אפליקציית בית חכם ותוכנת Windows לניטור תחנות קופה. אני כותב אפיון, מתעדף, מגדיר קריטריוני קבלה ומנחה את הפיתוח בכלי AI.",
        "Asterisk · Kamailio · NestJS · React · Next.js · MQTT · GitHub Actions · Cursor"],
      lean: true, short: true,
      shortRoles: [null,
        ["I implemented a software product at customer sites: training, fitting it to each customer's workflow, and liaising with the technical team.", "הטמעתי מוצר תוכנה אצל לקוחות: הדרכה, התאמה לתהליכי העבודה של הלקוח ותיווך מול הצוות הטכני."],
        ["I led operations and the management layers of a large digital platform, and set product priorities with the development team.", "הובלתי את התפעול ואת שכבות הניהול של פלטפורמה דיגיטלית גדולה, ותיעדפתי את המוצר מול צוות הפיתוח."],
        ["I monitored production systems around the clock, maintained Windows Server and Active Directory, gave first-level SAN support and handled vendor escalations.", "ניטרתי את מערכות הייצור מסביב לשעון, תחזקתי Windows Server ו־Active Directory, נתתי תמיכה ראשונית ב־SAN וטיפלתי באסקלציות מול ספקים."],
        ["I supported SAP environments, Windows Server and Active Directory, maintained about 40 physical servers and ran the helpdesk for business users.", "תמכתי בסביבות SAP, ‏Windows Server ו־Active Directory, תחזקתי כ־40 שרתים פיזיים ונתתי מענה Helpdesk למשתמשים העסקיים."]],
      leadership: true,
      contact: ["Product, requirements or technology leadership. I would be glad to hear what you are working on.", "מוצר, אפיון או הובלה טכנולוגית. אשמח לשמוע במה מדובר."]
    },
    system: {
      name: ["IT systems & infrastructure", "מערכות מידע ותשתיות"],
      idline: ["System administration · Infrastructure · Virtualization & storage", "ניהול מערכות מידע · תשתיות · וירטואליזציה ואחסון"],
      lead: ["Systems and infrastructure administrator. I build, maintain and operate server rooms, networks and storage: virtualization and high availability, backup and restore, hardening and monitoring. Every environment is handed over fully documented, ready for another team to maintain.",
        "מנהל מערכות ותשתיות (System Administrator). אני מקים, מתחזק ומתפעל חדרי שרתים, רשתות ומערכי אחסון: וירטואליזציה ו־High Availability, גיבוי ושחזור, הקשחה וניטור. כל סביבה נמסרת מתועדת במלואה, מוכנה לתחזוקה שוטפת בידי כל צוות אחר."],
      facts: [["2012", "In infrastructure and systems since", "בתשתיות ובמערכות מאז"], ["~1,500", "Servers in the halls my team maintained", "שרתים באולמות שהצוות שלי תחזק"], ["~10M", "Security events in the monitoring platform", "אירועי אבטחה בפלטפורמת הניטור"]],
      workTitle: ["Four projects.<br><em>One way of working.</em>", "ארבעה פרויקטים.<br><em>דרך עבודה אחת.</em>"],
      workLead: ["A data center built from requirements to handoff, the security monitoring around it, and the video and physical systems of a site. Scroll to follow the signal.", "חדר שרתים מהדרישות ועד המסירה, פלטפורמת ניטור האבטחה שסביבו, ומערכות הווידאו והמערכות הפיזיות של האתר. גללו כדי לעקוב אחרי האות."],
      count: ["Four projects", "ארבעה פרויקטים"],
      stations: [["Infrastructure", "Monitoring", "Physical systems"], ["תשתיות", "ניטור", "מערכות פיזיות"]], stationStart: [0, 1, 2],
      stack: [0, 1, 2, 3, 4, 6],
      stackHead: ["Hands on the equipment.<br><em>By name.</em>", "ידיים על הציוד.<br><em>בשמות.</em>", "The hardware, platforms and tools I have installed, configured, updated and supported, from the rack to the application.", "החומרה, הפלטפורמות והכלים שהתקנתי, הגדרתי, עדכנתי ותחזקתי, מהארון ועד האפליקציה."],
      role: ["I build and maintain backbone networks, enterprise storage and virtualization for customers, and harden workstations. The role also covers a security monitoring platform and camera, access-control and telephony systems.",
        "אני מקים ומתחזק רשתות ליבה, אחסון ארגוני וסביבות וירטואליזציה אצל לקוחות, ומקשיח עמדות קצה. התפקיד כולל גם פלטפורמת ניטור אבטחה ומערכות מצלמות, בקרת כניסה וטלפוניה.",
        "Dell PowerEdge · Lenovo ThinkSystem · HP & Dell switching · Dell SCv3020 · Proxmox VE · VMware ESXi · Check Point · Wazuh · Hikvision"],
      lean: true, short: true,
      leadership: false,
      contact: ["Infrastructure, systems or operations. I would be glad to hear what you are working on.", "תשתיות, מערכות או תפעול. אשמח לשמוע במה מדובר."]
    },
    automation: {
      name: ["Automation & integrations", "אוטומציה ואינטגרציות"],
      idline: ["Automation · Integrations · AI-based services", "אוטומציה · אינטגרציות · שירותים מבוססי AI"],
      lead: ["I build automations and integrations that connect messaging channels, business systems and language models: webhooks, APIs, bots and workflows with a human in the loop. Every flow is built with tests, monitoring and documentation, so it keeps working after the handoff.",
        "אני בונה אוטומציות ואינטגרציות שמחברות ערוצי הודעות, מערכות עסקיות ומודלי שפה: Webhooks, ‏API, בוטים ו־Workflows עם Human-in-the-loop. כל תהליך נבנה עם בדיקות, ניטור ותיעוד, כך שהוא ממשיך לעבוד גם אחרי המסירה."],
      facts: [["2012", "In technology and systems since", "בטכנולוגיה ובמערכות מאז"], ["67", "Automated tests in the service-desk pilot", "בדיקות אוטומטיות בפיילוט קריאות השירות"], ["30", "Regression tests that closed the CRM upgrade", "בדיקות רגרסיה שסגרו את שדרוג ה־CRM"]],
      workTitle: ["Four projects.<br><em>One way of working.</em>", "ארבעה פרויקטים.<br><em>דרך עבודה אחת.</em>"],
      workLead: ["Two service products, a messaging bot and AI video analysis: each one connects channels, systems and people into a flow that can be tested. Scroll to follow the signal.", "שני מוצרי שירות, בוט מסרים וניתוח וידאו מבוסס AI: כל אחד מחבר ערוצים, מערכות ואנשים לתהליך שאפשר לבדוק. גללו כדי לעקוב אחרי האות."],
      count: ["Four projects", "ארבעה פרויקטים"],
      stations: [["Service", "Messaging", "AI"], ["שירות", "מסרים", "AI"]], stationStart: [0, 2, 3],
      stack: [5, 7, 3],
      stackHead: ["The building blocks.<br><em>By name.</em>", "אבני הבניין.<br><em>בשמות.</em>", "The channels, services and tools I connect into working flows.", "הערוצים, השירותים והכלים שאני מחבר לתהליכים עובדים."],
      role: ["I deploy a multi-channel service desk on Chatwoot, connect WhatsApp, website, email and telephony through webhooks and APIs, integrate language models and lead AI-based video analysis.",
        "אני מטמיע מוקד שירות רב־ערוצי על Chatwoot, מחבר וואטסאפ, אתר, מייל וטלפוניה ב־Webhooks וב־API, משלב מודלי שפה ומוביל ניתוח וידאו מבוסס AI.",
        "Chatwoot · WhatsApp Cloud API · Webhooks · Node.js · Python · Frigate · OpenAI · Gemini · Claude"],
      lean: true, short: true,
      leadership: false,
      contact: ["Automation, integrations or AI-based services. I would be glad to hear what you are working on.", "אוטומציה, אינטגרציות או שירותים מבוססי AI. אשמח לשמוע במה מדובר."]
    }
  };
  const V = VARIANTS[variant] || VARIANTS.system;

  const disciplines = [
    ["infrastructure", "Infrastructure & systems", "תשתיות ומערכות", "Data center builds, servers, networking, storage, backup and day-to-day systems operations.", "הקמת תשתיות DC, שרתים, רשתות, אחסון, גיבויים ותפעול מערכות."],
    ["automation", "Automation & integrations", "אוטומציה ואינטגרציות", "Products and tools that connect messaging, APIs and AI to the people who use them.", "מוצרים וכלים שמחברים הודעות, API ו־AI לאנשים שעובדים איתם."],
    ["operations", "Technical operations", "תפעול ואמינות", "Diagnosis, monitoring, recovery and the procedures that keep services running.", "אבחון תקלות, ניטור, התאוששות ונהלים ששומרים על שירות רציף."],
    ["leadership", "People & product leadership", "ניהול אנשים ומוצר טכנולוגי", "Requirements, priorities, team coordination and product thinking.", "אפיון, תעדוף, תיאום צוותים וחשיבת מוצר."]
  ];
  const disciplineName = (key) => { const d = disciplines.find((x) => x[0] === key); return d ? (he ? d[2] : d[1]) : ""; };
  const projectUrl = (p) => base + "/project/" + p.slug + "/";

  const path = location.pathname.slice(root.length).replace(/^\/he(?=\/|$)/, "") || "/";
  const parts = path.split("/").filter(Boolean);
  const detailId = main.dataset.projectId;
  const view = detailId ? "project" : !parts.length ? "home" : parts[0] === "projects" ? "archive"
    : disciplines.some((d) => d[0] === parts[0]) ? "category" : parts[0] === "for" && jobs[parts[1]] ? "role" : "home";
  const home = base + "/";
  const anchor = (id) => (view === "home" ? "#" + id : home + "#" + id);

  /* ---------- Illustrations: one drawn motif per discipline, lit differently per project ---------- */
  const LIT = 'fill="#1c332d" stroke="#b7d9ca"', DIM = 'fill="#13232a" stroke="#48665c"';
  const motifs = {
    infrastructure(n) {
      const units = 4 + n % 2, step = 248 / units, h = step - 12, hot = n % units; let s = "";
      for (let i = 0; i < units; i++) {
        const y = 96 + i * step;
        s += '<rect x="270" y="' + y + '" width="260" height="' + h + '" rx="5" ' + (i === hot ? LIT : DIM) + "/>";
        for (let k = 0; k < 3; k++) s += '<circle cx="' + (292 + k * 16) + '" cy="' + (y + h / 2) + '" r="3.5" stroke="none" fill="' + (i === hot && k === 0 ? "#d9b992" : "#6f9485") + '"/>';
        for (let k = 0; k < 7; k++) s += '<path d="M' + (372 + k * 20) + " " + (y + h * .3) + " V" + (y + h * .7) + '" stroke="#3f5a52"/>';
      }
      const hy = 96 + hot * step + h / 2;
      return s + '<path d="M270 ' + hy + " H170 V220 H96 M530 " + hy + ' H630 V220 H704"/><circle cx="96" cy="220" r="9" fill="#0e171c" stroke="#b7d9ca"/><circle cx="704" cy="220" r="9" fill="#0e171c" stroke="#b7d9ca"/>';
    },
    automation(n) {
      const boxes = [[90, 190], [330, 100], [330, 280], [590, 190]], hot = n % 4;
      let s = '<path d="M210 220 H270 V130 H330 M270 220 V310 H330 M450 130 H520 V220 H590 M450 310 H520 V220"/>';
      boxes.forEach(([x, y], i) => {
        s += '<rect x="' + x + '" y="' + y + '" width="120" height="60" rx="8" ' + (i === hot ? LIT : DIM) + '/><path d="M' + (x + 22) + " " + (y + 24) + " H" + (x + 98) + " M" + (x + 22) + " " + (y + 38) + " H" + (x + 70) + '" stroke="' + (i === hot ? "#b7d9ca" : "#3f5a52") + '"/>';
      });
      return s + '<circle cx="270" cy="220" r="6" stroke="none" fill="#d9b992"/><circle cx="520" cy="220" r="6" stroke="none" fill="#b7d9ca"/>';
    },
    operations(n) {
      const x = 180 + (n % 4) * 90;
      let s = '<path d="M60 200 H' + x + ' l26 -84 l38 168 l32 -118 l24 34 H740" stroke="#b7d9ca"/><path d="M60 330 H740" stroke="#3f5a52"/>';
      for (let i = 0; i < 8; i++) {
        const cx = 100 + i * 86, alert = Math.abs(cx - (x + 60)) < 50;
        s += '<circle cx="' + cx + '" cy="330" r="' + (alert ? 9 : 6) + '" fill="' + (alert ? "#d9b992" : "#0e171c") + '" stroke="' + (alert ? "#d9b992" : "#6f9485") + '"/>';
      }
      return s;
    },
    leadership(n) {
      const mids = [220, 400, 580], hot = n % 6, hm = mids[Math.floor(hot / 2)], hl = hm + (hot % 2 ? 50 : -50);
      let s = "";
      for (const m of mids) {
        s += '<path d="M400 128 V170 H' + m + " V202 M" + m + " 238 V270 H" + (m - 50) + " V302 M" + m + " 270 H" + (m + 50) + ' V302" stroke="#3f5a52"/>';
        for (const l of [m - 50, m + 50]) s += '<circle cx="' + l + '" cy="318" r="14" ' + (l === hl ? LIT : DIM) + "/>";
        s += '<circle cx="' + m + '" cy="220" r="18" ' + (m === hm ? LIT : DIM) + "/>";
      }
      return s + '<path d="M400 128 V170 H' + hm + " V202 M" + hm + " 238 V270 H" + hl + ' V302" stroke="#b7d9ca"/><circle cx="400" cy="106" r="22" ' + LIT + '/><circle cx="400" cy="106" r="6" stroke="none" fill="#d9b992"/>';
    }
  };
  /* One drawing per featured project. Everything sits inside x 250–550, y 70–370, the part every card crop keeps. */
  const scenes = {
    P17() {
      let s = '<rect x="290" y="62" width="220" height="316" rx="8" ' + DIM + '/><rect x="306" y="78" width="188" height="36" rx="4" ' + DIM + "/>";
      for (let i = 0; i < 8; i++) s += '<rect x="' + (318 + i * 21) + '" y="88" width="13" height="16" rx="2" stroke="' + (i === 2 || i === 5 ? "#b7d9ca" : "#3f5a52") + '"/>';
      [126, 170, 214].forEach((y, i) => {
        s += '<rect x="306" y="' + y + '" width="188" height="34" rx="4" ' + (i === 1 ? LIT : DIM) + "/>";
        for (let k = 0; k < 3; k++) s += '<circle cx="' + (322 + k * 14) + '" cy="' + (y + 17) + '" r="3.5" stroke="none" fill="' + (i === 1 && k === 0 ? "#d9b992" : "#6f9485") + '"/>';
        for (let k = 0; k < 6; k++) s += '<path d="M' + (384 + k * 18) + " " + (y + 10) + " V" + (y + 24) + '" stroke="#3f5a52"/>';
      });
      s += '<rect x="306" y="262" width="188" height="62" rx="4" ' + DIM + "/>";
      for (let i = 0; i < 8; i++) s += '<rect x="' + (316 + i * 21.5) + '" y="272" width="15" height="42" rx="2" stroke="' + (i === 3 ? "#b7d9ca" : "#3f5a52") + '"/>';
      return s + '<path d="M306 344 H494" stroke="#3f5a52"/><circle cx="330" cy="358" r="4" stroke="none" fill="#6f9485"/><circle cx="470" cy="358" r="4" stroke="none" fill="#6f9485"/>' +
        '<path d="M290 187 H190 V220 H110 M510 187 H610 V220 H690"/>';
    },
    P05() {
      let s = '<rect x="258" y="84" width="284" height="204" rx="10" ' + DIM + '/><path d="M258 118 H542" stroke="#3f5a52"/><circle cx="276" cy="101" r="4" stroke="none" fill="#d9b992"/><circle cx="292" cy="101" r="4" stroke="none" fill="#6f9485"/>' +
        '<path d="M278 214 l28 -22 l24 12 l26 -48 l24 66 l22 -40 l20 14 h18" stroke="#b7d9ca"/><path d="M278 262 H438" stroke="#3f5a52"/>';
      [20, 34, 14, 42, 26, 36, 18].forEach((h, i) => { s += '<path d="M' + (286 + i * 22) + " 262 V" + (262 - h * .6) + '" stroke="' + (i === 3 ? "#d9b992" : "#6f9485") + '" stroke-width="8"/>'; });
      return s + '<path d="M400 288 V330 M340 330 H460"/>' +
        '<path d="M496 138 l34 12 v34 c0 26 -16 42 -34 50 c-18 -8 -34 -24 -34 -50 v-34 z" ' + LIT + '/><path d="M481 184 l11 12 l20 -24" stroke="#b7d9ca" stroke-width="3"/>';
    },
    P12() {
      const bubble = (x, y, w, lit, tail) => '<path d="M' + (x + 10) + " " + y + " h" + (w - 20) + " a10 10 0 0 1 10 10 v28 a10 10 0 0 1 -10 10 h-" + (w - 44) + " l-" + (tail ? 0 : 14) + " 14 l" + (tail ? -14 : 0) + " -14 h-" + (tail ? 10 : 10) + ' a10 10 0 0 1 -10 -10 v-28 a10 10 0 0 1 10 -10 z" ' + (lit ? LIT : DIM) + '/><path d="M' + (x + 16) + " " + (y + 18) + " h" + (w - 32) + " M" + (x + 16) + " " + (y + 32) + " h" + (w - 58) + '" stroke="' + (lit ? "#b7d9ca" : "#3f5a52") + '"/>';
      return '<path d="M316 150 V186 Q316 220 350 220 M484 150 V186 Q484 220 450 220 M400 270 V300" stroke="#48665c"/>' +
        bubble(258, 84, 116, false, false) + bubble(426, 84, 116, true, true) + bubble(330, 300, 140, false, false) +
        '<circle cx="400" cy="220" r="50" ' + LIT + '/><path d="M374 222 l56 -26 l-20 54 l-10 -20 z M400 230 l30 -34" stroke="#b7d9ca"/><circle cx="350" cy="220" r="5" stroke="none" fill="#d9b992"/><circle cx="450" cy="220" r="5" stroke="none" fill="#b7d9ca"/>';
    },
    P21() {
      let s = '<rect x="262" y="96" width="140" height="262" rx="6" ' + DIM + '/><path d="M250 358 H414"/><rect x="316" y="316" width="32" height="42" rx="3" stroke="#6f9485"/>';
      for (let r = 0; r < 5; r++) for (let c = 0; c < 3; c++) {
        const hot = r === 1 && c === 2;
        s += '<rect x="' + (280 + c * 38) + '" y="' + (114 + r * 38) + '" width="24" height="24" rx="3" ' + (hot ? 'fill="#d9b992" stroke="#d9b992"' : 'stroke="#3f5a52"') + "/>";
      }
      return s + '<path d="M392 164 H432 Q444 164 444 152 V150" stroke="#d9b992"/>' +
        '<rect x="432" y="90" width="118" height="62" rx="10" ' + LIT + '/><path d="M448 112 h86 M448 130 h54" stroke="#b7d9ca"/>' +
        '<path d="M491 152 V206" stroke="#48665c"/><rect x="432" y="206" width="118" height="152" rx="8" ' + DIM + "/>" +
        [0, 1, 2].map((i) => '<rect x="446" y="' + (224 + i * 42) + '" width="18" height="18" rx="4" stroke="' + (i < 2 ? "#b7d9ca" : "#3f5a52") + '"/>' + (i < 2 ? '<path d="M450 ' + (233 + i * 42) + ' l4 5 l7 -9" stroke="#b7d9ca"/>' : "") + '<path d="M476 ' + (233 + i * 42) + ' h58" stroke="#3f5a52"/>').join("");
    },
    P02() {
      return '<path d="M262 206 L400 92 L538 206" stroke="#b7d9ca"/><rect x="286" y="206" width="228" height="152" rx="4" ' + DIM + '/><path d="M250 358 H550"/>' +
        '<path d="M372 168 q28 -24 56 0 M384 182 q16 -13 32 0" stroke="#6f9485"/><circle cx="400" cy="194" r="4" stroke="none" fill="#d9b992"/>' +
        '<rect x="302" y="226" width="52" height="30" rx="5" ' + LIT + '/><circle cx="328" cy="241" r="8" stroke="#b7d9ca"/><path d="M354 234 l22 -10 v34 l-22 -10" stroke="#b7d9ca"/>' +
        '<rect x="440" y="250" width="56" height="108" rx="3" ' + DIM + '/><rect x="452" y="264" width="32" height="40" rx="3" stroke="#3f5a52"/>' +
        [0, 1, 2].map((r) => [0, 1].map((c) => '<circle cx="' + (462 + c * 12) + '" cy="' + (274 + r * 10) + '" r="2.4" stroke="none" fill="' + (r === 1 && c === 0 ? "#d9b992" : "#6f9485") + '"/>').join("")).join("") + '<circle cx="486" cy="322" r="3" stroke="none" fill="#b7d9ca"/>' +
        '<rect x="306" y="286" width="44" height="72" rx="8" ' + DIM + '/><path d="M318 300 h20 M322 344 h12" stroke="#6f9485"/><path d="M350 322 H384 Q400 322 400 306 V198" stroke="#48665c"/><path d="M440 300 H416 Q400 300 400 284" stroke="#48665c"/>';
    },
    P30() {
      let s = '<path d="M340 200 H300 V126 M340 240 H300 V314 M460 200 H500 V126 M460 240 H500 V314" stroke="#48665c"/>';
      [[300, 104], [300, 336], [500, 104], [500, 336]].forEach(([x, y], i) => {
        s += '<rect x="' + (x - 34) + '" y="' + (y - 22) + '" width="68" height="44" rx="8" ' + (i === 2 ? LIT : DIM) + '/><path d="M' + (x - 18) + " " + (y - 5) + " h36 M" + (x - 18) + " " + (y + 8) + ' h20" stroke="' + (i === 2 ? "#b7d9ca" : "#3f5a52") + '"/>';
      });
      s += '<rect x="340" y="160" width="120" height="120" rx="10" ' + LIT + '/><path d="M358 186 h84" stroke="#b7d9ca"/>';
      for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) s += '<circle cx="' + (376 + c * 24) + '" cy="' + (210 + r * 22) + '" r="4" stroke="none" fill="' + (r === 1 && c === 1 ? "#d9b992" : "#6f9485") + '"/>';
      return s;
    },
    P32() {
      let s = '<rect x="262" y="92" width="276" height="200" rx="10" ' + DIM + '/><path d="M400 292 V330 M340 330 H460"/>';
      [[0, 0], [1, 0], [0, 1], [1, 1]].forEach(([c, r], i) => {
        const x = 278 + c * 126, y = 108 + r * 88, lit = i === 1;
        s += '<rect x="' + x + '" y="' + y + '" width="118" height="80" rx="5" ' + (lit ? LIT : DIM) + '/><path d="M' + (x + 14) + " " + (y + 62) + ' l24 -26 l18 16 l14 -12 l22 22" stroke="' + (lit ? "#b7d9ca" : "#3f5a52") + '"/><circle cx="' + (x + 104) + '" cy="' + (y + 14) + '" r="4" stroke="none" fill="' + (lit ? "#d9b992" : "#6f9485") + '"/>';
      });
      return s;
    },
    P33() {
      let s = '<path d="M250 358 H550"/><rect x="340" y="120" width="116" height="238" rx="4" ' + DIM + '/><circle cx="438" cy="244" r="5" stroke="none" fill="#6f9485"/>' +
        '<rect x="482" y="196" width="46" height="78" rx="6" ' + LIT + '/><circle cx="505" cy="262" r="3.5" stroke="none" fill="#d9b992"/>' +
        '<path d="M276 128 V108 H262" stroke="#48665c"/><rect x="262" y="128" width="62" height="30" rx="5" ' + DIM + '/><circle cx="310" cy="143" r="8" stroke="#b7d9ca"/><path d="M322 156 L352 198" stroke="#48665c" stroke-dasharray="4 7"/>';
      for (let r = 0; r < 3; r++) for (let c = 0; c < 2; c++) s += '<circle cx="' + (496 + c * 18) + '" cy="' + (212 + r * 14) + '" r="2.6" stroke="none" fill="#b7d9ca"/>';
      return s;
    },
    P35() {
      const chip = (y, lit) => '<rect x="256" y="' + y + '" width="92" height="44" rx="22" ' + (lit ? LIT : DIM) + '/><path d="M276 ' + (y + 22) + ' h52" stroke="' + (lit ? "#b7d9ca" : "#3f5a52") + '"/>';
      let s = '<path d="M348 118 H384 Q400 118 400 134 V220 M348 322 H384 Q400 322 400 306 V220 M348 220 H430" stroke="#48665c"/>' + chip(96, false) + chip(198, true) + chip(300, false) +
        '<circle cx="400" cy="220" r="5" stroke="none" fill="#d9b992"/><rect x="430" y="120" width="116" height="200" rx="8" ' + DIM + '/><path d="M430 152 H546" stroke="#3f5a52"/>';
      [0, 1, 2].forEach((i) => {
        s += '<rect x="442" y="' + (166 + i * 48) + '" width="92" height="36" rx="5" ' + (i === 0 ? LIT : DIM) + '/><circle cx="456" cy="' + (184 + i * 48) + '" r="5" stroke="none" fill="' + (i === 0 ? "#b7d9ca" : "#6f9485") + '"/><path d="M468 ' + (184 + i * 48) + ' h52" stroke="' + (i === 0 ? "#b7d9ca" : "#3f5a52") + '"/>';
      });
      return s;
    },
    P36() {
      return '<rect x="262" y="96" width="276" height="196" rx="10" ' + DIM + '/><path d="M262 252 l70 -52 l52 34 l56 -62 l98 80" stroke="#3f5a52"/>' +
        '<rect x="372" y="150" width="92" height="104" rx="4" stroke="#d9b992" stroke-dasharray="8 6"/><rect x="394" y="196" width="48" height="44" rx="4" ' + LIT + '/><path d="M394 210 h48" stroke="#b7d9ca"/>' +
        '<path d="M372 140 h40" stroke="#d9b992" stroke-width="6"/><circle cx="518" cy="116" r="5" stroke="none" fill="#d9b992"/><path d="M400 292 V330 M340 330 H460"/>';
    }
  };
  /* The signal's route through each drawing, in the hero's style: a glowing dot travels it, lights what it passes, and the end point blinks green. */
  const routes = {
    P17: "M236 143 H382 Q400 143 400 161 V275 Q400 293 418 293 H564",
    P05: "M236 250 H420 Q438 250 438 232 V204 Q438 186 456 186 H496",
    P12: "M316 132 V186 Q316 220 350 220 H400 V325",
    P21: "M368 164 H473 Q491 164 491 182 V324",
    P02: "M400 198 V284 Q400 300 416 300 H468",
    P30: "M300 126 V182 Q300 200 318 200 H400 V240 H482 Q500 240 500 258 V314",
    P32: "M240 148 H445 Q463 148 463 166 V218 Q463 236 445 236 H337",
    P33: "M310 143 H380 Q398 143 398 161 V226 Q398 244 416 244 H505",
    P35: "M302 220 H398 Q416 220 416 202 V200 Q416 184 432 184 H488",
    P36: "M262 252 L332 200 L384 234 L418 218"
  };
  function art(p) {
    const n = Number(p.id.replace(/\D/g, "")) || 1;
    const key = motifs[p.primaryCategory] ? p.primaryCategory : "automation";
    /* The view box is the square every drawing sits in, so the drawing fills its panel at any card shape (wide on phones, tall on desktop).
       Each element gets a class and a delay: outlines are drawn in one after another, filled dots fade in (see "Gallery drawings" in site.css). */
    let k = 0;
    const body = (scenes[p.id] ? scenes[p.id]() : motifs[key](n)).replace(/<(rect|path|circle) ([^>]*?)\/>/g, (m, tag, attrs) => {
      const d = Math.min(k++ * .04, 1.6).toFixed(2);
      if (/stroke="none"|stroke-dasharray/.test(attrs)) return "<" + tag + ' class="sf" style="--d:' + d + 's" ' + attrs + "/>";
      return "<" + tag + ' class="sd" pathLength="1" style="--d:' + d + 's" ' + attrs + "/>";
    });
    return '<svg viewBox="230 50 340 340" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><g fill="none" stroke="#5d8273" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + body +
      (routes[p.id] ? '<path class="art-route" d="' + routes[p.id] + '" stroke="none"/><circle class="art-finish" r="6" stroke="none"/><g class="art-dot" stroke="none" style="offset-path:path(\'' + routes[p.id] + '\')"><circle class="art-halo" r="14"/><circle class="art-pulse" r="5.5"/></g>' : "") + "</g></svg>";
  }

  /* ---------- Shared pieces ---------- */
  function header() {
    const links = [["work", "Projects", "פרויקטים"], ["stack", "Systems", "מערכות"], ["career", "Experience", "ניסיון"], ["people-leadership", "Leadership", "ניהול"], ["about", "About", "עליי"]].filter((l) => l[0] !== "people-leadership" || V.leadership);
    const other = root + (he ? "" : "/he") + path;
    return '<div class="wrap"><a class="brand" href="' + home + '" aria-label="' + t("Bar-El Levi, homepage", "בר־אל לוי, דף הבית") + '"><span class="brand-mark">B<i>.</i></span>' + NAME + "</a>" +
      '<nav class="site-nav" id="site-nav" aria-label="' + t("Main navigation", "ניווט ראשי") + '">' + links.map(([id, en, iw]) => '<a href="' + anchor(id) + '">' + t(en, iw) + "</a>").join("") + "</nav>" +
      '<div class="header-actions"><a class="btn" href="' + other + '" lang="' + (he ? "en" : "he") + '" hreflang="' + (he ? "en" : "he") + '">' + (he ? "English" : "עברית") + "</a>" +
      '<a class="btn btn-primary btn-contact" href="' + anchor("contact") + '">' + t("Contact", "יצירת קשר") + "</a>" +
      '<button type="button" class="menu-toggle" aria-expanded="false" aria-controls="site-nav">' + t("Menu", "תפריט") + "</button></div></div>";
  }
  function footer() {
    return '<div class="wrap"><span>© 2026 ' + NAME + " · " + t("Jerusalem, Israel", "ירושלים, ישראל") + "</span><nav aria-label=\"" + t("Footer", "קישורים") + '">' +
      '<a href="' + base + '/projects/">' + t("All projects", "כל הפרויקטים") + "</a>" +
      '<a href="' + base + '/resume/">' + t("Resume", "תקציר קורות חיים") + "</a>" +
      '<a href="mailto:' + MAIL + '">' + MAIL + "</a>" +
      '<a href="#main">' + t("Back to top ↑", "חזרה למעלה ↑") + "</a></nav></div>";
  }
  /* Lean sites use the small label as the heading and drop the slogan and the lead. */
  const lean = !!V.lean;
  const secHead = (label, title, lead) => (lean ? sectionHead("", label, "") : sectionHead(label, title, lead));
  function sectionHead(label, title, lead) {
    return '<div class="section-head">' + (label ? '<span class="label">' + label + "</span>" : "") + "<h2>" + title + "</h2>" + (lead ? '<p class="lead">' + lead + "</p>" : "") + "</div>";
  }
  function card(p) {
    return '<a class="card" href="' + projectUrl(p) + '"><div class="card-art">' + art(p) + '</div><div class="card-body">' +
      '<span class="card-meta">' + esc(p.stage) + " · " + esc(p.year) + "</span><h3>" + esc(p.title) + "</h3><p>" + esc(p.description) + "</p>" +
      '<p class="role"><b>' + t("My part: ", "החלק שלי: ") + "</b>" + esc(p.role) + '</p><div class="tags">' + p.tech.slice(0, 4).map((x) => "<span>" + esc(x) + "</span>").join("") + "</div></div></a>";
  }
  const studies = variant !== "system" ? [] : [
    ["infrastructure", "/cases/proxmox-ha-san/", "Virtualization, SAN & HA", "וירטואליזציה, SAN ו־HA", "Cluster, shared storage and failover testing, with the backup and recovery phase completed.", "עבודה עם Cluster, אחסון משותף ובדיקות שרידות, עם מערך גיבויים ושחזור שהושלם."],
    ["infrastructure", "/examples/network-design/", "Interactive network blueprint", "תרשים רשת אינטראקטיבי", "Seven components and three views of a reference network design.", "שבעה רכיבים ושלושה מצבי תצוגה של תכנון רשת לדוגמה."],
    ["operations", "/cases/security-observability/", "Security observability", "ניטור ואבטחה", "From collected events to a dashboard that gives the operator context.", "מאיסוף אירועים ועד תצוגה שנותנת למפעיל הקשר."]
  ];
  function studiesSection(filter) {
    const list = studies.filter((s) => !filter || s[0] === filter);
    if (!list.length) return "";
    return '<section class="section"><div class="wrap">' + sectionHead(t("Interactive case studies", "מקרי בוחן אינטראקטיביים"), t("Go deeper<br><em>into the system.</em>", "להיכנס<br><em>לעומק המערכת.</em>")) +
      '<div class="grid grid-' + (list.length > 3 ? 4 : 3) + '">' + list.map((s) => '<a class="tile" href="' + base + s[1] + '"><small>' + disciplineName(s[0]) + "</small><h3>" + t(s[2], s[3]) + "</h3><p>" + t(s[4], s[5]) + '</p><span class="more">' + t("Open the case study", "למקרה הבוחן") + " " + arrow + "</span></a>").join("") + "</div></div></section>";
  }

  /* [years en, years he, title en, title he, text en, text he, systems, employer en, employer he] */
  /* Career icons: one line drawing per role, drawn stroke by stroke when the marker reaches it. */
  const leaf = () => {
    const B = [32, 49], tips = [[32, 2, 8.5], [11, 10, 7.5], [53, 10, 7.5], [2, 32, 6], [62, 32, 6], [14, 56, 3.8], [50, 56, 3.8]];
    return tips.map(([x, y, w]) => {
      const dx = x - B[0], dy = y - B[1], len = Math.hypot(dx, dy), nx = -dy / len * w, ny = dx / len * w, mx = B[0] + dx * .45, my = B[1] + dy * .45, f = (v) => Math.round(v * 10) / 10;
      return '<path d="M' + B[0] + " " + B[1] + " L" + f(mx + nx) + " " + f(my + ny) + " L" + x + " " + y + " L" + f(mx - nx) + " " + f(my - ny) + ' Z"/>';
    }).join("") + '<path d="M32 49 V62"/>';
  };
  const roleIcons = [
    '<rect x="14" y="8" width="36" height="12" rx="2"/><path d="M20 14h2M26 14h2M32 14h2"/><path d="M32 20v10M12 30h40M12 30v8M32 30v8M52 30v8"/><rect x="6" y="38" width="12" height="14" rx="2"/><rect x="26" y="38" width="12" height="14" rx="2"/><rect x="46" y="38" width="12" height="14" rx="2"/>',
    '<rect x="8" y="10" width="48" height="40" rx="3"/><path d="M8 20h48"/><path d="M16 29l3 3l5-6M30 30h18"/><path d="M16 40l3 3l5-6M30 41h12"/>',
    leaf(),
    '<rect x="8" y="10" width="48" height="32" rx="3"/><path d="M14 28h8l4-10l6 18l5-12l3 4h10"/><path d="M32 42v10M22 52h20"/>',
    '<rect x="12" y="8" width="40" height="14" rx="2"/><rect x="12" y="26" width="40" height="14" rx="2"/><rect x="12" y="44" width="40" height="14" rx="2"/><path d="M18 15h4M18 33h4M18 51h4M40 15h6M40 33h6M40 51h6"/>',
    '<path d="M32 26L20 58M32 26L44 58M25 44h14"/><circle cx="32" cy="22" r="4"/><path d="M22 12q-8 10 0 20M42 12q8 10 0 20"/><path d="M15 6q-13 16 0 32M49 6q13 16 0 32"/>'
  ];
  const roleIcon = (i) => { let k = 0; return '<svg class="tl-icon" viewBox="0 0 64 64" aria-hidden="true">' + (roleIcons[i] || "").replace(/<(rect|path|circle) /g, (m, tag) => "<" + tag + ' pathLength="1" style="--d:' + (k++ * .12).toFixed(2) + 's" ') + "</svg>"; };
  const roles = [
    ["2026 — present", "2026 — היום", "Systems Administrator & Advanced Solutions Specialist", "מנהל מערכות ופתרונות מתקדמים",
      V.role[0], V.role[1],
      V.role[2], "Bar-Tech Advanced Solutions", "Bar-Tech Advanced Solutions"],
    ["2025", "2025", "Software Implementation & Integration", "הטמעת מערכות ואינטגרציה",
      "I implemented a software product at customer sites: in-depth training, fitting the system to each customer's way of working, and translating between the customer and the technical team.",
      "הטמעתי מוצר תוכנה אצל לקוחות: הדרכה מעמיקה, התאמת המערכת לדרך העבודה של כל לקוח, ותיווך בין הלקוח לצוות הטכני.", "", "Banarit", "בנארית"],
    ["2017 — 2019", "2017 — 2019", "Co-founder, Technology & Operations Lead", "מייסד שותף ומוביל טכנולוגיה ותפעול",
      "I built the operating processes of a large digital platform, led its layers of management, and set product priorities with a development team.",
      "בניתי את התהליכים התפעוליים של פלטפורמה דיגיטלית גדולה, הובלתי את שכבות הניהול שלה וקבעתי סדרי עדיפויות למוצר מול צוות פיתוח.", "", "TeleGrass", "טלגראס"],
    ["2016 — 2017", "2016 — 2017", "NOC & Systems Administration", "NOC וניהול מערכות",
      "I monitored the organization's production systems around the clock, maintained its Windows servers and directory, was responsible for the server enclosures, gave first-level support for the SAN, and handled escalations with outside vendors.",
      "ניטרתי את מערכות הייצור של הארגון מסביב לשעון, תחזקתי את שרתי ה־Windows וה־Directory, הייתי אחראי על מארזי השרתים, נתתי תמיכה ברמה ראשונה ל־SAN וטיפלתי באסקלציות מול ספקים חיצוניים.",
      "SCOM · SCSM · Lenovo XClarity · HP & Brocade switches · Palo Alto · Cisco ASA · Trend Micro · Active Directory", "Israel Land Authority", "רשות מקרקעי ישראל"],
    ["2015 — 2016", "2015 — 2016", "Junior Systems Administration & Helpdesk", "ניהול מערכות ותמיכה טכנית",
      "I supported SAP environments for development, test and production, installed and maintained about 40 physical servers, and handled the daily requests of business users.",
      "תמכתי בסביבות SAP לפיתוח, לבדיקות ולייצור, התקנתי ותחזקתי כ־40 שרתים פיזיים וטיפלתי בפניות היומיומיות של המשתמשים העסקיים.",
      "SAP · Windows Server · Active Directory", "Diplomat", "דיפלומט"],
    ["2012 — 2015", "2012 — 2015", "Systems Team & Training Leadership", "הובלת צוות מערכות והדרכה",
      "During my military service I led a systems team that maintained computer halls with about 1,500 physical and virtual servers, including permissions, mail and first-level SAN and fibre support. I also built the training and handover track for new team members.",
      "בשירות הצבאי הובלתי צוות סיסטם שתחזק אולמות מחשב עם כ־1,500 שרתים פיזיים ווירטואליים, כולל הרשאות, דואר ותמיכה ברמה ראשונה ב־SAN ובסיבים. בניתי גם את מסלול ההדרכה והחפיפה לחיילים חדשים.",
      "Active Directory · Exchange 2010 · VMware · SAN / Fibre Channel · Windows Server", "IDF Intelligence Corps, Unit 8200", "חיל המודיעין, יחידה 8200"]
  ];
  const shortRoles = V.short && VARIANTS.product.shortRoles;
  if (shortRoles) shortRoles.forEach((r, i) => { if (r) { roles[i][4] = r[0]; roles[i][5] = r[1]; } });
  function careerSection() {
    return '<section class="section" id="career"><div class="wrap">' +
      sectionHead(t("Professional background", "רקע מקצועי"), t("Experience across<br><em>systems and people.</em>", "ניסיון שמחבר<br><em>מערכות ואנשים.</em>"), lean ? "" : t("Hands-on infrastructure, work with customers and technology leadership, since 2012.", "תשתיות מעשיות, עבודה מול לקוחות והובלה טכנולוגית, מאז 2012.")) +
      '<div class="tl-wrap"><ol class="timeline">' + roles.map((r, i) => '<li><div class="when-col"><span class="when">' + (he ? r[1] : r[0]) + "</span>" + roleIcon(i) + "</div><div><h3>" + (he ? r[3] : r[2]) + "</h3><p class=\"org\">" + (he ? r[8] : r[7]) + "</p><p>" + (he ? r[5] : r[4]) + "</p>" + (r[6] ? '<p class="kit">' + esc(r[6]) + "</p>" : "") + "</div></li>").join("") + '</ol><span class="tl-marker" aria-hidden="true"></span></div>' +
      '<p class="note">' + t("Based on my professional CVs. Customer names and sensitive project details are left out on purpose.", "מבוסס על קורות החיים המקצועיים שלי. שמות לקוחות ופרטי פרויקטים רגישים הושמטו במכוון.") +
      ' <a class="link" href="' + base + '/resume/">' + t("One-page resume", "תקציר קורות חיים בעמוד אחד") + "</a></p></div></section>";
  }
  function contactSection() {
    return '<section class="section contact" id="contact"><div class="wrap contact-wrap"><div>' + (lean ? "<h2>" + t("Contact", "יצירת קשר") : '<span class="label">' + t("Contact", "יצירת קשר") + "</span><h2>" + t("The next challenge<br><em>starts with a conversation.</em>", "האתגר הבא<br><em>מתחיל בשיחה.</em>")) + '</h2><p class="lead">' +
      t(V.contact[0], V.contact[1]) +
      '</p><div class="contact-links"><a class="btn btn-primary" href="mailto:' + MAIL + '">' + t("Send an email", "שליחת מייל") + '</a><a class="link" href="mailto:' + MAIL + '" dir="ltr">' + MAIL + '</a><a class="link" href="' + base + '/resume/">' + t("Printable resume", "תקציר להדפסה") + "</a></div></div>" +
      '<figure class="qr-card"><div class="qr-box"><canvas class="qr-dots" role="img" aria-label="' + t("QR code that opens this site", "קוד QR שפותח את האתר הזה") + '"></canvas><span class="brand-mark qr-mark" aria-hidden="true">B<i>.</i></span></div><figcaption>' + t("Scan to open this site on your phone", "סרקו כדי לפתוח את האתר בטלפון") + "</figcaption></figure></div></section>";
  }

  /* ---------- Home ---------- */
  const featured = model.projects.map((p) => p.id);
  const stations = he ? V.stations[1] : V.stations[0];
  const stationStart = V.stationStart, stationOf = (i) => stationStart.reduce((best, from, s) => (i >= from ? s : best), 0);
  /* Named systems, grouped. Every name comes from my CVs, from the projects on this site, or from me directly. */
  const allStack = [
    ["Servers & hardware", "שרתים וחומרה", "Rack servers from installation and firmware to management interfaces and the operating system.", "שרתים פיזיים, מההתקנה והקושחה ועד ממשקי הניהול ומערכת ההפעלה.", ["Dell PowerEdge", "Lenovo ThinkSystem", "HP", "iDRAC", "Lenovo XClarity", "Firmware & BIOS"]],
    ["Networking & security", "תקשורת ואבטחה", "Cisco, HP, Lenovo and Dell switches, VLANs and routing, firewall rules, and firmware updates on routers and network equipment.", "מתגי Cisco, ‏HP, ‏Lenovo ו־Dell, ‏VLAN וניתוב, חוקי Firewall ועדכוני קושחה לנתבים ולציוד תקשורת.", ["Cisco", "HP", "Lenovo", "Dell", "Aruba", "UniFi", "Check Point", "Palo Alto", "Cisco ASA", "Brocade"]],
    ["Virtualization & storage", "וירטואליזציה ואחסון", "Clusters, shared storage, storage paths, high availability, backup and restore testing.", "אשכולות, אחסון משותף, נתיבי אחסון, זמינות גבוהה, גיבוי ובדיקות שחזור.", ["Proxmox VE", "VMware ESXi", "Dell SCv3020", "SAN / Fibre Channel", "HA & Quorum", "Proxmox backup", "EMC backup"]],
    ["Operating systems & monitoring", "מערכות הפעלה וניטור", "Server administration, directory and permissions, hardening, and monitoring that an operator can read.", "ניהול שרתים, הרשאות ו־Directory, הקשחה, וניטור שמפעיל יכול לקרוא.", ["Ubuntu Linux", "Windows Server", "Active Directory", "Wazuh", "Grafana", "OpenSearch", "ESET PROTECT", "Acronis", "SCOM"]],
    ["Telephony & physical systems", "טלפוניה ומערכות פיזיות", "Exchanges and IP phones, cameras, access control and intercoms, including their firmware.", "מרכזיות וטלפוני IP, מצלמות, בקרת כניסה ואינטרקום, כולל הקושחה שלהם.", ["Asterisk", "Kamailio", "Grandstream", "Hikvision", "Access control", "IP intercom", "Frigate"]],
    ["Automation & AI", "אוטומציה ו־AI", "Services, bots and integrations that connect messaging channels, business systems and language models.", "שירותים, בוטים ואינטגרציות שמחברים ערוצי הודעות, מערכות עסקיות ומודלי שפה.", ["Python", "Node.js", "Docker", "WhatsApp Cloud API", "Telegram", "Chatwoot", "OpenAI · Gemini · Claude"]],
    ["Scripting & tooling", "סקריפטים וכלי עבודה", "The scripts and tools that keep administration repeatable and documented.", "הסקריפטים והכלים שהופכים את עבודת הניהול לחוזרת ומתועדת.", ["PowerShell", "Bash", "Git", "Docker", "Python", "SSH"]],
    ["Development & delivery", "פיתוח ו־Delivery", "The stack and the delivery pipeline behind the products, from code to a tested release.", "ה־Stack וה־Pipeline שמאחורי המוצרים, מהקוד ועד גרסה בדוקה.", ["React", "Next.js", "NestJS", "TypeScript", "PostgreSQL", "GitHub Actions", "Playwright", "Cursor"]]
  ];
  const stackGroups = V.stack.map((i) => allStack[i]);
  function heroArt() {
    const labels = he ? ["תשתיות", "אוטומציה", "אנשים"] : ["Infrastructure", "Automation", "People"];
    const box = (cx, cy, label, n) => '<g class="hero-box b' + n + '"><rect class="node-box" x="' + (cx - 78) + '" y="' + (cy - 26) + '" width="156" height="52" rx="10"/><text x="' + cx + '" y="' + (cy + 6) + '" text-anchor="middle">' + label + "</text></g>";
    return '<div class="hero-art" aria-hidden="true"><svg viewBox="0 0 530 520">' +
      '<path class="trace" d="M290 190 H400 Q418 190 418 172 V96 M290 350 H180 Q162 350 162 368 V452 M170 136 V214 Q170 232 152 232 H60"/>' +
      '<path class="trace-lit" d="M20 110 H272 Q290 110 290 128 V412 Q290 430 308 430 H510"/>' +
      '<circle class="pulse-halo" r="16"/><circle class="pulse" r="7"/>' +
      '<circle class="node" cx="20" cy="110" r="6"/><circle class="node node-finish" cx="510" cy="430" r="6"/><circle class="node node-end" cx="418" cy="96" r="5"/><circle class="node node-end" cx="162" cy="452" r="5" style="animation-delay:-1.1s"/><circle class="node node-end" cx="60" cy="232" r="5" style="animation-delay:-2.2s"/>' +
      heroIcons() + box(170, 110, labels[0], 1) + box(290, 270, labels[1], 2) + box(410, 430, labels[2], 3) + "</svg></div>";
  }
  /* Hero icons: a small line drawing appears beside each box while the signal lights it.
     Each entry is [seconds into the loop, svg element]. The signal travels for 9s of a 12s loop (see site.css), so these start times are in real seconds. */
  function heroIcons() {
    const teeth = Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4, f = (v) => Math.round(v * 10) / 10; return "M" + f(395 + 10 * Math.cos(a)) + " " + f(270 + 10 * Math.sin(a)) + " L" + f(395 + 14 * Math.cos(a)) + " " + f(270 + 14 * Math.sin(a)); }).join(" ");
    const parts = [
      /* Infrastructure: two servers and a network link */
      [.9, '<rect x="134" y="26" width="44" height="13" rx="2.5"/>'], [1.05, '<path d="M141 32.5 h3 M148 32.5 h3 M162 32.5 h10"/>'],
      [1.2, '<rect x="134" y="44" width="44" height="13" rx="2.5"/>'], [1.35, '<path d="M141 50.5 h3 M148 50.5 h3 M162 50.5 h10"/>'],
      [1.5, '<path d="M178 41.5 H196"/>'], [1.65, '<circle cx="202" cy="41.5" r="6"/>'], [1.8, '<path d="M202 47.5 V58 M208 41.5 H218 M202 35.5 V27"/>'],
      /* Automation: a gear, an arrow, a check: something runs and finishes by itself */
      [4.4, '<circle cx="395" cy="270" r="10"/>'], [4.5, '<path d="' + teeth + '"/>'], [4.6, '<circle cx="395" cy="270" r="3.5"/>'],
      [4.8, '<path d="M415 270 H433 M428 265 l5 5 l-5 5"/>'], [5, '<circle cx="450" cy="270" r="10"/>'], [5.15, '<path d="M445 270 l4 4 l7 -8"/>'],
      /* People: chat bubbles, one after another */
      [6.9, '<path d="M392 302 h46 a8 8 0 0 1 8 8 v6 a8 8 0 0 1 -8 8 h-34 l-9 7 v-7 h-3 a8 8 0 0 1 -8 -8 v-6 a8 8 0 0 1 8 -8 z"/>'], [7.05, '<path d="M396 313 h34"/>'],
      [7.4, '<path d="M512 336 h-46 a8 8 0 0 0 -8 8 v6 a8 8 0 0 0 8 8 h34 l9 7 v-7 h3 a8 8 0 0 0 8 -8 v-6 a8 8 0 0 0 -8 -8 z"/>'], [7.55, '<path d="M474 347 h30"/>'],
      [7.9, '<path d="M392 370 h36 a8 8 0 0 1 8 8 v4 a8 8 0 0 1 -8 8 h-24 l-9 7 v-7 h-3 a8 8 0 0 1 -8 -8 v-4 a8 8 0 0 1 8 -8 z"/>'], [8.05, '<path d="M396 380 h22"/>']
    ];
    return '<g class="hero-ico">' + parts.map(([at, el]) => el.replace(/^<(\w+) /, '<$1 pathLength="1" style="animation-delay:' + at + 's" ')).join("") + "</g>";
  }
  function storyCard(p, i) {
    return '<a class="story-card" href="' + projectUrl(p) + '"><div class="story-art">' + art(p) + '</div><div class="story-body">' +
      '<div class="story-meta"><b><bdi>0' + (i + 1) + "</bdi> · " + stations[stationOf(i)] + "</b><span>" + esc(p.stage) + " · " + esc(p.year) + "</span></div>" +
      "<h3>" + esc(p.title) + '</h3><p class="story-sub">' + esc(p.subtitle) + '</p><p class="story-desc">' + esc(p.description) + "</p>" +
      '<p class="story-role"><b>' + t("My part: ", "החלק שלי: ") + "</b>" + esc(p.role) + '</p><span class="story-more">' + t("Read the project", "לעמוד הפרויקט") + " " + arrow + "</span></div></a>";
  }
  function homeView() {
    const picks = featured.map((id) => model.projects.find((p) => p.id === id)).filter(Boolean);
    const profile = model.profiles.all;
    const hero = '<section class="hero"><div class="wrap"><div class="hero-copy"><p class="hero-id"><strong>' + NAME + "</strong><span>" +
      t(V.idline[0], V.idline[1]) + "</span></p>" +
      '<h1 id="hero-title">' + profile.title + '</h1><p class="lead">' +
      t(V.lead[0], V.lead[1]) +
      '</p><div class="hero-cta"><a class="btn btn-primary" href="#work">' + t("Selected projects", "לפרויקטים נבחרים") + '</a><a class="btn" href="' + base + '/resume/">' + t("One-page resume", "תקציר קורות חיים") + '</a><a class="link" href="#contact">' + t("Contact me", "יצירת קשר") + "</a></div>" +
      '<p class="hero-note">' + t("Open to new professional opportunities", "פתוח להזדמנויות מקצועיות") + '</p><ul class="hero-facts">' +
      V.facts.map(([n, en, iw]) => "<li><b>" + n + "</b><span>" + t(en, iw) + "</span></li>").join("") + "</ul></div>" + heroArt() + "</div></section>";

    const work = '<section class="work" id="work"><div class="wrap">' +
      sectionHead(t("Selected work", "עבודות נבחרות"), t(V.workTitle[0], V.workTitle[1]), t(V.workLead[0], V.workLead[1])) +
      '</div><div class="story"><div class="story-sticky"><div class="story-viewport" id="story-viewport"><div class="story-track">' + picks.map(storyCard).join("") + "</div></div>" +
      '<div class="story-controls"><span class="story-hint" id="story-hint">' + t("Follow the signal", "עקבו אחרי האות") + '</span><div class="story-dial">' +
      '<svg class="story-circuit" viewBox="0 0 420 72" aria-hidden="true"><path class="story-route" d="M16 50 H118 Q128 50 128 40 V32 Q128 22 138 22 H282 Q292 22 292 32 V40 Q292 50 302 50 H404"/>' +
      '<circle cx="16" cy="50" r="4"/><circle cx="210" cy="22" r="4"/><circle cx="404" cy="50" r="4"/><circle class="story-signal" cx="16" cy="50" r="5"/></svg>' +
      '<input class="story-scrubber" type="range" min="0" max="100" value="0" aria-labelledby="story-hint" aria-controls="story-viewport"></div>' +
      '<div class="story-nav" role="group" aria-label="' + t("Choose an area", "בחירת תחום") + '">' + stations.map((name, i) => '<button type="button"><bdi>0' + (i + 1) + "</bdi>" + name + "</button>").join("") + "</div></div></div></div>" +
      '<div class="wrap work-foot"><a class="link" href="' + base + '/projects/">' + t("All projects on one page", "כל הפרויקטים בעמוד אחד") + " " + arrow + "</a></div></section>";

    const stack = '<section class="section" id="stack"><div class="wrap">' +
      secHead(t("Systems I work with", "מערכות שאני עובד איתן"), t(V.stackHead[0], V.stackHead[1]), t(V.stackHead[2], V.stackHead[3])) +
      '<div class="grid grid-3">' + stackGroups.map((g) => '<div class="tile stack-tile"><h3>' + t(g[0], g[1]) + "</h3>" + (lean ? "" : "<p>" + t(g[2], g[3]) + "</p>") + '<div class="tags">' + g[4].map((x) => "<span>" + esc(x) + "</span>").join("") + "</div></div>").join("") + "</div></div></section>";

    const aboutFull = '<section class="section" id="about"><div class="wrap">' +
      sectionHead(t("How I think and work", "איך אני חושב ועובד"), t("Curiosity, ownership.<br><em>And getting things done.</em>", "סקרנות, אחריות.<br><em>והיכולת להוציא לפועל.</em>")) +
      '<div class="split"><div class="prose"><p>' +
      (V.short ? t("I am drawn to problems that do not fit one job description: a server that will not come up, a process that keeps breaking, an idea that has not yet become a product. Each one starts with the same question: what is actually happening here?", "אני נמשך לבעיות שלא נכנסות להגדרת תפקיד אחת: שרת שלא עולה, תהליך שנשבר, רעיון שעוד לא הפך למוצר. הכול מתחיל באותה שאלה: מה באמת קורה כאן?") : t("I am drawn to problems that do not fit neatly into one job description. A server that will not come up, a process that keeps breaking, a good idea that has not yet become a working product: each one starts with the same question. What is actually happening here?", "אני נמשך דווקא לבעיות שלא נכנסות בקלות להגדרת תפקיד אחת. שרת שלא עולה, תהליך שחוזר ונשבר, רעיון טוב שעדיין לא הפך למוצר עובד: מבחינתי הכול מתחיל באותה שאלה. מה באמת קורה כאן?")) + "</p><p>" +
      (V.short ? t("I investigate first: I ask, test assumptions and understand the system before choosing a fix. I want to know what changed, why it worked and how it will be maintained tomorrow.", "קודם אני חוקר: שואל, בודק הנחות ומבין את המערכת לפני שאני בוחר פתרון. חשוב לי לדעת מה השתנה, למה זה עבד ואיך יתחזקו את זה מחר.") : t("My first instinct is to investigate. I ask questions, test assumptions, get my hands on the equipment or the code, and understand the system before choosing a fix. I like to move fast, but I want to know what changed, why it worked and how someone else will maintain it tomorrow.", "האינסטינקט הראשון שלי הוא לחקור. אני שואל, בודק הנחות, נוגע בציוד או בקוד ומבין את המערכת לפני שאני בוחר פתרון. אני אוהב להתקדם מהר, אבל חשוב לי לדעת מה השתנה, למה זה עבד ואיך מישהו אחר יתחזק את זה מחר.")) + "</p><p>" +
      (V.short ? t("I prefer practical solutions, evidence over assumptions and direct communication. Where I can choose, I pick open-source and flexible products over closed ones.", "אני מעדיף פתרונות מעשיים, ראיות על פני הנחות ותקשורת ישירה. כשהבחירה בידיי, אני בוחר בקוד פתוח ובמוצרים גמישים על פני מוצרים סגורים.") : t("What connects my projects is not a particular technology. It is a preference for practical solutions, for evidence over assumptions, for direct communication, and for systems that keep serving people after the excitement of building them has passed. Where I can choose, I prefer open-source and flexible products that can be adapted, extended and connected to other systems over closed ones.", "מה שמחבר בין הפרויקטים שלי הוא לא טכנולוגיה מסוימת. זו העדפה לפתרונות מעשיים, לראיות ולא להנחות, לתקשורת ישירה ולמערכות שממשיכות לשרת אנשים גם אחרי שההתלהבות מההקמה חולפת. כשהבחירה בידיי, אני מעדיף קוד פתוח ומוצרים גמישים, שאפשר להתאים, להרחיב ולחבר למערכות אחרות, על פני מוצרים סגורים.")) + "</p><p>" +
      t("I learned the trade in Unit 8200 of the IDF Intelligence Corps, continued at Diplomat and at the Israel Land Authority, co-founded TeleGrass and led its technology and operations, implemented software for customers at Banarit, and today I work at Bar-Tech Advanced Solutions.", "את המקצוע למדתי ביחידה 8200 של חיל המודיעין. המשכתי בדיפלומט וברשות מקרקעי ישראל, הייתי שותף להקמת טלגראס והובלתי את הטכנולוגיה והתפעול שלה, הטמעתי תוכנה אצל לקוחות בבנארית, והיום אני עובד ב־Bar-Tech Advanced Solutions.") + "</p><p>" +
      t("Outside work I build small tools for myself: one that syncs my music library from Spotify to YouTube, a studio for musical references, and an interactive puzzle that runs in the browser. They are not professional projects. They are where I try new things before I bring them to work.", "מחוץ לעבודה אני בונה לעצמי כלים קטנים: סנכרון של ספריית המוזיקה שלי מ־Spotify ל־YouTube, סטודיו לרפרנסים מוזיקליים וחידה אינטראקטיבית שרצה בדפדפן. אלה לא פרויקטים מקצועיים. שם אני מנסה דברים חדשים לפני שאני מביא אותם לעבודה.") + "</p></div>" +
      '<ol class="points"><li><small>' + t("In technical work", "בעבודה הטכנית") + "</small><h3>" + t("Understand before changing.", "להבין לפני שמשנים.") + "</h3><p>" + t("Investigate, isolate, implement and verify, from physical infrastructure to automation and interfaces.", "לחקור, לבודד, ליישם ולאמת, מתשתית פיזית ועד אוטומציה וממשקים.") + "</p></li>" +
      "<li><small>" + t("In managing processes", "בניהול תהליכים") + "</small><h3>" + t("Turn ambiguity into a plan.", "להפוך עמימות לתוכנית.") + "</h3><p>" + t("Set priorities, define ownership, improve the process and absorb change without losing direction.", "לתעדף, להגדיר אחריות, לשפר תהליכים ולהתמודד עם שינויים בלי לאבד כיוון.") + "</p></li>" +
      "<li><small>" + t("In leading teams", "בהובלת צוותים") + "</small><h3>" + t("Make others effective.", "לאפשר לאחרים להצליח.") + "</h3><p>" + t("Build trust, delegate decisions, remove blockers and connect development to what the field needs.", "לייצר אמון, להאציל החלטות, להסיר חסמים ולחבר בין פיתוח לצרכים בשטח.") + "</p></li></ol></div></div></section>";

    /* Each working principle shows its label and sub-heading only, on all three sites. */
    const about = aboutFull.replace(/(<small>[^<]*<\/small><h3>[^<]*<\/h3>)<p>[^<]*<\/p>/g, "$1");
    const stat = (n, en, iw, den, dhe) => "<li><b>" + n + "</b><strong>" + t(en, iw) + "</strong><span>" + t(den, dhe) + "</span></li>";
    const leadership = '<section class="section" id="people-leadership"><div class="wrap">' +
      secHead(t("People leadership", "ניהול עובדים והובלת צוותים"), t("Not only systems.<br><em>People and teams too.</em>", "לא רק מערכות.<br><em>גם אנשים וצוותים.</em>"), t("I have led managers and teams, coordinated developers, and turned broad goals into clear day-to-day work.", "הובלתי מנהלים וצוותי עובדים, תיאמתי עבודת מפתחים והפכתי יעדים רחבים לעבודה יומיומית ברורה.")) +
      '<ul class="stats">' +
      stat("1.5M+", "Unique active users", "משתמשים ייחודיים פעילים", "Reported scale of the digital platform I co-founded and led, March 2017 to March 2019.", "היקף הפעילות המדווח של הפלטפורמה הדיגיטלית שהקמתי והובלתי, מרץ 2017 עד מרץ 2019.") +
      stat("~4,500", "Vendors on the platform", "מוכרים בפלטפורמה", "A marketplace that needed technical and operational workflows to move together.", "פעילות מסחר שהצריכה תיאום בין תהליכים טכנולוגיים ותפעוליים.") +
      stat("~150", "Managers in the organization", "מנהלים במערך הארגוני", "Of them, 11–12 senior managers reported directly to me.", "מתוכם 11–12 מנהלים בכירים בניהול ישיר שלי.") +
      stat("11", "Parallel sub-projects", "תתי־פרויקטים במקביל", "Managed across product, technology and operations.", "בניהול רוחבי בתחומי מוצר, טכנולוגיה ותפעול.") + "</ul>" +
      '<div class="split"><div class="prose"><p>' +
      (V.short ? t("I managed at several levels: direction with senior managers, ownership for team leads, and alignment between development and operations. The aim is a structure in which people understand the goal, make decisions and know when to raise a problem.", "ניהלתי בכמה שכבות: כיוון מול מנהלים בכירים, אחריות למנהלי צוותים וחיבור בין פיתוח לתפעול. המטרה היא מסגרת שבה אנשים מבינים את היעד, מקבלים החלטות ויודעים מתי להציף בעיה.") : t("I have managed work at several levels: setting direction with senior managers, giving team leads real ownership, and keeping development and operations aligned. The hard part is rarely handing out tasks. It is building a structure in which people understand the goal, can make decisions, and know when to raise a problem.", "ניהלתי עבודה בכמה שכבות: קביעת כיוון עם מנהלים בכירים, מתן אחריות למנהלי צוותים וחיבור בין פיתוח לתפעול. האתגר הוא לא חלוקת המשימות. הוא לבנות מסגרת שבה אנשים מבינים את המטרה, יכולים לקבל החלטות ויודעים מתי להציף בעיה.")) + "</p><p>" +
      t("I worked with a development manager and four developers, set priorities for the requirements, and led the rollout of an intake automation bot that stayed in use for more than a year.", "עבדתי עם מנהל פיתוח וארבעה מפתחים, תיעדפתי דרישות והובלתי הטמעה של בוט אוטומציה לקליטת פניות, ששימש יותר משנה.") + "</p></div>" +
      '<ol class="points"><li><h3>' + t("Leading through managers", "ניהול באמצעות מנהלים") + "</h3><p>" + t("Goals, ownership and authority, defined across the layers of management.", "הגדרת יעדים, אחריות וסמכויות בין שכבות הניהול.") + "</p></li>" +
      "<li><h3>" + t("Developing people and process", "פיתוח אנשים ותהליכים") + "</h3><p>" + t("Recruiting, training, delegation, procedures and feedback.", "גיוס, הכשרה, האצלת סמכויות, נהלים ומשוב.") + "</p></li>" +
      "<li><h3>" + t("Connecting teams to delivery", "חיבור צוותים לביצוע") + "</h3><p>" + t("Coordinating technical teams, removing blockers and handling difficult situations calmly.", "תיאום צוותים טכנולוגיים, הסרת חסמים והתמודדות שקולה עם מצבים מורכבים.") + "</p></li></ol></div></div></section>";

    return hero + work + stack + careerSection() + (V.leadership ? leadership : "") + about + contactSection();
  }

  /* ---------- Inner pages ---------- */
  function pageHead(label, title, lead, cta) {
    return '<section class="page-head"><div class="wrap"><a class="crumb" href="' + home + '">' + (he ? "→ " : "← ") + t("Homepage", "דף הבית") + '</a><span class="label">' + label + "</span><h1>" + title + '</h1><p class="lead">' + lead + "</p>" +
      (cta ? '<div class="hero-cta"><a class="btn btn-primary" href="mailto:' + MAIL + '">' + t("Contact me", "יצירת קשר") + '</a><a class="btn" href="' + base + '/resume/">' + t("One-page resume", "תקציר קורות חיים") + "</a></div>" : "") + "</div></section>";
  }
  function archiveView() {
    return pageHead(t("Projects", "פרויקטים"), t(V.count[0], V.count[1]), t("Each page tells one piece of work, on its own.", "כל עמוד מספר עבודה אחת, בפני עצמה.")) +
      '<section class="section"><div class="wrap"><div class="grid grid-3">' + model.projects.map(card).join("") + "</div></div></section>" + studiesSection() + contactSection();
  }
  function categoryView(key) {
    const profile = model.profiles[key];
    const list = model.projects.filter((p) => p.tracks.includes(key));
    return pageHead(disciplineName(key), profile.title, esc(profile.subtitle), true) +
      '<section class="section"><div class="wrap"><div class="grid grid-3">' + list.map(card).join("") + '</div><p class="note"><a class="link" href="' + base + '/projects/">' + t("All projects, every discipline", "כל הפרויקטים, בכל התחומים") + " " + arrow + "</a></p></div></section>" + studiesSection(key) + contactSection();
  }
  function roleView(job) {
    const list = job.ids.map((id) => model.projects.find((p) => p.id === id)).filter(Boolean);
    return pageHead(t("Selected for this role", "נבחר במיוחד לתפקיד"), esc(he ? job.he : job.title), esc(he ? job.introHe : job.intro), true) +
      '<section class="section"><div class="wrap">' + sectionHead(t("Relevant work", "עבודות רלוונטיות"), t("The projects<br><em>closest to this role.</em>", "הפרויקטים<br><em>הקרובים ביותר לתפקיד.</em>")) +
      '<div class="grid grid-3">' + list.map(card).join("") + "</div></div></section>" + careerSection() + contactSection();
  }
  function projectView(p) {
    const c = model.caseStudies && model.caseStudies[p.id];
    const block = (title, body) => '<section class="block"><h2>' + title + "</h2><p>" + esc(body) + "</p></section>";
    const peers = model.projects, at = peers.indexOf(p);
    const deep = { P17: "proxmox-ha-san", P05: "security-observability" }[p.id];
    const pager = peers.length > 1 ? '<nav class="pager" aria-label="' + t("More projects", "עוד פרויקטים") + '">' +
      [[peers[(at + peers.length - 1) % peers.length], t("Previous project", "הפרויקט הקודם")], [peers[(at + 1) % peers.length], t("Next project", "הפרויקט הבא")]]
        .map(([peer, label]) => '<a href="' + projectUrl(peer) + '"><small>' + label + "</small><strong>" + esc(peer.title) + "</strong></a>").join("") + "</nav>" : "";
    return '<section class="page-head"><div class="wrap"><a class="crumb" href="' + base + '/projects/">' + (he ? "→ " : "← ") + t("All projects", "כל הפרויקטים") + "</a>" +
      '<div class="chips"><span>' + esc(p.year) + "</span><span>" + esc(p.stage) + "</span><span>" + t(V.name[0], V.name[1]) + "</span></div><h1>" + esc(p.title) + '</h1><p class="lead">' + esc(p.subtitle) + "</p></div></section>" +
      '<section class="section"><div class="wrap"><div class="project"><div class="project-role"><span class="label">' + t("My part", "החלק שלי") + "</span><p>" + esc(p.role) + "</p></div>" +
      block(t("Overview", "רקע"), p.detail) +
      (p.parts ? '<section class="block parts"><h2>' + t("In detail", "בפירוט") + "</h2>" + p.parts.map(([title, text], i) => '<article class="part"><span class="part-no"><bdi>0' + (i + 1) + "</bdi></span><div><h3>" + esc(title) + "</h3><p>" + esc(text) + "</p></div></article>").join("") + "</section>" : "") +
      (c && c.focus ? '<p class="focus-note">' + t("The case study below is about one of them: ", "מקרה הבוחן שלמטה עוסק באחת מהן: ") + "<b>" + esc(c.focus) + "</b></p>" : "") +
      (c ? block(t("The challenge", "האתגר"), c.challenge) + block(t("The approach", "הגישה"), c.approach) + block(t("Evidence", "ראיות"), c.evidence) + block(t("Limits", "מגבלות"), c.limits) : "") +
      '<section class="block"><h2>' + t("Technology", "טכנולוגיות") + '</h2><div class="tags">' + p.tech.map((x) => "<span>" + esc(x) + "</span>").join("") + "</div></section>" +
      '<div class="actions"><a class="btn btn-primary" href="mailto:' + MAIL + '">' + t("Contact me", "יצירת קשר") + "</a>" +
      (deep ? '<a class="link" href="' + base + "/cases/" + deep + '/">' + t("Interactive case study", "למקרה הבוחן האינטראקטיבי") + " " + arrow + "</a>" : "") + "</div>" + pager + "</div></div></section>";
  }

  /* ---------- Mount ---------- */
  let head = document.querySelector(".site-header"), foot = document.querySelector(".site-footer");
  if (!head) { head = document.createElement("header"); head.className = "site-header"; main.before(head); }
  if (!foot) { foot = document.createElement("footer"); foot.className = "site-footer"; main.after(foot); }
  head.id = "site-header"; head.innerHTML = header(); foot.innerHTML = footer();

  const project = detailId && model.projects.find((p) => p.id === detailId);
  const job = view === "role" ? jobs[parts[1]] : null;
  main.innerHTML = view === "project" && project ? projectView(project) : view === "archive" ? archiveView()
    : view === "category" ? categoryView(parts[0]) : view === "role" ? roleView(job) : homeView();

  const suffix = " | " + NAME;
  if (view === "project" && project) {
    document.title = project.title + suffix;
    const meta = document.querySelector('meta[name="description"]'); if (meta) meta.content = project.description;
  } else if (view === "archive") document.title = t("All projects", "כל הפרויקטים") + suffix;
  else if (view === "category") document.title = disciplineName(parts[0]) + suffix;
  else if (view === "role") document.title = (he ? job.he : job.title) + suffix;

  const toggle = head.querySelector(".menu-toggle"), nav = head.querySelector(".site-nav");
  toggle.addEventListener("click", () => { const open = !nav.classList.contains("is-open"); nav.classList.toggle("is-open", open); toggle.setAttribute("aria-expanded", String(open)); });
  nav.addEventListener("click", () => { nav.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); });

  const rising = [...main.querySelectorAll(".section-head, .tl-wrap, .split, .stats, .grid, .group-head, .project > *")];
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const io = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
    rising.forEach((el) => { el.classList.add("rise"); io.observe(el); });
  }

  /* ---------- Career timeline: a marker that travels down the line and draws each role's icon ---------- */
  const tlWrap = main.querySelector(".tl-wrap");
  if (tlWrap) {
    const marker = tlWrap.querySelector(".tl-marker"), items = [...tlWrap.querySelectorAll(".timeline > li")];
    let tlFrame = 0, current = -1;
    const place = () => {
      tlFrame = 0;
      const box = tlWrap.getBoundingClientRect();
      if (box.bottom < 0 || box.top > innerHeight) return;
      const tops = items.map((li) => li.getBoundingClientRect().top - box.top);
      const y = Math.min(tops[tops.length - 1] + 38, Math.max(tops[0] + 38, innerHeight * .42 - box.top));
      marker.style.transform = "translateY(" + (y - 11) + "px)";
      if (box.top > innerHeight * .8) return;
      let now = 0;
      tops.forEach((top, i) => { if (y >= top + 12) now = i; });
      if (now !== current) {
        if (items[current]) items[current].classList.remove("is-active");
        items[now].classList.add("is-active"); items.forEach((li, i) => { if (i <= now) li.classList.add("is-drawn"); });
        marker.classList.remove("is-pulse"); void marker.offsetWidth; marker.classList.add("is-pulse");
        current = now;
      }
    };
    const queue = () => { if (!tlFrame) tlFrame = requestAnimationFrame(place); };
    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue, { passive: true });
    place();
  }

  /* ---------- Contact QR: a dot-matrix code that lights up under the pointer ----------
     The code holds the address of the site it is shown on (each site and language has its own). It is encoded here, with no library:
     QR version 10 (57 x 57), error correction Q, byte mode. Light dots on the dark card, like the rest of the site. */
  function qrMatrix(text) {
    const VER = 10, N = VER * 4 + 17, ECC = 24, BLOCKS = 8, TOTAL = 346, DATA = TOTAL - ECC * BLOCKS;
    const bytes = Array.from(new TextEncoder().encode(text));
    if (bytes.length * 8 + 20 > DATA * 8) return null;
    const bits = [], push = (v, len) => { for (let i = len - 1; i >= 0; i--) bits.push((v >>> i) & 1); };
    push(4, 4); push(bytes.length, 16); bytes.forEach((b) => push(b, 8));
    push(0, Math.min(4, DATA * 8 - bits.length));
    while (bits.length % 8) bits.push(0);
    const data = [];
    for (let i = 0; i < bits.length; i += 8) data.push(parseInt(bits.slice(i, i + 8).join(""), 2));
    for (let pad = 0xEC; data.length < DATA; pad ^= 0xEC ^ 0x11) data.push(pad);
    /* Reed-Solomon over GF(256) */
    const mul = (x, y) => { let z = 0; for (let i = 7; i >= 0; i--) { z = (z << 1) ^ ((z >>> 7) * 0x11D); z ^= ((y >>> i) & 1) * x; } return z; };
    const div = new Array(ECC).fill(0); div[ECC - 1] = 1;
    for (let i = 0, rootv = 1; i < ECC; i++) { for (let j = 0; j < ECC; j++) { div[j] = mul(div[j], rootv); if (j + 1 < ECC) div[j] ^= div[j + 1]; } rootv = mul(rootv, 2); }
    const ecc = (dat) => { const res = div.map(() => 0); dat.forEach((b) => { const f = b ^ res.shift(); res.push(0); div.forEach((c, i) => { res[i] ^= mul(c, f); }); }); return res; };
    const short = BLOCKS - TOTAL % BLOCKS, shortLen = Math.floor(TOTAL / BLOCKS), blocks = [];
    for (let i = 0, k = 0; i < BLOCKS; i++) { const dat = data.slice(k, k + shortLen - ECC + (i < short ? 0 : 1)); k += dat.length; const e = ecc(dat); if (i < short) dat.push(0); blocks.push(dat.concat(e)); }
    const all = [];
    for (let i = 0; i < blocks[0].length; i++) blocks.forEach((b, j) => { if (i !== shortLen - ECC || j >= short) all.push(b[i]); });
    /* Function patterns */
    const m = [], fn = [];
    for (let y = 0; y < N; y++) { m.push(new Array(N).fill(0)); fn.push(new Array(N).fill(0)); }
    const set = (x, y, v) => { if (x >= 0 && x < N && y >= 0 && y < N) { m[y][x] = v ? 1 : 0; fn[y][x] = 1; } };
    for (let i = 0; i < N; i++) { set(6, i, i % 2 === 0); set(i, 6, i % 2 === 0); }
    [[3, 3], [N - 4, 3], [3, N - 4]].forEach(([cx, cy]) => { for (let dy = -4; dy <= 4; dy++) for (let dx = -4; dx <= 4; dx++) { const d = Math.max(Math.abs(dx), Math.abs(dy)); set(cx + dx, cy + dy, d !== 2 && d !== 4); } });
    const al = [6, 28, 50];
    al.forEach((cx, i) => al.forEach((cy, j) => { if ((i === 0 && j === 0) || (i === 0 && j === 2) || (i === 2 && j === 0)) return; for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) set(cx + dx, cy + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1); }));
    let rem = VER; for (let i = 0; i < 12; i++) rem = (rem << 1) ^ ((rem >>> 11) * 0x1F25);
    const vbits = VER << 12 | rem;
    for (let i = 0; i < 18; i++) { const b = (vbits >>> i) & 1, a = N - 11 + i % 3, c = Math.floor(i / 3); set(a, c, b); set(c, a, b); }
    const format = (mask) => {
      const d = 3 << 3 | mask; let r = d; for (let i = 0; i < 10; i++) r = (r << 1) ^ ((r >>> 9) * 0x537);
      const f = (d << 10 | r) ^ 0x5412, bit = (i) => (f >>> i) & 1;
      for (let i = 0; i <= 5; i++) set(8, i, bit(i)); set(8, 7, bit(6)); set(8, 8, bit(7)); set(7, 8, bit(8)); for (let i = 9; i < 15; i++) set(14 - i, 8, bit(i));
      for (let i = 0; i < 8; i++) set(N - 1 - i, 8, bit(i)); for (let i = 8; i < 15; i++) set(8, N - 15 + i, bit(i)); set(8, N - 8, 1);
    };
    format(0);
    /* Data, in the zigzag order of the standard */
    let k = 0;
    for (let right = N - 1; right >= 1; right -= 2) { if (right === 6) right = 5; for (let vert = 0; vert < N; vert++) for (let j = 0; j < 2; j++) { const x = right - j, up = ((right + 1) & 2) === 0, y = up ? N - 1 - vert : vert; if (!fn[y][x] && k < all.length * 8) { m[y][x] = (all[k >>> 3] >>> (7 - (k & 7))) & 1; k++; } } }
    const masks = [(x, y) => (x + y) % 2 === 0, (x, y) => y % 2 === 0, (x) => x % 3 === 0, (x, y) => (x + y) % 3 === 0, (x, y) => (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0, (x, y) => x * y % 2 + x * y % 3 === 0, (x, y) => (x * y % 2 + x * y % 3) % 2 === 0, (x, y) => ((x + y) % 2 + x * y % 3) % 2 === 0];
    const apply = (f) => { for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) if (!fn[y][x] && f(x, y)) m[y][x] ^= 1; };
    const penalty = () => {
      let p = 0, dark = 0;
      for (let a = 0; a < N; a++) { let runX = 1, runY = 1; for (let b = 0; b < N; b++) {
        dark += m[a][b];
        if (b) { if (m[a][b] === m[a][b - 1]) { runX++; p += runX === 5 ? 3 : runX > 5 ? 1 : 0; } else runX = 1; if (m[b][a] === m[b - 1][a]) { runY++; p += runY === 5 ? 3 : runY > 5 ? 1 : 0; } else runY = 1; }
        if (a && b && m[a][b] === m[a][b - 1] && m[a][b] === m[a - 1][b] && m[a][b] === m[a - 1][b - 1]) p += 3;
      } }
      return p + Math.floor(Math.abs(dark * 20 - N * N * 10) / (N * N)) * 10;
    };
    let best = 0, low = Infinity;
    masks.forEach((f, i) => { apply(f); format(i); const p = penalty(); if (p < low) { low = p; best = i; } apply(f); });
    apply(masks[best]); format(best);
    return m;
  }
  const qrCanvas = main.querySelector("canvas.qr-dots");
  if (qrCanvas) {
    const card = "https://barellevi.com" + base + "/";
    const matrix = qrMatrix(card), qrCard = qrCanvas.closest(".qr-card");
    if (!matrix) qrCard.hidden = true;
    else {
      const N = matrix.length, mid = (N - 1) / 2, HOLE = 7, ctx = qrCanvas.getContext("2d");
      const hues = [[120, 255, 210], [255, 190, 110], [93, 255, 158], [90, 225, 255]], INK = [237, 241, 237];
      const inFinder = (x, y) => (x < 7 && y < 7) || (x >= N - 7 && y < 7) || (x < 7 && y >= N - 7);
      const dots = [];
      for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
        if (!matrix[y][x] || inFinder(x, y) || (Math.abs(x - mid) < HOLE && Math.abs(y - mid) < HOLE)) continue;
        dots.push({ x, y, e: 0, hue: hues[(x * 7 + y * 13 + (x * y) % 5) % hues.length] });
      }
      const finders = [[0, 0], [N - 7, 0], [0, N - 7]].map(([x, y]) => ({ x, y, e: 0 }));
      let cell = 1, size = 0, running = 0, seen = false;
      const ripples = [];
      const still = matchMedia("(prefers-reduced-motion: reduce)");
      const rgb = (c, e, a) => "rgba(" + c.map((v, i) => Math.round(INK[i] + (v - INK[i]) * e)).join(",") + "," + a + ")";
      const rounded = (x, y, w, r) => { ctx.beginPath(); ctx.roundRect(x, y, w, w, r); };
      function draw() {
        ctx.clearRect(0, 0, size, size);
        /* Glow pass: lit dots throw a soft halo that adds up where they overlap */
        ctx.globalCompositeOperation = "lighter";
        for (const d of dots) {
          if (d.e < .04) continue;
          ctx.fillStyle = "rgba(" + d.hue.join(",") + "," + (.2 * d.e).toFixed(3) + ")"; ctx.beginPath();
          ctx.arc((d.x + .5) * cell, (d.y + .5) * cell, cell * (1.1 + 1.5 * d.e), 0, 6.2832); ctx.fill();
        }
        ctx.globalCompositeOperation = "source-over";
        for (const d of dots) {
          ctx.fillStyle = rgb(d.hue, d.e, .94); ctx.beginPath();
          ctx.arc((d.x + .5) * cell, (d.y + .5) * cell, cell * (.36 + .12 * d.e), 0, 6.2832); ctx.fill();
        }
        ctx.shadowBlur = 0;
        for (const f of finders) {
          const c = rgb(hues[0], f.e, .96);
          ctx.shadowColor = "rgba(" + hues[0].join(",") + ",.9)"; ctx.shadowBlur = cell * 4 * f.e;
          ctx.strokeStyle = c; ctx.lineWidth = cell; rounded((f.x + .5) * cell, (f.y + .5) * cell, 6 * cell, 1.7 * cell); ctx.stroke();
          ctx.fillStyle = c; rounded((f.x + 2) * cell, (f.y + 2) * cell, 3 * cell, .9 * cell); ctx.fill();
        }
      }
      function tick() {
        running = 0; let alive = false;
        /* Ripples: a ring of color that spreads from the point that was clicked */
        const now = performance.now();
        for (let i = ripples.length - 1; i >= 0; i--) {
          const r = ripples[i], age = (now - r.t) / 1000, radius = age * 34, fade = Math.max(0, 1 - radius / (N * 1.5));
          if (fade <= 0) { ripples.splice(i, 1); continue; }
          alive = true;
          for (const d of dots) { const off = Math.abs(Math.hypot(d.x + .5 - r.x, d.y + .5 - r.y) - radius); if (off < 4.5) { d.e = Math.max(d.e, (1 - off / 4.5) * fade); d.hue = hues[(r.k + Math.floor(radius / 6)) % hues.length]; } }
          for (const f of finders) { const off = Math.abs(Math.hypot(f.x + 3.5 - r.x, f.y + 3.5 - r.y) - radius); if (off < 6) f.e = Math.max(f.e, fade); }
        }
        for (const d of dots) if (d.e > 0) { d.e = d.e < .012 ? 0 : d.e * .982; alive = alive || d.e > 0; }
        for (const f of finders) if (f.e > 0) { f.e = f.e < .012 ? 0 : f.e * .982; alive = alive || f.e > 0; }
        draw(); ctx.shadowBlur = 0;
        if (alive) running = requestAnimationFrame(tick);
      }
      const wake = () => { if (!running && !still.matches) running = requestAnimationFrame(tick); };
      function light(px, py, reach, power) {
        for (const d of dots) { const dist = Math.hypot(d.x + .5 - px, d.y + .5 - py); if (dist < reach) d.e = Math.max(d.e, power * (1 - dist / reach) * (.55 + .45 * Math.random())); }
        for (const f of finders) { const dist = Math.hypot(f.x + 3.5 - px, f.y + 3.5 - py); if (dist < reach + 3) f.e = Math.max(f.e, power * .9); }
        wake();
      }
      function fit() {
        const box = qrCanvas.getBoundingClientRect(), ratio = Math.min(devicePixelRatio || 1, 3);
        size = Math.round(box.width * ratio); qrCanvas.width = qrCanvas.height = size; cell = size / N; draw();
      }
      qrCanvas.addEventListener("pointermove", (e) => {
        if (still.matches) return;
        const box = qrCanvas.getBoundingClientRect();
        light((e.clientX - box.left) / box.width * N, (e.clientY - box.top) / box.height * N, 11, 1);
      });
      qrCanvas.addEventListener("pointerdown", (e) => {
        if (still.matches) return;
        const box = qrCanvas.getBoundingClientRect();
        ripples.push({ x: (e.clientX - box.left) / box.width * N, y: (e.clientY - box.top) / box.height * N, t: performance.now(), k: ripples.length + Math.floor(Math.random() * 4) });
        wake();
      });
      /* When the code first scrolls into view a wave crosses it once, so phones (no pointer) see the effect too. */
      function sweep() {
        const began = performance.now();
        const step = (now) => { const p = (now - began) / 1500; if (p > 1.15) return; for (let y = -6; y < N + 6; y += 5) light(p * (N + 12) - 6 - y * .25 + N * .12, y, 8, 1); requestAnimationFrame(step); };
        requestAnimationFrame(step);
      }
      if ("IntersectionObserver" in window) new IntersectionObserver((entries, io) => { if (entries[0].isIntersecting && !seen) { seen = true; io.disconnect(); if (!still.matches) sweep(); } }, { threshold: .6 }).observe(qrCanvas);
      new ResizeObserver(fit).observe(qrCanvas);
      fit();
    }
  }

  /* ---------- Horizontal gallery ----------
     Desktop and phone alike: the section pins and vertical scrolling moves the cards sideways.
     Very short screens and reduced motion: the same row scrolls by swipe. The signal line follows both and can be dragged. */
  const story = main.querySelector(".story");
  if (!story) return;
  const sticky = story.querySelector(".story-sticky"), viewport = story.querySelector(".story-viewport"), track = story.querySelector(".story-track");
  const cards = [...track.children], buttons = [...story.querySelectorAll(".story-nav button")];
  const scrubber = story.querySelector(".story-scrubber"), circuit = story.querySelector(".story-circuit");
  const routePath = story.querySelector(".story-route"), signal = story.querySelector(".story-signal");
  const lerp = (v, a, b) => { const k = v <= a[1] ? 0 : 1; return b[k] + (v - a[k]) / ((a[k + 1] - a[k]) || 1) * (b[k + 1] - b[k]); };
  const pinned = matchMedia("(min-height: 400px)");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  /* Narrow screens: the row moves one whole card at a time, so a card is never left half off the screen. */
  const narrow = matchMedia("(max-width: 899px)");
  const clamp = (v) => Math.min(1, Math.max(0, v));
  const sign = he ? -1 : 1, length = routePath.getTotalLength();
  const marks = [0, length / 2, length], anchors = () => [0, Math.min(stops[2], travel - 1), travel];
  let stops = [], travel = 0, frame = 0, active = -1, dragId = null;

  const mode = () => story.dataset.mode;
  const start = () => story.getBoundingClientRect().top + scrollY - head.offsetHeight;
  function render() {
    frame = 0;
    if (!travel) return;
    const distance = mode() === "scroll" ? scrollY - start() : viewport.scrollLeft * sign;
    const progress = clamp(distance / travel);
    const near = stops.reduce((best, stop, i) => (Math.abs(distance - stop) < Math.abs(distance - stops[best]) ? i : best), 0);
    if (mode() === "scroll") story.style.setProperty("--story-shift", -sign * (narrow.matches ? stops[near] : progress * travel) + "px");
    const point = routePath.getPointAtLength(lerp(progress * travel, anchors(), marks));
    signal.setAttribute("cx", point.x); signal.setAttribute("cy", point.y);
    scrubber.value = Math.round(progress * 100);
    const current = stationOf(stops.reduce((best, stop, i) => (Math.abs(distance - stop) < Math.abs(distance - stops[best]) ? i : best), 0));
    if (current !== active) {
      if (buttons[active]) buttons[active].removeAttribute("aria-current");
      buttons[current].setAttribute("aria-current", "step");
      active = current;
    }
  }
  const schedule = () => { if (!frame) frame = requestAnimationFrame(render); };
  function measure() {
    const next = pinned.matches && !reduced.matches ? "scroll" : "swipe";
    if (mode() !== next) { story.dataset.mode = next; story.style.removeProperty("--story-shift"); viewport.scrollLeft = 0; }
    story.classList.toggle("is-stepped", narrow.matches);
    document.documentElement.style.setProperty("--header", head.offsetHeight + "px");
    travel = Math.max(0, track.scrollWidth - viewport.clientWidth);
    story.style.height = next === "scroll" ? sticky.offsetHeight + travel + "px" : "";
    const first = cards[0].getBoundingClientRect(), centre = (viewport.clientWidth - first.width) / 2, lead = parseFloat(getComputedStyle(track).paddingInlineStart) || 0;
    stops = cards.map((card) => {
      const r = card.getBoundingClientRect();
      const offset = he ? first.right - r.right : r.left - first.left;
      return Math.min(travel, Math.max(0, offset + lead - centre));
    });
    schedule();
  }
  function go(distance, behavior) {
    if (mode() === "scroll") window.scrollTo({ top: start() + distance, behavior });
    else viewport.scrollTo({ left: distance * sign, behavior });
  }
  function scrub(clientX) {
    const x = new DOMPoint(clientX, 0).matrixTransform(circuit.getScreenCTM().inverse()).x;
    let low = 0, high = length;
    for (let i = 0; i < 12; i++) { const mid = (low + high) / 2; if (routePath.getPointAtLength(mid).x < x) low = mid; else high = mid; }
    go(lerp((low + high) / 2, marks, anchors()), "instant");
  }
  scrubber.addEventListener("pointerdown", (e) => {
    if (e.button !== 0 || dragId !== null || !travel) return;
    e.preventDefault(); scrubber.focus({ preventScroll: true }); scrubber.setPointerCapture(e.pointerId);
    dragId = e.pointerId; story.classList.add("is-scrubbing"); scrub(e.clientX);
  });
  scrubber.addEventListener("pointermove", (e) => { if (e.pointerId === dragId) scrub(e.clientX); });
  scrubber.addEventListener("lostpointercapture", (e) => { if (e.pointerId === dragId) { dragId = null; story.classList.remove("is-scrubbing"); } });
  scrubber.addEventListener("input", () => go(scrubber.valueAsNumber / 100 * travel, "instant"));
  buttons.forEach((button, i) => button.addEventListener("click", () => go(stops[stationStart[i]], reduced.matches ? "instant" : "smooth")));
  track.addEventListener("focusin", (e) => {
    const i = cards.indexOf(e.target.closest(".story-card"));
    if (i >= 0 && mode() === "scroll") go(stops[i], "instant");
  });
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", measure, { passive: true });
  viewport.addEventListener("scroll", schedule, { passive: true });
  pinned.addEventListener("change", measure); reduced.addEventListener("change", measure); narrow.addEventListener("change", measure);
  /* Drawings: a card's drawing is drawn in when at least half the card is on screen, and reset once the card has left. */
  if (!reduced.matches && "IntersectionObserver" in window) {
    story.classList.add("is-animated");
    const seen = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.intersectionRatio >= .5) e.target.classList.add("is-drawn"); else if (!e.isIntersecting) e.target.classList.remove("is-drawn");
    }), { threshold: [0, .5] });
    cards.forEach((card) => seen.observe(card));
    /* Each element near the route is lit at the moment the dot reaches it (the dot travels for 6s of an 8s loop, see site.css). */
    story.querySelectorAll(".story-art svg").forEach((svg) => {
      const route = svg.querySelector(".art-route");
      if (!route) return;
      const len = route.getTotalLength(), pts = [];
      for (let i = 0; i <= 60; i++) pts.push(route.getPointAtLength(len * i / 60));
      const finish = svg.querySelector(".art-finish"); finish.setAttribute("cx", pts[60].x); finish.setAttribute("cy", pts[60].y);
      svg.querySelectorAll(".sd, .sf").forEach((el) => {
        const b = el.getBBox();
        if (b.width > 180 && b.height > 150) return;
        const cx = b.x + b.width / 2, cy = b.y + b.height / 2;
        let best = 1e9, at = 0;
        pts.forEach((pt, i) => { const d = Math.hypot(pt.x - cx, pt.y - cy); if (d < best) { best = d; at = i; } });
        if (best < 46) { el.classList.add("art-on"); el.style.setProperty("--t", (at / 60 * 6).toFixed(2) + "s"); }
      });
    });
  }
  new ResizeObserver(measure).observe(sticky);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
  measure();
})();
