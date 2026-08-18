'use client'

import { Smartphone, Puzzle, MessageSquare, FileText, CalendarClock } from 'lucide-react'
import { useReveal } from './use-reveal'

const SOLUTIONS = [
  {
    icon: Smartphone,
    title: 'אפליקציות',
    text: 'אפליקציות ווב ומובייל בהתאמה אישית, מהירות ונוחות לשימוש.',
  },
  {
    icon: Puzzle,
    title: 'תוספים לכרום',
    text: 'הרחבות דפדפן שחוסכות קליקים וממכנות משימות חוזרות.',
  },
  {
    icon: MessageSquare,
    title: 'בוטים לוואטסאפ',
    text: 'בוטים שעונים ללקוחות, קובעים תורים וסוגרים מכירות אוטומטית.',
  },
  {
    icon: FileText,
    title: 'טפסים חכמים',
    text: 'טפסים שמתחברים למערכות שלכם ומזרימים מידע בלי הקלדה כפולה.',
  },
  {
    icon: CalendarClock,
    title: 'מערכת לניהול תורים',
    text: 'ניהול יומן, תזכורות אוטומטיות והזמנת תורים 24/7 ללקוחות.',
  },
]

export function Solutions() {
  const titleRef = useReveal<HTMLDivElement>()
  return (
    <section id="solutions" className="mx-auto max-w-6xl px-5 py-28 md:px-8">
      <div ref={titleRef} className="reveal max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-brand-cyan">
          פתרונות
        </p>
        <h2 className="text-balance text-3xl font-black leading-tight tracking-tight sm:text-5xl">
          מה אנחנו <span className="text-gradient">בונים</span>
        </h2>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SOLUTIONS.map((s, i) => (
          <SolutionCard key={s.title} s={s} delay={i * 0.08} wide={i === 4} />
        ))}
      </div>
    </section>
  )
}

function SolutionCard({
  s,
  delay,
  wide,
}: {
  s: (typeof SOLUTIONS)[number]
  delay: number
  wide?: boolean
}) {
  const ref = useReveal<HTMLDivElement>()
  const Icon = s.icon
  return (
    <div
      ref={ref}
      className={`reveal group relative rounded-2xl p-px transition-transform duration-500 hover:-translate-y-2 ${
        wide ? 'lg:col-span-1' : ''
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* animated gradient border on hover */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-cyan opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="h-full rounded-[calc(1rem-1px)] bg-card p-7">
        <div className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 text-brand-cyan transition-colors duration-500 group-hover:text-white">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
      </div>
    </div>
  )
}
