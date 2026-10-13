import React from 'react'
import { ArrowRight, Sparkles, Star, ChevronDown, CheckCircle2 } from 'lucide-react'
import { BrandTicker } from '../components/BrandTicker'
import { AboutUs } from '../components/AboutUs'
import { VideoSection } from '../components/VideoSection'
import { PortfolioModal } from '../components/PortfolioModal'
import { ContactForm } from '../components/ContactForm'
import { useLanguage } from '../context/LanguageContext'

export const Home: React.FC = () => {
  const { t } = useLanguage()

  const scrollToContact = () => {
    const el = document.getElementById('contacto')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToPortfolio = () => {
    const el = document.getElementById('portafolio')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-primary-green text-bone-white">
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
        {/* Ambient glow backgrounds */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-secondary-green/30 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-accent-gold/15 rounded-full blur-[140px] pointer-events-none" />

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E4D3715_1px,transparent_1px),linear-gradient(to_bottom,#1E4D3715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-green/70 border border-accent-gold/40 text-accent-gold text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-lg shadow-black/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('hero.badge')}</span>
          </div>

          {/* Main Cinzel Heading */}
          <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-bone-white tracking-wider mb-8 leading-[1.08] drop-shadow-xl">
            {t('hero.title_start')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold via-beige-premium to-accent-gold block sm:inline">
              {t('hero.title_highlight')}
            </span>
          </h1>

          {/* Divider */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto mb-8" />

          {/* Subtitle */}
          <p className="font-montserrat text-base sm:text-xl text-vertex-silver/90 max-w-3xl mx-auto mb-10 font-normal leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-accent-gold via-[#D8BC82] to-accent-gold text-primary-green font-extrabold text-sm tracking-wider uppercase shadow-2xl shadow-accent-gold/30 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>{t('hero.cta_primary')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={scrollToPortfolio}
              className="w-full sm:w-auto px-8 sm:px-10 py-4 rounded-full border-2 border-accent-gold/40 bg-secondary-green/30 backdrop-blur-md text-bone-white hover:text-accent-gold hover:border-accent-gold text-sm font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t('hero.cta_secondary')}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Social Proof Mini Bar */}
          <div className="inline-flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-8 border-t border-accent-gold/15 text-xs text-vertex-silver/80">
            <div className="flex items-center gap-2">
              <div className="flex text-accent-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-bone-white">Calificación 5.0</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent-gold" />
              <span>Resultados Medibles & Garantía</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Aceptando Proyectos Selectos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Brand Ticker (Image 2) */}
      <BrandTicker />

      {/* "¿Quiénes Somos?" Section (Image 3) */}
      <AboutUs />

      {/* Interactive Video Section with IntersectionObserver Autoplay (Image 4) */}
      <VideoSection />

      {/* Portfolio with Centered Floating Modal (Image 5) */}
      <PortfolioModal />

      {/* Contact Form (Images 6 & 7) */}
      <ContactForm />
    </div>
  )
}
