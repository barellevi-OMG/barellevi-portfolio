(function translateCase(){
"use strict";
const slug=location.pathname.split("/").filter(Boolean).at(-1);
const m=window.CASE_MODEL;if(!m)return;
const $=s=>document.querySelector(s),$$=s=>Array.from(document.querySelectorAll(s));
const rules={
"proxmox-ha-san":{
intro:"וירטואליזציה, אחסון SAN, ‏Quorum ו־HA — כולל מערך גיבויים ושחזור שהושלם באישור בעל הפרויקט.",
principle:"שרידות אמיתית דורשת יותר מ־Cluster: יש לשלב מחשוב, אחסון, מנגנוני Quorum, גיבויים ואימות התאוששות.",
modes:[["שכבות המערכת","מחשוב, אחסון, קבלת החלטות, גיבוי וניטור ממלאים תפקידים נפרדים בשמירה על רציפות.","host"],["תקלה והתאוששות","התיעוד כולל בדיקות אובדן נתיבים ושרתים, Quorum והתאוששות של מכונה נבחרת.","guest"],["גיבוי ושחזור","בדוח המוקדם הגיבויים עדיין הופיעו כמשימה להשלמה; בהמשך אישר בעל הפרויקט שהעבודה בתחום הסתיימה.","backup"]],
nodes:[
["רשת","נתיבי תקשורת","שרידות מתגים וקישוריות פיזית מחייבת בדיקות נפרדות מבדיקות נפילת שרת."],
["שרתים","סביבת Proxmox","Cluster פעיל תועד בעבר; התרשים הזה הוא המחשה ולא רשימת שרתים אמיתית."],
["Quorum","מנגנון החלטה","התנהגות Quorum נבדקה לפי התיעוד, ללא פרסום ההגדרות של הסביבה."],
["SAN משותף","iSCSI / Multipath","בדיקות נתיבי אחסון תועדו; התמונה של Dell היא דוגמת דגם ולא צילום ההתקנה."],
["ניטור","מדדים ואירועים","ניטור הוא שכבת תשתית חשובה; רמת הכיסוי האמיתית אינה מוצגת באתר."],
["שחזור מכונה","בדיקת HA ממוקדת","תועד שחזור של מכונה נבחרת ולא התחייבות שכל מכונה תתאושש בכל תרחיש."],
["גיבוי ושחזור","הושלם","בעל הפרויקט אישר ב־18.10.2026 שמערך הגיבויים והשחזור הושלם. פרטי Retention ו־RPO/RTO לא אומתו לפרסום."]
],
phases:[["בדיקת המצב","השוואת תכנון קודם למצב התשתית בפועל."],["זיהוי תחומים","הפרדה בין מחשוב, רשת, אחסון, Quorum וגיבויים."],["בדיקה מדורגת","בדיקות כשל, Quorum והתאוששות של מכונה נבחרת."],["השלמת גיבויים","השלמת מערך גיבוי ושחזור, תוך השארת בדיקות רשת ואישור ייצור נפרדים."]],
proof:[["מה תועד","בדיקות Cluster ו־SAN, בדיקות Quorum והתאוששות, וגיבוי ושחזור מוקדמים."],["מה עודכן","בעל הפרויקט אישר בהמשך שכל העבודה בתחום הגיבויים והשחזור הושלמה."],["תרומה אישית","הובלה טכנית, תיאום עבודה פיזית, סקירת תקלות ותכנון בדיקות, כולל שימוש בכלי AI."]]
},
"network-diagnostics":{
intro:"איך מאבחנים אובדן ביצועים: מדידת בסיס, השוואת מסלולים ושחזור התוצאה אחרי שינוי.",
principle:"אבחון מקצועי בודק גבול אחד בכל פעם. שיפור במהירות אינו מוכיח שכל המגבלות נעלמו.",
modes:[["מסלול התעבורה","משווים מדידה ישירה לתוצאה שנמדדה דרך ציוד ביניים, בלי לחשוף מפת רשת אמיתית.","base"],["בידוד התקלה","בוחנים מהירות פורט, Negotiation ורכיבי Gateway על בסיס בדיקות השוואה.","fw"],["אימות התיקון","חוזרים על אותה בדיקה ומודדים את הפער שנותר.","log"]],
nodes:[["מקור","נקודת מוצא","מקור תעבורה לצורך ההמחשה בלבד; אין כאן כתובות או שמות ספקים."],["בדיקה ישירה","מדידת בסיס","מדידה ללא רכיבי ביניים בשיטה ובתנאים שניתן להשוות."],["שכבת קישור","מהירות פורט","בודקים Negotiation, ‏Duplex וחיבור פיזי לפני שמאשימים מדיניות תוכנה."],["שער אבטחה","רכיב ביניים","יש לבודד האם רכיב ביניים הוא אכן צוואר הבקבוק."],["מחשב בדיקה","תוצאה מקצה לקצה","מדידה קבועה מאפשרת להבין מה השתפר ומה עדיין מוגבל."],["תיעוד מדידה","ראיות לפני ואחרי","מתעדים את הניסוי והשינוי בלי לפרסם פרטי גישה."],["שינוי מבוקר","גורם יחיד","מבצעים שינוי הפיך אחד בכל פעם ומשאירים אפשרות חזרה לאחור."]],
phases:[["תצפית","מזהים תופעה שאפשר לשחזר."],["השוואה","בודקים מסלול ישיר ומסלול עם רכיבי ביניים."],["בידוד","בודקים רכיבים והגדרות בזה אחר זה."],["אימות","מודדים מחדש ומתעדים את ההבדל שנותר."]],
proof:[["תהליך מתועד","שיחות קודמות מתארות השוואת מסלולים, אבחון ושיפור מדדים."],["ללא בדיקה חיה","האתר אינו מציג מדידות חדשות או כתובות רשת אמיתיות."],["שיטת עבודה","בדיקות שניתן לחזור עליהן, שינויים הפיכים והפרדה בין השערה להוכחה."]]
},
"security-observability":{
intro:"צינור מידע שמחבר אירועים, נרמול, OpenSearch ו־Grafana להבנת מצב המערכות.",
principle:"דשבורד מועיל רק כשאפשר לסמוך על הנתונים שמגיעים אליו ועל משמעות השדות.",
modes:[["מסלול האירוע","איסוף אירועים ממקורות כלליים, אינדוקס ותצוגה למפעיל.","collect"],["איכות הנתונים","בדיקת זמנים, רמות חומרה וסוגי שדות לפני הסקת מסקנות.","norm"],["תצוגה למפעיל","גרף יפה אינו מעיד לבדו על כיסוי ניטור מלא.","viz"]],
nodes:[["מקורות אירועים","לוגים ומדדים","מקורות כלליים בלבד, ללא פרסום רשימת מערכות מנוטרות אמיתית."],["איסוף","קליטת אירועים","מערכת קליטה מכניסה אירועים לצינור עיבוד הנתונים."],["נרמול","אחידות שדות","זמן, חומרה וסוגי נתונים חייבים להיות עקביים."],["OpenSearch","אחסון וחיפוש","תקינות אינדקס ויכולת חיפוש דורשות בדיקה בנפרד מתצוגות."],["Grafana","דשבורד","הנגשת נתונים למפעיל אינה מוכיחה דיוק מוחלט בזיהוי אירועים."],["בדיקות","אימות שאילתות","משווים אירועי דוגמה לתוצאות השאילתות."],["מפעיל","החלטה אנושית","המטרה היא מידע ברור שמסייע באבחון ובהחלטות תפעוליות."]],
phases:[["איסוף","קליטת לוגים ומקורות אירועים."],["נרמול","אימות סוגי שדות, זמנים וחומרה."],["בדיקה","השוואת אירועים למידע שמופיע באינדקס."],["הצגה","בניית תצוגות Grafana וטופולוגיה מובנת."]],
proof:[["תיעוד קודם","נמצאו חומרי Dashboard, איסוף ובדיקת אירועים."],["לא נבדק מחדש","דווח בעבר על שיפור בבריאות אינדקס; לא בוצעה בדיקה חדשה לצורך האתר."],["מגבלות","כיסוי ניטור, דיוק התראות ומדיניות שמירה אינם מאומתים."]]
}
};
const t=rules[slug];if(!t)return;
const set=(s,v,html=false)=>{const e=$(s);if(!e)return;if(html)e.innerHTML=v;else e.textContent=v;};
document.documentElement.lang="he";document.documentElement.dir="rtl";
set(".skip-link","דילוג לתוכן");set(".case-header nav a:nth-child(1)","כל הפרויקטים");set(".case-header nav a:nth-child(2)","תרשים רשת");set(".case-header nav a:nth-child(3)","← לפורטפוליו");
$$('.case-header nav a').forEach(a=>{if(a.getAttribute("href")==="/#work")a.href="/he/#work";if(a.getAttribute("href")==="/")a.href="/he/";});
const brand=$(".case-logo");if(brand)brand.href="/he/";
const lang=document.createElement("a");lang.href=location.pathname.replace(/^\/he/,"");lang.className="case-language-link";lang.textContent="English";lang.hreflang="en";lang.lang="en";const nav=$(".case-header nav");if(nav)nav.append(lang);
set(".case-hero .case-label","פרויקט עומק / "+slug.replaceAll("-"," / "));
set(".case-intro",t.intro);set(".case-hero-aside",t.principle);
set(".case-main-link","לתרשים המערכת ↘");
set("#architecture .case-head h2","הארכיטקטורה<br><em>במבחן.</em>",true);
set("#architecture .case-head > p","בחר זווית ניתוח ורכיב כדי להבין את תפקידו. התרשים הוא המחשה מקצועית.");
set(".case-map-head span:first-child","מודל מערכת / להמחשה");set(".case-map-head span:last-child","שכבות אינטראקטיביות ◈");
set(".case-map-foot","תרשים להמחשה בלבד — ללא כתובות, שמות שרתים או הרשאות ייצור");
set(".case-detail > .case-label:first-child",'זווית ניתוח / <span id="case-view-count">01</span>',true);
set(".case-detail > .case-label:nth-of-type(2)","רכיב נבחר");
set(".case-hero .case-label",slug==="proxmox-ha-san"?"תשתיות / שרידות וגיבויים":slug==="network-diagnostics"?"תפעול / אבחון רשת":"ניטור / מערכות אבטחה");
for(let i=0;i<3;i++){const b=$$('.case-mode')[i];if(b)b.textContent="0"+(i+1)+" / "+t.modes[i][0];}
t.modes.forEach((x,i)=>{if(m.views[i]){m.views[i][0]=x[0];m.views[i][1]=x[1];}});
t.nodes.forEach((d,i)=>{if(!m.nodes[i])return;[m.nodes[i][1],m.nodes[i][2],m.nodes[i][5]]=d;const n=$$('.case-node')[i];if(n){const str=n.querySelector("strong"),sm=n.querySelector("small");if(str)str.textContent=d[0];if(sm)sm.textContent=d[1];}});
const section=$$(".case-section");
for(const root of section){
const head=root.querySelector(".case-head h2");
if(!head)continue;
const h=head.textContent;
if(h.includes("From question")){head.innerHTML="מהבעיה<br><em>להוכחות.</em>";const p=root.querySelector(".case-head>p");if(p)p.textContent="מתקדמים בשלבים ומבחינים בין תיעוד קודם לבין מה שעוד מחייב אימות.";root.querySelectorAll(".case-phases li").forEach((li,i)=>{if(!t.phases[i])return;const hh=li.querySelector("h3"),pp=li.querySelector("p");if(hh)hh.textContent=t.phases[i][0];if(pp)pp.textContent=t.phases[i][1];});}
if(h.includes("Physical model")){head.innerHTML="דגמים אמיתיים.<br><em>ייחוס ברור.</em>";const p=root.querySelector(".case-head>p");if(p)p.textContent="תמונות של דגמי חומרה מסחריים, לא צילום של המכשירים המותקנים.";root.querySelectorAll(".case-product p").forEach(p=>p.textContent="תמונת דגם בלבד; התצורה שהותקנה בפועל אינה מוצגת.");root.querySelectorAll(".case-product a").forEach(a=>a.textContent="מקור התמונה ↗");}
if(h.includes("Claims with")){head.innerHTML="הטענות<br><em>והמגבלות.</em>";const p=root.querySelector(".case-head>p");if(p)p.textContent="התוצאות מבוססות על התיעוד, אלא אם נערכה בדיקה עצמאית חדשה.";root.querySelectorAll(".case-proof-grid article").forEach((a,i)=>{if(!t.proof[i])return;a.querySelector("h3").textContent=t.proof[i][0];a.querySelector("p").textContent=t.proof[i][1];});const warn=root.querySelector(".case-warning");if(warn)warn.textContent="ארכיטקטורות כלליות בלבד. אין כאן כתובות רשת, סיסמאות או תצורות של סביבה אמיתית. תמונות המוצר הן להמחשה.";}
}
set(".case-footer a","חזרה לעמוד הבית ↑");const footer=$(".case-footer a");if(footer)footer.href="/he/";
if(slug==="proxmox-ha-san"){
set("#backup-recovery .case-head h2","מגיבוי<br><em>לשחזור.</em>",true);
set("#backup-recovery .case-head > p","תחום הגיבויים והשחזור הושלם, בהתאם לעדכון בעל הפרויקט מ־18.10.2026. התרשים עקרוני ואינו צילום מערכת ייצור.");
set(".backup-story-status strong","מערך גיבוי ושחזור — הושלם");set(".backup-story-status > span:last-child","אושר על ידי בעל הפרויקט · 18.10.2026");
const stages=[["הגנה","מזהים את המערכות והנתונים שדורשים הגנה."],["יצירת גיבוי","הקמת תהליך הגיבוי הסתיימה; ההגדרות הפנימיות אינן מפורסמות."],["שמירה","מפרידים בין המקור לחומר השחזור. היעד ומדיניות השמירה אינם מתועדים כאן."],["שחזור","דוח מוקדם תיאר גיבוי ושחזור מבודד, ובעל הפרויקט אישר בהמשך את השלמת התחום."]];
$$(".backup-story-flow article").forEach((a,i)=>{if(!stages[i])return;a.querySelector("h3").textContent=stages[i][0];a.querySelector("p").textContent=stages[i][1];});
const backupProof=[["תיעוד מוקדם","גיבוי ושחזור מבודד הופיעו בדוח מ־18.10.2026."],["עדכון חדש","בעל הפרויקט אישר שהשלמת מערך הגיבויים והשחזור הסתיימה."],["פרטים שאינם מוצגים","מוצר הגיבוי, יעדי האחסון, זמני RPO/RTO ומדיניות השמירה לא אומתו לפרסום."]];
$$(".backup-story-evidence>div").forEach((a,i)=>{if(!backupProof[i])return;a.querySelector("strong").textContent=backupProof[i][0];a.querySelector("p").textContent=backupProof[i][1];});
}
const further=$(".case-section:last-of-type h2");if(further)further.textContent="לקריאה נוספת";
$$('.case-refs a[href="/#work"]').forEach(a=>{a.href="/he/#work";a.textContent="לכל הפרויקטים ↗";});
})();