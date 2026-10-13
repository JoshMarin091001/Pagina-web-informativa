import React from 'react'
import { Award, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export const AboutUs: React.FC = () => {
  const { t } = useLanguage()

  const metrics = [
    {
      value: t('about.stat1_value'),
      label: t('about.stat1_label'),
      desc: t('about.stat1_desc'),
      icon: TrendingUp,
    },
    {
      value: t('about.stat2_value'),
      label: t('about.stat2_label'),
      desc: t('about.stat2_desc'),
      icon: Award,
    },
    {
      value: t('about.stat3_value'),
      label: t('about.stat3_label'),
      desc: t('about.stat3_desc'),
      icon: ShieldCheck,
    },
  ]

  return (
    <section id="quienes-somos" className="relative py-24 sm:py-32 bg-primary-green overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary-green/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-accent-gold/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-green/60 border border-accent-gold/30 text-accent-gold text-xs font-semibold tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXCELENCIA & RIGOR ESTRATÉGICO</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-bone-white tracking-wider mb-6 leading-tight">
            {t('about.title')}
          </h2>

          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto mb-6" />

          <p className="text-lg sm:text-xl font-medium text-beige-premium font-cormorant italic mb-6">
            "{t('about.subtitle')}"
          </p>

          <p className="text-base sm:text-lg text-vertex-silver/90 leading-relaxed font-light">
            {t('about.desc')}
          </p>
        </div>

        {/* 3 Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <div
                key={index}
                className="group relative p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-secondary-green/50 to-primary-green/90 border border-accent-gold/20 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent-gold/60 hover:bg-secondary-green/70 hover:shadow-2xl hover:shadow-accent-gold/10 pointer-events-auto select-none cursor-default"
              >
                {/* Subtle top corner decoration */}
                <div className="absolute top-4 right-4 text-accent-gold/40 group-hover:text-accent-gold transition-colors">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="flex flex-col items-center text-center">
                  <span className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-black text-accent-gold tracking-tight mb-3 drop-shadow-md group-hover:scale-105 transition-transform duration-300">
                    {metric.value}
                  </span>

                  <h3 className="font-montserrat text-lg sm:text-xl font-semibold text-bone-white mb-2">
                    {metric.label}
                  </h3>

                  <p className="text-xs sm:text-sm text-vertex-silver/80 leading-relaxed">
                    {metric.desc}
                  </p>
                </div>

                {/* Bottom line accent */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent-gold group-hover:w-2/3 transition-all duration-300" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
