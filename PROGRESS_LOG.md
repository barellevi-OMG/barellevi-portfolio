# יומן התקדמות והחלטות — אתר הפורטפוליו

## 2026-10-19 — ביקורת תוכן, דיוק מקצועי וקול אישי

### משוב המשתמש
- כל שינוי מהותי וביקורת על האתר צריכים להיות מתועדים, לרבות החלטה, יישום, בדיקות ומה נותר פתוח.
- בתמונה של "כל משרה, העבודות הרלוונטיות" הופיע שם Mobileye, אף שהמשתמש **מעולם לא עבד שם**; הוא רק הגיש מועמדות. אין להציג שמות מעסיקים פוטנציאליים או ליצור רושם של ניסיון תעסוקתי אצלם.
- כותרת האתר "מחברים בין מערכות ואנשים" כתובה בלשון רבים ואינה מייצגת אדם אחד. נדרש קול אישי בגוף ראשון.
- משוב קודם: להפחית ניסוחים עמומים ותמונות חוזרות; להציג עבודות ותוצאות ממשיות; סיפור מקצועי על אופי וגישה ללא פרטים אישיים.

### החלטות מחייבות
1. אין להציג שמות חברות שהמשתמש הגיש אליהן מועמדות בכרטיסי משרות, בכותרות או בקישורי שיתוף ציבוריים. התאמה למשרה תיעשה לפי תחום מקצועי.
2. אין לייחס למשתמש העסקה, הסמכה, תוצאה או אחריות שלא אומתו.
3. כותרות, ביוגרפיה וטקסט אישי יהיו בלשון יחיד.
4. לא לפרסם פרטי חיים אישיים או נתוני זיהוי פרטיים בסיפור "עליי".
5. לכל ביקורת חדשה יש להוסיף סעיף עם תאריך, ממצא, החלטה, שינוי, בדיקה וסטטוס.

### מה בוצע
- הוסרו שמות Mobileye מכותרות המשרות בעברית ובאנגלית במודל התוכן.
- הוחלפה כותרת הבית בעברית ל: "אני הופך אתגרים / למערכות שעובדות."
- נוצרו נתיבים ניטרליים חדשים: `/for/systems-infrastructure/`, `/for/technical-support/` ומקבילות `/he/`.
- הוסרו ארבעת קובצי דפי המשרות הישנים שנשאו את שם החברה בנתיב.
- קישורי הניווט ומפת המסלולים בקוד עודכנו לנתיבים החדשים.
- שיפור קודם באותו יום: סיפור מקצועי אישי, ותרשימי פרויקט ייחודיים במקום שימוש חוזר בצילומי מאגר.

### בדיקות ופתוחים
- יש לוודא הצלחת GitHub Actions ופריסת Pages לאחר העדכון.
- יש לבצע בדיקת תוכן בכל האתר למניעת אזכורי מעסיקים פוטנציאליים, לרבות מטא-דאטה, sitemap, מסמכי פרויקט וקישורים היסטוריים.
- מחיקת קובץ מהענף הציבורי **אינה מוחקת את היסטוריית Git** או מטמוני מנועי חיפוש; אין להציג זאת כמחיקה מוחלטת.
- לבחון בהמשך האם כל דף משרה מוסיף ערך אמיתי למגייס או שיש לצמצם מספר מסלולים.


## 2026-10-19 — ניהול עובדים והסרת הערות פנימיות מהאתר

### משוב
- ניסיון בניהול עובדים, מנהלים וצוותים כמעט אינו מקבל ביטוי באתר, אף שהוא חלק מהותי מהפרופיל המקצועי.
- אין להציג באתר הציבורי הודעות עריכה פנימיות על מידע רגיש, סיווג, תצלומים להמחשה או אישור תוכן. הודעות כאלה שייכות לתהליך העבודה ולא למבקרים.

### החלטה
- להוסיף אזור עצמאי, גלוי ובולט, לאחר סיפור "עליי" ולפני קטלוג הפרויקטים: "ניהול עובדים / הובלת צוותים". לא להסתפק בהזכרת הניהול כאחת מארבע הקטגוריות.
- לתאר ניהול רב-שכבתי, הכשרה, נהלים, האצלת סמכויות, תיאום פיתוח ותפעול וניהול מצבים מורכבים — ללא שמות מעסיקים, פרטים אישיים או נתוני היקף שלא אומתו לפרסום.
- להסיר לחלוטין הודעת `review-notice` מחלון פרויקט. להמשיך להגן על מידע רגיש בתוך תהליך העריכה ובדיקות האבטחה, בלי להציג למבקר הערות פנימיות.

### יישום
- `src/experience.js`: אזור עצמאי בשתי שפות, שלוש יכולות ניהוליות בולטות וקישור ניווט ייעודי.
- `styles.css`: עיצוב מגזיני מותאם למובייל.
- `src/app.js`: הוסרת ההודעה על ארכיטקטורה, מידע רגיש ותמונות להמחשה מחלונות הפרויקטים.

### אימות
- נדרש אישור הצלחת GitHub Actions ו־Pages לאחר העדכונים.
- לבדוק שאין תוויות תהליך עריכה נוספות שמופיעות במקומות אחרים באתר.


## 2026-10-19 — לוח החלטות מאושר: 01, 02, 07, 10, 16

### החלטות המשתמש
1. להגדיל את הכותרת הראשית בכ־30% (עם התאמה למובייל).
2. להחליף את תמונת ה־Hero לאמנות אבסטרקטית של צמתים, קשרים ורמז לדמות אנושית.
7. הקטגוריה הרביעית: **ניהול אנשים ומוצר טכנולוגי**.
10. לתאר אחריות, תהליכים, ניהול והובלה ללא מספרי היקף.
16. אחרי הפתיח יוצגו הסיפור האישי המקצועי וניסיון הניהול, ורק אחריהם עבודות וקטגוריות.

