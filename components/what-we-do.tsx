'use client'

import { useReveal } from './use-reveal'

const CARDS = [
  {
    n: '01',
    title: 'שיחה לפני הצעה',
    text: 'לפני שאנחנו כותבים שורת קוד אחת, אנחנו מבינים מה באמת מעכב אתכם. בלי ז׳רגון, בלי בלוף — רק הבעיה האמיתית.',
  },
  {
    n: '02',
    title: 'פתרון ממוקד',
    text: 'בונים בדיוק את מה שצריך כדי לפתור את הבעיה — לא יותר ולא פחות. כלי רזה שעושה את העבודה מהיום הראשון.',
  },
  {
    n: '03',
    title: 'כלי שנשאר עובד',
    text: 'המערכת לא נשברת אחרי חודש. אנחנו מלווים, מתחזקים ומשפרים כדי שהכלי ימשיך לעבוד בשבילכם לאורך זמן.',
  },
]

export function WhatWeDo() {
  const titleRef = useReveal<HTMLDivElement>()
  return (
    <section id="what" className="relative mx-auto max-w-6xl px-5 py-28 md:px-8">
      <div ref={titleRef} className="reveal max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-brand-cyan">
          מה אנחנו עושים
        </p>
        <h2 className="text-balance text-3xl font-black leading-tight tracking-tight sm:text-5xl">
          מתחילים מהבעיה, <span className="text-gradient">לא מהטכנולוגיה</span>
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {CARDS.map((c, i) => (
          <Card key={c.n} card={c} delay={i * 0.12} />
        ))}
      </div>
    </section>
  )
}

function Card({
  card,
  delay,
}: {
  card: (typeof CARDS)[number]
  delay: number
}) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className="reveal group glass relative overflow-hidden rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/25"
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* hover glow */}
      <div className="pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-brand-purple/0 to-brand-cyan/0 opacity-0 blur-md transition-opacity duration-500 group-hover:from-brand-purple/20 group-hover:to-brand-cyan/20 group-hover:opacity-100" />
      <span className="block bg-gradient-to-l from-brand-purple to-brand-cyan bg-clip-text text-5xl font-black text-transparent opacity-60">
        {card.n}
      </span>
      <h3 className="mt-5 text-xl font-bold">{card.title}</h3>
      <p className="mt-3 leading-relaxed text-muted-foreground">{card.text}</p>
    </div>
  )
}
