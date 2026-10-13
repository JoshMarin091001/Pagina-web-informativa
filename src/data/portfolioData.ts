export interface ProjectItem {
  id: string
  title: {
    ES: string
    EN: string
  }
  category: {
    ES: string
    EN: string
  }
  client: string
  year: string
  thumbnail: string
  images: string[]
  shortDesc: {
    ES: string
    EN: string
  }
  challenge: {
    ES: string
    EN: string
  }
  solution: {
    ES: string
    EN: string
  }
  deliverables: {
    ES: string[]
    EN: string[]
  }
  results: {
    ES: string[]
    EN: string[]
  }
}

export const portfolioData: ProjectItem[] = [
  {
    id: 'aurum-luxury',
    title: {
      ES: 'Aurum Luxury Residences',
      EN: 'Aurum Luxury Residences',
    },
    category: {
      ES: 'Branding & Estrategia Web',
      EN: 'Branding & Web Strategy',
    },
    client: 'Aurum Real Estate Group',
    year: '2025',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop',
    ],
    shortDesc: {
      ES: 'Rebranding completo y plataforma web inmersiva para un desarrollo inmobiliario residencial ultra-lujo en la Riviera.',
      EN: 'Complete rebranding and immersive web platform for an ultra-luxury residential development in the Riviera.',
    },
    challenge: {
      ES: 'El desarrollo contaba con una identidad visual desactualizada que no transmitía exclusividad ni lograba captar la atención de compradores internacionales de alto poder adquisitivo.',
      EN: 'The development had an outdated visual identity that failed to convey exclusivity or capture high-net-worth international buyers.',
    },
    solution: {
      ES: 'Diseñamos una identidad de marca con acabados dorados y tipografía serif noble, acompañada de un sitio web ultrarrápido con recorridos 3D y captación de leads mediante concierge digital.',
      EN: 'We engineered a refined brand identity with golden accents and noble serif typography, paired with an ultra-fast website featuring 3D virtual tours and digital concierge lead capture.',
    },
    deliverables: {
      ES: [
        'Manual de identidad visual y logotipo de lujo',
        'Plataforma web con renderizado interactivo',
        'Brochure editorial impreso con hot stamping',
        'Campaña de Meta Ads para inversores de EE.UU. y Europa',
      ],
      EN: [
        'Visual identity manual and luxury logo mark',
        'Web platform with interactive rendering',
        'Editorial print brochure with foil hot stamping',
        'Meta Ads campaign targeting US and European investors',
      ],
    },
    results: {
      ES: [
        'Venta del 70% de las residencias en los primeros 5 meses',
        '+240% de incremento en solicitudes de citas privadas',
        'ROAS de 8.4x en campañas de pauta digital internacional',
      ],
      EN: [
        '70% of residences sold out within the first 5 months',
        '+240% increase in private consultation bookings',
        '8.4x ROAS on international digital acquisition campaigns',
      ],
    },
  },
  {
    id: 'lumina-haute',
    title: {
      ES: 'Lumina Haute Horlogerie',
      EN: 'Lumina Haute Horlogerie',
    },
    category: {
      ES: 'Activación & Contenido Audiovisual',
      EN: 'Activation & Audiovisual Content',
    },
    client: 'Lumina Timepieces Suiza',
    year: '2025',
    thumbnail: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1000&auto=format&fit=crop',
    ],
    shortDesc: {
      ES: 'Experiencia inmersiva de lanzamiento y serie cinematográfica de Reels para una colección exclusiva de alta relojería.',
      EN: 'Immersive launch gala experience and cinematic Reel series for an exclusive high horology collection.',
    },
    challenge: {
      ES: 'Posicionar el lanzamiento de una pieza de edición limitada entre coleccionistas jóvenes exigentes, rompiendo con los eventos tradicionales del sector.',
      EN: 'Position the launch of a limited edition timepiece among discerning young collectors, disrupting conventional industry events.',
    },
    solution: {
      ES: 'Creamos una pop-up store sensorial con túnel de espejos infinitos y proyecciones dinámicas, coordinando una cobertura audiovisual cinematográfica en 4K.',
      EN: 'We built a sensory pop-up boutique featuring an infinity mirror corridor and dynamic projections, complemented by real-time 4K cinematic storytelling.',
    },
    deliverables: {
      ES: [
        'Diseño y montaje de la experiencia inmersiva',
        '8 piezas audiovisuales cinematográficas para redes sociales',
        'Gestión de personal de hospitalidad de alto nivel',
        'Estrategia de amplificación en Instagram y TikTok',
      ],
      EN: [
        'Spatial design and staging of the immersive pop-up',
        '8 cinematic audiovisual pieces for social feeds',
        'High-caliber VIP hospitality management',
        'Viral amplification strategy across Instagram and TikTok',
      ],
    },
    results: {
      ES: [
        'Agotamiento de la edición limitada en menos de 48 horas',
        '+1.8M de reproducciones orgánicas en Instagram',
        'Cobertura destacada en las principales revistas de moda y negocios',
      ],
      EN: [
        'Limited edition sold out within 48 hours',
        '+1.8M organic views across Instagram Reels',
        'Featured press coverage in top fashion and business publications',
      ],
    },
  },
  {
    id: 'velox-fintech',
    title: {
      ES: 'Velox Capital & Private Wealth',
      EN: 'Velox Capital & Private Wealth',
    },
    category: {
      ES: 'Páginas Web & Meta Ads',
      EN: 'Websites & Meta Ads',
    },
    client: 'Velox Capital Partners',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    ],
    shortDesc: {
      ES: 'Portal de banca privada de ultra-alta velocidad y embudo de prospección B2B de leads para gestión patrimonial.',
      EN: 'Ultra-fast private wealth management portal and B2B lead generation funnel for executive asset management.',
    },
    challenge: {
      ES: 'La firma dependía exclusivamente del boca a boca y carecía de un canal digital que proyectara solidez institucional y generara leads calificados de forma predecible.',
      EN: 'The firm relied solely on word-of-mouth and lacked a digital acquisition engine projecting institutional strength and predictable pipeline generation.',
    },
    solution: {
      ES: 'Desarrollamos una aplicación web moderna con arquitectura SPA, tiempos de carga de 0.6s y embudos publicitarios en LinkedIn y Meta dirigidos a directores C-Level.',
      EN: 'We built a state-of-the-art SPA web platform with 0.6s load speeds and laser-targeted Meta and LinkedIn ad funnels directed to C-level executives.',
    },
    deliverables: {
      ES: [
        'Desarrollo web con TanStack y Tailwind CSS',
        'Calculadora patrimonial interactiva',
        'Estrategia de pauta publicitaria hipersegmentada',
        'Integración con CRM y WhatsApp corporativo',
      ],
      EN: [
        'Web development with TanStack and Tailwind CSS',
        'Interactive wealth projection calculator',
        'Hyper-targeted ad strategy and pixel tracking',
        'Direct CRM synchronization and corporate WhatsApp gateway',
      ],
    },
    results: {
      ES: [
        'Más de $14M USD en nuevos activos captados en 6 meses',
        'Costo por lead calificado reducido en un 52%',
        'Puntuación perfecta de 100 en Google Core Web Vitals',
      ],
      EN: [
        'Over $14M USD in new managed assets acquired in 6 months',
        'Cost per qualified lead decreased by 52%',
        'Perfect 100 score on Google Core Web Vitals',
      ],
    },
  },
  {
    id: 'elysium-resort',
    title: {
      ES: 'Elysium Wellness & Sanctuary',
      EN: 'Elysium Wellness & Sanctuary',
    },
    category: {
      ES: 'Creación de Logotipo & Paquetes de Redes',
      EN: 'Logo Creation & Social Packages',
    },
    client: 'Elysium Hospitality Group',
    year: '2025',
    thumbnail: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000&auto=format&fit=crop',
    ],
    shortDesc: {
      ES: 'Creación de isotipo orgánico sublime y dirección creativa de contenidos sociales para un eco-resort boutique de bienestar.',
      EN: 'Creation of a sublime organic logo mark and creative social direction for a boutique wellness eco-resort.',
    },
    challenge: {
      ES: 'Transmitir serenidad, lujo holístico y sostenibilidad sin caer en los clichés visuales del ecoturismo genérico.',
      EN: 'Convey tranquility, holistic luxury, and environmental sustainability without slipping into generic ecotourism clichés.',
    },
    solution: {
      ES: 'Diseñamos un isotipo inspirado en la geometría botánica sagrada y una paleta de tonos verdes profundos y dorados cálidos, reforzada con fotografía artística de alta sensibilidad.',
      EN: 'We crafted an emblem inspired by sacred botanical geometry and an earthy deep-green and warm-gold palette, amplified by artistic sensory photography.',
    },
    deliverables: {
      ES: [
        'Isotipo geométrico y logotipo tipográfico exclusivo',
        'Manual de aplicaciones para amenidades y textiles',
        'Parrilla mensual de 20 contenidos audiovisuales',
        'Guía de fotografía y estilismo sensorial',
      ],
      EN: [
        'Geometric brand mark and bespoke serif wordmark',
        'Application guidelines for luxury amenities and textiles',
        'Monthly social package of 20 audiovisual assets',
        'Sensory photography and styling guide',
      ],
    },
    results: {
      ES: [
        'Ocupación del 92% durante la temporada de apertura',
        '+38,000 seguidores orgánicos en Instagram en 90 días',
        'Mención en Condé Nast Traveler como "Mejor Nueva Apertura"',
      ],
      EN: [
        '92% booking occupancy throughout opening season',
        '+38,000 organic Instagram followers in 90 days',
        'Featured in Condé Nast Traveler as "Best New Opening"',
      ],
    },
  },
]
