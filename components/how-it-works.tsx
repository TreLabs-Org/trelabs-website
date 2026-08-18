'use client'

import { useEffect, useState } from 'react'
import { useReveal } from './use-reveal'

const STEPS = [
  {
    r: 'I',
    title: 'מספרים לנו מה כואב',
    text: 'שיחה קצרה שבה אתם מתארים את התהליך שגוזל לכם זמן. אנחנו שואלים את השאלות הנכונות.',
  },
  {
    r: 'II',
    title: 'מקבלים פתרון מדויק',
    text: 'אנחנו מתכננים ובונים כלי שמתאים בול לעסק שלכם — ומראים לכם אותו עובד לפני שמשיקים.',
  },
  {
    r: 'III',
    title: 'הכלי עובד בשבילכם',
    text: 'משיקים, מלווים ומשפרים. אתם חוזרים להתעסק בעסק — הכלי עושה את העבודה השחורה.',
  },
]

const TERMINAL_LINES = [
  '$ trelabs deploy --client "בית קפה נועה"',
  '→ מנתח את תהליך העבודה...',
  '→ בונה בוט הזמנות לוואטסאפ...',
  '✓ נבנו 4 מסכים, 2 אוטומציות',
  '→ מפרסם לענן...',
  '✓ הכלי עלה לאוויר · 27 יום',
]

export function HowItWorks() {
  const titleRef = useReveal<HTMLDivElement>()
  return (
    <section id="how" className="relative overflow-hidden py-28">
      <div
        className="animate-orb absolute right-1/4 top-1/3 -z-10 h-72 w-72 rounded-full bg-brand-purple/15 blur-[120px]"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div ref={titleRef} className="reveal max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-brand-cyan">
            איך זה עובד
          </p>
          <h2 className="text-balance text-3xl font-black leading-tight tracking-tight sm:text-5xl">
            שלושה צעדים <span className="text-gradient">מבעיה לפתרון</span>
          </h2>
        </div>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-2">
          <ol className="space-y-4">
            {STEPS.map((s, i) => (
              <Step key={s.r} step={s} fromLeft={i % 2 === 0} delay={i * 0.1} />
            ))}
          </ol>
          <Terminal />
        </div>
      </div>
    </section>
  )
}

function Step({
  step,
  fromLeft,
  delay,
}: {
  step: (typeof STEPS)[number]
  fromLeft: boolean
  delay: number
}) {
  const ref = useReveal<HTMLLIElement>()
  return (
    <li
      ref={ref}
      className={`${fromLeft ? 'reveal-right' : 'reveal-left'} group glass flex items-start gap-5 rounded-2xl p-6 transition-colors duration-500 hover:border-white/25`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 font-serif text-2xl font-bold text-gradient">
        {step.r}
      </span>
      <div>
        <h3 className="text-xl font-bold">{step.title}</h3>
        <p className="mt-2 leading-relaxed text-muted-foreground">{step.text}</p>
      </div>
    </li>
  )
}

function Terminal() {
  const ref = useReveal<HTMLDivElement>()
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          obs.disconnect()
          let i = 0
          const timer = setInterval(() => {
            i++
            setVisible(i)
            if (i >= TERMINAL_LINES.length) clearInterval(timer)
          }, 650)
        }
      },
      { threshold: 0.4 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref])

  return (
    <div ref={ref} className="reveal glass overflow-hidden rounded-2xl" dir="ltr">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
        <span className="h-3 w-3 rounded-full bg-green-400/70" />
        <span className="ml-3 text-xs text-muted-foreground">trelabs — deploy</span>
      </div>
      <pre
        className="min-h-64 p-5 text-left text-[13px] leading-7"
        style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, var(--font-heebo), monospace" }}
      >
        {TERMINAL_LINES.slice(0, visible).map((line, i) => (
          <div
            key={i}
            className={
              line.startsWith('✓')
                ? 'text-brand-green'
                : line.startsWith('→')
                  ? 'text-brand-cyan'
                  : 'text-foreground'
            }
          >
            {line}
          </div>
        ))}
        {visible < TERMINAL_LINES.length && (
          <span className="inline-block h-4 w-2 animate-blink bg-brand-cyan align-middle" />
        )}
      </pre>
    </div>
  )
}
