# trelabs-website

דף הנחיתה של TreLabs — עמוד יחיד, סטטי, בעברית ובכיוון RTL, עם הנעה לפעולה
אחת: פנייה בוואטסאפ עם הודעה מוכנה מראש.

בנוי ב-[Astro](https://astro.build) עם [Tailwind CSS](https://tailwindcss.com).
הפלט הוא HTML סטטי בלבד — ללא JavaScript בצד הלקוח, ללא שרת וללא בסיס נתונים.

## עדכון מספר הוואטסאפ או נוסח ההודעה

כל פרטי יצירת הקשר נמצאים בקובץ אחד: **`src/config/site.ts`**.

```ts
export const CONTACT = {
  whatsappNumber: '972542557732',      // פורמט בינלאומי, ספרות בלבד
  whatsappNumberDisplay: '054-2557732', // כפי שמוצג בדף
  whatsappMessage: 'היי, הגעתי אליכם דרך האתר...', // ההודעה המוכנה מראש
};
```

משנים כאן — וכל כפתורי הוואטסאפ בדף (אזור הפתיחה, ההדר, הכפתור הצף,
סעיף הסיום והפוטר) מתעדכנים אוטומטית. קידוד ה-URL של ההודעה נעשה בקוד,
אין צורך לקודד ידנית.

טקסטים אחרים בדף נמצאים ב-`src/config/content.ts`.

## הרצה מקומית

```bash
npm install
npm run dev      # שרת פיתוח בכתובת http://localhost:4321
npm run build    # בנייה לתיקיית dist/
npm run preview  # תצוגה מקומית של התוצר הבנוי
```

## בדיקות

```bash
npm run typecheck  # astro check
npm run lint       # eslint
npm test           # vitest
```

## פריסה

האתר סטטי, ולכן כל שירות אחסון סטטי מתאים:

- **Vercel** — מזהה אוטומטית פרויקט Astro. אין צורך בהגדרות נוספות.
- **Netlify** — ההגדרות כבר בקובץ `netlify.toml` (build: `npm run build`,
  publish: `dist`).

לאחר חיבור הדומיין יש לעדכן את `SITE.url` בקובץ `src/config/site.ts`,
כדי שהקישור הקנוני ותגי ה-Open Graph יצביעו לכתובת הנכונה.

## מבנה

```
src/
  config/site.ts       פרטי יצירת קשר, כתובת האתר ובניית קישור הוואטסאפ
  config/content.ts    כל הטקסטים בדף
  layouts/             מעטפת ה-HTML, meta tags ו-Open Graph
  components/          רכיבי הסעיפים
  pages/index.astro    הרכבת הדף
  styles/global.css    השפה החזותית — צבעים, טיפוגרפיה, פונט מקומי
public/                פונטים, favicon ותמונת השיתוף
```

הוספת סעיף עתידי (למשל תיק עבודות) נעשית ביצירת רכיב חדש על בסיס
`src/components/Section.astro` ושיבוצו ב-`src/pages/index.astro` — ללא שינוי
במבנה או בעיצוב הקיים.
