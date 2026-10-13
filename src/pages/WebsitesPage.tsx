import React from 'react'
import { ServicePageLayout } from '../components/ServicePageLayout'
import { servicesData } from '../data/servicesData'

export const WebsitesPage: React.FC = () => {
  return <ServicePageLayout service={servicesData['paginas-web']} />
}
