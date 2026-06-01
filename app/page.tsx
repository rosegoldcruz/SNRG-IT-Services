import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import { HomePageClient } from '@/components/home-page-client'

export const metadata: Metadata = {
  title: 'Systems Native Revenue Growth - Arizona',
  description:
    'SNRG Labs builds operational platforms, automation systems, and revenue growth engines for businesses in Arizona and across the United States.',
  alternates: {
    canonical: 'https://snrglabs.com/',
  },
}

const homeStructuredData = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'Organization'],
  name: 'SNRG Labs',
  alternateName: 'Systems Native Revenue Growth',
  url: 'https://snrglabs.com',
  logo: 'https://snrglabs.com/snrg.svg',
  description:
    'SNRG Labs builds operational platforms, automation systems, and revenue growth engines for businesses.',
  telephone: '480-364-8205',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'AZ',
    addressCountry: 'US',
  },
  areaServed: 'United States',
  sameAs: [],
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeStructuredData} />
      <HomePageClient />
    </>
  )
}
