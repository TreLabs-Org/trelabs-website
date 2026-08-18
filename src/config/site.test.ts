import { describe, expect, it } from 'vitest';

import { CONTACT, WHATSAPP_URL, buildWhatsAppUrl } from './site.ts';

const EXPECTED_MESSAGE =
  'היי, הגעתי אליכם דרך האתר. יש לי בעיה בעסק ואשמח לדבר ולמצוא לה פתרון פרקטי';

describe('CONTACT', () => {
  it('מחזיק את מספר הוואטסאפ בפורמט בינלאומי ללא תווים נוספים', () => {
    expect(CONTACT.whatsappNumber).toBe('972542557732');
    expect(CONTACT.whatsappNumber).toMatch(/^\d+$/);
  });

  it('מחזיק את נוסח ההודעה המדויק מהאפיון', () => {
    expect(CONTACT.whatsappMessage).toBe(EXPECTED_MESSAGE);
  });

  it('מציג את אותו מספר גם בפורמט המקומי', () => {
    expect(CONTACT.whatsappNumberDisplay).toBe('054-2557732');
    expect(`972${CONTACT.whatsappNumberDisplay.replace(/\D/g, '').slice(1)}`).toBe(
      CONTACT.whatsappNumber,
    );
  });
});

describe('buildWhatsAppUrl', () => {
  it('בונה קישור wa.me עם ההודעה מקודדת ב-URL encoding', () => {
    expect(WHATSAPP_URL).toBe(
      `https://wa.me/972542557732?text=${encodeURIComponent(EXPECTED_MESSAGE)}`,
    );
  });

  it('מקודד רווחים ופסיקים ולא משאיר תווים גולמיים בשאילתה', () => {
    expect(WHATSAPP_URL).not.toContain(' ');
    expect(WHATSAPP_URL.split('?text=')[1]).not.toMatch(/[֐-׿]/);
  });

  it('מפוענח בחזרה בדיוק לנוסח המקורי', () => {
    const text = new URL(WHATSAPP_URL).searchParams.get('text');
    expect(text).toBe(EXPECTED_MESSAGE);
  });

  it('נשען על הקונפיגורציה — שינוי המספר או ההודעה משתקף בקישור', () => {
    expect(buildWhatsAppUrl('972500000000', 'שלום')).toBe(
      `https://wa.me/972500000000?text=${encodeURIComponent('שלום')}`,
    );
  });
});
