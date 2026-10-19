(function heUI(){
"use strict";
if(window.SITE_LANG!=="he")return;
const $=s=>document.querySelector(s),$$=s=>Array.from(document.querySelectorAll(s));
const set=(sel,txt,html=false)=>{const el=$(sel);if(!el)return;if(html)el.innerHTML=txt;else el.textContent=txt;};
const changes=[
[".skip-link","דילוג לתוכן"],['.header-nav a[href="#work"]',"פרויקטים"],
['.header-nav a[href="#components"]',"רכיבים"],['.header-nav a[href="#lab"]',"מעבדת מערכות"],
['.header-nav a[href="#approach"]',"הגישה שלי"],['.header-nav a[href="#field-studies"]',"מקרי בוחן"],
['.header-nav a[href="#hardware"]',"חומרה מזוהה"],
['.header-nav a[href="/examples/network-design/"]',"תרשים רשת"],[".availability","פתוח להזדמנויות מקצועיות"],
[".hero-cta .button-primary","לצפייה בפרויקטים ↗"],[".hero-cta .button-text","איך אני עובד ↓"],
[".work-section .section-heading .eyebrow","01 / פרויקטים נבחרים"],
[".work-section .section-heading > p","פרויקטים בארבעה אפיקים מקצועיים, עם אפשרות למסלולים ממוקדים לפי משרה."],
[".work-section .section-heading h2","ניסיון מגוון.<br><em>ארבעה אפיקים.</em>",true],
['.track-tab[data-track="all"]',"00 / הכול"],['.track-tab[data-track="infrastructure"]',"01 / תשתיות"],
['.track-tab[data-track="automation"]',"02 / אוטומציה"],['.track-tab[data-track="operations"]',"03 / תפעול"],
['.track-tab[data-track="leadership"]',"04 / ניהול"],
[".section-footnote","הארכיטקטורות והתמונות משמשות להמחשה בלבד. אין בהן כתובות גישה או תרשים רשת ארגוני אמיתי."],
[".components-section .section-heading .eyebrow","02 / בתוך המערכת"],
[".components-section .section-heading h2","העבודה נמצאת<br><em>בפרטים.</em>",true],
[".components-section .section-heading > p","ארבע שכבות פיזיות ולוגיות שמפרידות בין מערכת שנראית טוב לבין מערכת שבאמת פועלת."],
['.component-tab[data-component="compute"] .component-name',"שרתים ועיבוד <small>הבסיס הפיזי</small>",true],
['.component-tab[data-component="network"] .component-name',"רשתות <small>מה שמחבר הכול</small>",true],
['.component-tab[data-component="edge"] .component-name',"מכשירי קצה <small>חומרה פוגשת תוכנה</small>",true],
['.component-tab[data-component="interface"] .component-name',"ממשק מפעיל <small>החיבור לאנשים</small>",true],
[".lab-copy .eyebrow","03 / מעבדת מערכות"],
[".lab-copy h2","עוקבים אחרי<br><em>האות.</em>",true],
[".lab-copy > p:not(.eyebrow):not(.lab-disclaimer)","הדגמה אינטראקטיבית של זיהוי סימפטום, בידוד גורם ובדיקת התוצאה."],
[".lab-disclaimer","סימולציה להמחשה בלבד; אין חיבור לציוד או לרשת ארגונית בפועל."],
[".blueprint-inline-link","לתרשים הרשת האינטראקטיבי ↗"],
['.lab-step[data-step="0"]',"01 / תצפית"],['.lab-step[data-step="1"]',"02 / בידוד"],['.lab-step[data-step="2"]',"03 / אימות"],
[".approach-section .section-heading .eyebrow","04 / שיטת העבודה שלי"],
[".approach-section .section-heading h2","חשיבה מערכתית.<br><em>אחריות אנושית.</em>",true],
[".approach-section .section-heading > p","אבחון מדויק, ארכיטקטורה מחושבת, התקדמות מהירה ואחריות על התוצאה. הטכנולוגיה משתנה; שיטת העבודה נשארת."],
[".principle:nth-child(1) h3","להבין את המערכת."],[".principle:nth-child(1) p","לזהות מגבלות ותלויות לפני שמציעים פתרון."],
[".principle:nth-child(2) h3","לתכנן לעולם האמיתי."],[".principle:nth-child(2) p","ממשקים ברורים, תהליכים אמינים ויכולת התאוששות כשמשהו משתבש."],
[".principle:nth-child(3) h3","לבדוק, לתעד ולשפר."],[".principle:nth-child(3) p","למדוד מה עובד ולתעד החלטות כך שהידע יישאר בצוות."],
[".closing-section .eyebrow","05 / השיחה הבאה"],
[".closing-section h2","בונים דברים מורכבים.<br><em>גורמים להם לעבוד.</em>",true],
[".closing-section > p","תשתיות, אוטומציה, תפעול או ניהול טכנולוגי — אשמח לשמוע על האתגר הבא."],
[".closing-section .button-primary","לפרופיל GitHub ↗"],
[".site-footer > span:nth-child(2)","נבנה מתוך סקרנות ותשומת לב · © 2026"],
[".site-footer > a:last-child","חזרה לראש העמוד ↑"],
["#field-studies .section-heading .eyebrow","מקרי בוחן אינטראקטיביים"],
["#field-studies .section-heading h2","מעבר לרשימת<br><em>הפרויקטים.</em>",true],
["#field-studies .section-heading > p","דוגמאות של מערכות, אבחון ותכנון, עם הבחנה בין מה שנבדק לבין מה שעדיין דורש אימות."],
[".hardware-section .section-heading .eyebrow","חומרה מזוהה / תמונות מוצר"],
[".hardware-section .section-heading h2","דגמים<br><em>אמיתיים.</em>",true],
[".hardware-section .section-heading > p","תמונות יצרן של דגמים מזוהים, ולא צילומים של המכשירים המותקנים אצל המעסיק."]
];
for(const [selector,value,html] of changes)set(selector,value,Boolean(html));
const translateGrid=()=>{
$$('.project-topline span:last-child').forEach(el=>{if(el.textContent.includes("VIEW"))el.textContent="הצגת פרויקט ↗"});
$$('.project-card .project-click').forEach(el=>{if(el.hasAttribute("aria-label"))el.setAttribute("aria-label","לפרטי הפרויקט")});
$$('.project-category-head small').forEach(el=>{el.textContent=el.textContent.replace("PROJECTS","פרויקטים");});
};
const caseNames=[["וירטואליזציה, SAN ו־HA","עבודה עם Cluster, ‏SAN, ‏Quorum וגיבויים שהושלמו, לצד בדיקות התאוששות."],["אבחון תקלות ברשת","מדידה, השוואה, בידוד צוואר בקבוק ובדיקה חוזרת לאחר שינוי."],["ניטור ואבטחה","מ־Wazuh ו־OpenSearch ועד לתצוגת Grafana שמסייעת למפעיל."]];
$$(".featured-study").forEach((el,i)=>{
 const d=caseNames[i];if(!d)return;
 const h=el.querySelector("h3"),p=el.querySelector("p"),a=el.querySelector(".featured-study-link");
 if(h)h.textContent=d[0];if(p)p.textContent=d[1];if(a)a.textContent="למקרה הבוחן ↗";
});
$$(".model-sources a").forEach((a,i)=>a.textContent=i%2===0?"מפרט יצרן ↗":"מקור התמונה ↗");
$$(".model-photo-index").forEach((a,i)=>a.textContent="דגם מזוהה / 0"+(i+1));
const steps=[
["01 / תצפית","סימפטום לדוגמה","מתחילים ממדידה של הבעיה. משווים תוצאות לאורך המסלול לפני שמשנים הגדרות."],
["02 / בידוד","השוואה למסלול המקור","בודקים בנפרד את קו ההזנה. ההבדל מסייע לאתר את הרכיב שבין המקור לתוצאה."],
["03 / אימות","בדיקה חוזרת מקצה לקצה","משנים גורם אחד בכל פעם ומבצעים את אותה מדידה שוב."]
];
const labs=$$("#lab-steps button");
labs.forEach((el,i)=>el.addEventListener("click",()=>queueMicrotask(()=>{
 const s=steps[i];set("#lab-phase",s[0]);set("#lab-metric-label",s[1]);set("#lab-explanation",s[2]);
})));
set("#lab-phase",steps[0][0]);set("#lab-metric-label",steps[0][1]);set("#lab-explanation",steps[0][2]);
const grid=$("#project-grid");
if(grid)new MutationObserver(translateGrid).observe(grid,{childList:true,subtree:false});
translateGrid();
// Keep in-depth technical links in the selected site language.
$$('a[href^="/cases/"],a[href^="/examples/network-design/"]').forEach(a=>a.setAttribute("href","/he"+a.getAttribute("href")));
const dialog=$("#project-dialog");
if(dialog)new MutationObserver(()=>{
 const body=$("#dialog-body");if(!body)return;
 const a=body.querySelector(".modal-deep-link");if(a&&a.textContent.includes("EXPLORE"))a.textContent="למקרה הבוחן המלא ↗";
 const head=body.querySelector(".review-notice span");if(head&&head.textContent.includes("ARCHITECTURAL"))head.textContent="● סקירה אדריכלית";
}).observe(dialog,{childList:true,subtree:true});
})();