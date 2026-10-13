import React, { useRef, useEffect, useState } from 'react'
import { Play, Pause, CheckCircle2, VolumeX, Shield, Sparkles } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export const VideoSection: React.FC = () => {
  const { t } = useLanguage()
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const videoElement = videoRef.current
    const containerElement = containerRef.current
    if (!videoElement || !containerElement) return

    // Intersection Observer to autoplay when in view and pause when out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
            videoElement.play().then(() => {
              setIsPlaying(true)
            }).catch(() => {
              // Autoplay policy fallback
              setIsPlaying(false)
            })
          } else {
            videoElement.pause()
            setIsPlaying(false)
          }
        })
      },
      {
        threshold: [0, 0.35, 0.7],
      }
    )

    observer.observe(containerElement)

    return () => {
      observer.disconnect()
    }
  }, [])

  const toggleManualPlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play().then(() => setIsPlaying(true))
    }
  }

  return (
    <section ref={containerRef} className="relative py-24 sm:py-32 bg-primary-green/90 overflow-hidden border-t border-accent-gold/15">
      {/* Subtle decorative glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary-green/30 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Columna Izquierda: Título y texto de presentación */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-green/70 border border-accent-gold/30 text-accent-gold text-xs font-semibold tracking-widest uppercase w-fit mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('video.tag')}</span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-bone-white leading-tight mb-6">
              {t('video.title')}
            </h2>

            <div className="w-16 h-0.5 bg-accent-gold mb-6" />

            <p className="text-base sm:text-lg text-vertex-silver/90 leading-relaxed mb-4">
              {t('video.p1')}
            </p>

            <p className="text-sm sm:text-base text-vertex-silver/80 leading-relaxed mb-8">
              {t('video.p2')}
            </p>

            {/* Feature bullets */}
            <div className="space-y-3.5 mb-8">
              {[t('video.feature1'), t('video.feature2'), t('video.feature3')].map((feat, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm sm:text-base text-bone-white/90 font-medium">
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 text-xs tracking-wider uppercase text-accent-gold font-semibold">
              <Shield className="w-4 h-4 text-accent-gold" />
              <span>Estándar Cinematográfico Certificado VERTEX</span>
            </div>
          </div>

          {/* Columna Derecha: Recuadro con reproductor de video HTML5 */}
          <div className="lg:col-span-6">
            <div
              className="relative rounded-2xl overflow-hidden border-2 border-accent-gold/40 shadow-2xl shadow-black/80 bg-black group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Outer Luxury Frame Accent */}
              <div className="absolute inset-0 border border-accent-gold/20 rounded-2xl pointer-events-none z-20" />

              <video
                ref={videoRef}
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
                poster="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop"
                muted
                playsInline
                loop
                preload="metadata"
                className="w-full h-full aspect-video object-cover cursor-pointer"
                onClick={toggleManualPlay}
              />

              {/* Status overlay badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-primary-green/80 backdrop-blur-md border border-accent-gold/30 text-[11px] font-semibold text-accent-gold tracking-wider">
                <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                <span>{isPlaying ? 'AUTO-PLAY ACTIVO' : 'PAUSADO'}</span>
              </div>

              {/* Muted indicator */}
              <div className="absolute top-4 right-4 z-20 p-1.5 rounded-full bg-primary-green/80 backdrop-blur-md border border-accent-gold/30 text-accent-gold">
                <VolumeX className="w-4 h-4" />
              </div>

              {/* Play/Pause Button on Hover / Click */}
              <div
                className={`absolute inset-0 z-10 flex items-center justify-center bg-black/30 transition-opacity duration-300 cursor-pointer ${isHovered || !isPlaying ? 'opacity-100' : 'opacity-0'
                  }`}
                onClick={toggleManualPlay}
              >
                <div className="w-16 h-16 rounded-full bg-accent-gold text-primary-green flex items-center justify-center shadow-2xl shadow-accent-gold/40 transform hover:scale-110 active:scale-95 transition-transform duration-200">
                  {isPlaying ? (
                    <Pause className="w-7 h-7 fill-current" />
                  ) : (
                    <Play className="w-7 h-7 fill-current translate-x-0.5" />
                  )}
                </div>
              </div>

              {/* Bottom Subtle Gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
