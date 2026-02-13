import { Navbar } from "@/components/ui/navbar"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const stories = [
  {
    name: "Alex Martinez",
    role: "Managing Partner, Boutique Litigation Firm",
    quote:
      "Since SNRG Labs took over our infrastructure, we haven’t had a single unplanned outage. Our team finally has peace of mind before every filing deadline.",
  },
  {
    name: "Dr. Rachel Nguyen",
    role: "Director of Operations, Multi-State Specialty Clinic",
    quote:
      "Their proactive monitoring caught a storage failure before it disrupted patient scheduling. We trust them with every critical system in our practice.",
  },
  {
    name: "Jordan Patel",
    role: "CTO, Regional Manufacturing Group",
    quote:
      "We moved from constant IT fire drills to stable, secure operations. SNRG gives our team the confidence to operate at full speed.",
  },
]

export default function ReliabilityStoriesPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white">Reliability Stories</h1>
            <p className="mt-4 text-gray-300 max-w-3xl">
              Real outcomes from teams that moved from reactive support to orchestrated, uptime-first infrastructure.
            </p>
          </div>

          <div className="grid gap-6">
            {stories.map((story) => (
              <div key={story.name} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <div className="text-yellow-400 mb-4">{"★".repeat(5)}</div>
                <p className="text-gray-200 text-lg leading-relaxed">"{story.quote}"</p>
                <div className="mt-4">
                  <p className="text-white font-semibold">{story.name}</p>
                  <p className="text-gray-400">{story.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
