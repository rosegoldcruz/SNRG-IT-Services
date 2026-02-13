import Link from "next/link"
import { ArrowLeft, ShieldAlert } from "lucide-react"
import { Navbar } from "@/components/ui/navbar"
import { Button } from "@/components/ui/button"
import { ComplianceBadge } from "@/components/ui/compliance-badge"
import { KineticHeading } from "@/components/ui/kinetic-heading"

const threatEvents = [
  { ip: "185.91.77.10", region: "Unknown Region", status: "BLOCKED" },
  { ip: "46.19.140.8", region: "Unknown Region", status: "BLOCKED" },
  { ip: "103.144.29.22", region: "Unknown Region", status: "BLOCKED" },
  { ip: "91.227.14.61", region: "Unknown Region", status: "BLOCKED" },
]

export default function ComplianceGradeDefensePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0F172A" }}>
      <Navbar />
      <ComplianceBadge />

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto space-y-10">
          <div>
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/10 mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <KineticHeading title="Compliance-Grade Defense" />
            <p className="mt-4 text-gray-300 max-w-3xl text-lg">
              Your practice is one breach away from disbarment. We don&apos;t just protect files; we enforce a
              permanent security perimeter.
            </p>
          </div>

          <div className="rounded-xl border border-[#38BDF8]/40 bg-white/5 p-6">
            <p className="text-[#38BDF8] font-mono text-sm uppercase tracking-wider">Vernacular</p>
            <p className="mt-2 text-gray-200 font-mono">
              Zero-Trust Architecture // Cryptographic Certainty // ABA/HIPAA Enforcement // Defense-in-Depth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-2 text-[#38BDF8] mb-4">
                <ShieldAlert className="h-5 w-5" />
                <h2 className="font-semibold">Live Threat Map</h2>
              </div>
              <div className="space-y-3">
                {threatEvents.map((event) => (
                  <div key={event.ip} className="flex items-center justify-between rounded-md border border-white/10 px-3 py-2">
                    <span className="text-gray-300 font-mono text-sm">{event.ip}</span>
                    <span className="text-gray-400 text-sm">{event.region}</span>
                    <span className="text-[#38BDF8] font-semibold text-xs">{event.status}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold text-white">Key Copy Block</h2>
              <p className="mt-3 text-gray-200 leading-relaxed">
                HIPAA & HITECH Native: Every server, endpoint, and voice packet is encrypted at the hardware level.
                We provide the BAA; you provide the legal expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