### ביצוע
- הוגדלה טיפוגרפיית הכותרת הראשית, עם כללי התאמה למסכים קטנים.
- הותאם שם הקטגוריה הרביעית בקוד הממשק ובתוכן מסלולי המשרות.
- הסדר החדש: Hero → עליי → ניהול עובדים → ארבע קטגוריות → עבודות.
- הוחלט לא להוסיף מספרי היקף או שמות מעסיקים.
- **פתוח:** הפקת תמונת Hero אבסטרקטית מקורית והטמעתה. הרקע הקיים עדיין מופיע עד שתושלם החלפת הנכס; אין לסמן את החלטה 02 כבוצעה.

### בדיקות נדרשות
- GitHub Pages ו־Actions לאחר הפריסה.
- בדיקת כותרת בשתי שפות ובמובייל, ללא חיתוך או גלישה.
- בדיקת עוגני ניווט וקטגוריות אחרי שינוי הסדר.


## 2026-10-19 — ניווט, כותרות והרחבת ניסיון תשתיות DC
- ניווט ראשי מצומצם לארבעה קישורים בלבד: עליי, ניהול, ארבעה תחומים אדם אחד, פרויקטים. קישור המשרות נשאר בגוף העמוד ולא בתפריט.
- שם אזור הקטגוריות: **ארבעה תחומים. גישה אחת.** (ממתין למשוב על הנוסח).
- כותרת פרויקטים בעברית: **ניסיון מגוון. ארבעה אפיקים.** הוסר מספר פרויקטים קשיח בתיאור.
- הורחב תיאור התשתיות מעבר לפרויקט Proxmox/SAN/גיבויים האחרון: ניסיון מצטבר ב־DC, שרתים פיזיים/וירטואליים, רשתות וכבילה, אחסון, Windows/AD, ניטור ותפעול.
- נוספה רשומת תיק עבודות P17 לתיאור ניסיון DC רב־שנתי. **זהו מקרה בוחן רוחבי, לא טענה להקמת DC שלם מאפס בפרויקט אחד.** לפני הפיכתו לתיאור פרויקט הקמה קונקרטי נדרש לברר את גבולות האחריות, שלבי ההקמה והציוד.
- מקורות ההרחבה: פרטי ניסיון מתיקי קורות החיים הקודמים (חדרי מחשב ושרתים פיזיים/וירטואליים, SAN/Fibre, התקנות שרתים, רשתות ארגוניות ותחזוקה) והיסטוריית שיחות התשתית. אין לפרסם שמות מעסיקים בתוכן האתר.
- ממתין למשתמש: רשימת הפרויקטים להסרה ודיוק הפרויקטים הנותרים. אין להסיר פרויקטים לפני שימסור רשימה.
- בדיקה נדרשת: GitHub Actions ופריסה, כולל סדר ניווט RTL/אנגלית והצגת P17.


## 2026-10-19 — הבהרה מהמשתמש: הקמת DC מקצה לקצה ותהליך אימות תוכן
- המשתמש אישר שבחודש האחרון (ספטמבר–אוקטובר 2026) ביצע שוב הקמת חדר שרתים/DC שלם מאפס, כולל ארונות, כבילה, תקשורת, שרתים, אחסון והגדרות. בעבר ביצע חלקים שונים מתהליכים אלה במקומות עבודה שונים.
- יש להפוך את **הקמת ה־DC האחרונה** למקרה בוחן מרכזי, נפרד מהניסיון התשתיתי המצטבר. אין להסתפק בכרטיס כללי P17. יש להבחין בין עבודה אישית, הובלה/תיאום של אחרים, ומעורבות חלקית.
- המשתמש ביקש שנבנה **טיוטת תהליך הקמה מלאה לצורך שלילה ותיקון שלו**. השלבים שהוצעו הם היפותזה לאימות בלבד: אפיון ותכנון; הקמה פיזית; תקשורת ואבטחה; שרתים ואחסון; שירותי מערכת; שרידות והתאוששות; מסירה ותפעול. **אין לפרסם באתר פרטים אלה כעובדות לפני אישור מפורש של המשתמש**.
- TODO: לעבור על **כל פרויקט אחד־אחד** ולהרחיב את התוכן, הראיות, תחומי האחריות והתוצאות; לאחר מכן להחליט אילו פרויקטים להסיר או לשלב. המשתמש ביקש לשמור זאת כמשימה נפרדת להמשך, לא להתחיל כרגע.
- להימנע מפרסום שמות מעסיקים, מזהי רשת, סיסמאות ונתונים מזהים. לא להציג תהליכים היפותטיים כעבודה מוכחת.


## 2026-10-19 — אימות טיוטת DC: פעולות שנשללו במפורש

### משוב המשתמש
המשתמש שלל במפורש ייחוס של:
- התקנת ציוד, מסילות, כבילה וסידור חיבורים.
- חיבורי חשמל, PDU, UPS ותיוג.
- פריסת תשתיות פיזיות בכלל.
- הערה מילולית: "ניהול שכר שווטף לא עשיתי". הנוסח אינו חד־משמעי; ייתכן שהתכוון ל"ניהול שוטף". **אין לפרש זאת כעובדה ללא הבהרה**; אין לייחס אחריות לתפעול שוטף לאחר מסירה עד אישור.

### גבולות הטיוטה המתוקנת
- להתמקד בהקמת הסביבה המחשובית והמערכתית של ה־DC, לא בביצוע תשתיות פיזיות.
- שלבים מוצעים **לאימות בלבד**: אפיון ותכנון, הגדרות תקשורת לוגית, שרתים ווירטואליזציה, אחסון SAN, שירותי תשתית, גיבויים/שרידות ובדיקות מסירה.
- שום שלב מהרשימה אינו מאושר אוטומטית מכוח אי־סימונו כשלילה. יש לברר מה בוצע אישית, מה הובל ומה לא בוצע.
- אין לפרסם באתר טענות חדשות שאינן מאומתות.
- TODO: לפני פרסום מקרה הבוחן, להסיר מהתיאור הקיים של P17 כל ניסוח שעלול לייחס למשתמש פריסת כבילה או התקנת תשתיות פיזיות, ולבקש אישור לטיוטה הסופית.

