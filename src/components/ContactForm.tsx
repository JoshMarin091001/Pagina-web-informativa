import React, { useState } from 'react'
import { Send, Phone, Mail, Building, User, MapPin, MessageSquare, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

interface FormData {
  nombre: string
  apellido: string
  telefono: string
  empresa: string
  correo: string
  puesto: string
  tamano: string
  estado: string
  mensaje: string
}

const initialForm: FormData = {
  nombre: '',
  apellido: '',
  telefono: '',
  empresa: '',
  correo: '',
  puesto: '',
  tamano: '',
  estado: '',
  mensaje: '',
}

export const ContactForm: React.FC<{ serviceContext?: string }> = ({ serviceContext }) => {
  const { t } = useLanguage()
  const [form, setForm] = useState<FormData>(initialForm)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  // Target WhatsApp phone number (Mexican country code +52)
  const WHATSAPP_NUMBER = '5215512345678'

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}

    if (!form.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio'
    if (!form.telefono.trim()) newErrors.telefono = 'El teléfono es obligatorio'
    if (!form.empresa.trim()) newErrors.empresa = 'El nombre de la empresa es obligatorio'
    if (!form.correo.trim()) {
      newErrors.correo = 'El correo es obligatorio'
    } else if (!/\S+@\S+\.\S+/.test(form.correo)) {
      newErrors.correo = 'Ingresa un correo electrónico válido'
    }
    if (!form.puesto) newErrors.puesto = 'Selecciona tu puesto en la empresa'
    if (!form.tamano) newErrors.tamano = 'Selecciona el tamaño de la empresa'
    if (!form.estado.trim()) newErrors.estado = 'El estado o región es obligatorio'
    if (!form.mensaje.trim()) newErrors.mensaje = 'Por favor explícanos cómo te podemos ayudar'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    // Format the URL-encoded message for WhatsApp
    const introContext = serviceContext
      ? `*INTERÉS:* ${serviceContext}\n\n`
      : ''

    const messageLines = [
      `🏛️ *NUEVA SOLICITUD DE CONTACTO - VERTEX*`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━`,
      introContext,
      `👤 *Cliente:* ${form.nombre} ${form.apellido}`.trim(),
      `🏢 *Empresa:* ${form.empresa}`,
      `💼 *Puesto:* ${form.puesto}`,
      `👥 *Tamaño Empresa:* ${form.tamano}`,
      `📍 *Ubicación:* ${form.estado}`,
      `📧 *Correo Corporativo:* ${form.correo}`,
      `📱 *Teléfono:* ${form.telefono}`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `💬 *Requerimiento del Proyecto:*`,
      `${form.mensaje}`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `Enviado desde el portal oficial de VERTEX.`,
    ]

    const fullMessage = messageLines.join('\n')
    const encodedMessage = encodeURIComponent(fullMessage)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`

    setSubmitted(true)

    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="contacto" className="relative py-24 sm:py-32 bg-primary-green overflow-hidden border-t border-accent-gold/20">
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-secondary-green/30 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-green/70 border border-accent-gold/30 text-accent-gold text-xs font-semibold tracking-widest uppercase mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t('contact.tag')}</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-bone-white tracking-wider mb-4 leading-tight">
            {t('contact.title')}
          </h2>

          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto mb-5" />

          <p className="text-sm sm:text-base text-vertex-silver/90 font-light leading-relaxed">
            {t('contact.subtitle')}
          </p>

          {serviceContext && (
            <div className="mt-4 inline-block px-4 py-1.5 rounded-full bg-secondary-green/60 border border-accent-gold/40 text-xs font-semibold text-accent-gold">
              Consulta específica para: {serviceContext}
            </div>
          )}
        </div>

        {/* Contact Form Card */}
        <div className="bg-secondary-green/35 border-2 border-accent-gold/35 rounded-2xl p-6 sm:p-10 md:p-12 shadow-2xl shadow-black/80 backdrop-blur-xl">
          {submitted ? (
            <div className="text-center py-12 space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-accent-gold/20 text-accent-gold flex items-center justify-center mx-auto border border-accent-gold/50">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-bone-white">
                ¡Solicitud Generada con Éxito!
              </h3>
              <p className="text-sm sm:text-base text-vertex-silver/90 max-w-lg mx-auto">
                Hemos preparado tu información y abierto tu enlace a WhatsApp. Si la ventana no abrió automáticamente, puedes reenviarla o contactarnos de nuevo.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false)
                  setForm(initialForm)
                }}
                className="px-6 py-2.5 rounded-full border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-primary-green transition-colors text-xs font-semibold uppercase tracking-wider"
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {/* Nombre* */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-accent-gold mb-2">
                    {t('contact.name')} <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-vertex-silver/60 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder={t('contact.name_placeholder')}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-primary-green/80 border text-sm text-bone-white placeholder-vertex-silver/40 focus:outline-none focus:ring-2 focus:ring-accent-gold/60 transition-all ${
                        errors.nombre ? 'border-red-400' : 'border-accent-gold/25'
                      }`}
                    />
                  </div>
                  {errors.nombre && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.nombre}
                    </p>
                  )}
                </div>

                {/* Apellido */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-accent-gold mb-2">
                    {t('contact.lastname')}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-vertex-silver/60 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      name="apellido"
                      value={form.apellido}
                      onChange={handleChange}
                      placeholder={t('contact.lastname_placeholder')}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-primary-green/80 border border-accent-gold/25 text-sm text-bone-white placeholder-vertex-silver/40 focus:outline-none focus:ring-2 focus:ring-accent-gold/60 transition-all"
                    />
                  </div>
                </div>

                {/* Teléfono* */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-accent-gold mb-2">
                    {t('contact.phone')} <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-vertex-silver/60 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder={t('contact.phone_placeholder')}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-primary-green/80 border text-sm text-bone-white placeholder-vertex-silver/40 focus:outline-none focus:ring-2 focus:ring-accent-gold/60 transition-all ${
                        errors.telefono ? 'border-red-400' : 'border-accent-gold/25'
                      }`}
                    />
                  </div>
                  {errors.telefono && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.telefono}
                    </p>
                  )}
                </div>

                {/* Nombre de la empresa* */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-accent-gold mb-2">
                    {t('contact.company')} <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-vertex-silver/60 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      name="empresa"
                      value={form.empresa}
                      onChange={handleChange}
                      placeholder={t('contact.company_placeholder')}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-primary-green/80 border text-sm text-bone-white placeholder-vertex-silver/40 focus:outline-none focus:ring-2 focus:ring-accent-gold/60 transition-all ${
                        errors.empresa ? 'border-red-400' : 'border-accent-gold/25'
                      }`}
                    />
                  </div>
                  {errors.empresa && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.empresa}
                    </p>
                  )}
                </div>

                {/* Correo corporativo* */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-accent-gold mb-2">
                    {t('contact.email')} <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-vertex-silver/60 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      name="correo"
                      value={form.correo}
                      onChange={handleChange}
                      placeholder={t('contact.email_placeholder')}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-primary-green/80 border text-sm text-bone-white placeholder-vertex-silver/40 focus:outline-none focus:ring-2 focus:ring-accent-gold/60 transition-all ${
                        errors.correo ? 'border-red-400' : 'border-accent-gold/25'
                      }`}
                    />
                  </div>
                  {errors.correo && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.correo}
                    </p>
                  )}
                </div>

                {/* Puesto en la empresa* (Select) */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-accent-gold mb-2">
                    {t('contact.role')} <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="puesto"
                      value={form.puesto}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-xl bg-primary-green/80 border text-sm text-bone-white focus:outline-none focus:ring-2 focus:ring-accent-gold/60 transition-all appearance-none cursor-pointer ${
                        errors.puesto ? 'border-red-400' : 'border-accent-gold/25'
                      }`}
                    >
                      <option value="" className="bg-primary-green text-vertex-silver">
                        {t('contact.role_select')}
                      </option>
                      <option value="Director General / CEO" className="bg-primary-green">
                        {t('contact.role_1')}
                      </option>
                      <option value="Dueño de Negocio / Fundador" className="bg-primary-green">
                        {t('contact.role_2')}
                      </option>
                      <option value="Director de Marketing / CMO" className="bg-primary-green">
                        {t('contact.role_3')}
                      </option>
                      <option value="Brand Manager / Gerente de Marca" className="bg-primary-green">
                        {t('contact.role_4')}
                      </option>
                      <option value="Coordinador de Proyectos" className="bg-primary-green">
                        {t('contact.role_5')}
                      </option>
                      <option value="Otro Puesto Ejecutivo" className="bg-primary-green">
                        {t('contact.role_6')}
                      </option>
                    </select>
                  </div>
                  {errors.puesto && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.puesto}
                    </p>
                  )}
                </div>

                {/* Tamaño de la empresa* (Select) */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-accent-gold mb-2">
                    {t('contact.size')} <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="tamano"
                      value={form.tamano}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-xl bg-primary-green/80 border text-sm text-bone-white focus:outline-none focus:ring-2 focus:ring-accent-gold/60 transition-all appearance-none cursor-pointer ${
                        errors.tamano ? 'border-red-400' : 'border-accent-gold/25'
                      }`}
                    >
                      <option value="" className="bg-primary-green text-vertex-silver">
                        {t('contact.size_select')}
                      </option>
                      <option value="1 - 10 colaboradores" className="bg-primary-green">
                        {t('contact.size_1')}
                      </option>
                      <option value="11 - 50 colaboradores" className="bg-primary-green">
                        {t('contact.size_2')}
                      </option>
                      <option value="51 - 200 colaboradores" className="bg-primary-green">
                        {t('contact.size_3')}
                      </option>
                      <option value="Más de 200 colaboradores" className="bg-primary-green">
                        {t('contact.size_4')}
                      </option>
                    </select>
                  </div>
                  {errors.tamano && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.tamano}
                    </p>
                  )}
                </div>

                {/* Estado o región* */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-accent-gold mb-2">
                    {t('contact.region')} <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-vertex-silver/60 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      name="estado"
                      value={form.estado}
                      onChange={handleChange}
                      placeholder={t('contact.region_placeholder')}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-primary-green/80 border text-sm text-bone-white placeholder-vertex-silver/40 focus:outline-none focus:ring-2 focus:ring-accent-gold/60 transition-all ${
                        errors.estado ? 'border-red-400' : 'border-accent-gold/25'
                      }`}
                    />
                  </div>
                  {errors.estado && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.estado}
                    </p>
                  )}
                </div>
              </div>

              {/* Explícanos cómo te podemos ayudar* (Textarea) */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-accent-gold mb-2">
                  {t('contact.help')} <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="mensaje"
                  rows={4}
                  value={form.mensaje}
                  onChange={handleChange}
                  placeholder={t('contact.help_placeholder')}
                  className={`w-full px-4 py-3 rounded-xl bg-primary-green/80 border text-sm text-bone-white placeholder-vertex-silver/40 focus:outline-none focus:ring-2 focus:ring-accent-gold/60 transition-all resize-none ${
                    errors.mensaje ? 'border-red-400' : 'border-accent-gold/25'
                  }`}
                />
                {errors.mensaje && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.mensaje}
                  </p>
                )}
              </div>

              {/* Submit CTA Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-vertex-silver/70">
                  <ShieldCheck className="w-4 h-4 text-accent-gold" />
                  <span>{t('contact.security')}</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-accent-gold via-[#D8BC82] to-accent-gold text-primary-green font-bold text-sm tracking-wider uppercase shadow-xl shadow-accent-gold/30 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{t('contact.submit')}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
