'use client'

import { useEffect, useState } from 'react'

const LINKS = [
  { label: 'שירותים', href: '#solutions' },
  { label: 'איך זה עובד', href: '#how' },
  { label: 'פתרונות', href: '#what' },
  { label: 'צור קשר', href: '#contact' },
]

const WHATSAPP = 'https://wa.me/972542557732'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/10 bg-background/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        {/* Logo (right in RTL) */}
        <a href="#top" className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-purple to-brand-cyan text-sm font-black text-white shadow-[0_0_20px_-4px_var(--brand-purple)]">
            T
          </span>
          <span>
            Tre<span className="text-gradient">Labs</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative transition-colors after:absolute after:-bottom-1 after:right-0 after:h-px after:w-0 after:bg-gradient-to-l after:from-brand-purple after:to-brand-cyan after:transition-all after:duration-300 hover:text-foreground hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="group relative rounded-full bg-gradient-to-l from-brand-purple to-brand-cyan px-5 py-2 text-sm font-semibold text-white shadow-[0_0_24px_-6px_var(--brand-cyan)] transition-transform duration-300 hover:scale-105"
        >
          דברו איתנו
          <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-l from-brand-purple to-brand-cyan opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-70" />
        </a>
      </nav>
    </header>
  )
}
