/**
 * קובץ הקונפיגורציה היחיד של האתר.
 *
 * כדי לעדכן את מספר הוואטסאפ או את נוסח ההודעה המוכנה מראש — יש לשנות
 * כאן בלבד. כל כפתורי הוואטסאפ בדף נבנים מהערכים שבקובץ הזה.
 */

/** פרטי יצירת הקשר — נקודת העדכון היחידה. */
export const CONTACT = {
  /** מספר הוואטסאפ בפורמט בינלאומי, ספרות בלבד (972 + המספר ללא ה-0 המוביל). */
  whatsappNumber: '972542557732',
  /** המספר כפי שהוא מוצג למשתמש בדף. */
  whatsappNumberDisplay: '054-2557732',
  /** ההודעה שתופיע מוכנה מראש בחלון השיחה. */
  whatsappMessage:
    'היי, הגעתי אליכם דרך האתר. יש לי בעיה בעסק ואשמח לדבר ולמצוא לה פתרון פרקטי',
} as const;

/** פרטי האתר עבור meta tags, קנוניקל ושיתוף. */
export const SITE = {
  name: 'TreLabs',
  /**
   * כתובת האתר בפרודקשן. משמשת לקישור הקנוני ולתגי Open Graph בלבד.
   * יש לעדכן לדומיין הסופי לפני העלייה לאוויר.
   */
  url: 'https://trelabs.co.il',
  title: 'TreLabs — פתרונות טכנולוגיים לעסקים קטנים ובינוניים',
  description:
    'TreLabs בונה כלים דיגיטליים מותאמים אישית לעסקים קטנים ובינוניים: אפליקציות, תוספים לכרום, בוטים לוואטסאפ, טפסים חכמים ומערכת לניהול תורים. מספרים לנו על הבעיה — ומקבלים פתרון פרקטי שעובד.',
  locale: 'he_IL',
  lang: 'he',
  dir: 'rtl',
} as const;

/**
 * בונה קישור wa.me עם ההודעה המוכנה מראש מקודדת ב-URL encoding.
 *
 * @returns קישור בפורמט `https://wa.me/<number>?text=<URL-encoded message>`
 */
export function buildWhatsAppUrl(
  number: string = CONTACT.whatsappNumber,
  message: string = CONTACT.whatsappMessage,
): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/** הקישור המוכן לשימוש בכל כפתורי הוואטסאפ בדף. */
export const WHATSAPP_URL = buildWhatsAppUrl();