### הבהרת משתמש — ניהול שכר עובדים
המשתמש הבהיר במפורש שהמשפט ״ניהול שכר שווטף לא עשיתי״ מתייחס **לניהול שכר עובדים**, ולא לניהול שוטף של מערכות ה־DC. אין להסיק ממנו שהמשתמש לא תיפעל את ה־DC לאחר ההקמה. ניהול שכר עובדים אינו רלוונטי למקרה הבוחן ואין להזכירו באתר. היקף התפעול השוטף נותר לבירור בהמשך.


## 2026-10-19 — אימות DC אחרון: היקף וטכנולוגיות

נתוני היקף מאושרים מהמשתמש: 6 שרתים פיזיים, 10 מכונות וירטואליות.

**בפרויקט האחרון:** Proxmox VE, Linux, Cluster / HA, SAN / Fibre Channel, iSCSI, Dell Storage, Proxmox Backup Server, מערכת גיבויים נוספת ששמה לא נמסר, Dell Networking, Check Point, VLAN / Routing, DNS / DHCP, ממשקי ניהול iRMC / iDRAC / iLO (לא אושר איזה מהם).

**רק בפרויקטים קודמים:** VMware ESXi / vSphere, Microsoft Hyper-V, Windows Server, Cisco, Aruba / HP, Active Directory, מערכת ניטור, ניהול הרשאות.

**לא עבד עם:** Veeam.

**אחריות בהקמת DC אחרון — אימות 21 סעיפים:** 19 סעיפים בביצוע אישי, סעיף אחד בהובלה (הקצאת נפחי אחסון), סעיף אחד חלקי (בחירת ציוד ותכנון סדר ההקמה). יש לשמר את הפירוט המלא מתשובת המשתמש בשיחה; לא להניח שבסעיפים הכוללים חלופות בוצעו כל החלופות.

**החרגות:** לא ביצע פריסת תשתיות פיזיות, התקנת ציוד ומסילות, כבילה, חיבורי חשמל/PDU/UPS או תיוג. ניהול שכר עובדים אינו חלק מהפרויקט.

**טיוטת מקרה בוחן לאישור, טרם פרסום:** הקמת סביבת Data Center ארגונית: תכנון ארכיטקטורת שרתים ורשתות; הקמת סביבת Proxmox VE ו-Linux עם Cluster/HA; תקשורת Dell Networking ו-Check Point; אחסון Dell עם SAN/Fibre Channel ו-iSCSI; DNS/DHCP; גיבויים ב-Proxmox Backup Server ובמערכת נוספת; בדיקות שחזור, בדיקות ביצועים, תיעוד ומסירה. סביבת העבודה כללה 6 שרתים פיזיים ו-10 מכונות וירטואליות. ההקצאה של נפחי האחסון הובלה על ידי המשתמש, ובחירת ציוד וסדר הקמה בוצעו חלקית.

**נדרש אימות נוסף לפני פרסום:** דגמי שרתים ואחסון אם רצוי; סוג מערכת הגיבויים הנוספת; מה בדיוק הוגדר ב-HA; ממשק ניהול מדויק; מטרת הפרויקט, תוצאות והישגים; נוסח סופי לאישור. אין להמציא מדדי ביצועים, זמינות או RPO/RTO. אין לערבב טכנולוגיות מפרויקטים קודמים.

**משימות המשך:** אישור מקרה הבוחן; החלטה אם להחליף או לפצל את P17 (ניסיון תשתיתי מצטבר) מול P11 (וירטואליזציה וגיבויים); בהמשך מעבר פרויקט-פרויקט להרחבה, דיוק והסרה לפי החלטת המשתמש. אין לפרסם תוכן לא מאומת.


## 2026-10-19 — DC case study: purpose, challenge, role, current status

User-confirmed facts about the most recent DC build:
- **Purpose:** Build a new DC from scratch (computing environment). Do not imply personally laying physical infrastructure.
- **Primary challenge:** Complex networking and storage faults.
- **Working model:** Worked mostly independently.
- **Current state:** Build completed; environment currently undergoing testing. Do not describe as production-live or fully accepted.
- No additional specific incident, decision or measurable outcome was supplied.

Previously confirmed scope: 6 physical servers and 10 VMs; Proxmox VE, Linux, Cluster/HA, SAN/Fibre Channel, iSCSI, Dell Storage, Proxmox Backup Server plus another unnamed backup system, Dell Networking, Check Point, VLAN/Routing, DNS/DHCP and server management interfaces. Other platforms (VMware, Hyper-V, Windows Server, Cisco, Aruba/HP, Active Directory and monitoring systems) belong to prior projects, not this build. Veeam was explicitly excluded.

Responsibilities: requirements and architecture, logical network/security configuration, server and virtualization configuration, SAN connectivity, backup and recovery testing, fault diagnosis, system tests and documentation. Storage-volume allocation was **led**, equipment selection and build sequencing were **partial**. The user did **not** perform physical infrastructure rollout, rack equipment installation, cabling or electrical/PDU/UPS work.

### Draft story for later approval — NOT PUBLISHED
**Building a new enterprise data center — from architecture to system testing.**
Mostly independently planned and configured a 6-server, 10-VM computing environment, integrating Proxmox/Linux virtualization, Dell networking and storage, SAN/Fibre Channel and iSCSI, Check Point security, cluster/HA and backup/recovery tooling. Resolved complex networking and storage faults during the build. Installation and configuration are complete; acceptance/testing is ongoing. Scope excludes physical infrastructure deployment. No production status, measurable uptime, performance gains or RPO/RTO outcomes have been verified.

**TODO:** Seek final editorial approval before changing public case-study content. Determine relationship of new DC case study to existing P17/P11; continue one-by-one project review later. Do not infer unspecified outcomes.


## 2026-10-19 — סריקת גיבוי ChatGPT מ-Google Drive (מחקר מקורות, לא לפרסום)

**מקור:** תיקיית Drive שהמשתמש סיפק: https://drive.google.com/drive/folders/1-viUrkNnA2frvzeAyuxmluKdGrO7hn-Y
קובצי שיחות: conversations-000.json (100 שיחות), conversations-001.json (71 שיחות), סה"כ **171 שיחות**. נסקרו כותרות והודעות משתמש בכל 171 השיחות, ובוצעה בדיקה ממוקדת של שיחות פרויקטים טכנולוגיים, ניהול, תשתיות ותכנון הפורטפוליו. בתיקייה יש גם chat.html, export_manifest.json וקובצי נספחים; אין לטעון שנבדק כל נספח חזותי או כל הודעת עוזר. קובצי השיחות הם מקור היסטורי; דיווחי ביצוע שהודבקו בהם אינם תחליף לאימות מצב מערכת נוכחי.

