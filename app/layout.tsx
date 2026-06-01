import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: {
    default: 'SNRG Labs | Systems Native Revenue Growth - Arizona',
    template: '%s | SNRG Labs',
  },
  description:
    'SNRG Labs builds operational platforms, automation systems, and revenue growth engines for businesses. Automate. Synergize. Monetize.',
  keywords: [
    'systems automation arizona',
    'revenue growth systems',
    'operational platform',
    'business automation',
    'SNRG Labs',
    'client acquisition systems',
    'automate synergize monetize',
  ],
  metadataBase: new URL('https://snrglabs.com'),
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://snrglabs.com',
    title: 'SNRG Labs | Systems Native Revenue Growth',
    description:
      'SNRG Labs builds operational platforms, automation systems, and revenue growth engines for businesses.',
    siteName: 'SNRG Labs',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SNRG Labs - Systems Native Revenue Growth',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SNRG Labs | Systems Native Revenue Growth',
    description:
      'SNRG Labs builds operational platforms, automation systems, and revenue growth engines for businesses.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? '',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/snrg.svg', type: 'image/svg+xml' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [{ rel: 'mask-icon', url: '/snrg.svg', color: '#000000' }],
  },
  other: {
    'msapplication-config': '/browserconfig.xml',
    'msapplication-TileColor': '#000000',
    'msapplication-TileImage': '/mstile-150x150.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'SNRG Labs',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${inter.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
