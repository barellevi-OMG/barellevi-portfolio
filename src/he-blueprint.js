(function translatedBlueprint(){
"use strict";
const $=s=>document.querySelector(s),$$=s=>Array.from(document.querySelectorAll(s));
const put=(sel,s,html=false)=>{const el=$(sel);if(!el)return;if(html)el.innerHTML=s;else el.textContent=s;};
document.documentElement.lang="he";document.documentElement.dir="rtl";
put(".bp-header a:last-child","← חזרה לפורטפוליו");const home=$(".bp-header a:last-child");if(home)home.href="/he/";
const nav=$(".bp-header");if(nav){const link=document.createElement("a");link.href="/examples/network-design/";link.textContent="English";link.lang="en";link.hreflang="en";nav.append(link);}
put(".bp-eyebrow","01 / דוגמה אינטראקטיבית");
put(".bp-intro h1","מערכות הן<br><em>קשרים.</em>",true);
put(".bp-intro p","הרשת היא יותר מאוסף מכשירים. בחר רכיב או זווית ניתוח כדי להכיר גבולות אבטחה, שרידות ונתיבי התאוששות. זהו תרשים רעיוני — לא מפת הרשת של מקום העבודה.");
put(".bp-modebar .bp-hint","בחר רכיב לחקירה ↗");
const modes={topology:["01 / מבנה הרשת","תרשים ארכיטקטורה כללי","קשר בין רכיבים ונתיבי תעבורה"],
zones:["02 / אזורי אבטחה","גבולות אמון","חלוקה רעיונית לאזורים — לא מדיניות Firewall בפועל"],
failover:["03 / התאוששות","תרחישי שרידות","המחשת שיקולי התאוששות — לא אישור HA בסביבת ייצור"]};
const data={
internet:["מקור חיצוני","גבול הרשת","נקודת החיבור החיצונית. בדיקות תקשורת משוות מדידה ישירה לתוצאה אחרי רכיבי אבטחה ומיתוג.",["גבול אמון","מדידת בסיס","השוואה"]],
firewall:["שער אבטחה","בקרת גישה","גבולות אבטחה מסדירים תעבורה מותרת. התרשים לא חושף חוקי גישה או פרטי ניהול.",["אזורי אבטחה","בדיקת מדיניות","אבחון"]],
switch:["מיתוג מרכזי","החיבור בין שכבות","מתגים מחברים מחשוב, אחסון ורשתות ניהול. שרידות דורשת גם מבנה פיזי ובדיקות כשל.",["קישוריות","שרידות","בדיקת פורטים"]],
compute:["שרתים ווירטואליזציה","מחשוב","אשכול מכונות מארח שירותים. יש להבחין בין זמינות שרת לבין התאוששות של שירות.",["מחזור חיי שרת","Quorum","בדיקות HA"]],
storage:["Dell EMC SCv3020 · אחסון","SAN משותף","תמונת דגם של Dell EMC SCv3020 מייצגת את שכבת האחסון. תכנון שריד כולל בדיקות נתיבים ובקרי אחסון.",["Dell EMC SCv3020","SAN","Multipath"]],
backup:["גיבוי והתאוששות","נתיב שחזור","גיבויים ושחזור משמשים שכבה נפרדת ממנגנוני HA. תחום הגיבויים בפרויקט הושלם לפי עדכון בעל הפרויקט.",["גיבוי","שחזור","הפרדת תפקידים"]],
monitor:["ניטור","בריאות ואירועים","איסוף מדדים ואירועים והצגתם למפעיל. זמינות Dashboard אינה מוכיחה כיסוי ניטור מלא.",["איסוף אירועים","דשבורדים","איכות התראות"]]
};
function selected(){
return $$(".bp-node").find(n=>n.classList.contains("active"))?.dataset.node||"switch";
}
function renderNode(id){
const a=data[id];if(!a)return;
put("#bp-title",a[0]);put("#bp-desc",a[2]);
const chips=$("#bp-tags");if(chips){chips.replaceChildren(...a[3].map(x=>{const item=document.createElement("span");item.className="bp-chip";item.textContent=x;return item;}));}
put("#bp-footer",modes[$("#bp-map")?.dataset.mode||"topology"][2]);
}
function renderMode(){
const mode=$("#bp-map")?.dataset.mode||"topology",record=modes[mode];
$$("[data-mode-btn]").forEach(b=>{if(modes[b.dataset.modeBtn])b.textContent=modes[b.dataset.modeBtn][0];});
put("#mode-title",record[1]);renderNode(selected());
}
$$("[data-node]").forEach(b=>b.addEventListener("click",()=>renderNode(b.dataset.node)));
$$("[data-mode-btn]").forEach(b=>b.addEventListener("click",renderMode));
put(".bp-commentary article:nth-child(1) h3","להפריד אחריות.");
put(".bp-commentary article:nth-child(1) p","מזהים גבולות אמון, ניהול, אחסון, גיבוי וניטור. לכל נתיב יש מטרה ברורה.");
put(".bp-commentary article:nth-child(2) h3","לבדוק הנחות.");
put(".bp-commentary article:nth-child(2) p","כפילות על הנייר אינה הוכחה לשרידות. בודקים כשל, Quorum והתאוששות של שירות.");
put(".bp-commentary article:nth-child(3) h3","להקל על אבחון.");
put(".bp-commentary article:nth-child(3) p","מודדים מצב בסיס, משנים גורם אחד ובודקים שוב בלי לחשוף נתוני גישה אמיתיים.");
put(".bp-alert","תקן הפרסום: אפשר להציג שכבות מערכת וארכיטקטורה עקרונית. לא מוצגים כתובות פנימיות, סיסמאות, מזהי מכשירים או תצורות אבטחה אמיתיות.");
renderMode();
})();