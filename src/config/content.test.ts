import { describe, expect, it } from 'vitest';

import { AUDIENCE, HERO, SERVICE, SOLUTIONS } from './content.ts';

/** חמשת סוגי הפתרונות שנדרשים באפיון — חייבים להופיע בדף. */
const REQUIRED_SOLUTIONS = [
  'אפליקציות',
  'תוספים לכרום',
  'בוטים לוואטסאפ',
  'טפסים חכמים',
  'מערכת לניהול תורים',
];

describe('תוכן הדף', () => {
  it('מציג את כל סוגי הפתרונות הנדרשים', () => {
    expect(SOLUTIONS.items.map((item) => item.name)).toEqual(REQUIRED_SOLUTIONS);
  });

  it('כולל כותרת פתיחה, הסבר על השירות וסעיף למי זה מתאים', () => {
    expect(HERO.title.length).toBeGreaterThan(0);
    expect(SERVICE.paragraphs.length).toBeGreaterThan(0);
    expect(AUDIENCE.items.length).toBeGreaterThan(0);
  });

  it('אינו מכיל טקסטים זמניים', () => {
    const allText = JSON.stringify([HERO, SERVICE, AUDIENCE, SOLUTIONS]);
    expect(allText.toLowerCase()).not.toMatch(/lorem|ipsum|placeholder|todo|tbd/);
  });

  it('כתוב בעברית — כל מקטע תוכן מכיל אותיות עבריות', () => {
    for (const text of [HERO.title, HERO.subtitle, ...SERVICE.paragraphs, ...AUDIENCE.items]) {
      expect(text).toMatch(/[֐-׿]/);
    }
  });
});
