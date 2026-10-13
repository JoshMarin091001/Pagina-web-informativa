import React, { createContext, useContext, useState, useEffect } from 'react'

export type Language = 'ES' | 'EN'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  ES: {
    // Nav
    'nav.services': 'Servicios',
    'nav.about': '¿Quiénes Somos?',
    'nav.portfolio': 'Portafolio',
    'nav.contact': 'Contáctanos',
    'nav.services.social': 'Paquetes de redes y contenido',
    'nav.services.branding': 'Branding',
    'nav.services.activations': 'Activaciones de marcas',
    'nav.services.web': 'Páginas web',
    'nav.services.ads': 'Meta ads y google my business',
    'nav.services.logo': 'Creación de logotipo',

    // Hero Home
    'hero.badge': 'AGENCIA CREATIVA & ESTRATEGIA DIGITAL DE ÉLITE',
    'hero.title_start': 'TRANSFORMAMOS MARCAS EN',
    'hero.title_highlight': 'LÍDERES DE MERCADO',
    'hero.subtitle': 'Diseño vanguardista, estrategias omnicanal y desarrollo de alta fidelidad para empresas y marcas que no aceptan pasar desapercibidas.',
    'hero.cta_primary': 'Iniciar Diagnóstico',
    'hero.cta_secondary': 'Ver Soluciones',

    // Marquee
    'marquee.label': 'MARCAS QUE CONFÍAN EN LA VISIÓN VERTEX',

    // About Us
    'about.title': '¿Quiénes Somos?',
    'about.subtitle': 'Fusión de estética sofisticada, ingeniería digital y precisión estratégica.',
    'about.desc': 'En VERTEX no creamos simples páginas ni diseños superficiales; forjamos identidades indelebles y ecosistemas digitales que aceleran el crecimiento real de tu negocio. Combinamos creatividad de clase mundial con metodologías orientadas a resultados tangibles.',
    'about.stat1_value': '80+',
    'about.stat1_label': 'Proyectos Ejecutados',
    'about.stat1_desc': 'Desarrollados con máxima excelencia estética y técnica.',
    'about.stat2_value': '2+',
    'about.stat2_label': 'Años de Trayectoria',
    'about.stat2_desc': 'Revolucionando el ecosistema creativo y digital.',
    'about.stat3_value': '100%',
    'about.stat3_label': 'Satisfacción Garantizada',
    'about.stat3_desc': 'Relaciones a largo plazo con métricas comprobables.',

    // Video Section
    'video.tag': 'EXPERIENCIA VISUAL & TECNOLÓGICA',
    'video.title': 'La Dimensión Visual de Nuestra Agencia',
    'video.p1': 'Nuestra filosofía se basa en crear experiencias cinematográficas y memorables. Cada interacción es minuciosamente diseñada para generar impacto emocional inmediato y autoridad de marca.',
    'video.p2': 'Desde activaciones presenciales de alto calibre hasta plataformas de desarrollo web inmersivas, convertimos la visión de nuestros clientes en una ventaja competitiva irremplazable.',
    'video.feature1': 'Producción audiovisual 4K y diseño de sonido envolvente.',
    'video.feature2': 'Animación hiperrealista y prototipado interactivo.',
    'video.feature3': 'Estrategias con enfoque en retención e impacto comercial.',

    // Portfolio
    'portfolio.tag': 'CASOS DE ÉXITO SELECTOS',
    'portfolio.title': 'Portafolio',
    'portfolio.subtitle': 'Una muestra curada de proyectos donde el diseño y la estrategia se unen.',
    'portfolio.btn': 'Ver Más',
    'portfolio.modal.close': 'Cerrar',
    'portfolio.modal.client': 'Cliente',
    'portfolio.modal.deliverables': 'Entregables Clave',
    'portfolio.modal.challenge': 'El Desafío',
    'portfolio.modal.solution': 'Nuestra Solución Estratégica',
    'portfolio.modal.results': 'Impacto Generado',
    'portfolio.modal.contact_btn': 'Quiero una Solución Así',

    // Pre-Footer Banner
    'banner.title': '¿Listo para llevar tu marca al siguiente nivel?',
    'banner.subtitle': 'Diseñamos estrategias personalizadas que posicionan tu negocio en la cúspide de su industria.',
    'banner.cta': 'Agendar diagnóstico estratégico',

    // Contact Form
    'contact.tag': 'HABLEMOS DE TU PROYECTO',
    'contact.title': 'Inicia Tu Transformación con VERTEX',
    'contact.subtitle': 'Completa el formulario y uno de nuestros directores estratégicos coordinará una sesión directa por WhatsApp para atenderte de forma personalizada.',
    'contact.name': 'Nombre',
    'contact.name_placeholder': 'Ej. Valeria',
    'contact.lastname': 'Apellido',
    'contact.lastname_placeholder': 'Ej. Gómez',
    'contact.phone': 'Teléfono (WhatsApp)',
    'contact.phone_placeholder': '+52 55 1234 5678',
    'contact.company': 'Nombre de la empresa',
    'contact.company_placeholder': 'Ej. Lumina Luxury Group',
    'contact.email': 'Correo corporativo',
    'contact.email_placeholder': 'valeria@empresa.com',
    'contact.role': 'Puesto en la empresa',
    'contact.role_select': 'Selecciona tu puesto...',
    'contact.role_1': 'Director General / CEO',
    'contact.role_2': 'Dueño de Negocio / Fundador',
    'contact.role_3': 'Director de Marketing / CMO',
    'contact.role_4': 'Brand Manager / Gerente de Marca',
    'contact.role_5': 'Coordinador de Proyectos',
    'contact.role_6': 'Otro Puesto Ejecutivo',
    'contact.size': 'Tamaño de la empresa',
    'contact.size_select': 'Selecciona el tamaño...',
    'contact.size_1': '1 - 10 colaboradores',
    'contact.size_2': '11 - 50 colaboradores',
    'contact.size_3': '51 - 200 colaboradores',
    'contact.size_4': 'Más de 200 colaboradores',
    'contact.region': 'Estado o región',
    'contact.region_placeholder': 'Ej. Ciudad de México / Madrid / Miami',
    'contact.help': 'Explícanos cómo te podemos ayudar',
    'contact.help_placeholder': 'Describe los objetivos de tu marca, el servicio de interés o el reto actual que deseas resolver...',
    'contact.submit': 'Enviar Mensaje a WhatsApp',
    'contact.security': 'Garantizamos confidencialidad total de tus datos estratégicos.',

    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    'footer.tagline': 'Excelencia en diseño, branding y tecnologías digitales.',
    'footer.quick_links': 'Navegación Rápida',
    'footer.services': 'Nuestras Soluciones',
  },
  EN: {
    // Nav
    'nav.services': 'Services',
    'nav.about': 'About Us',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact Us',
    'nav.services.social': 'Social Media & Content Packages',
    'nav.services.branding': 'Branding',
    'nav.services.activations': 'Brand Activations',
    'nav.services.web': 'Websites',
    'nav.services.ads': 'Meta Ads & Google My Business',
    'nav.services.logo': 'Logo Creation',

    // Hero Home
    'hero.badge': 'ELITE CREATIVE AGENCY & DIGITAL STRATEGY',
    'hero.title_start': 'TRANSFORMING BRANDS INTO',
    'hero.title_highlight': 'MARKET LEADERS',
    'hero.subtitle': 'Avant-garde design, omnichannel strategies, and high-fidelity development for businesses that refuse to go unnoticed.',
    'hero.cta_primary': 'Start Diagnosis',
    'hero.cta_secondary': 'Explore Solutions',

    // Marquee
    'marquee.label': 'BRANDS THAT TRUST THE VERTEX VISION',

    // About Us
    'about.title': 'About Us',
    'about.subtitle': 'A fusion of sophisticated aesthetics, digital engineering, and strategic precision.',
    'about.desc': 'At VERTEX we do not create simple web pages or shallow designs; we forge unforgettable identities and digital ecosystems that drive tangible business growth. We blend world-class creativity with result-oriented methodologies.',
    'about.stat1_value': '80+',
    'about.stat1_label': 'Completed Projects',
    'about.stat1_desc': 'Crafted with the highest aesthetic and technical standards.',
    'about.stat2_value': '2+',
    'about.stat2_label': 'Years of Excellence',
    'about.stat2_desc': 'Revolutionizing the creative and digital space.',
    'about.stat3_value': '100%',
    'about.stat3_label': 'Guaranteed Satisfaction',
    'about.stat3_desc': 'Long-term partnerships backed by measurable impact.',

    // Video Section
    'video.tag': 'VISUAL & TECHNOLOGICAL EXPERIENCE',
    'video.title': 'The Cinematic Dimension of Our Agency',
    'video.p1': 'Our philosophy centers on crafting cinematic and memorable experiences. Every touchpoint is meticulously engineered to evoke immediate emotion and project brand authority.',
    'video.p2': 'From high-profile experiential activations to immersive web applications, we turn our clients’ vision into an irreplaceable market advantage.',
    'video.feature1': '4K audiovisual production and immersive soundscapes.',
    'video.feature2': 'Hyper-realistic motion graphics and interactive prototypes.',
    'video.feature3': 'Strategies focused on retention and high commercial impact.',

    // Portfolio
    'portfolio.tag': 'FEATURED SUCCESS STORIES',
    'portfolio.title': 'Portfolio',
    'portfolio.subtitle': 'A curated showcase where design meets strategic execution.',
    'portfolio.btn': 'See More',
    'portfolio.modal.close': 'Close',
    'portfolio.modal.client': 'Client',
    'portfolio.modal.deliverables': 'Key Deliverables',
    'portfolio.modal.challenge': 'The Challenge',
    'portfolio.modal.solution': 'Strategic Solution',
    'portfolio.modal.results': 'Generated Impact',
    'portfolio.modal.contact_btn': 'I Want a Similar Solution',

    // Pre-Footer Banner
    'banner.title': 'Ready to elevate your brand to the next level?',
    'banner.subtitle': 'We craft tailored strategies that position your company at the apex of its industry.',
    'banner.cta': 'Schedule Strategic Diagnosis',

    // Contact Form
    'contact.tag': 'LET’S TALK ABOUT YOUR PROJECT',
    'contact.title': 'Start Your Transformation with VERTEX',
    'contact.subtitle': 'Fill out the form and one of our executive strategy directors will coordinate an instant WhatsApp session for personalized consultation.',
    'contact.name': 'First Name',
    'contact.name_placeholder': 'e.g. Victoria',
    'contact.lastname': 'Last Name',
    'contact.lastname_placeholder': 'e.g. Reynolds',
    'contact.phone': 'Phone Number (WhatsApp)',
    'contact.phone_placeholder': '+1 (555) 019-2834',
    'contact.company': 'Company Name',
    'contact.company_placeholder': 'e.g. Lumina Luxury Group',
    'contact.email': 'Corporate Email',
    'contact.email_placeholder': 'victoria@company.com',
    'contact.role': 'Position in Company',
    'contact.role_select': 'Select your role...',
    'contact.role_1': 'Chief Executive Officer (CEO)',
    'contact.role_2': 'Business Owner / Founder',
    'contact.role_3': 'Chief Marketing Officer (CMO)',
    'contact.role_4': 'Brand Manager',
    'contact.role_5': 'Project Coordinator',
    'contact.role_6': 'Other Executive Role',
    'contact.size': 'Company Size',
    'contact.size_select': 'Select company size...',
    'contact.size_1': '1 - 10 team members',
    'contact.size_2': '11 - 50 team members',
    'contact.size_3': '51 - 200 team members',
    'contact.size_4': '200+ team members',
    'contact.region': 'State or Region',
    'contact.region_placeholder': 'e.g. Miami, FL / New York / Madrid',
    'contact.help': 'Tell us how we can help you',
    'contact.help_placeholder': 'Describe your brand objectives, the service of interest, or your current business challenge...',
    'contact.submit': 'Send Message to WhatsApp',
    'contact.security': 'We guarantee complete confidentiality of your strategic data.',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.tagline': 'Excellence in design, branding, and high-performance digital engineering.',
    'footer.quick_links': 'Quick Links',
    'footer.services': 'Our Solutions',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ES')

  useEffect(() => {
    const saved = localStorage.getItem('vertex_lang') as Language
    if (saved === 'ES' || saved === 'EN') {
      setLanguage(saved)
    }
  }, [])

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === 'ES' ? 'EN' : 'ES'
      localStorage.setItem('vertex_lang', next)
      return next
    })
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