### ממצאים עם ערך לפורטפוליו
1. **מערכת NA מרובת ערוצים:** שיחות Telegram (מזהה מתחיל 6ab53b98) ו-WhatsApp (6ab8a7bd) כוללות היסטוריה עשירה של תכנון, פיתוח, בדיקות, פריסה ותחזוקה. מערך רכיבים: בוט טלגרם, בוט WhatsApp, ממשק ניהול, Ubuntu/Oracle Cloud, PM2, Caddy, משימות מתוזמנות, סנכרון מקורות תוכן ו-fallback, לוקליזציה HE/EN.
2. **Telegram UX והנדסת מוצר:** ממשק inline, התאמה לאזורי זמן IANA, שעת שליחה אישית, שיתוף פרקים, ארכיון, חישוב ימי נקיון, ציוני דרך, בדיקת קלט תאריכים ותמיכה בשתי שפות. דיווחי בדיקות והעלאה לסביבת שרת מופיעים בשיחות; יש לבדוק בריפו ובשרת מה מצבם כיום. בפרויקט Telegram מופיע גם **ריפו נפרד telegram-na-bot**, מעבר למונוריפו whatsapp-na-bot — חשוב לקטלוג מקורות.
3. **WhatsApp כפרויקט נפרד:** הפרדה בין שירות קבוצתי ישן לשירות אישי ייעודי; מעבר למספר נפרד; תפריטים מבוססי טקסט, תזמון, קבלת טריגרים בעברית ובאנגלית בקבוצות, הודעות הצטרפות, הזמנה לצ'אט פרטי, מנגנוני cooldown, טיפול בזיהוי משתתפים ב-WhatsApp LID, בדיקות regression ופתרון תקלות בפרודקשן. המשתמש דן בהסרת הבוט הישן — **לא להציג כהסרה שבוצעה** בלי ראיה.
4. **אבחון Production ממשי:** שיחת Telegram מתעדת תקלה בממשק הניהול שבה PM2 דיווח online ופורט HTTP היה פתוח, אך בקשות נתקעו; בוצע אבחון נפרד ל-Caddy, לתהליך Node ולשירות, והפעלה מחדש ממוקדת של רכיב הניהול בלבד. מועמד טוב למקרה בוחן reliability, בכפוף לאימות הראיות.
5. **הובלת מוצר ותהליכי אימות:** שיחת קורות החיים (6acf022b) מספקת מידע מפורט על אפיון תהליכים, גיוס והכשרת מנהלים, כתיבת נהלים, ביזור משימות, תעדוף פיתוח, עבודה עם מנהל פיתוח ומתכנתים, שיווק, ניהול אירועים ותקשורת ציבורית. המשתמש דיווח על 11–12 מנהלים בכירים, כ-150 מנהלים, 4 מפתחים, כ-4,500 נותני שירות/מוכרים ויותר מ-1.5 מיליון משתמשים ייחודיים פעילים בהקשר של פעילות עבר. מדובר ב**דיווח עצמי היסטורי** ובתחום רגיש מבחינה משפטית/תדמיתית; לא להעתיק שמות ארגונים או פרטים אישיים לפורטפוליו ללא החלטת המשתמש.
6. **אוטומציית תהליך אימות:** באותה שיחת קורות חיים המשתמש תיאר מעבר מתהליך ידני לתהליך בוט אסינכרוני שאסף קלט, הכין תיקי בדיקה ואפשר למאמת לטפל באצוות במקום להמתין בזמן אמת. המשתמש דיווח שהבוט היה בשימוש מעל שנה. יש להציג רק ברמת עקרונות workflow/automation, בלי לפרסם מידע אישי, סוגי מסמכי זהות או מנגנוני אימות מפורטים.
7. **אבחון Check Point ו-WAN:** שיחה 6acf7da6 מתעדת בדיקת הבדל בין קישור ישיר מהיר לבין מהירות נמוכה דרך Firewall, ניסויי בידוד רכיבי רשת והפרדה בין סביבת משרד ל-DC. מדובר בסביבת בדיקות; אין להסיק שהבעיה נפתרה או לייחס שיפור מדיד סופי. לא לפרסם כתובות IP פנימיות.
8. **Fujitsu / Proxmox:** שיחות 6ad4baa8 ו-6ad4baad כוללות התקנת Proxmox VE 9.2-1 על שרת Fujitsu, שימוש בקונסולת ניהול מרחוק, בירור גישת SSH/8006 ופתרון בעיות Boot/Network. הן מתעדות **אבחון והתקדמות**, לא אישור שכל השלבים הושלמו באותן שיחות. יש לקשור למקרה הבוחן DC האחרון בזהירות ולא ליצור כפילות.
9. **עבודה עם כלי AI ותהליכי פיתוח:** שיחות על Cursor/Codex, GitHub, הפעלה על שרת, אימות לפני Git push, גבולות scope בין Telegram/WhatsApp ומבחני רגרסיה. רלוונטי להצגת תהליך engineering ויכולת עבודה עם AI, לא כטענה שה-AI ביצע את כל העבודה באופן אוטונומי.
10. **Windows troubleshooting:** שיחה 6abd30cd מתעדת ניתוח תקלות אתחול עם שני כוננים/שתי התקנות Windows, BCD, אירועי מערכת וזמני Boot. דוגמה אפשרית לאבחון שיטתי, אך כנראה לא פרויקט דגל; יש להבחין בין תקלת Boot שנמדדה לבין קפיאות שלא אומתו.

