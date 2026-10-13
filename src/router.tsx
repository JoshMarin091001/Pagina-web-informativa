import React from 'react'
import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from '@tanstack/react-router'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { WhatsappButton } from './components/WhatsappButton'
import { Home } from './pages/Home'
import { SocialMediaPage } from './pages/SocialMediaPage'
import { BrandingPage } from './pages/BrandingPage'
import { ActivationsPage } from './pages/ActivationsPage'
import { WebsitesPage } from './pages/WebsitesPage'
import { AdsPage } from './pages/AdsPage'
import { LogoPage } from './pages/LogoPage'

// Root route with global layout: Header, Main Outlet, Footer, Floating WhatsApp
const rootRoute = createRootRoute({
  component: () => (
    <div className="flex flex-col min-h-screen bg-primary-green text-bone-white selection:bg-accent-gold selection:text-primary-green">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  ),
})

// Route definitions
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const socialRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/paquetes-redes-contenido',
  component: SocialMediaPage,
})

const brandingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/branding',
  component: BrandingPage,
})

const activationsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/activaciones-de-marcas',
  component: ActivationsPage,
})

const websitesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/paginas-web',
  component: WebsitesPage,
})

const adsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/meta-ads-google-my-business',
  component: AdsPage,
})

const logoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/creacion-de-logotipo',
  component: LogoPage,
})

// Route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  socialRoute,
  brandingRoute,
  activationsRoute,
  websitesRoute,
  adsRoute,
  logoRoute,
])

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
