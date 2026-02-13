import Link from "next/link"
import { ArrowLeft, MonitorCog } from "lucide-react"
import { Navbar } from "@/components/ui/navbar"
import { Button } from "@/components/ui/button"
import { ComplianceBadge } from "@/components/ui/compliance-badge"
import { KineticHeading } from "@/components/ui/kinetic-heading"

export default function UniversalInfrastructureSupportPage() {
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
            <KineticHeading title="Universal Infrastructure Support" />
            <p className="mt-4 text-gray-300 max-w-3xl text-lg">
              The buck stops with SNRG Labs. From your cloud firewall to your office printer, we own the entire stack.
            </p>
          </div>

          <div className="rounded-xl border border-[#38BDF8]/40 bg-white/5 p-6">
            <p className="text-[#38BDF8] font-mono text-sm uppercase tracking-wider">Vernacular</p>
            <p className="mt-2 text-gray-200 font-mono">
              Unified Operations Center // Multi-Jurisdictional Support // Infrastructure-as-a-Service // Global Uptime
              Commitment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-2 text-[#38BDF8] mb-4">
                <MonitorCog className="h-5 w-5" />
                <h2 className="font-semibold">Unified Dashboard Preview</h2>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Network Integrity",
                  "Endpoint Health",
                  "Voice Uptime",
                  "Cloud Resilience",
                  "Threat Queue",
                  "Compliance Logs",
                ].map((tile) => (
                  <div key={tile} className="rounded-md border border-white/15 px-3 py-3 text-xs text-gray-300 font-mono">
                    {tile}
                    <div className="mt-1 text-[#38BDF8]">NOMINAL</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold text-white">Key Copy Block</h2>
              <p className="mt-3 text-gray-200 leading-relaxed">
                The Global Backbone: Whether your team is in a St. Louis boardroom or a Phoenix home office, they are
                on the same secure, ultra-fast network.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
