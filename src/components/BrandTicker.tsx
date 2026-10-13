import React from 'react'
import { brandsData } from '../data/brandsData'
import { useLanguage } from '../context/LanguageContext'

export const BrandTicker: React.FC = () => {
  const { t } = useLanguage()

  // Double list to create a seamless infinite loop
  const duplicatedBrands = [...brandsData, ...brandsData, ...brandsData]

  return (
    <section className="relative py-12 bg-primary-green overflow-hidden border-y border-accent-gold/20 select-none">
      {/* Decorative gradient masks for soft edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-primary-green via-primary-green/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-primary-green via-primary-green/90 to-transparent z-10 pointer-events-none" />

      {/* Subtle section label */}
      <div className="text-center mb-6">
        <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-accent-gold/80">
          {t('marquee.label')}
        </span>
      </div>

      {/* Marquee wrapper */}
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex items-center gap-12 sm:gap-20 whitespace-nowrap">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex items-center gap-4 px-6 py-3 rounded-full bg-secondary-green/30 border border-accent-gold/15 backdrop-blur-sm pointer-events-none transition-all duration-300"
            >
              <span className="text-accent-gold text-lg">{brand.symbol}</span>
              <div className="flex flex-col">
                <span className="font-cinzel text-sm sm:text-base font-bold tracking-[0.2em] text-bone-white">
                  {brand.name}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-vertex-silver/70">
                  {brand.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
