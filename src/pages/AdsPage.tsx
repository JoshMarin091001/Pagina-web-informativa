import React from 'react'
import { ServicePageLayout } from '../components/ServicePageLayout'
import { servicesData } from '../data/servicesData'

export const AdsPage: React.FC = () => {
  return <ServicePageLayout service={servicesData['meta-ads-google-my-business']} />
}
