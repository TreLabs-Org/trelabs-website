'use client'

import { Check } from 'lucide-react'
import { useCountUp, useReveal } from './use-reveal'

const COUNTERS = [
  { value: 50, suffix: '+', label: 'עסקים' },
  { value: 85, suffix: '%', label: 'חיסכון בזמן' },
  { value: 30, suffix: '', label: 'ימי פיתוח' },
  { value: 24, suffix: '/7', label: 'זמינות' },
]

const AUDIENCE = [
  'בעלי עסקים קטנים שטובעים במשימות ידניות חוזרות',
  'נותני שירות שמבזבזים שעות על תיאום תורים והודעות',
  'עסקים שמנהלים הכל באקסל ומרגישים שהגיע הזמן לשדרג',
  'מי שקיבל הצעות מנופחות ומחפש פתרון פשוט שפשוט עובד',
]

export function WhoItsFor() {
  const titleRef = useReveal<HTMLDivElement>()
  const bulletsRef = useReveal<HTMLUListElement>()
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-28 md:px-8">
      <div ref={titleRef} className="reveal text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-brand-cyan">
          למי זה מתאים
        </p>
        <h2 className="text-balance text-3xl font-black leading-tight tracking-tight sm:text-5xl">
          המספרים <span className="text-gradient">מדברים בעד עצמם</span>
        </h2>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {COUNTERS.map((c) => (
          <Counter key={c.label} {...c} />
        ))}
      </div>

      <ul ref={bulletsRef} className="reveal mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2">
        {AUDIENCE.map((a) => (
          <li key={a} className="glass flex items-start gap-3 rounded-xl p-5">
            <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-green/15 text-brand-green">
              <Check className="h-4 w-4" />
            </span>
            <span className="leading-relaxed text-muted-foreground">{a}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Counter({
  value,
  suffix,
  label,
}: {
  value: number
  suffix: string
  label: string
}) {
  const { ref, value: current } = useCountUp(value)
  return (
    <div className="glass rounded-2xl p-6 text-center">
      <div className="text-4xl font-black tracking-tight sm:text-5xl">
        <span ref={ref} className="text-gradient">
          {current}
        </span>
        <span className="text-gradient">{suffix}</span>
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  )
}
