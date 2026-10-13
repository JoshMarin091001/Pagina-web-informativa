import React from 'react'
import { ServicePageLayout } from '../components/ServicePageLayout'
import { servicesData } from '../data/servicesData'

export const LogoPage: React.FC = () => {
  return <ServicePageLayout service={servicesData['creacion-de-logotipo']} />
}
