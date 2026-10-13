import React, { useState, useEffect } from 'react'
import { X, ArrowRight, CheckCircle2, TrendingUp, Sparkles, Calendar, User, ExternalLink } from 'lucide-react'
import { portfolioData, type ProjectItem } from '../data/portfolioData'
import { useLanguage } from '../context/LanguageContext'

export const PortfolioModal: React.FC = () => {
  const { language, t } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)

  // Lock body scroll when modal is active
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedProject])

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleOpenModal = (project: ProjectItem) => {
    setSelectedProject(project)
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
  }

  const handleContactClick = () => {
    handleCloseModal()
    const el = document.getElementById('contacto')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="portafolio" className="relative py-24 sm:py-32 bg-primary-green overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-secondary-green/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-gold/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-green/60 border border-accent-gold/30 text-accent-gold text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('portfolio.tag')}</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-bone-white tracking-wider mb-4">
            {t('portfolio.title')}
          </h2>

          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto mb-6" />

          <p className="text-base sm:text-lg text-vertex-silver/90 font-light">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Project Cards Grid (2x2 / Responsive Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {portfolioData.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-secondary-green/30 border border-accent-gold/25 overflow-hidden transition-all duration-300 hover:border-accent-gold/70 hover:shadow-2xl hover:shadow-accent-gold/10 flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                <img
                  src={project.thumbnail}
                  alt={project.title[language]}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-green via-primary-green/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Category Pill */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-primary-green/85 backdrop-blur-md border border-accent-gold/40 text-[11px] font-semibold tracking-wider text-accent-gold uppercase">
                    {project.category[language]}
                  </span>
                </div>

                {/* Year Pill */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-medium text-vertex-silver">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-bone-white mb-2 group-hover:text-accent-gold transition-colors">
                    {project.title[language]}
                  </h3>

                  <p className="text-xs font-medium text-accent-gold/80 mb-3 tracking-wide flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    <span>{project.client}</span>
                  </p>

                  <p className="text-sm text-vertex-silver/80 line-clamp-2 leading-relaxed mb-6 font-light">
                    {project.shortDesc[language]}
                  </p>
                </div>

                {/* "Ver Más" Button */}
                <div className="pt-4 border-t border-accent-gold/15 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-beige-premium font-medium">
                    Caso de Estudio Completo
                  </span>
                  <button
                    onClick={() => handleOpenModal(project)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-gold text-primary-green font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-beige-premium hover:shadow-lg hover:shadow-accent-gold/30 active:scale-95 cursor-pointer"
                  >
                    <span>{t('portfolio.btn')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Centered Modal / Dialog with backdrop-blur-md */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
        >
          {/* Modal Container: Stop propagation so clicking inside doesn't close */}
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-primary-green/95 border-2 border-accent-gold/50 rounded-2xl shadow-2xl shadow-black overflow-y-auto z-10 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar with Close "X" Button */}
            <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-primary-green/95 backdrop-blur-md border-b border-accent-gold/20">
              <div className="flex items-center gap-2.5">
                <span className="font-cinzel text-lg sm:text-xl font-bold text-accent-gold tracking-wide">
                  {selectedProject.title[language]}
                </span>
                <span className="hidden sm:inline-block text-vertex-silver/40">|</span>
                <span className="hidden sm:inline-block text-xs font-semibold text-vertex-silver uppercase tracking-wider">
                  {selectedProject.category[language]}
                </span>
              </div>

              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="p-2 rounded-full bg-secondary-green/80 text-bone-white hover:text-accent-gold hover:bg-secondary-green border border-accent-gold/30 transition-colors focus:outline-none cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 sm:p-8 md:p-10 space-y-8">
              {/* Hero Image in Modal */}
              <div className="relative rounded-xl overflow-hidden aspect-[16/8] border border-accent-gold/30 shadow-xl">
                <img
                  src={selectedProject.thumbnail}
                  alt={selectedProject.title[language]}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-green via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs sm:text-sm text-bone-white bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                  <span className="flex items-center gap-1.5 font-medium">
                    <User className="w-4 h-4 text-accent-gold" />
                    <strong>{t('portfolio.modal.client')}:</strong> {selectedProject.client}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-accent-gold" />
                    {selectedProject.year}
                  </span>
                </div>
              </div>

              {/* Challenge & Strategic Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {/* Challenge */}
                <div className="p-6 rounded-xl bg-secondary-green/40 border border-accent-gold/15">
                  <h4 className="font-cinzel text-base sm:text-lg font-bold text-beige-premium mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    {t('portfolio.modal.challenge')}
                  </h4>
                  <p className="text-xs sm:text-sm text-vertex-silver/90 leading-relaxed font-light">
                    {selectedProject.challenge[language]}
                  </p>
                </div>

                {/* Solution */}
                <div className="p-6 rounded-xl bg-secondary-green/40 border border-accent-gold/15">
                  <h4 className="font-cinzel text-base sm:text-lg font-bold text-accent-gold mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    {t('portfolio.modal.solution')}
                  </h4>
                  <p className="text-xs sm:text-sm text-bone-white/90 leading-relaxed font-light">
                    {selectedProject.solution[language]}
                  </p>
                </div>
              </div>

              {/* Deliverables List */}
              <div className="p-6 rounded-xl bg-secondary-green/30 border border-accent-gold/20">
                <h4 className="font-cinzel text-base sm:text-lg font-bold text-bone-white mb-4">
                  {t('portfolio.modal.deliverables')}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.deliverables[language].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-accent-gold flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-vertex-silver font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results & Key Metrics */}
              <div className="p-6 rounded-xl bg-gradient-to-r from-secondary-green/70 via-secondary-green/50 to-secondary-green/70 border border-accent-gold/30">
                <h4 className="font-cinzel text-base sm:text-lg font-bold text-accent-gold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-accent-gold" />
                  {t('portfolio.modal.results')}
                </h4>
                <div className="space-y-2.5">
                  {selectedProject.results[language].map((res, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-accent-gold font-bold">✦</span>
                      <span className="text-xs sm:text-sm text-bone-white font-medium">
                        {res}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Action CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-accent-gold/20">
                <button
                  onClick={handleCloseModal}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-accent-gold/40 text-bone-white hover:text-accent-gold hover:border-accent-gold text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  {t('portfolio.modal.close')}
                </button>

                <button
                  onClick={handleContactClick}
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-accent-gold text-primary-green font-bold text-xs sm:text-sm tracking-wider uppercase shadow-xl shadow-accent-gold/25 hover:bg-beige-premium transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{t('portfolio.modal.contact_btn')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
