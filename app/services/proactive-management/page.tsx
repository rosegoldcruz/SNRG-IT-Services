import Link from "next/link"
import { ArrowLeft, Activity } from "lucide-react"
import { Navbar } from "@/components/ui/navbar"
import { Button } from "@/components/ui/button"
import { ComplianceBadge } from "@/components/ui/compliance-badge"
import { KineticHeading } from "@/components/ui/kinetic-heading"

const telemetry = ["CPU Drift", "Disk Latency", "Packet Loss", "Memory Volatility", "Thermal Deviation"]

export default function ProactiveManagementPage() {
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
            <KineticHeading title="Proactive Management" />
            <p className="mt-4 text-gray-300 max-w-3xl text-lg">
              While your competitors wait for things to break, our AI agents are already fixing the glitch you didn&apos;t
              even know you had.
            </p>
          </div>

          <div className="rounded-xl border border-[#38BDF8]/40 bg-white/5 p-6">
            <p className="text-[#38BDF8] font-mono text-sm uppercase tracking-wider">Vernacular</p>
            <p className="mt-2 text-gray-200 font-mono">
              Predictive Healing // System Telemetry // Autonomous Resolution // Telemetry-Driven Maintenance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-2 text-[#38BDF8] mb-5">
                <Activity className="h-5 w-5" />
                <h2 className="font-semibold">System Health Pulse</h2>
              </div>
              <div className="flex items-center justify-center mb-6">
                <div className="h-36 w-36 rounded-full border border-[#38BDF8]/40 grid place-items-center animate-pulse">
                  <span className="text-2xl text-white font-semibold">99.9%</span>
                </div>
              </div>
              <div className="space-y-2">
                {telemetry.map((signal) => (
                  <div key={signal} className="rounded-md border border-white/10 px-3 py-2 text-gray-300 text-sm">
                    {signal} // Nominal
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold text-white">Key Copy Block</h2>
              <p className="mt-3 text-gray-200 leading-relaxed">
                Predictive Maintenance: We monitor over 400 telemetry points on every machine. When a hard drive shows
                0.01% erratic behavior, we&apos;ve already dispatched a replacement before it fails.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
