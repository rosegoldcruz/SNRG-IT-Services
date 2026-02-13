import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/ui/navbar"
import { Button } from "@/components/ui/button"
import { ComplianceBadge } from "@/components/ui/compliance-badge"
import { KineticHeading } from "@/components/ui/kinetic-heading"

const nodes = ["US-WEST", "US-CENTRAL", "US-EAST", "EU-PRIMARY", "APAC-EDGE"]

export default function CloudOrchestrationPage() {
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
            <KineticHeading title="Cloud Orchestration" />
            <p className="mt-4 text-gray-300 max-w-3xl text-lg">
              Hardware dies. Clouds don&apos;t. We mirror your entire office in a secure, high-speed virtual environment
              with 100% data persistence.
            </p>
          </div>

          <div className="rounded-xl border border-[#38BDF8]/40 bg-white/5 p-6">
            <p className="text-[#38BDF8] font-mono text-sm uppercase tracking-wider">Vernacular</p>
            <p className="mt-2 text-gray-200 font-mono">
              Digital Twin Infrastructure // High-Velocity Migration // Cloud-Native Persistence // Auto-Scaling
              Elasticity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 flex flex-col items-center justify-center">
              <h2 className="text-xl font-semibold text-white mb-6">Redundant Data Center Mesh</h2>
              <div className="relative h-56 w-56 rounded-full border border-[#38BDF8]/40 animate-spin [animation-duration:14s]">
                <div className="absolute inset-8 rounded-full border border-[#38BDF8]/40" />
                <div className="absolute inset-0 grid place-items-center text-[#38BDF8] font-mono text-sm">GLOBAL CORE</div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                {nodes.map((node) => (
                  <span key={node} className="text-xs font-mono rounded-md border border-white/15 px-2 py-1 text-gray-300">
                    {node}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold text-white">Key Copy Block</h2>
              <p className="mt-3 text-gray-200 leading-relaxed">
                Zero-Friction Migration: We move your entire legacy environment to the cloud in under 48 hours without
                a single minute of downtime. Your staff won&apos;t even notice the switch—only the speed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
