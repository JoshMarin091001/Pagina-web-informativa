import React from 'react'
import { ServicePageLayout } from '../components/ServicePageLayout'
import { servicesData } from '../data/servicesData'

export const SocialMediaPage: React.FC = () => {
  return <ServicePageLayout service={servicesData['paquetes-redes-contenido']} />
}
