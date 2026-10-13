import React from 'react'
import { Sparkles, ArrowRight } from 'lucide-react'
import { useNavigate } from '@tanstack/react-router'
import { useLanguage } from '../context/LanguageContext'

export const PreFooterBanner: React.FC = () => {
  const { t } = useLanguage()
  const navigate = useNavigate()

  const scrollToContact = () => {
    const el = document.getElementById('contacto')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate({ to: '/' }).then(() => {
        setTimeout(() => {
          document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
        }, 150)
      })
    }
  }

  return (
    <section className="relative py-20 bg-gradient-to-r from-secondary-green via-primary-green to-secondary-green border-y border-accent-gold/30 overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-accent-gold/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-accent-gold/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-gold/15 border border-accent-gold/30 text-accent-gold text-xs font-semibold tracking-widest uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ESTRATEGIA & EJECUCIÓN HIGH-TICKET</span>
        </div>

        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-bone-white tracking-wide mb-5 leading-tight">
          {t('banner.title')}
        </h2>

        <p className="text-base sm:text-lg text-beige-premium max-w-2xl mx-auto mb-8 font-light">
          {t('banner.subtitle')}
        </p>

        <button
          onClick={scrollToContact}
          className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-accent-gold via-[#D8BC82] to-accent-gold text-primary-green font-bold text-sm sm:text-base tracking-wider uppercase shadow-2xl shadow-accent-gold/35 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          <span>{t('banner.cta')}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  )
}
