(function moduleFile(){
"use strict";
const he=window.SITE_LANG==="he",prefix=window.SITE_PREFIX||"",model=window.PORTFOLIO;
const $=s=>document.querySelector(s),$$=s=>Array.from(document.querySelectorAll(s));
const text=(en,iw)=>he?iw:en;
const cats=[
["infrastructure","Infrastructure & systems","תשתיות ומערכות","Virtualization, networks, SAN, devices and reliable systems.","וירטואליזציה, רשתות, SAN, חומרה ומערכות אמינות."],
["automation","Automation & integrations","אוטומציה ואינטגרציות","Connected services, process automation and useful interfaces.","שירותים מחוברים, אוטומציה וממשקים שימושיים."],
["operations","Technical operations","תפעול ואמינות","Diagnostics, monitoring and dependable recovery.","אבחון תקלות, ניטור, תפעול והתאוששות."],
["leadership","Technical & product leadership","ניהול טכנולוגי ומוצר","Requirements, coordination, team leadership and product thinking.","אפיון, תיאום צוותים, מנהיגות טכנולוגית ומוצר."]
];
const about='<section class="about-section section-wrap" id="about" aria-labelledby="about-title">'+
'<div class="section-heading"><div><p class="eyebrow">'+text("THE PERSON BEHIND THE SYSTEMS","הצד האנושי של המערכות")+'</p><h2 id="about-title">'+text("A systems person.<br><em>A people person.</em>","איש טכנולוגיה.<br><em>איש של אנשים.</em>")+'</h2></div><p>'+text("I work across hands-on technology, operational management and team delivery. The common thread is taking responsibility from diagnosis to results.","אני פועל בחיבור בין עשייה טכנולוגית בשטח, ניהול תהליכים והובלת אנשים — מתוך אחריות על הדרך ועל התוצאה.")+'</p></div>'+
'<div class="about-pillars">'+
'<article><span class="about-number">01 / '+text("INDIVIDUAL CONTRIBUTOR","כעובד מקצועי")+'</span><h3>'+text("Hands-on problem solver.","פותר בעיות מהשטח.")+'</h3><p>'+text("I troubleshoot infrastructure and networking, implement software and integrations, learn unfamiliar systems and document work for reliable handoff.","אני מאבחן תקלות בתשתיות ורשתות, מטמיע תוכנות ואינטגרציות, לומד מערכות חדשות ומתעד את העבודה כדי שאחרים יוכלו להמשיך ממני.")+'</p><div class="about-tags"><span>Infrastructure</span><span>Implementation</span><span>Diagnostics</span></div></article>'+
'<article><span class="about-number">02 / '+text("MANAGEMENT","כמנהל")+'</span><h3>'+text("From decisions to delivery.","מהחלטות לביצוע.")+'</h3><p>'+text("In earlier management roles I handled prioritization, operating procedures, training and crisis response, connecting business requirements with practical implementation.","בתפקידי ניהול קודמים עסקתי בתעדוף, נהלים, הכשרות וניהול משברים, וחיברתי בין צרכים עסקיים לבין יישום מעשי.")+'</p><div class="about-tags"><span>'+text("Prioritization","תעדוף")+'</span><span>'+text("Process design","בניית תהליכים")+'</span><span>'+text("Accountability","אחריות")+'</span></div></article>'+
'<article><span class="about-number">03 / '+text("TEAM LEADERSHIP","כמוביל צוותים")+'</span><h3>'+text("People make systems work.","צוותים שמייצרים תוצאה.")+'</h3><p>'+text("I previously led an operation with 11–12 senior managers and coordinated development priorities with a development manager and four developers. I focus on clear ownership and removing blockers.","בעבר הובלתי מערך עם 11–12 מנהלים בכירים ותיאמתי תעדוף פיתוח עם מנהל פיתוח וצוות של ארבעה מפתחים. הדגש שלי הוא אחריות ברורה והסרת חסמים.")+'</p><div class="about-tags"><span>'+text("Coordination","תיאום")+'</span><span>'+text("Delegation","האצלה")+'</span><span>'+text("Execution","ביצוע")+'</span></div></article>'+
'</div><p class="about-clarifier">'+text("These management figures refer to a previous operation, not my current employer.","היקפי הניהול מתייחסים לתפקיד קודם, ולא למעסיק הנוכחי.")+'</p></section>';
const category='<section class="category-overview section-wrap" id="categories" aria-labelledby="categories-title">'+
'<div class="section-heading"><div><p class="eyebrow">'+text("FOUR DISCIPLINES","ארבעה תחומי ליבה")+'</p><h2 id="categories-title">'+text("Four perspectives.<br><em>One portfolio.</em>","ארבע זוויות.<br><em>פורטפוליו אחד.</em>")+'</h2></div><p>'+text("Every project has one primary category. Job-specific pages curate relevant evidence across disciplines.","לכל פרויקט קטגוריה ראשית אחת; דפי המשרות בוחרים עבודות רלוונטיות מכל התחומים.")+'</p></div>'+
'<div class="category-overview-grid">'+cats.map((c,i)=>'<a class="category-overview-link" href="'+prefix+'/'+c[0]+'/"><span class="cat-index">0'+(i+1)+' / '+model.projects.filter(p=>p.primaryCategory===c[0]).length+' '+text("PROJECTS","פרויקטים")+'</span><span class="cat-mark" aria-hidden="true">'+["▦","⌘","↳","◇"][i]+'</span><strong>'+(he?c[2]:c[1])+'</strong><small>'+(he?c[4]:c[3])+'</small><span class="cat-arrow">↗</span></a>').join("")+'</div></section>';
const jobs=Object.entries(window.SITE_JOB_PAGES).map(([slug,j],i)=>'<article class="job-card"><a href="'+prefix+'/for/'+slug+'/"><span>'+text("TARGETED ROLE / 0","מסלול משרה / 0")+(i+1)+'</span><strong>'+(he?j.he:j.title)+'</strong><small>'+(he?j.introHe:j.intro)+'</small></a><button type="button" data-job-copy="'+prefix+'/for/'+slug+'/" aria-label="'+text("Copy job-specific URL","העתקת קישור משרה")+'">⧉ '+text("Copy link","העתקת קישור")+'</button></article>').join("");
const jobSection='<section class="job-links section-wrap" id="job-links" aria-labelledby="job-title"><div class="section-heading"><div><p class="eyebrow">'+text("SHAREABLE CAREER ROUTES","קישורים ייעודיים למשרות")+'</p><h2 id="job-title">'+text("Different roles.<br><em>Relevant evidence.</em>","כל משרה.<br><em>העבודות הרלוונטיות.</em>")+'</h2></div><p>'+text("Send a dedicated link for each job. Each URL opens on its own and highlights a curated selection of projects.","שתף כתובת נפרדת לכל משרה. כל קישור פותח עמוד עצמאי ובו פרויקטים שנבחרו לפי תחום העיסוק.")+'</p></div><div class="job-grid">'+jobs+'</div><p id="job-copy-feedback" class="job-copy-feedback" role="status" aria-live="polite"></p></section>';
const hero=$(".hero"),work=$("#work"),approach=$("#approach");
if(hero)hero.insertAdjacentHTML("afterend",about);
if(work)work.insertAdjacentHTML("beforebegin",category);
if(approach)approach.insertAdjacentHTML("afterend",jobSection);
const nav=$(".header-nav");
if(nav){
for(const sel of ['a[href="#components"]','a[href="#lab"]','a[href="#approach"]','a[href="#hardware"]','a[href="#field-studies"]']) nav.querySelector(sel)?.remove();
const a=document.createElement("a");a.href="#categories";a.textContent=text("Four areas","ארבע קטגוריות");nav.prepend(a);
for(const [href,en,iw] of [["#about","About","עליי"],["#job-links","Roles","משרות"]]){const link=document.createElement("a");link.href=href;link.textContent=text(en,iw);nav.append(link);}
}
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