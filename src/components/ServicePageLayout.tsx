import React, { useEffect } from 'react'
import { CheckCircle2, Shield, Award, Zap, Sparkles } from 'lucide-react'
import { type ServiceDetail } from '../data/servicesData'
import { useLanguage } from '../context/LanguageContext'
import { PreFooterBanner } from './PreFooterBanner'

export const ServicePageLayout: React.FC<{ service: ServiceDetail }> = ({ service }) => {
  const { language } = useLanguage()

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [service.slug])

  return (
    <div className="min-h-screen bg-primary-green text-bone-white pt-24 sm:pt-28">

      {/* Subpage Hero */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-b border-accent-gold/20">
        {/* Ambient lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-secondary-green/25 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-green/70 border border-accent-gold/30 text-accent-gold text-xs font-semibold tracking-widest uppercase mb-6 shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOLUCIÓN VERTEX DE ALTO RENDIMIENTO</span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-extrabold text-bone-white tracking-wide mb-6 leading-tight">
            {service.title[language]}
          </h1>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto mb-6" />

          <p className="font-montserrat text-base sm:text-xl text-beige-premium max-w-3xl mx-auto mb-10 font-normal leading-relaxed">
            {service.tagline[language]}
          </p>

          {/* Key KPI Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-12 border-t border-accent-gold/15">
            {service.stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="font-cinzel text-3xl sm:text-4xl font-extrabold text-accent-gold mb-1">
                  {stat.value}
                </span>
                <span className="text-xs text-vertex-silver/80 uppercase tracking-wider text-center">
                  {stat.label[language]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Exposure / Visual Gallery Section */}
      <section className="py-20 sm:py-28 bg-primary-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Visual Showcase */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-accent-gold/35 shadow-2xl shadow-black/80 aspect-[16/9] mb-16">
            <img
              src={service.heroImage}
              alt={service.title[language]}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-green/90 via-transparent to-black/30" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div className="max-w-xl">
                <span className="px-3 py-1 rounded-full bg-accent-gold/20 text-accent-gold border border-accent-gold/40 text-[11px] font-semibold uppercase tracking-wider mb-2 inline-block">
                  Área de Exposición
                </span>
                <h3 className="font-cinzel text-xl sm:text-3xl font-bold text-bone-white drop-shadow-md">
                  Arquitectura Visual y Dominancia de Mercado
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-accent-gold bg-primary-green/80 backdrop-blur-md px-4 py-2 rounded-xl border border-accent-gold/30">
                <Shield className="w-4 h-4" />
                <span>Calidad de Grado Ejecutivo</span>
              </div>
            </div>
          </div>

          {/* 3 Secondary Visual Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {service.galleryImages.map((imgUrl, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden border border-accent-gold/20 aspect-[4/3] shadow-xl"
              >
                <img
                  src={imgUrl}
                  alt={`Showcase ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary-green/40 group-hover:bg-primary-green/10 transition-colors" />
                <div className="absolute bottom-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-black/60 text-[10px] font-medium text-vertex-silver tracking-wider uppercase backdrop-blur-sm">
                    Fase de Ejecución 0{idx + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Service Detail / Explanatory Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Intro & In-Depth Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-accent-gold text-xs font-bold uppercase tracking-widest">
                <Zap className="w-4 h-4" />
                <span>Metodología & Enfoque Estratégico</span>
              </div>

              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-bone-white leading-tight">
                {service.intro[language]}
              </h2>

              <div className="w-16 h-0.5 bg-accent-gold" />

              <div className="space-y-4 text-sm sm:text-base text-vertex-silver/90 leading-relaxed font-light">
                {service.description[language].map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {/* Key Commercial Benefits */}
              <div className="pt-6">
                <h4 className="font-cinzel text-lg font-bold text-accent-gold mb-4">
                  Ventajas Competitivas Clave
                </h4>
                <div className="space-y-3">
                  {service.benefits[language].map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm sm:text-base text-bone-white font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Entregables Clave (Bullet deliverables) */}
            <div id="entregables" className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-secondary-green/40 border-2 border-accent-gold/30 shadow-2xl backdrop-blur-md">
                <div className="flex items-center gap-2 mb-6 text-accent-gold">
                  <Award className="w-5 h-5" />
                  <h3 className="font-cinzel text-lg sm:text-xl font-bold tracking-wide text-bone-white">
                    Entregables del Paquete
                  </h3>
                </div>

                <div className="space-y-5">
                  {service.deliverables[language].map((del, dIdx) => (
                    <div key={dIdx} className="pb-4 border-b border-accent-gold/15 last:border-b-0 last:pb-0">
                      <div className="flex items-center gap-2 text-accent-gold font-semibold text-sm mb-1">
                        <span className="text-xs font-cinzel text-beige-premium">0{dIdx + 1}.</span>
                        <span>{del.title}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-vertex-silver/80 leading-relaxed pl-5 font-light">
                        {del.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Footer Banner (Imagen 8) */}
      <PreFooterBanner />
    </div>
  )
}
