(function moduleFile(){
"use strict";
const he=window.SITE_LANG==="he",prefix=window.SITE_PREFIX||"",model=window.PORTFOLIO;
const $=s=>document.querySelector(s),$$=s=>Array.from(document.querySelectorAll(s));
const text=(en,iw)=>he?iw:en;
const cats=[
["infrastructure","Infrastructure & systems","תשתיות ומערכות","Virtualization, networks, SAN, devices and reliable systems.","הקמת תשתיות DC, שרתים, רשתות, אחסון, גיבויים ותפעול מערכות."],
["automation","Automation & integrations","אוטומציה ואינטגרציות","Connected services, process automation and useful interfaces.","שירותים מחוברים, אוטומציה וממשקים שימושיים."],
["operations","Technical operations","תפעול ואמינות","Diagnostics, monitoring and dependable recovery.","אבחון תקלות, ניטור, תפעול והתאוששות."],
["leadership","Technical & product leadership","ניהול אנשים ומוצר טכנולוגי","Requirements, coordination, team leadership and product thinking.","אפיון, תיאום צוותים, מנהיגות טכנולוגית ומוצר."]
];
const about='<section class="about-section section-wrap" id="about" aria-labelledby="about-title">'+
'<div class="section-heading"><div><p class="eyebrow">'+text("HOW I THINK AND WORK","איך אני חושב ועובד")+'</p><h2 id="about-title">'+text("Curiosity, ownership.<br><em>And getting things done.</em>","סקרנות, אחריות.<br><em>והיכולת להוציא לפועל.</em>")+'</h2></div></div>'+
'<div class="about-story"><p>'+text("I am drawn to problems that do not fit neatly into one job description. A server that will not come online, a process that keeps breaking, or a good idea that has not yet become a working product — each starts with the same question: what is actually happening here?","אני נמשך דווקא לבעיות שלא נכנסות בקלות להגדרת תפקיד אחת. שרת שלא עולה, תהליך שחוזר ונשבר או רעיון טוב שעדיין לא הפך למוצר עובד — מבחינתי הכול מתחיל באותה שאלה: מה באמת קורה כאן?")+'</p>'+
'<p>'+text("My first instinct is to investigate. I ask questions, test assumptions, get my hands on the equipment or code, and build a clear picture before choosing a solution. I like moving quickly, but I care about knowing what changed, why it worked and how someone else can maintain it tomorrow.","האינסטינקט הראשון שלי הוא לחקור. אני שואל, בודק הנחות, נוגע בציוד או בקוד ומנסה להבין את המערכת לפני שאני בוחר פתרון. אני אוהב להתקדם מהר, אבל חשוב לי לדעת מה השתנה, למה זה עבד ואיך מישהו אחר יוכל לתחזק את זה מחר.")+'</p>'+
'<p>'+text("I bring the same approach to leading people. Good management is not about having every answer; it is about making priorities clear, giving people room to act, removing obstacles and taking responsibility when reality does not follow the plan. I am comfortable switching between the technical detail and the wider operational picture.","אותה גישה מלווה אותי גם בניהול אנשים. ניהול טוב בעיניי הוא לא לדעת הכול, אלא לייצר סדר עדיפויות ברור, לתת לאנשים מרחב פעולה, להסיר חסמים ולקחת אחריות כשהמציאות לא מתנהלת לפי התוכנית. אני מרגיש בנוח לעבור בין הפרט הטכני הקטן לבין התמונה התפעולית הרחבה.")+'</p>'+
'<p>'+text("What connects my projects is not a particular technology. It is a preference for practical solutions, honest evidence, clear communication and systems that keep serving people after the excitement of building them has passed.","מה שמחבר בין הפרויקטים שלי הוא לא טכנולוגיה מסוימת. זו העדפה לפתרונות מעשיים, לראיות ולא להנחות, לתקשורת ישירה ולמערכות שממשיכות לשרת אנשים גם אחרי שההתלהבות מההקמה חולפת.")+'</p></div>'+
'<div class="about-pillars">'+
'<article><span class="about-number">01 / '+text("AS A PRACTITIONER","בעבודה הטכנית")+'</span><h3>'+text("Understand before changing.","להבין לפני שמשנים.")+'</h3><p>'+text("Investigate, isolate, implement and verify — from physical infrastructure to automation and interfaces.","לחקור, לבודד, ליישם ולאמת — מתשתית פיזית ועד אוטומציה וממשקים.")+'</p></article>'+
'<article><span class="about-number">02 / '+text("AS A MANAGER","בניהול תהליכים")+'</span><h3>'+text("Turn ambiguity into a plan.","להפוך עמימות לתוכנית.")+'</h3><p>'+text("Prioritize, clarify ownership, improve processes and handle unexpected changes without losing direction.","לתעדף, להגדיר אחריות, לשפר תהליכים ולהתמודד עם שינויים בלי לאבד כיוון.")+'</p></article>'+
'<article><span class="about-number">03 / '+text("AS A TEAM LEADER","בהובלת צוותים")+'</span><h3>'+text("Make others effective.","לאפשר לאחרים להצליח.")+'</h3><p>'+text("Create trust, delegate decisions, unblock progress and connect development with real operational needs.","לייצר אמון, להאציל החלטות, להסיר חסמים ולחבר בין פיתוח לצרכים בשטח.")+'</p></article>'+
'</div></section>';
const backgroundFacts='<div class="section-wrap" style="padding-top:1rem;padding-bottom:2.5rem" aria-label="'+text("Experience at a glance","הניסיון שלי במספרים")+'">'+
'<div class="section-heading"><div><p class="eyebrow">'+text("SCALE & RESPONSIBILITY","היקף ואחריות")+'</p><h2>'+text("From systems to<br><em>large-scale operations.</em>","מתשתיות מחשוב<br><em>להובלת פעילות רחבת היקף.</em>")+'</h2></div><p>'+text("Selected figures from my professional history, including a digital platform I co-founded and led from March 2017 to March 2019.","נתונים נבחרים מהניסיון המקצועי שלי, כולל פלטפורמה דיגיטלית שהקמתי והובלתי ממרץ 2017 ועד מרץ 2019.")+'</p></div>'+
'<div class="about-pillars">'+
'<article><span class="about-number">1.5M+</span><h3>'+text("Unique active users","משתמשים ייחודיים פעילים")+'</h3><p>'+text("Reported scale of the digital platform during its operation.","היקף הפעילות המדווח של הפלטפורמה הדיגיטלית.")+'</p></article>'+
'<article><span class="about-number">~4,500</span><h3>'+text("Vendors","מוכרים בפלטפורמה")+'</h3><p>'+text("A marketplace requiring coordinated technical and operational workflows.","פעילות מסחר שהצריכה תיאום בין תהליכים טכנולוגיים ותפעוליים.")+'</p></article>'+
'<article><span class="about-number">~150</span><h3>'+text("Managers across the organization","מנהלים במערך הארגוני")+'</h3><p>'+text("Including 11–12 senior managers reporting directly to me.","מתוכם 11–12 מנהלים בכירים בניהול ישיר שלי.")+'</p></article>'+
'<article><span class="about-number">11</span><h3>'+text("Parallel subprojects","תתי־פרויקטים במקביל")+'</h3><p>'+text("Managed across product, technology and operations.","בניהול רוחבי בתחומי מוצר, טכנולוגיה ותפעול.")+'</p></article>'+
'</div><p style="margin-top:1.25rem">'+text("I worked with a development manager and four developers, prioritized implementation and helped deliver an intake automation bot used for over a year. My earlier technical background includes enterprise Windows and SAP systems, monitoring, storage and virtualization, alongside team training and knowledge transfer.","עבדתי עם מנהל פיתוח וארבעה מפתחים, תיעדפתי דרישות והובלתי הטמעה של בוט אוטומציה ששימש יותר משנה. הניסיון הטכני המוקדם שלי כולל מערכות Windows ו־SAP ארגוניות, ניטור, אחסון ווירטואליזציה, לצד הדרכת צוותים ושימור ידע.")+'</p></div>';
const peopleLeadership='<section class="people-leadership section-wrap" id="people-leadership" aria-labelledby="people-leadership-title">'+
'<div class="section-heading"><div><p class="eyebrow">'+text("PEOPLE LEADERSHIP / DELIVERY","ניהול עובדים / הובלת צוותים")+'</p><h2 id="people-leadership-title">'+text("Building teams.<br><em>Not just systems.</em>","לא רק מערכות.<br><em>גם אנשים וצוותים.</em>")+'</h2></div><p>'+text("My management experience includes leading managers and teams, coordinating developers, and turning broad objectives into day-to-day execution.","הניסיון הניהולי שלי כולל הובלת מנהלים וצוותי עובדים, תיאום עבודת מפתחים והפיכת יעדים רחבים לעבודה יומיומית ברורה.")+'</p></div>'+
'<div class="leadership-editorial"><div class="leadership-story"><p>'+text("I have managed work at multiple levels: setting direction with senior managers, helping team leads take ownership, and keeping development and operational teams aligned. The challenge is rarely just assigning tasks. It is creating a structure in which people understand the goal, have the authority to act and know when to escalate a problem.","ניהלתי עבודה בכמה שכבות: קביעת כיוון עם מנהלים בכירים, מתן אחריות למנהלי צוותים וחיבור בין צוותי פיתוח לתפעול. האתגר בעיניי אינו רק חלוקת משימות. הוא ליצור מסגרת שבה אנשים מבינים את המטרה, יכולים לקבל החלטות ויודעים מתי להציף בעיה.")+'</p><p>'+text("Recruitment, onboarding, procedures, delegation, prioritization and handling difficult situations are all part of the same responsibility. I value independent thinking, direct communication and calm decisions under pressure.","גיוס והכשרה, בניית נהלים, האצלת סמכויות, תעדוף והתמודדות עם מצבים מורכבים הם חלק מאותה אחריות. אני מאמין בחשיבה עצמאית, בתקשורת ישירה ובהחלטות שקולות גם תחת לחץ.")+'</p></div>'+
'<div class="leadership-focus"><div><span>01</span><strong>'+text("Lead through managers","ניהול באמצעות מנהלים")+'</strong><p>'+text("Set priorities and build clear ownership across management layers.","הגדרת יעדים, אחריות וסמכויות בין שכבות הניהול.")+'</p></div><div><span>02</span><strong>'+text("Develop people and process","פיתוח אנשים ותהליכים")+'</strong><p>'+text("Recruitment, training, delegation, procedures and feedback.","גיוס, הכשרה, האצלת סמכויות, נהלים ומשוב.")+'</p></div><div><span>03</span><strong>'+text("Connect teams to delivery","חיבור צוותים לביצוע")+'</strong><p>'+text("Coordinate technical teams, resolve blockers and respond to change.","תיאום צוותים טכנולוגיים, הסרת חסמים והתמודדות עם שינויים.")+'</p></div></div></div></section>';
const careerRoles=[
["2026 — PRESENT","2026 — היום","Systems Administrator & Advanced Solutions Specialist","מנהל מערכות ופתרונות מתקדמים","Enterprise infrastructure, virtualization, networking, storage, customer integrations and technical delivery.","תשתיות ארגוניות, וירטואליזציה, תקשורת, אחסון, אינטגרציות ומסירת פתרונות טכנולוגיים."],
["2025","2025","Software Implementation & Integration","הטמעת מערכות ואינטגרציה","Customer-facing software implementation, troubleshooting and practical user training.","הטמעת תוכנה אצל לקוחות, פתרון תקלות, הדרכה והתאמת תהליכי עבודה."],
["2017 — 2019","2017 — 2019","Co-founder, Technology & Operations Lead","מייסד שותף ומוביל טכנולוגיה ותפעול","Built operational processes, led management layers and coordinated product requirements with a development team.","בניית תהליכים תפעוליים, הובלת שכבות ניהול ותיאום דרישות מוצר עם צוות פיתוח."],
["2016 — 2017","2016 — 2017","NOC & Systems Administration","NOC וניהול מערכות","Production monitoring, Windows infrastructure, enterprise storage support and incident coordination.","ניטור מערכות ייצור, תשתיות Windows, תמיכה באחסון ארגוני ותיאום טיפול בתקלות."],
["2015 — 2016","2015 — 2016","Junior Systems Administration & Helpdesk","ניהול מערכות ותמיכה טכנית","Windows and SAP environments, physical servers and day-to-day enterprise support.","סביבות Windows ו־SAP, שרתים פיזיים ותמיכה טכנית ארגונית."],
["2012 — 2015","2012 — 2015","Systems Team & Training Leadership","הובלת צוות מערכות והדרכה","Military IT infrastructure, systems operations, knowledge transfer and training.","תשתיות מחשוב צבאיות, תפעול מערכות, שימור ידע והדרכת צוותים."]
];
const career='<section class="section-wrap" id="career" aria-labelledby="career-title" style="padding-top:3rem;padding-bottom:3rem">'+
'<div class="section-heading"><div><p class="eyebrow">'+text("PROFESSIONAL BACKGROUND","רקע מקצועי")+'</p><h2 id="career-title">'+text("Experience across<br><em>systems and people.</em>","ניסיון שמחבר<br><em>מערכות ואנשים.</em>")+'</h2></div><p>'+text("A concise timeline of hands-on infrastructure, customer delivery and technology leadership.","מסלול מקצועי שמשלב תשתיות מעשיות, עבודה מול לקוחות והובלה טכנולוגית.")+'</p></div>'+
'<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:1rem">'+careerRoles.map(r=>'<article style="border:1px solid var(--line,rgba(130,130,130,.25));border-radius:12px;padding:1.35rem"><p class="eyebrow">'+(he?r[1]:r[0])+'</p><h3 style="margin:.5rem 0 .65rem">'+(he?r[3]:r[2])+'</h3><p style="line-height:1.7">'+(he?r[5]:r[4])+'</p></article>').join('')+'</div>'+
'<p style="margin-top:1.4rem">'+text("Based on my professional CVs. Selected organizations and sensitive project details are intentionally omitted.","מבוסס על קורות החיים המקצועיים שלי. שמות ארגונים ופרטי פרויקטים רגישים הושמטו במכוון.")+'</p>'+
'<p>'+text("Based in Jerusalem, Israel · ","ירושלים, ישראל · ")+'<a href="mailto:Barellevi@gmail.com">Barellevi@gmail.com</a> · <a href="tel:+972527049003" dir="ltr">+972 52 704 9003</a></p></section>';
const category='<section class="category-overview section-wrap" id="categories" aria-labelledby="categories-title">'+
'<div class="section-heading"><div><p class="eyebrow">'+text("FOUR DISCIPLINES","ארבעה תחומי ליבה")+'</p><h2 id="categories-title">'+text("Four perspectives.<br><em>One portfolio.</em>","ארבעה תחומים.<br><em>גישה אחת.</em>")+'</h2></div><p>'+text("Every project has one primary category. Job-specific pages curate relevant evidence across disciplines.","לכל פרויקט קטגוריה ראשית אחת; דפי המשרות בוחרים עבודות רלוונטיות מכל התחומים.")+'</p></div>'+
'<div class="category-overview-grid">'+cats.map((c,i)=>'<a class="category-overview-link" href="'+prefix+'/'+c[0]+'/"><span class="cat-index">0'+(i+1)+' / '+model.projects.filter(p=>p.primaryCategory===c[0]).length+' '+text("PROJECTS","פרויקטים")+'</span><span class="cat-mark" aria-hidden="true">'+["▦","⌘","↳","◇"][i]+'</span><strong>'+(he?c[2]:c[1])+'</strong><small>'+(he?c[4]:c[3])+'</small><span class="cat-arrow">↗</span></a>').join("")+'</div></section>';
const jobs=Object.entries(window.SITE_JOB_PAGES).map(([slug,j],i)=>'<article class="job-card"><a href="'+prefix+'/for/'+slug+'/"><span>'+text("TARGETED ROLE / 0","מסלול משרה / 0")+(i+1)+'</span><strong>'+(he?j.he:j.title)+'</strong><small>'+(he?j.introHe:j.intro)+'</small></a><button type="button" data-job-copy="'+prefix+'/for/'+slug+'/" aria-label="'+text("Copy job-specific URL","העתקת קישור משרה")+'">⧉ '+text("Copy link","העתקת קישור")+'</button></article>').join("");
const jobSection='<section class="job-links section-wrap" id="job-links" aria-labelledby="job-title"><div class="section-heading"><div><p class="eyebrow">'+text("SHAREABLE CAREER ROUTES","קישורים ייעודיים למשרות")+'</p><h2 id="job-title">'+text("Different roles.<br><em>Relevant evidence.</em>","כל משרה.<br><em>העבודות הרלוונטיות.</em>")+'</h2></div><p>'+text("Send a dedicated link for each job. Each URL opens on its own and highlights a curated selection of projects.","שתף כתובת נפרדת לכל משרה. כל קישור פותח עמוד עצמאי ובו פרויקטים שנבחרו לפי תחום העיסוק.")+'</p></div><div class="job-grid">'+jobs+'</div><p id="job-copy-feedback" class="job-copy-feedback" role="status" aria-live="polite"></p></section>';
const hero=$(".hero"),work=$("#work"),approach=$("#approach");
if(hero)hero.insertAdjacentHTML("afterend",about);
const aboutFactsAnchor=$("#about");if(aboutFactsAnchor)aboutFactsAnchor.insertAdjacentHTML("beforeend",backgroundFacts);
const aboutNode=$("#about");if(aboutNode)aboutNode.insertAdjacentHTML("afterend",peopleLeadership);
const leadershipNode=$("#people-leadership");if(leadershipNode)leadershipNode.insertAdjacentHTML("afterend",career);
if(aboutNode)aboutNode.insertAdjacentHTML("beforebegin",category);
if(approach)approach.insertAdjacentHTML("afterend",jobSection);
const nav=$(".header-nav");
if(nav){
  nav.replaceChildren();
  for(const [href,en,iw] of [["#about","About","עליי"],["#people-leadership","Management","ניהול"],["#career","Experience","ניסיון מקצועי"],["#categories","Four disciplines, one person","ארבעה תחומים, אדם אחד"],["#work","Projects","פרויקטים"]]){
    const link=document.createElement("a");link.href=href;link.textContent=text(en,iw);nav.append(link);
  }
}

/* Recruitment-first editorial layout: preserve all underlying content for deeper pages. */
const route=location.pathname.replace(/^\/he(?=\/|$)/,"")||"/";
const isHome=route==="/";
const isArchive=route==="/projects/"||route==="/projects";
const isRole=route.startsWith("/for/");
document.body.classList.add(isHome?"recruiter-home":isArchive?"portfolio-archive":isRole?"recruiter-role":"portfolio-category");
const actionbar='<div class="recruiter-identity"><strong>'+text("Bar-El Levi","בר־אל לוי")+'</strong><span>'+text("Infrastructure · Automation · Technology & Product Leadership","תשתיות · אוטומציה · הובלה טכנולוגית ומוצר")+'</span><small>'+text("Jerusalem, Israel","ירושלים, ישראל")+'</small></div>';
const heroCopy=$(".hero-copy");
if(heroCopy){
 heroCopy.insertAdjacentHTML("afterbegin",actionbar);
 const cta=$(".hero-cta");
 if(cta)cta.innerHTML='<a class="button-primary" href="mailto:Barellevi@gmail.com">'+text("Contact me","יצירת קשר")+' ↗</a><a class="button-text" href="'+prefix+'/resume/">'+text("One-page resume","תקציר קורות חיים")+' ↓</a><a class="button-text" href="'+prefix+'/projects/">'+text("Explore projects","לכל הפרויקטים")+' ↗</a>';
}
const headerContact=$(".header-actions .contact-link");if(headerContact)headerContact.textContent=text("Contact ↗","יצירת קשר ↗");
const floating=$(".floating-label-top");if(floating)floating.textContent=text("ILLUSTRATIVE SYSTEMS VIEW","המחשת מערכות");
const heroCounter=$(".hero-index");if(heroCounter)heroCounter.remove();
const workBlock=$("#work");const careerBlock=$("#career");const aboutBlock=$("#about");
if(isHome||isRole){
 if(workBlock&&hero)hero.insertAdjacentElement("afterend",workBlock);
 if(careerBlock&&workBlock)workBlock.insertAdjacentElement("afterend",careerBlock);
 if(aboutBlock&&careerBlock)careerBlock.insertAdjacentElement("afterend",aboutBlock);
 const workHead=$("#work .section-heading h2");
 if(workHead)workHead.innerHTML=text("Selected proof.<br><em>Real work.</em>","עבודות נבחרות.<br><em>עשייה מוכחת.</em>");
 const workDesc=$("#work .section-heading > p");
 if(workDesc)workDesc.textContent=text("Three examples first. Explore the full portfolio for deeper technical detail.","שלוש עבודות מובילות תחילה. פירוט נוסף זמין בארכיון הפרויקטים.");
 if(workBlock)workBlock.insertAdjacentHTML("beforeend",'<p class="portfolio-more"><a class="button-text" href="'+prefix+'/projects/">'+text("View all projects and categories ↗","לכל הפרויקטים והתחומים ↗")+'</a></p>');
}
if(isArchive){
 const h=$("#work .section-heading h2");if(h)h.textContent=text("Project archive","כל הפרויקטים");
 const d=$("#work .section-heading > p");if(d)d.textContent=text("Browse the full portfolio. Select one area or explore everything, then open an individual project.","כל 17 הפרויקטים במקום אחד. אפשר לסנן לפי תחום ולפתוח פרויקט מסוים.");
}
const navToggle=document.createElement("button");navToggle.type="button";navToggle.className="mobile-menu-toggle";navToggle.textContent=text("Menu ☰","תפריט ☰");navToggle.setAttribute("aria-expanded","false");navToggle.setAttribute("aria-controls","site-mobile-nav");
const currentNav=$(".header-nav");if(currentNav){currentNav.id="site-mobile-nav";currentNav.insertAdjacentHTML("beforeend",'<a href="mailto:Barellevi@gmail.com">'+text("Contact","יצירת קשר")+'</a>');currentNav.parentElement.insertBefore(navToggle,currentNav);navToggle.addEventListener("click",()=>{const open=navToggle.getAttribute("aria-expanded")!=="true";navToggle.setAttribute("aria-expanded",String(open));currentNav.classList.toggle("mobile-open",open)});currentNav.addEventListener("click",()=>{currentNav.classList.remove("mobile-open");navToggle.setAttribute("aria-expanded","false")});}

const holder=$(".header-actions");
if(holder){
const a=document.createElement("a");const own=location.pathname.replace(/^\/he(?=\/|$)/,"")||"/";a.href=he?own:"/he"+(own.startsWith("/")?own:"/"+own);
a.className="lang-switch";a.textContent=he?"English":"עברית";a.lang=he?"en":"he";a.hreflang=he?"en":"he";a.setAttribute("aria-label",text("Switch language to Hebrew","מעבר לגרסה באנגלית"));holder.prepend(a);
}
$$("[data-job-copy]").forEach(button=>button.addEventListener("click",async()=>{
const link=new URL(button.dataset.jobCopy,location.origin).href;
try{await navigator.clipboard.writeText(link);$("#job-copy-feedback").textContent=text("Link copied: ","הקישור הועתק: ")+link;}
catch{$("#job-copy-feedback").textContent=link;}
}));
})();