### מגבלות ומעקב
- הגיבוי הוא 171 שיחות בשני קובצי JSON; **לא נטען שזה כל ההיסטוריה המקצועית** של המשתמש, ובפרט עבודת Codex בחשבון עבודה ו-Gemini עשויה שלא להופיע.
- חלק מההודעות הן דוחות Cursor/Codex שהמשתמש הדביק; לסמן כ-*דיווח פריסה/בדיקות*, ולא כבדיקה עצמאית.
- לא לשלב פרטים אישיים, נתוני זיהוי, מספרי טלפון, מזהי קבוצות, פרטי חשבונות או תיעוד של תהליכים רגישים באתר או ביומן.
- TODO: לבדוק בנפרד קוד, README והיסטוריית GitHub של whatsapp-na-bot ושל telegram-na-bot; להצליב טענות פריסה/בדיקות עם commits.
- TODO: להרחיב מקרה בוחן NA לתתי פרויקטים Telegram, WhatsApp, Admin, Reliability; לשקול מקרה בוחן workflow automation נפרד; ולמפות מחדש פרויקטי DC/Proxmox/Firewall כדי למנוע כפילות.
- TODO: לעבור אחד־אחד על כל הפרויקטים עם המשתמש לפני שינוי ציבורי, בהתאם להנחייתו.


## 2026-10-19 — הצלבת גיבוי השיחות עם קוד GitHub (סבב ראשון)

**נבדקו ריפוזיטוריז ישירות דרך GitHub:** `barellevi-OMG/whatsapp-na-bot` (main), `barellevi-OMG/telegram-na-bot` (main), כולל עצי קבצים מלאים ומדגם קבצי מקור ותיעוד. הריפו `MusicProjact-YT-Analysis` הופיע ברשימת החשבון אך API מחזיר Git Repository is empty; **אין להציגו כפרויקט שבוצע** ללא מקור נוסף.

### ראיות חדשות בקוד (להבדיל מתיאור בשיחות)
- **מוצר רב-רכיבי, לא רק בוט:** בריפו whatsapp-na-bot נמצאים `index.js`, `wa-service.js`, `wa-role.js`, `wa-groups.js`, `wa-readings.js`, תיקיית `admin-dashboard/`, תיקיית `telegram-bot/` ותיקיית `shared/`. הריפו telegram-na-bot מחזיק קוד Telegram ועותק של `shared/` בנפרד. זו ראיה למבנה מערכת עם רכיבים עצמאיים ולספריית תשתית משותפת; אין להסיק אוטומטית שכל רכיב פרוס כעת.
- **Telegram UX מתקדם, מאומת בקוד:** `telegram-na-bot/feature-keyboards.js` כולל main menu, settings, שינוי שפה, שיתוף בוט וקריאה, בחירת זמן, זמן מותאם אישית, אזור זמן לפי אזורים וערים, פעולות ימי ניקיון (הזנה/שינוי/מחיקה עם אישור), חיפוש ארכיון עם pagination, ניווט קריאה ליום קודם/הבא. אלו יכולות ממומשות ברמת UI, לא רק roadmap.
- **הנדסת פריסה ואבטחת ממשק ניהול:** `whatsapp-na-bot/admin-dashboard/deploy/README.md` מתעד Caddy reverse proxy, TLS Let's Encrypt, Express קשור ל-loopback, חסימת פורט ניהול חיצוני והגדרות ingress ברמת Oracle Cloud VCN/NSG ו-firewall במכונה. אין לפרסם IP, כתובת דומיין אדמין, פורטים או פרטי חשיפה באתר הציבורי.
- **עמידות תהליכים ב-Production:** `whatsapp-na-bot/ecosystem.config.js` מגדיר PM2 עם autorestart, backoff, מגבלת זיכרון, מחזור מתוזמן, סביבה/תפקיד נפרד לשירות WhatsApp קבוצתי ותצורת scheduler. **יש אי-התאמה אפשרית** בין תיאור קודם ביומן (group scheduler off) לבין תצורת הקוד הנוכחית (`WHATSAPP_JOBS_ENABLED=1`, `WHATSAPP_GROUP_BROADCAST_ENABLED=1`); חובה לבדוק runtime לפני הצגת סטטוס.
- **גיבויים ותכנון לתנאי משאבים מוגבלים:** `whatsapp-na-bot/shared/backup.js` כולל גיבוי יומי מבוסס node-cron, כתיבה דרך staging + rename, ניקוי גיבויים ישנים עם retention ברירת מחדל 30 יום, I/O אסינכרוני ו-yield לאירועי loop כדי לצמצם חסימות במכונה קטנה. **אין להסיק שהגיבויים פעילים או ששחזור נבדק**; ב-PM2 legacy-group קיים `WHATSAPP_BACKUP_ENABLED=0`.
- **איכות תוכנה ובדיקות:** עצי הריפו כוללים `shared/test/` עם בדיקות timezone, user-store, archive-query, backup, scraper, clean-time, reading-archive ועוד; `telegram-na-bot/test/` בודק UI/שיתוף; `whatsapp-na-bot/test/` בודק role/service/product; `admin-dashboard/test/` ו-`admin-dashboard/playwright/` כוללים בדיקות API ודפדפן. יש להציג כ-*כיסוי בדיקות בקוד*; טרם בוצעה הרצת בדיקות בסבב זה.
- **הבחנה בין מסמכים ישנים לקוד:** `whatsapp-na-bot/README.md` מתאר בוט קבוצתי ראשוני; אינו מייצג את מלוא המערכת הנוכחית. אסור להסתפק ב-README בבניית סיפור הפרויקט.

### כיווני case studies — הצעה לביקורת המשתמש, לא שינוי באתר
1. NA multi-channel product & system architecture — Telegram, WhatsApp, admin, shared modules.
2. Personalized scheduling, localization & archive — Telegram UX + timezone.
3. Reliability & operations on constrained cloud infrastructure — PM2, Caddy/TLS, isolated service restarts, backup design.
4. WhatsApp migration & separation of group/private workflows — לבדוק state בפועל לפני ניסוח.
5. Testing & delivery practices — unit/API/Playwright, CI if evidenced separately.

**המשך אימות:** לקרוא `admin-dashboard/server.js`, `wa-service.js`, `shared/user-store.js`, `telegram-na-bot/index.js`, workflow definitions והיסטוריית commits; להצליב תאריכים, בעיות שנפתרו ותוצאות מדידות; להריץ בדיקות בסביבה מתאימה אם תתאפשר גישה. לא לשנות אתר ציבורי לפני אישור בחירת הפרויקטים.


