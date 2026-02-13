import { Navbar } from "@/components/ui/navbar"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Cloud, PhoneCall, Wrench } from "lucide-react"
import Link from "next/link"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto space-y-10">
          <div>
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/10 mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white">About SNRG Labs</h1>
            <p className="mt-4 text-gray-300 max-w-3xl">
              SNRG Labs is an elite managed IT and infrastructure firm engineered for organizations where downtime,
              security lapses, and communication failures are unacceptable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold text-white mb-3">What We Architect</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <Shield className="h-5 w-5 mt-0.5 text-blue-300" />
                  Compliance-grade defense and Zero-Trust infrastructure.
                </li>
                <li className="flex items-start gap-2">
                  <Cloud className="h-5 w-5 mt-0.5 text-blue-300" />
                  Cloud-native operations that replace brittle legacy environments.
                </li>
                <li className="flex items-start gap-2">
                  <PhoneCall className="h-5 w-5 mt-0.5 text-blue-300" />
                  Communication systems designed for uptime-first continuity.
                </li>
                <li className="flex items-start gap-2">
                  <Wrench className="h-5 w-5 mt-0.5 text-blue-300" />
                  Proactive remediation before users notice disruption.
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold text-white mb-3">Who We Serve</h2>
              <p className="text-gray-300 mb-3">
                We support legal, healthcare, finance, and enterprise operations that depend on speed, security, and
                consistency.
              </p>
              <p className="text-gray-300">
                If your firm cannot afford a second of downtime, our systems and response model are built for your
                reality.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-blue-500/10 p-6">
            <h3 className="text-lg font-semibold text-white">Mission</h3>
            <p className="mt-2 text-gray-200">
              Build bulletproof infrastructure, enforce uncompromising security, and keep mission-critical teams online
              with confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
