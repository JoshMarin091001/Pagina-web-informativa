import React from 'react'
import { ServicePageLayout } from '../components/ServicePageLayout'
import { servicesData } from '../data/servicesData'

export const BrandingPage: React.FC = () => {
  return <ServicePageLayout service={servicesData['branding']} />
}
