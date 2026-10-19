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