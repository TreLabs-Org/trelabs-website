import { MessageCircle } from 'lucide-react'

const WHATSAPP = 'https://wa.me/972542557732'

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 md:flex-row md:px-8">
        <a href="#top" className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-purple to-brand-cyan text-sm font-black text-white">
            T
          </span>
          <span>
            Tre<span className="text-gradient">Labs</span>
          </span>
        </a>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} TreLabs · כל הזכויות שמורות
        </p>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-brand-green"
        >
          <MessageCircle className="h-4 w-4" />
          וואטסאפ
        </a>
      </div>
    </footer>
  )
}
