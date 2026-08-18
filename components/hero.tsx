'use client'

import { MessageCircle, ArrowLeft } from 'lucide-react'

const WHATSAPP = 'https://wa.me/972542557732'
const TITLE = 'בונים לעסק שלכם את הכלי הדיגיטלי שחסר לו'

const STATS = [
  '85% חיסכון בזמן',
  '50+ עסקים',
  '4.9 ★ שביעות רצון',
  '< 30 יום לפיתוח',
  'תמיכה 24/7',
  'פיתוח בהתאמה אישית',
]

function AnimatedTitle() {
  // Split into words to avoid breaking mid-word, animate letters within.
  const words = TITLE.split(' ')
  let index = 0
  return (
    <h1 className="text-balance text-4xl font-black leading-[1.15] tracking-tight sm:text-6xl lg:text-7xl">
      {words.map((word, wi) => (
        <span key={wi} className="mx-[0.18em] inline-block whitespace-nowrap">
          {Array.from(word).map((ch, ci) => {
            const delay = 0.25 + index * 0.035
            index++
            return (
              <span
                key={ci}
                className="letter-in"
                style={{ animationDelay: `${delay}s` }}
              >
                {ch}
              </span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-center overflow-hidden pt-16">
      {/* background layers */}
      <div className="grid-pattern absolute inset-0 -z-20" aria-hidden />
      <div
        className="animate-orb absolute -right-24 top-10 -z-10 h-80 w-80 rounded-full bg-brand-purple/30 blur-[110px]"
        aria-hidden
      />
      <div
        className="animate-orb absolute -left-24 bottom-0 -z-10 h-96 w-96 rounded-full bg-brand-cyan/25 blur-[120px]"
        style={{ animationDelay: '-6s' }}
        aria-hidden
      />

      <div className="mx-auto w-full max-w-5xl px-5 py-20 text-center md:px-8">
        <div
          className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-muted-foreground opacity-0"
          style={{ animationDelay: '0.05s' }}
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-brand-green" />
          פיתוח כלים דיגיטליים לעסקים בישראל
        </div>

        <AnimatedTitle />

        <p
          className="animate-fade-up mx-auto mt-7 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground opacity-0 sm:text-lg"
          style={{ animationDelay: '1.1s' }}
        >
          לא מוכרים לכם טכנולוגיה — פותרים לכם בעיה. אפליקציות, בוטים, תוספים
          וטפסים חכמים שנבנים בדיוק סביב הדרך שבה העסק שלכם עובד.
        </p>

        <div
          className="animate-fade-up mt-9 flex flex-col items-center justify-center gap-3 opacity-0 sm:flex-row"
          style={{ animationDelay: '1.35s' }}
        >
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3.5 font-semibold text-black shadow-[0_0_30px_-6px_var(--brand-green)] transition-transform duration-300 hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            דברו איתנו בוואטסאפ
          </a>
          <a
            href="#how"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-semibold text-foreground transition-colors duration-300 hover:border-white/40 hover:bg-white/5"
          >
            איך זה עובד
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          </a>
        </div>
      </div>

      {/* Marquee stats */}
      <div
        className="animate-fade-up relative mt-6 flex overflow-hidden border-y border-white/10 py-4 opacity-0 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
        style={{ animationDelay: '1.6s' }}
      >
        <div className="animate-marquee flex shrink-0 items-center gap-10 pl-10">
          {[...STATS, ...STATS].map((s, i) => (
            <div key={i} className="flex items-center gap-10 whitespace-nowrap">
              <span
                className="text-lg font-bold text-gradient sm:text-xl"
                style={{ fontFamily: "var(--font-heebo), 'Segoe UI Symbol', 'Apple Color Emoji', sans-serif" }}
              >
                {s}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