## 2026-10-19 — פרסום מעשי באתר וביקורת מערכתית

**פורסם בפועל לענף gh-pages** (ולא רק טיוטה):
- `8bc5b488` — עדכון `src/data.js`: P17 הפך ממקרה בוחן מצטבר על תפעול DC לתיאור הקמת DC עדכנית, על בסיס 19 תחומי ביצוע שהמשתמש אישר, הובלת הקצאת נפחי אחסון והשתתפות חלקית בבחירת ציוד ובתכנון רצף הקמה. אין לייחס התקנה פיזית/כבילה/חשמל. הטכנולוגיות מנוסחות ברמת קטגוריה ולא כהצהרה על מוצרים ספציפיים בפרויקט האחרון.
- אותו commit — P12 הועמק למערכת רב־ערוצית מבוססת קוד מקור: Telegram, WhatsApp, Express admin, shared modules, Telegram interactive UX, timezones, archive, clean days, test suites, PM2, backup module, HTTPS proxy. גם caseStudies.P12 עודכן לראיות בקוד ולמגבלות האימות.
- `8b2384e8` — עדכון `src/locale.js`: התאמת P17 ו-P12 בעברית, לרבות תיאור אחריות אמיתי בפרויקט DC ותיאור מערכת המסרים על בסיס קוד; עדכון תיאור הראיות בעברית.
- קריאת ביקורת חוזרת ל-`src/data.js` אישרה שהערכים החדשים קיימים, 17 פרויקטים נותרו בקובץ, וש-P17 אינו שובר את מבנה רשימת הפרויקטים. **לא בוצעה הרצת build או בדיקת דפדפן חיה** בשלב זה.

### ביקורת מקצועית — בעיות מהותיות לטיפול
1. **סיפור הפרויקט חלש כשהוא מדבר על עצמו במקום על תוצאה.** ה-DC החדש מתאר עבודה אמיתית ורחבה, אך אין עדיין נתוני היקף, ארכיטקטורה כללית, מטרות עסקיות, משך, מדדי ביצוע או תוצאות מדידות. נדרש להשלים מול המשתמש; אין להמציא.
2. **חפיפה בין P17 ל-P11:** שניהם כוללים וירטואליזציה, SAN, גיבוי ושרידות. עד שיובהר אם P11 הוא תת-פרויקט של ה-DC האחרון, להשאיר את שניהם עם הבדל נרטיבי: P17 = הקמת סביבת DC מלאה; P11 = עומק טכני בשכבת virtualization/recovery. בעתיד ייתכן לאחד.
3. **P12 מציג עכשיו עומק הנדסי, אך ללא תוצאה מדידה:** חסרים מספר משתמשים, אמינות מסירה, אחוזי כשל, uptime, מדדי שימוש ותוצאות בדיקות עדכניות. לא לפרסם מדדים בלי מקור.
4. **פיצול יתר של NA לחמישה פרויקטים ייצור ניפוח מלאכותי:** מומלץ להשאיר P12 כפרויקט דגל יחיד עם תתי פרקים UX, architecture, operations, quality, ולפתוח מקרה בוחן נפרד רק אם יש סיפור טכני עצמאי בעל אתגר ותוצאה.
5. **פערי פריסה:** README היסטורי אינו משקף את כל המערכת; הגדרות PM2 אינן בהכרח runtime; גיבוי מוגדר בקוד אך לא אומתה הרצה; בדיקות קיימות אך לא הורצו בסבב הזה. להציג implementation evidence בלבד.
6. **ביקורת שיווקית:** התוכן באנגלית ועברית צריך להתחיל בבעיה שנפתרה ובמה בוצע אישית, אחר כך ארכיטקטורה וטכנולוגיות, ולסיים בתוצאה. כותרות גנריות והסתייגויות ארוכות בתוך הכרטיסים פוגעות בבהירות; לשמור גבולות ומגבלות בתיעוד ובפירוט רק כשנחוץ.
7. **אבטחת מידע:** לא לפרסם כתובות, דומיינים של ממשק ניהול, פורטים פנימיים, טופולוגיות פרטניות, סודות, שמות לקוחות או נתוני משתמשים.
8. **פערי אימות לפני השקה חזקה:** בדיקת URL חי, עברית/אנגלית, נייד, נגישות, SEO, רספונסיביות, מסלולי ניווט ותצוגת case studies. פרסום commit אינו אישור אוטומטי שהדפדפן מציג את השינוי.

### תכנית המשך מדורגת
- קודם כל לאמת שהאתר מגיש את גרסת gh-pages החדשה וש-P17/P12 מוצגים בעברית ובאנגלית.
- להשלים היקף ותוצאות של DC בלי פרטי לקוח רגישים.
- לבדוק את חפיפת P11/P17 ולחזק מקרה בוחן אחד בעל עומק ולא רשימת buzzwords.
- לשפר כרטיסי פרויקטים לפי Challenge / Ownership / Implementation / Outcome / Evidence.
- לבצע ביקורת על שאר 15 הפרויקטים; להסיר, לאחד או להחליש טענות שאינן מגובות.


## 2026-10-19 — פרטי קשר, רקע תעסוקתי ופעולות באתר (הנחיית משתמש)

המשתמש מסר פרטי קשר לצורך בחירה סלקטיבית של מידע ציבורי: `Barellevi@gmail.com`, `0527049003`, ירושלים, ישראל; שנת לידה 1990. **החלטת עריכה:** לפרסם עיר, אימייל וטלפון (המשתמש סיפק לצורך האתר); **לא לפרסם שנת לידה** בשל חוסר רלוונטיות מקצועית. המשתמש ביקש להסיר קישור GitHub הציבורי משום שאינו מחמיא.

