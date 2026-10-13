import React from 'react'
import { ServicePageLayout } from '../components/ServicePageLayout'
import { servicesData } from '../data/servicesData'

export const ActivationsPage: React.FC = () => {
  return <ServicePageLayout service={servicesData['activaciones-de-marcas']} />
}
