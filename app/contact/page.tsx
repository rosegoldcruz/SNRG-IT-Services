import type { Metadata } from 'next'
import { Navbar } from "@/components/ui/navbar"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { JsonLd } from "@/components/JsonLd"

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact SNRG Labs to discuss operational platforms, automation systems, and client acquisition infrastructure for your business.',
  alternates: {
    canonical: 'https://snrglabs.com/contact',
  },
}

const contactStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact SNRG Labs',
  url: 'https://snrglabs.com/contact',
  description:
    'Reach SNRG Labs for operational platform architecture, automation system deployment, and revenue growth support.',
  mainEntity: {
    '@type': 'Organization',
    name: 'SNRG Labs',
    url: 'https://snrglabs.com',
    telephone: '+1-480-364-8205',
    email: 'info@snrglabs.com',
    areaServed: 'United States',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <JsonLd data={contactStructuredData} />
      <Navbar />

      <main className="container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto space-y-10">
          <div>
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/10 mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Contact SNRG Labs</h1>
            <p className="mt-4 text-gray-300 max-w-3xl">
              Speak directly with our infrastructure team and get a response path built for high-stakes operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 space-y-4">
              <h2 className="text-xl font-semibold text-white">Direct Lines</h2>

              <div className="flex items-center gap-3 text-gray-200">
                <Phone className="h-5 w-5 text-blue-300" />
                <a href="tel:+14803648205" className="hover:text-white">
                  (480) 364-8205
                </a>
              </div>

              <div className="flex items-center gap-3 text-gray-200">
                <Mail className="h-5 w-5 text-blue-300" />
                <a href="mailto:info@snrglabs.com" className="hover:text-white">
                  info@snrglabs.com
                </a>
              </div>

              <div className="flex items-center gap-3 text-gray-200">
                <Mail className="h-5 w-5 text-blue-300" />
                <a href="mailto:support@snrglabs.com" className="hover:text-white">
                  support@snrglabs.com
                </a>
              </div>

              <div className="flex items-center gap-3 text-gray-200">
                <Mail className="h-5 w-5 text-blue-300" />
                <a href="mailto:sales@snrglabs.com" className="hover:text-white">
                  sales@snrglabs.com
                </a>
              </div>

              <div className="flex items-center gap-3 text-gray-200">
                <MapPin className="h-5 w-5 text-blue-300" />
                <span>Phoenix, AZ</span>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-blue-500/10 p-6">
              <h2 className="text-xl font-semibold text-white mb-3">Response Priorities</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Critical downtime and outage triage</li>
                <li>• Security incident escalation</li>
                <li>• Cloud migration and infrastructure planning</li>
                <li>• Communication and voice continuity support</li>
              </ul>
              <p className="mt-6 text-gray-300">
                Tell us your current risk profile, systems in scope, and timeline. We’ll map the fastest path to stable,
                secure operations.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