**מסמכי מקור שנקראו ב-Google Drive:**
- V6 Infrastructure & Automation: `1Ac93I6R1ACq6gSDCHaDoUnk-aj3_gK-3`
- V6 Technical Product Management: `1mZ-kjoq_BB6c4IUdOtJttHh4pN5jXBTN`
- V6 Technical Project Management: `1JlHzvHBcKlikAcckiAhEPjnQ1NJlatTb`
- V5 English: `1j7fKKO57iPqiJ3heGK_1Q1Nitcr1eyQ2`
- נמצאה תיקיית קורות חיים `0B4_FvsMY0LDAbldqQkxOVzBhMGc` ובה תיקיית עדכניות `1tcNyhbSGbZhYWk6hZKzdbnjVcOQ4Rv2R`, V6 לפי שפות וארכיון גרסאות. טרם נקראו כל גרסאות הארכיון וכל תתי-הקבצים; אין לטעון שהסקירה מלאה.

**ציר זמן מאומת בקורות החיים (נוסח ציבורי ללא שמות מעסיקים):**
- 2012–2015: תשתיות מחשוב, צוות מערכות והדרכה בשירות צבאי.
- 2015–2016: Junior SysAdmin / Helpdesk, Windows ו-SAP, תשתיות שרתים.
- 2016–2017: NOC / SysAdmin, ניטור SCOM/SCSM, Windows/AD, תמיכת SAN ותיאום תקלות.
- 2017–2019: מייסד שותף ומוביל טכנולוגיה ותפעול, הובלת מנהלים, נהלים, תיעדוף פיתוח ותהליכי אוטומציה.
- ינואר–אוגוסט 2025: הטמעת תוכנה, אינטגרציה והדרכת לקוחות.
- ינואר 2026–היום: ניהול מערכות, תשתיות, וירטואליזציה, תקשורת, אחסון, אינטגרציות ופתרונות לקוח.
**הסתייגות:** V5 מציין לפעילות היזמית ~55,000 משתמשים/~70 מנהלים, לעומת V6 >1.5 מיליון משתמשים/כ-150 מנהלים. אין לפרסם מספרים אלה לפני יישור קו עם המשתמש והגדרת שיטת המדידה. אין לפרסם את שמות/הקשר הפעילות היזמית בלי אישור נפרד.

**שינויים שנשמרו בפועל ב-gh-pages:**
- `84226f7` — `index.html` החלפת GitHub בכפתורי email.
- `ce1f982` — `he/index.html` אותו שינוי.
- `d1d936a` — `src/experience.js`: הוספת section `#career` עם ציר זמן דו-לשוני של שישה שלבים, הוספת קישור בניווט, ופרטי קשר בעיר/מייל/טלפון. הפרטים מתבססים על קורות חיים V5/V6, ללא שנת לידה וללא שמות מעסיקים. טרם בוצעה בדיקת דפדפן מלאה.

**משימת המשך תלויה במשתמש:** הוא מתכוון להעביר קבצי ביקורת תוכן נרחבים. להמתין לקבלתם לפני יישום השיפורים שהם יבקשו; אין להציג את הביקורת העתידית כאילו התקבלה.


## 2026-10-20 — User resolution of V5/V6 discrepancies

User explicitly confirmed: **11 parallel subprojects** in entrepreneurial activity. For all other conflicting data, use **V6 as authoritative**, rather than V5 or historical CV figures. In the public About section, this means March 2017–March 2019; more than 1.5 million unique active users; approximately 4,500 vendors; approximately 150 managers, of whom 11–12 senior managers reported directly; development manager and four developers; intake automation used for over one year. Older figures (55,000 users; 70 managers; 2016–2017; seven subprojects) are superseded for public copy and must not be presented as alternative current facts. Earlier infrastructure/education details can be considered separately when relevant and confirmed. Do not publish sensitive project names or personal identifiers.

**Published directly to gh-pages:** `src/experience.js`, commit `bb07dca1de8c69f6610542e53a84a0b07aa97257`: bilingual About-section experience/scale facts, including the newly confirmed 11 subprojects. User's pending comprehensive critique files have **not** yet arrived; await them for the broader editorial redesign. No additional project restructuring was performed.


## 2026-10-20 — Implementation against Barel_Levi_Design_Audit_HE.pdf (14 pages)

**Source:** user-supplied design audit dated 19 October 2026. The report visually reviewed pages at 1363×936 and estimated 16,200px homepage length; those measures are a historical baseline **before** the 20 October fixes, not measurements of the current site. The audit is usability/design analysis, not independent verification of experience claims.

### Audit findings and implementation status

