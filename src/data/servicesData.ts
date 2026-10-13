export interface ServiceDetail {
  slug: string
  route: string
  title: {
    ES: string
    EN: string
  }
  tagline: {
    ES: string
    EN: string
  }
  heroImage: string
  galleryImages: string[]
  intro: {
    ES: string
    EN: string
  }
  description: {
    ES: string[]
    EN: string[]
  }
  deliverables: {
    ES: { title: string; desc: string }[]
    EN: { title: string; desc: string }[]
  }
  benefits: {
    ES: string[]
    EN: string[]
  }
  stats: {
    value: string
    label: { ES: string; EN: string }
  }[]
}

export const servicesData: Record<string, ServiceDetail> = {
  'paquetes-redes-contenido': {
    slug: 'paquetes-redes-contenido',
    route: '/paquetes-redes-contenido',
    title: {
      ES: 'Paquetes de Redes y Contenido',
      EN: 'Social Media & Content Packages',
    },
    tagline: {
      ES: 'Estrategias de contenido cinematográfico y gestión de comunidades de alto impacto que transforman seguidores en clientes leales.',
      EN: 'Cinematic content strategies and high-impact community management that turn followers into devoted clients.',
    },
    heroImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop',
    ],
    intro: {
      ES: 'En la economía de la atención, el contenido genérico es invisible. En VERTEX producimos piezas audiovisuales, copys persuasivos y narrativas de marca que detienen el scroll y construyen autoridad indiscutible.',
      EN: 'In the attention economy, generic content is invisible. At VERTEX, we produce audiovisual pieces, persuasive copy, and brand narratives that stop the scroll and build unquestioned authority.',
    },
    description: {
      ES: [
        'Desarrollamos una parrilla mensual estratégica alineada a los objetivos comerciales de tu empresa, cuidando cada detalle estético, desde la paleta cromática hasta el tono de voz.',
        'No publicamos por publicar: cada Reel, carrusel y publicación tiene un objetivo claro de awareness, engagement o conversión directa.',
        'Incluye monitorización constante, reportes analíticos de rendimiento con KPIs reales y optimización continua de formatos de alta retención.',
      ],
      EN: [
        'We develop a monthly strategic grid aligned with your company’s commercial goals, ensuring absolute aesthetic precision from color palettes to tone of voice.',
        'We never post just to fill space: every Reel, carousel, and post has a specific purpose for awareness, engagement, or direct conversion.',
        'Includes continuous monitoring, analytical KPI reporting, and ongoing optimization of high-retention formats.',
      ],
    },
    deliverables: {
      ES: [
        { title: 'Parrilla Mensual Estratégica', desc: 'Planificación de 16 a 24 contenidos con guionización y dirección de arte.' },
        { title: 'Producción Audiovisual High-End', desc: 'Grabación y edición de Reels y TikToks cinematográficos con audio y color grading profesional.' },
        { title: 'Diseño Gráfico Editorial', desc: 'Carruseles informativos y piezas estáticas de alta gama adaptadas a tu manual de marca.' },
        { title: 'Copywriting Persuasivo', desc: 'Textos orientados a la conversión y llamadas a la acción psicológicamente optimizadas.' },
        { title: 'Community Management Proactivo', desc: 'Respuesta ágil a comentarios y DMs prioritarios para canalizar prospectos calificados.' },
        { title: 'Reportes y Métricas en Tiempo Real', desc: 'Entrega mensual de métricas de crecimiento, alcance, engagement y retorno de inversión.' },
      ],
      EN: [
        { title: 'Strategic Monthly Grid', desc: 'Planning of 16 to 24 pieces with scripting and comprehensive art direction.' },
        { title: 'High-End Audiovisual Production', desc: 'Cinematic recording and editing of Reels and TikToks with professional color grading.' },
        { title: 'Editorial Graphic Design', desc: 'High-end informative carousels and static assets tailored to your brand identity.' },
        { title: 'Persuasive Copywriting', desc: 'Conversion-driven texts and psychologically optimized calls to action.' },
        { title: 'Proactive Community Management', desc: 'Agile replies to comments and priority direct messages to funnel qualified leads.' },
        { title: 'Real-Time Reporting & Analytics', desc: 'Monthly debrief on growth metrics, reach, engagement, and return on ad spend.' },
      ],
    },
    benefits: {
      ES: [
        'Incremento sostenido del engagement de hasta un 320% en 90 días.',
        'Percepción de marca Premium y coherente en todos los canales sociales.',
        'Ahorro de más de 40 horas al mes para tu equipo interno.',
        'Generación constante de leads inbound calificados.',
      ],
      EN: [
        'Sustained engagement lift of up to 320% within 90 days.',
        'Premium, cohesive brand perception across all social channels.',
        'Saves your internal team over 40+ hours every single month.',
        'Consistent generation of qualified inbound leads.',
      ],
    },
    stats: [
      { value: '3.4x', label: { ES: 'Aumento en Alcance Orgánico', EN: 'Organic Reach Multiplier' } },
      { value: '85%', label: { ES: 'Mayor Tasa de Retención en Video', EN: 'Higher Video Retention Rate' } },
      { value: '24/7', label: { ES: 'Monitoreo de Reputación', EN: 'Reputation Monitoring' } },
    ],
  },

  'branding': {
    slug: 'branding',
    route: '/branding',
    title: {
      ES: 'Branding e Identidad Integral',
      EN: 'Branding & Comprehensive Identity',
    },
    tagline: {
      ES: 'Construimos el alma, la voz y el sistema visual de marcas memorables que perduran en el tiempo y dominan su categoría.',
      EN: 'We build the soul, voice, and visual system of memorable brands that stand the test of time and dominate their category.',
    },
    heroImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop',
    ],
    intro: {
      ES: 'El branding no es solo un logo; es la promesa implícita, la personalidad y el valor percibido que hace que un cliente elija tu propuesta antes que cualquier alternativa. En VERTEX forjamos identidades con propósito estratégico.',
      EN: 'Branding is not just a logo; it is the implicit promise, personality, and perceived value that makes a client choose your business over all alternatives. At VERTEX, we forge identities with strategic purpose.',
    },
    description: {
      ES: [
        'Realizamos un profundo análisis de arquetipo de marca, benchmarking competitivo y propuesta única de valor (UVP) antes de trazar la primera línea visual.',
        'Entregamos un manual de marca holístico que abarca sistema tipográfico, paletas de color con valores HEX/Pantone/CMYK, iconografía, patrones gráficos y tono de comunicación verbal.',
        'Diseñamos aplicaciones tanto en entornos digitales como materiales tangibles (papelería ejecutiva, packaging, uniformes, señalética y merchandising).',
      ],
      EN: [
        'We perform deep brand archetype analysis, competitive benchmarking, and Unique Value Proposition (UVP) framing before crafting any visual element.',
        'We deliver a holistic brand book spanning typographic hierarchies, HEX/Pantone/CMYK color codes, bespoke iconography, graphic patterns, and verbal tone.',
        'We engineer touchpoint applications across digital interfaces as well as tangible assets (corporate stationery, packaging, apparel, and signage).',
      ],
    },
    deliverables: {
      ES: [
        { title: 'Brand Strategy & Storytelling', desc: 'Misión, visión, valores, tono de voz y manifiesto fundacional de la marca.' },
        { title: 'Sistema de Identidad Visual', desc: 'Construcción geométrica del logotipo, isotipo, variantes de color y zonas de exclusión.' },
        { title: 'Manual de Marca Integral (Brand Book)', desc: 'Guía técnica de más de 40 páginas con lineamientos de aplicación física y digital.' },
        { title: 'Papelería y Material Corporativo', desc: 'Tarjetas de presentación, membretes, firmas de correo y plantillas para presentaciones.' },
        { title: 'Sistemas de Packaging y Merch', desc: 'Diseño de empaques, bolsas de lujo, etiquetas y merchandising corporativo.' },
        { title: 'Assets Digitales Listos para Campañas', desc: 'Templates editables en Figma/Adobe para redes sociales y banners promocionales.' },
      ],
      EN: [
        { title: 'Brand Strategy & Storytelling', desc: 'Mission, vision, core values, verbal tone, and foundational brand manifesto.' },
        { title: 'Visual Identity System', desc: 'Geometric logo construction, icon mark, color variants, and exclusion zones.' },
        { title: 'Comprehensive Brand Guidelines', desc: '40+ page technical guide detailing digital and print application rules.' },
        { title: 'Corporate Collateral & Stationery', desc: 'Executive business cards, letterheads, email signatures, and deck templates.' },
        { title: 'Packaging & Merchandising Design', desc: 'Luxury boxes, bespoke bags, product labels, and promotional merchandise.' },
        { title: 'Campaign-Ready Digital Assets', desc: 'Modular Figma/Adobe templates for social campaigns and promotional banners.' },
      ],
    },
    benefits: {
      ES: [
        'Multiplica el valor percibido permitiendo elevar tus precios de mercado.',
        'Diferenciación inmediata frente a competidores directos e indirectos.',
        'Coherencia visual y conceptual en cada punto de contacto comercial.',
        'Alineación del equipo interno en torno a una visión compartida y sólida.',
      ],
      EN: [
        'Multiplies perceived value, empowering premium pricing structures.',
        'Instant differentiation against direct and indirect market competitors.',
        'Visual and conceptual coherence across every customer touchpoint.',
        'Unifies internal teams around a shared, formidable vision.',
      ],
    },
    stats: [
      { value: '4.8x', label: { ES: 'Aumento en Valor Percibido', EN: 'Increase in Perceived Value' } },
      { value: '100%', label: { ES: 'Diseño Único y Registrable', EN: 'Unique & Registerable IP' } },
      { value: '40+ Pág', label: { ES: 'Manual de Marca Técnico', EN: 'Technical Brand Guidelines' } },
    ],
  },

  'activaciones-de-marcas': {
    slug: 'activaciones-de-marcas',
    route: '/activaciones-de-marcas',
    title: {
      ES: 'Activaciones de Marcas & Eventos',
      EN: 'Brand Activations & Live Events',
    },
    tagline: {
      ES: 'Experiencias inmersivas, stands de alto diseño y activaciones sensoriales que conectan con tu audiencia cara a cara.',
      EN: 'Immersive experiences, high-design pop-ups, and sensory activations connecting with your audience face-to-face.',
    },
    heroImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop',
    ],
    intro: {
      ES: 'Llevamos tu marca del plano digital al mundo real. Diseñamos vivencias memorables que provocan emociones auténticas, generan menciones espontáneas en redes y dejan huella imborrable en clientes, socios e inversionistas.',
      EN: 'We take your brand from digital screens into real life. We orchestrate unforgettable experiences that spark genuine emotion, generate spontaneous social buzz, and leave an indelible impression on clients and partners.',
    },
    description: {
      ES: [
        'Conceptualizamos eventos corporativos, lanzamientos de producto, stands para ferias internacionales y pop-up stores con arquitectura efímera vanguardista.',
        'Gestionamos la producción integral: escenografía, iluminación arquitectónica, catering premium, staffing calificado y cobertura mediática en vivo.',
        'Incorporamos tecnología interactiva como pantallas LED holográficas, photobooths inteligentes y mecánicas gamificadas para captura de leads.',
      ],
      EN: [
        'We conceptualize corporate galas, product launches, international trade show pavilions, and pop-up boutiques with cutting-edge ephemeral architecture.',
        'We handle 360-degree event production: stage design, architectural lighting, gourmet catering, professional staffing, and live media coverage.',
        'We integrate interactive tech such as holographic LED walls, smart photobooths, and gamified mechanics for frictionless lead capture.',
      ],
    },
    deliverables: {
      ES: [
        { title: 'Renderizado 3D y Arquitectura de Stand', desc: 'Planos volumétricos y recorridos virtuales previos a la construcción del espacio.' },
        { title: 'Producción Técnica y Montaje', desc: 'Audio profesional, iluminación inteligente, estructuras modulares y pantallas de alta resolución.' },
        { title: 'Dinámicas Interactivas y Photobooths', desc: 'Instalaciones fotográficas virales preparadas para generar historias orgánicas en Instagram.' },
        { title: 'Personal de Activación Capacitado', desc: 'Embajadores de marca con conocimiento pleno de tu producto y protocolos de atención.' },
        { title: 'Cobertura Audiovisual en Tiempo Real', desc: 'Videógrafos y fotógrafos generando cápsulas de recap el mismo día del evento.' },
        { title: 'Métricas de Asistencia y Leads', desc: 'Registro digital de asistentes con métricas de interacción y prospección calificada.' },
      ],
      EN: [
        { title: '3D Renders & Space Architecture', desc: 'Volumetric blueprints and virtual walkthroughs before physical construction.' },
        { title: 'Technical Production & Staging', desc: 'Pro audio, smart lighting fixtures, truss structures, and high-res LED panels.' },
        { title: 'Interactive Installations & Photobooths', desc: 'Viral photo zones engineered to drive organic social sharing on Instagram and TikTok.' },
        { title: 'Trained Brand Ambassadors', desc: 'On-site ambassadors briefed on your product catalog and elite hospitality etiquette.' },
        { title: 'Real-Time Audiovisual Coverage', desc: 'Dedicated camera crews crafting high-energy recap reels delivered during the event.' },
        { title: 'Attendee Metrics & Lead Capture', desc: 'Digital check-in systems measuring dwell time, interaction rate, and verified leads.' },
      ],
    },
    benefits: {
      ES: [
        'Conexión emocional directa imposible de replicar en formatos convencionales.',
        'Generación masiva de contenido generado por usuarios (UGC) en redes.',
        'Posicionamiento de prestigio frente a competidores del sector.',
        'Cierre de acuerdos y ventas en un ambiente de alta hospitalidad.',
      ],
      EN: [
        'Direct emotional bond impossible to replicate in conventional channels.',
        'Massive volume of organic user-generated content (UGC) across social feeds.',
        'Prestige positioning above industry competitors.',
        'High-ticket deal closures within an environment of premium hospitality.',
      ],
    },
    stats: [
      { value: '15k+', label: { ES: 'Asistentes Impactados', EN: 'Attendees Impacted' } },
      { value: '98%', label: { ES: 'Evaluación de Experiencia Positiva', EN: 'Positive Experience Rating' } },
      { value: '4.2x', label: { ES: 'Retorno en Menciones Sociales', EN: 'Return in Social Mentions' } },
    ],
  },

  'paginas-web': {
    slug: 'paginas-web',
    route: '/paginas-web',
    title: {
      ES: 'Diseño y Desarrollo de Páginas Web',
      EN: 'Web Design & Modern Development',
    },
    tagline: {
      ES: 'Plataformas web de alto rendimiento, arquitectura moderna y diseño estético que cargan al instante y convierten visitantes en clientes.',
      EN: 'High-performance web platforms, modern architecture, and aesthetic interfaces that load instantly and convert visitors into clients.',
    },
    heroImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
    ],
    intro: {
      ES: 'Tu sitio web es la sede central digital de tu negocio. Desarrollamos aplicaciones web rápidas, seguras y cautivadoras utilizando las tecnologías más avanzadas del mercado (React, TanStack, Tailwind, Next-gen tooling).',
      EN: 'Your website is the digital headquarters of your business. We engineer lightning-fast, secure, and visually captivating web applications using cutting-edge technologies (React, TanStack, Tailwind, next-gen tooling).',
    },
    description: {
      ES: [
        'Cada proyecto se concibe con diseño responsive pixel-perfect, adaptado tanto a pantallas móviles como a monitores 4K de escritorio.',
        'Optimizamos los Core Web Vitals para garantizar tiempos de carga inferiores a 1 segundo, mejorando drásticamente el posicionamiento orgánico en Google (SEO).',
        'Integramos flujos de conversión de alta fricción cero: pasarelas de pago seguras, CRM, WhatsApp chat y analítica avanzada de comportamiento.',
      ],
      EN: [
        'Every project is conceptualized with pixel-perfect responsive design, adapting effortlessly from mobile devices to ultra-wide 4K desktop screens.',
        'We optimize Core Web Vitals to guarantee sub-second load speeds, drastically improving organic Google rankings (SEO).',
        'We integrate zero-friction conversion flows: secure payment gateways, CRM synchronizations, direct WhatsApp bridges, and advanced heatmaps.',
      ],
    },
    deliverables: {
      ES: [
        { title: 'Prototipado UI/UX en Figma', desc: 'Diseño de wireframes interactivos y sistemas de diseño antes de escribir código.' },
        { title: 'Desarrollo en React & TanStack', desc: 'Código modular, componentes shadcn/ui, tipado estricto en TypeScript y cero dependencias obsoletas.' },
        { title: 'Optimización SEO Técnico & Core Web Vitals', desc: 'Indexación avanzada, meta etiquetas dinámicas y puntuaciones superiores a 95 en Google PageSpeed.' },
        { title: 'Conexión a CRM y Formularios Automatizados', desc: 'Notificaciones instantáneas de prospectos en tu WhatsApp, email y base de datos.' },
        { title: 'Certificado SSL y Seguridad Máxima', desc: 'Configuración de dominios, hosting en la nube de alta disponibilidad y protección anti-ataques.' },
        { title: 'Capacitación y Soporte Continuo', desc: 'Guía de uso para tu equipo y mantenimiento proactivo de rendimiento.' },
      ],
      EN: [
        { title: 'Interactive UI/UX Prototyping in Figma', desc: 'Clickable wireframes and atomic design systems crafted before writing any code.' },
        { title: 'Modern React & TanStack Engineering', desc: 'Modular components, shadcn/ui integration, strict TypeScript typing, and clean architecture.' },
        { title: 'Technical SEO & Core Web Vitals Mastery', desc: 'Advanced indexing, rich snippets, dynamic Open Graph tags, and 95+ Google PageSpeed score.' },
        { title: 'CRM & Automated Form Pipelines', desc: 'Instant lead alerts pushed to your WhatsApp, corporate inbox, and database.' },
        { title: 'SSL Certificate & Cloud Hardening', desc: 'Enterprise DNS management, global CDN edge deployment, and DDoS mitigation.' },
        { title: 'Staff Onboarding & Dedicated Support', desc: 'Comprehensive handover guide and proactive performance maintenance.' },
      ],
    },
    benefits: {
      ES: [
        'Carga ultrarrápida que reduce el rebote de usuarios en más de un 60%.',
        'Experiencia móvil nativa que maximiza la tasa de conversión en smartphones.',
        'Código limpio, escalable y sin ataduras a plantillas prefabricadas.',
        'Diseño de lujo que inspira credibilidad inmediata.',
      ],
      EN: [
        'Sub-second load times decreasing visitor bounce rates by over 60%.',
        'App-like mobile experience maximizing conversions on smartphones.',
        'Clean, scalable code free from cookie-cutter theme limitations.',
        'Luxury aesthetic radiating immediate market credibility.',
      ],
    },
    stats: [
      { value: '< 1s', label: { ES: 'Tiempo Promedio de Carga', EN: 'Average Page Load Time' } },
      { value: '99.9%', label: { ES: 'Disponibilidad en la Nube', EN: 'Cloud Uptime Guarantee' } },
      { value: '+140%', label: { ES: 'Conversión de Visitantes', EN: 'Visitor Conversion Lift' } },
    ],
  },

  'meta-ads-google-my-business': {
    slug: 'meta-ads-google-my-business',
    route: '/meta-ads-google-my-business',
    title: {
      ES: 'Meta Ads y Google My Business',
      EN: 'Meta Ads & Google My Business',
    },
    tagline: {
      ES: 'Estrategias de pauta publicitaria hipersegmentada y dominancia local en Google para canalizar clientes listos para comprar.',
      EN: 'Hyper-targeted advertising and local Google dominance engineered to channel ready-to-buy customers into your sales pipeline.',
    },
    heroImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    ],
    intro: {
      ES: 'La publicidad digital rentable no depende de la suerte, sino del análisis de datos riguroso, pruebas A/B continuas y creatividades irresistibles. Maximizamos el retorno de tu presupuesto publicitario (ROAS) en Facebook, Instagram y el motor de búsqueda local de Google.',
      EN: 'Profitable advertising relies on rigorous data science, continuous A/B testing, and irresistible creatives. We maximize the return on ad spend (ROAS) across Facebook, Instagram, and Google Maps local search.',
    },
    description: {
      ES: [
        'Estructuramos embudos de venta completos (TOF, MOF, BOF): desde la captación de prospectos fríos hasta campañas de retargeting dinámico que recuperan carritos y cierran clientes indecisos.',
        'Optimizamos al 100% tu ficha de Google My Business para posicionar tu negocio en el codiciado "Local 3-Pack" de Google Maps, captando búsquedas de alta intención de compra.',
        'Implementamos seguimiento avanzado mediante Meta Conversions API (CAPI) y Google Analytics 4 para atribuir con precisión cada peso invertido.',
      ],
      EN: [
        'We architect comprehensive full-funnel ecosystems (TOF, MOF, BOF): from capturing cold audiences to dynamic retargeting that recovers high-value abandonments.',
        'We optimize your Google Business Profile to place your company at the top of Google Maps "Local 3-Pack", capturing users with immediate buying intent.',
        'We configure server-side tracking with Meta Conversions API (CAPI) and Google Analytics 4 to precisely measure every single advertising dollar.',
      ],
    },
    deliverables: {
      ES: [
        { title: 'Auditoría y Setup de Cuentas Publicitarias', desc: 'Configuración de píxeles, dominios verificados, eventos de conversión y API de conversiones.' },
        { title: 'Creación de Anuncios Visuales de Alto Impacto', desc: 'Diseño de piezas estáticas, carruseles dinámicos y videos UGC optimizados para pauta.' },
        { title: 'Estrategias de Segmentación Avanzada', desc: 'Públicos personalizados, audiencias similares (lookalikes) y segmentación por intereses B2B/B2C.' },
        { title: 'Optimización de Ficha Google My Business', desc: 'Geolocalización, palabras clave de alta intención, fotos 360 y gestión de reseñas.' },
        { title: 'A/B Testing Continuo', desc: 'Pruebas constantes de copys, ganchos visuales y páginas de destino para reducir el CPA.' },
        { title: 'Dashboard de Rendimiento en Vivo', desc: 'Acceso a panel con métricas transparentes de ROAS, costo por lead (CPL) y ventas generadas.' },
      ],
      EN: [
        { title: 'Ad Account Audit & Technical Setup', desc: 'Pixel instrumentation, domain verification, custom conversion events, and server-side CAPI.' },
        { title: 'High-Converting Ad Creatives', desc: 'Static design assets, dynamic carousels, and thumb-stopping UGC reels tailored for conversion.' },
        { title: 'Advanced Audience Segmentation', desc: 'Custom audiences, high-value lookalikes, and refined demographic and interest clusters.' },
        { title: 'Google Business Profile Domination', desc: 'Geo-tagging, high-intent local SEO keywords, photo assets, and reputation workflows.' },
        { title: 'Continuous A/B Experimentation', desc: 'Relentless testing of copy angles, creative hooks, and landing pages to compress CPA.' },
        { title: 'Live Performance Dashboard', desc: '24/7 transparent analytics portal detailing ROAS, cost per qualified lead, and revenue.' },
      ],
    },
    benefits: {
      ES: [
        'Retorno de inversión publicitaria (ROAS) promedio de 3.5x a 7.2x.',
        'Flujo continuo de prospectos calificados directo a tu WhatsApp o CRM.',
        'Dominio en búsquedas locales frente a competidores de tu ciudad.',
        'Cero desperdicio de presupuesto gracias a segmentación quirúrgica.',
      ],
      EN: [
        'Average Return on Ad Spend (ROAS) ranging from 3.5x to 7.2x.',
        'Constant stream of pre-qualified leads directly into WhatsApp or CRM.',
        'Top-ranking dominance in local area searches against local competitors.',
        'Zero ad spend wastage through surgical audience filtering.',
      ],
    },
    stats: [
      { value: '5.2x', label: { ES: 'ROAS Promedio Obtenido', EN: 'Average Generated ROAS' } },
      { value: '-42%', label: { ES: 'Reducción en Costo por Lead', EN: 'Reduction in Cost Per Lead' } },
      { value: '#1', label: { ES: 'Posicionamiento Local en Maps', EN: 'Local Google Maps Rank' } },
    ],
  },

  'creacion-de-logotipo': {
    slug: 'creacion-de-logotipo',
    route: '/creacion-de-logotipo',
    title: {
      ES: 'Creación de Logotipo e Isotipo',
      EN: 'Logo Creation & Iconic Mark',
    },
    tagline: {
      ES: 'Diseñamos símbolos icónicos, atemporales y distintivos que sintetizan la esencia de tu empresa en una imagen imborrable.',
      EN: 'We design iconic, timeless, and distinctive symbols synthesizing your company’s essence into an unforgettable mark.',
    },
    heroImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop',
    ],
    intro: {
      ES: 'El logotipo es la firma visual de tu negocio. Un gran logo no intenta contarlo todo, sino decir lo correcto con máxima fuerza y sofisticación. En VERTEX construimos marcas visuales fundamentadas en geometría sagrada, legibilidad y solidez estética.',
      EN: 'Your logo is the visual signature of your enterprise. A great logo does not try to say everything; it speaks the right truth with undeniable presence and sophistication. At VERTEX, we craft visual symbols rooted in geometric harmony, legibility, and aesthetic strength.',
    },
    description: {
      ES: [
        'Iniciamos con una sesión de conceptualización estratégica para definir la personalidad de la marca: minimalista, prestigiosa, audaz o contemporánea.',
        'Exploramos múltiples rutas creativas construidas desde bocetos manuales hasta vectores de precisión milimétrica.',
        'Validamos la versatilidad del isotipo en todas las escalas: desde un favicon de 16px o app icon hasta señalética monumental en edificios.',
      ],
      EN: [
        'We begin with an executive creative discovery session to establish brand tonality: minimalist, prestigious, bold, or contemporary.',
        'We explore diverse creative routes, transitioning from analog sketches to millimeter-precise vector construction.',
        'We validate the mark’s versatility across all scales: from a 16px favicon or mobile app icon to monumental architectural signage.',
      ],
    },
    deliverables: {
      ES: [
        { title: 'Sesión de Diagnóstico Creativo', desc: 'Exploración de valores, arquetipos visuales y preferencias estilísticas de la marca.' },
        { title: '3 Propuestas Conceptuales Únicas', desc: 'Presentación ejecutiva con fundamentación semiótica y aplicaciones en mockups 3D.' },
        { title: 'Rondas de Pulido y Ajuste', desc: 'Refinamiento minucioso de la opción seleccionada hasta lograr la perfección total.' },
        { title: 'Paquete Maestro de Archivos Vectoriales', desc: 'Entregables en formatos AI, EPS, SVG, PDF, PNG transparente y JPG en alta definición.' },
        { title: 'Variantes de Color y Fondos', desc: 'Versión principal, monocromática (blanco/negro), en oro y variantes para fondos oscuros.' },
        { title: 'Mini Guía de Uso del Logo', desc: 'Especificación de proporciones mínimas, fuentes tipográficas y márgenes de respeto.' },
      ],
      EN: [
        { title: 'Creative Discovery Session', desc: 'Deep dive into brand core values, visual archetypes, and stylistic directions.' },
        { title: '3 Bespoke Conceptual Routes', desc: 'Executive keynote presentation with semiotic rationale and 3D context mockups.' },
        { title: 'Polishing & Refinement Rounds', desc: 'Meticulous micro-adjustments on the chosen concept to achieve complete perfection.' },
        { title: 'Master Vector File Suite', desc: 'Handover in AI, EPS, SVG, PDF, transparent PNG, and ultra-high-definition JPG formats.' },
        { title: 'Full Color & Background Variants', desc: 'Primary palette, monochrome (pure black/white), luxury gold, and inverted dark-mode modes.' },
        { title: 'Logo Quick-Start Usage Guide', desc: 'Clear guidelines specifying minimum scale limits, font families, and safety margins.' },
      ],
    },
    benefits: {
      ES: [
        'Identidad gráfica 100% original, diseñada desde cero y lista para registro de marca.',
        'Legibilidad intachable en medios impresos, bordados, uniformes y pantallas digitales.',
        'Transmite confianza y nivel ejecutivo instantáneo a clientes potenciales.',
        'Atemporalidad garantizada: un diseño que mantiene su vigencia con el paso de los años.',
      ],
      EN: [
        '100% bespoke graphical identity, handcrafted from scratch and ready for trademarking.',
        'Flawless legibility across print collateral, embroidery, uniforms, and digital displays.',
        'Instills immediate trust and executive distinction in prospective clients.',
        'Guaranteed timelessness: a mark designed to endure across generations.',
      ],
    },
    stats: [
      { value: '100%', label: { ES: 'Originalidad Garantizada', EN: 'Guaranteed Originality' } },
      { value: '3', label: { ES: 'Propuestas Conceptuales', EN: 'Bespoke Concept Routes' } },
      { value: 'Vector', label: { ES: 'Calidad Infinita Escalable', EN: 'Infinitely Scalable Vectors' } },
    ],
  },
}
