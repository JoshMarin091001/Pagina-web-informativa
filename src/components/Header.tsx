import React, { useState, useEffect, useRef } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export const Header: React.FC = () => {
  const { t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollYRef = useRef(0)
  const routerState = useRouterState()
  const currentPath = routerState.location.pathname

  // Track scroll direction: hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Background styling
      if (currentScrollY > 30) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Hide / Show logic with threshold to avoid micro-jitter
      if (currentScrollY <= 60) {
        setIsVisible(true)
      } else {
        const diff = currentScrollY - lastScrollYRef.current
        if (diff > 8) {
          // Scrolling down -> hide header
          setIsVisible(false)
        } else if (diff < -8) {
          // Scrolling up -> show header
          setIsVisible(true)
        }
      }

      lastScrollYRef.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll and catch ESC key when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      setIsVisible(true) // Ensure header is visible when menu is open
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false)
        }
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const services = [
    {
      title: t('nav.services.social'),
      to: '/paquetes-redes-contenido',
      tag: 'Social & Content',
    },
    {
      title: t('nav.services.branding'),
      to: '/branding',
      tag: 'Brand Identity',
    },
    {
      title: t('nav.services.activations'),
      to: '/activaciones-de-marcas',
      tag: 'Experiential',
    },
    {
      title: t('nav.services.web'),
      to: '/paginas-web',
      tag: 'Development',
    },
    {
      title: t('nav.services.ads'),
      to: '/meta-ads-google-my-business',
      tag: 'Growth & Ads',
    },
    {
      title: t('nav.services.logo'),
      to: '/creacion-de-logotipo',
      tag: 'Icon & Mark',
    },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full pointer-events-none'
        } ${
          isScrolled
            ? 'bg-primary-green/95 backdrop-blur-md border-b border-accent-gold/20 shadow-2xl py-3.5'
            : 'bg-gradient-to-b from-primary-green/90 via-primary-green/60 to-transparent backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo VERTEX (Left column) */}
            <Link
              to="/"
              className="group flex items-center gap-2 cursor-pointer focus:outline-none flex-shrink-0 w-auto lg:w-[170px]"
            >
              <span className="font-cinzel text-2xl sm:text-3xl font-extrabold tracking-[0.25em] text-accent-gold transition-colors duration-300 group-hover:text-vertex-silver drop-shadow-md">
                VERTEX
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse"></span>
            </Link>

            {/* Desktop Navigation: Perfectly Centered */}
            <nav className="hidden lg:flex flex-1 items-center justify-center gap-3.5 xl:gap-6 flex-nowrap">
              {services.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`text-xs xl:text-sm tracking-wide transition-colors hover:text-accent-gold whitespace-nowrap py-1 ${
                    currentPath === item.to
                      ? 'text-accent-gold font-semibold'
                      : 'text-bone-white/90 font-medium'
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            {/* Desktop Right Balancer (Symmetrical to Logo so menu stays strictly centered) */}
            <div className="hidden lg:block w-[170px] flex-shrink-0 pointer-events-none" />

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-xl text-bone-white hover:text-accent-gold hover:bg-secondary-green/60 border border-accent-gold/25 transition-all focus:outline-none"
                aria-label="Abrir menú de servicios"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Dropdown Modal Overlay (Blocks all background interaction) */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex flex-col justify-start"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de servicios"
        >
          {/* Dropdown Panel sliding down from the top */}
          <div className="w-full bg-primary-green border-b-2 border-accent-gold/40 shadow-2xl px-6 pt-5 pb-8 animate-slide-down flex flex-col max-h-[92vh] overflow-y-auto">
            {/* Top Bar with Brand and "X" Close Button */}
            <div className="flex items-center justify-between pb-4 border-b border-accent-gold/20">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center gap-2 cursor-pointer focus:outline-none"
              >
                <span className="font-cinzel text-2xl font-extrabold tracking-[0.25em] text-accent-gold">
                  VERTEX
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse"></span>
              </Link>

              {/* Close "X" Button */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-accent-gold bg-secondary-green/80 border border-accent-gold/40 hover:bg-accent-gold hover:text-primary-green transition-all shadow-lg active:scale-95 focus:outline-none"
                aria-label="Cerrar menú"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Section Tag */}
            <div className="pt-4 pb-2">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-accent-gold/80">
                Nuestros Servicios
              </span>
            </div>

            {/* Vertical List of Services */}
            <ul className="flex flex-col gap-2.5 mt-2">
              {services.map((item, index) => {
                const isActive = currentPath === item.to
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between p-3.5 rounded-xl border transition-all duration-200 ${
                        isActive
                          ? 'bg-secondary-green border-accent-gold text-accent-gold font-bold shadow-lg shadow-black/40'
                          : 'bg-secondary-green/40 border-accent-gold/20 text-bone-white hover:border-accent-gold hover:bg-secondary-green/80 hover:text-accent-gold'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-cinzel text-xs text-accent-gold/70 font-semibold">
                          0{index + 1}.
                        </span>
                        <span className="text-sm font-medium">
                          {item.title}
                        </span>
                      </div>
                      <ArrowUpRight
                        className={`w-4 h-4 flex-shrink-0 transition-transform ${
                          isActive ? 'text-accent-gold' : 'text-accent-gold/60'
                        }`}
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