1. **P0 — visible candidate identity & direct action (pages 1,3,10,12): IMPLEMENTED IN CODE.** Added prominent name and cross-disciplinary specialization at top of hero, Jerusalem, primary email CTA, secondary printable resume CTA and project archive CTA. Existing GitHub prompts had previously been replaced by email. Added phone/email/resume links at end of long pages.
2. **P0 — downloadable concise professional summary (pages 10–13): IMPLEMENTED AS PRINT-FRIENDLY HTML.** New dedicated `/resume/` and `/he/resume/` pages support browser Print / Save as PDF. **No standalone pre-generated PDF** included yet. Content based on user-approved career timeline, no sensitive employer details.
3. **P1 — information hierarchy and length (pages 2,4,10,12): IMPLEMENTED IN THE HOMEPAGE CODE.** Initial list reduced to 3 headline works: P17 DC, P12 Telegram/WhatsApp system, P11 virtualization/recovery. Moved project proof to directly after hero, timeline after projects, short About later. Technical explorations/components/hardware/lab/job-list no longer displayed on homepage; underlying code and deeper pages retained.
4. **P1 — dedicated full archive (pages 4,10): IMPLEMENTED.** New `/projects/`, `/he/projects/` retain all 17 projects and one category filter, while homepage sends users there. **Editorial review of 17 projects and decisions to merge/remove remain open.**
5. **P1 — focused role pages (pages 4,10,12): IMPLEMENTED IN CODE.** Retain 3–4 (up to 4) job-specific cases, suppress general longer modules and bring cases forward. Role profile wording still requires future review for each specific job.
6. **P1 — sticky header + mobile navigation (pages 4,9,12): IMPLEMENTED IN CODE.** Sticky header and an explicit mobile menu toggle with aria-expanded and visible links including contact; requires testing at 320/390/768px and keyboard.
7. **P1 — project previews, hierarchy, permanent evidence (pages 5,11,12): PARTIAL.** Contribution appears on cards and before context in modal; per-project shareable URL uses `/projects/#project-Pxx`, with modal deep-link opening. This is a shareable **fragment URL, not a separate SEO-indexable standalone project page**. Independent project pages for all projects and consistent stage/outcome verification remain open. Kept existing Escape/focus restoration behavior. Double nested scrolling and dialog layout still require browser verification.
8. **P1 — typography and Hebrew (pages 6,9,11): PARTIAL.** Reduced hero scale, raised nav to 14px, adjusted Hebrew headings and modality; translated title, hero, navigation and skip link in Hebrew Proxmox case study. **Full Hebrew translation of every technical case page and automatic RTL QA not complete.**
9. **P2 — palette/contrast (pages 7,11): PARTIAL.** Preserved audited dark/mint palette; improved functional text sizing and touch sizes. **Contrast ratios after edits and all active/hover states have not been measured.** Historical report highlighted ~4.10/4.09 for specific decorative/info elements; retest.
10. **P2 — motion and decorative affordances (pages 8,11,12): PARTIAL.** Disabled marquee continuous motion and orbit animation, added global reduced-motion styling, replaced misleading `SYSTEMS / ONLINE` badge with illustrative wording and removed slide-like `01 / 04` number from hero. Decorative arrow patterns elsewhere still need inventory.
11. **P2 — image evidence (pages 5,8,11): NOT COMPLETE.** Existing illustrative photography retained; project artifacts/screenshots and fixed 'illustrative' labels still need curation and permissions. No fabricated work samples were added.
12. **P1 — mobile and accessibility (pages 5,9,13): PARTIAL.** Mobile menu created; text size revised; locale-specific project button aria labels changed; project URLs can be shared. Full WCAG 2.2 AA, 200% zoom, 320px reflow, focus order, reduced-motion WCAG criterion and keyboard end-to-end test remain pending.
13. **Research / usability validation (page 13): NOT DONE.** No testing with 5–8 actual recruiters/technical interviewers or quantified conversion; never claim UX improvement metrics without measurement.
14. **Avoid destructive scope creep (pages 10,12): FOLLOWED.** Maintained original color scheme, all existing projects, detailed optional explorations and no invented metrics; did not publish private network information or sensitive histories.

### Commits / artifact locations

- `979a767` `src/experience.js`: recruiter-first DOM order, identity, contact, resume, archive links, mobile menu
- `2009aa5` and subsequent bug fixes `5763bfa`, `7ad9078`: `src/app.js`: shortlist and project shareability
- `ef778a9`: locale route handling in `src/experience.js`
- `7221ef2` and `77fffab`: full project archive pages EN/HE
- `39c7d32` and `3970e31`: printable resume pages EN/HE
- `f3bb29e` and `e300e95`: design system, responsive navigation, typography and motion in `styles.css`
- `13c824c`: Hebrew Proxmox case top-of-page i18n
- `56a5287`: project card contribution and aria labels
- `c7017f2`: contact details in closing section

### Verification status / risks

All modifications were written directly to **GitHub `gh-pages`**. The repository code was re-fetched to check critical snippets. **No successful live browser render or responsive screenshot verification yet:** external site fetch failed from available browsing channel. Container network could not resolve GitHub raw host, so JS syntax, build and automated tests were not independently run. Accordingly, statuses refer to **source implementation**, not verified production UX.

**Next:** validate actual site at 320/390/768/1024/1440 in both languages; run JS syntax checks, console error scan, keyboard and dialog focus checks; validate links and pages; fix CSS overrides; measure contrast; finish Hebrew case-study translation; create individual static project URLs/consistent stage/contribution/outcome; add authentic evidence screenshots and finalize portfolio content with user.


### Code syntax verification addendum (2026-10-20)

After the audit commits, re-fetched latest `gh-pages` sources through the GitHub connector and successfully **compiled without executing** each JavaScript file using the JS parser: `src/app.js`, `src/experience.js`, `src/data.js`, `src/locale.js` — all four passed syntax validation. This confirms parseability only, **not** DOM/runtime rendering or mobile/browser behavior. Live site fetch remains unavailable from current browsing environment.


### Additional QA and fixes

- Re-fetched the latest Git tree: all four newly published EN/HE archive and resume pages are present on `gh-pages`, alongside updated source files.
- CSS follow-up `173b5e6`: changed `.site-shell` overflow to `clip`, so it does not establish an unintended scroll container around the sticky header (browser validation still needed).
- CSS follow-up `9caf5a9`: constrained the dialog itself to `overflow:hidden` and made `.modal-content` the single scroll container, enlarged the close target to >=44px. This addresses the audit's double-scroll finding in code, with visual re-test pending.


### 2026-10-20 — Full individual project URLs completed (supersedes earlier 'fragment URL only' status)

**All 17 projects now have individual, stable EN/HE pages** under `/project/<slug>/` and `/he/project/<slug>/` — **34 paths**, verified against the GitHub tree with **zero missing**. These pages use shared `src/project-detail.js`, which reads the current portfolio and locale data and shows role, description, technical detail, any documented challenge/approach/evidence/limits, technical labels, contact action, language switching and a relevant linked interactive case study where available. The 17 project titles/content originate from the existing portfolio dataset; no performance results were invented.

Main project cards and previews now expose direct URLs to these pages. Printable resumes were linked to the dedicated project pages instead of old fragment links. Shared implementation and styles committed to GitHub in successive changes including `bfc6b2f`, `eb649a9`, `8d878c9`, `541ef32` (repair of a transient malformed permalink string), and `225233b`. Partial status #7 from the earlier audit matrix is therefore updated: **per-project pages implemented in source**, but individual page SEO metadata and live browser acceptance remain pending.

**Latest static validation:** re-read current Git tree; 17 distinct project slugs and 34 EN/HE detail HTML files; syntax compilation passed for all five JS files (`src/app.js`, `src/experience.js`, `src/project-detail.js`, `src/locale.js`, `src/data.js`). No live cross-browser visual validation / Lighthouse / WCAG audit has been completed; do not claim fully tested publication.
