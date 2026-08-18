import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { WhatWeDo } from '@/components/what-we-do'
import { HowItWorks } from '@/components/how-it-works'
import { Solutions } from '@/components/solutions'
import { WhoItsFor } from '@/components/who-its-for'
import { FinalCta } from '@/components/final-cta'
import { Footer } from '@/components/footer'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'

export default function Page() {
  return (
    <>
      <div className="grain" aria-hidden />
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <HowItWorks />
        <Solutions />
        <WhoItsFor />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
