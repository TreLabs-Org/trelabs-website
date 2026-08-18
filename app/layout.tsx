import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Heebo } from 'next/font/google'
import './globals.css'

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500', '700', '800', '900'],
  variable: '--font-heebo',
})

export const metadata: Metadata = {
  title: 'TreLabs — בונים לעסק שלכם את הכלי הדיגיטלי שחסר לו',
  description:
    'TreLabs בונה כלים דיגיטליים מותאמים אישית לעסקים קטנים בישראל — אפליקציות, בוטים לוואטסאפ, תוספים, טפסים חכמים ומערכות לניהול תורים.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0A0A0A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl" className={`dark ${heebo.variable}`}>
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
