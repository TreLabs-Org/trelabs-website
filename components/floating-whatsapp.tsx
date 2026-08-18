import { MessageCircle } from 'lucide-react'

const WHATSAPP = 'https://wa.me/972542557732'

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="דברו איתנו בוואטסאפ"
      className="animate-pulse-glow fixed bottom-6 left-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-brand-green text-black shadow-lg transition-transform duration-300 hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
