'use client'

import { MessageCircle } from 'lucide-react'
import { useReveal } from './use-reveal'

const WHATSAPP = 'https://wa.me/972542557732'

export function FinalCta() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-5 py-28 md:px-8">
      <div
        ref={ref}
        className="reveal relative overflow-hidden rounded-3xl p-px"
      >
        {/* glowing border */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-purple via-brand-cyan to-brand-purple opacity-70" />
        <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-background px-6 py-20 text-center md:px-16">
          {/* animated orbs */}
          <div className="animate-orb absolute -right-16 -top-16 h-72 w-72 rounded-full bg-brand-purple/25 blur-[100px]" aria-hidden />
          <div
            className="animate-orb absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-brand-cyan/25 blur-[100px]"
            style={{ animationDelay: '-7s' }}
            aria-hidden
          />

          <h2 className="relative text-balance text-3xl font-black leading-tight tracking-tight sm:text-5xl">
            יש בעיה בעסק? <span className="text-gradient">בואו נדבר עליה</span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            שיחה אחת קצרה יכולה לחסוך לכם שעות של עבודה בכל שבוע. בלי התחייבות,
            בלי מכירות אגרסיביות — פשוט נבין אם נוכל לעזור.
          </p>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="animate-pulse-glow relative mt-9 inline-flex items-center gap-2 rounded-full bg-brand-green px-8 py-4 text-lg font-bold text-black transition-transform duration-300 hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            דברו איתנו בוואטסאפ
          </a>
        </div>
      </div>
    </section>
  )
}
