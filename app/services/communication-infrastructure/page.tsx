import Link from "next/link"
import { ArrowLeft, PhoneCall } from "lucide-react"
import { Navbar } from "@/components/ui/navbar"
import { Button } from "@/components/ui/button"
import { ComplianceBadge } from "@/components/ui/compliance-badge"
import { KineticHeading } from "@/components/ui/kinetic-heading"

const flow = ["Client Call", "AI Triage", "Priority Routing", "Assigned Attorney"]

export default function CommunicationInfrastructurePage() {
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
            <KineticHeading title="Communication Infrastructure" />
            <p className="mt-4 text-gray-300 max-w-3xl text-lg">
              If the phone doesn&apos;t ring, the firm doesn&apos;t make money. We build communication systems that utilize AI
              to route, record, and resolve every interaction.
            </p>
          </div>

          <div className="rounded-xl border border-[#38BDF8]/40 bg-white/5 p-6">
            <p className="text-[#38BDF8] font-mono text-sm uppercase tracking-wider">Vernacular</p>
            <p className="mt-2 text-gray-200 font-mono">
              Voice Engineering // AI-Powered Routing // Zero-Latency Telephony // Unified Communication Backbone
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-2 text-[#38BDF8] mb-5">
                <PhoneCall className="h-5 w-5" />
                <h2 className="font-semibold">Interactive Routing Logic</h2>
              </div>
              <div className="space-y-3">
                {flow.map((step, index) => (
                  <div key={step}>
                    <div className="rounded-md border border-white/15 px-3 py-2 text-gray-200">{step}</div>
                    {index < flow.length - 1 ? <div className="h-5 border-l border-[#38BDF8]/60 ml-4" /> : null}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold text-white">Key Copy Block</h2>
              <p className="mt-3 text-gray-200 leading-relaxed">
                The AI Switchboard: Deploy custom-trained voice agents that handle initial client intake and
                scheduling, freeing your staff from the receptionist trap.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
