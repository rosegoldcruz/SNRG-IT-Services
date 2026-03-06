import { ArrowDown, BarChart3, Bot, PhoneCall, Route, Search } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FeaturesSection } from "@/components/features-section"
import { DeveloperExperience } from "@/components/developer-experience"
import { CodeSection } from "@/components/code-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const problemPoints = [
  "Leads falling through the cracks",
  "Slow response times",
  "Disconnected systems",
  "No visibility into where revenue comes from",
]

const revenuePipeline = [
  "Traffic Sources",
  "Website / Landing Pages",
  "CRM Capture (GoHighLevel)",
  "Automated SMS / Call Follow-Up",
  "Pipeline Tracking",
  "Closed Jobs",
]

const revenueVisibilityPoints = [
  "Where leads originate",
  "How fast they’re contacted",
  "Which jobs close",
  "Which marketing sources generate revenue",
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <TestimonialsSection />
      <FeaturesSection />

      <section id="problem" className="border-y border-border/40 bg-card/20 py-24 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">The Problem</h2>
              <p className="text-muted-foreground">
                Most home service companies lose revenue because their lead handling systems are fragmented.
              </p>
              <div className="grid gap-3">
                {problemPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-lg border border-border/60 bg-card/50 px-4 py-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-border/60 bg-card/50 text-foreground shadow-none">
              <CardHeader>
                <CardTitle className="text-2xl">SNRG installs the infrastructure that fixes this.</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We install lead capture, automated response, CRM pipelines, and revenue tracking so every call,
                  form, and message is captured, routed, and measured.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-border/60 bg-background/60 p-4">
                    <Bot className="mb-2 h-5 w-5 text-accent" />
                    <p className="text-sm">Automated lead response</p>
                  </div>
                  <div className="rounded-lg border border-border/60 bg-background/60 p-4">
                    <Route className="mb-2 h-5 w-5 text-accent" />
                    <p className="text-sm">Lead routing & integrations</p>
                  </div>
                  <div className="rounded-lg border border-border/60 bg-background/60 p-4">
                    <PhoneCall className="mb-2 h-5 w-5 text-accent" />
                    <p className="text-sm">Call tracking + SMS follow-up</p>
                  </div>
                  <div className="rounded-lg border border-border/60 bg-background/60 p-4">
                    <Search className="mb-2 h-5 w-5 text-accent" />
                    <p className="text-sm">GBP + local SEO systems</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="revenue-engine" className="py-24 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-3 text-center">
            <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">The Revenue Engine</h2>
            <p className="text-muted-foreground">
              One connected system from traffic to closed jobs, with every stage visible and measurable.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border/60 bg-card/50 p-6">
            <div className="space-y-2">
              {revenuePipeline.map((step, index) => (
                <div key={step} className="flex flex-col items-center">
                  <div className="w-full rounded-lg border border-border/60 bg-background/60 px-4 py-3 text-center text-sm font-medium md:text-base">
                    {step}
                  </div>
                  {index < revenuePipeline.length - 1 && <ArrowDown className="my-2 h-4 w-4 text-accent" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DeveloperExperience />
      <CodeSection />

      <section id="tracking" className="border-y border-border/40 bg-card/20 py-24 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">Know Where Every Dollar Comes From</h2>
              <p className="text-muted-foreground">
                SNRG systems show where every lead comes from, how quickly it gets contacted, and which sources create
                real revenue.
              </p>
              <ul className="space-y-3">
                {revenueVisibilityPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="border-border/60 bg-card/50 text-foreground shadow-none">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <BarChart3 className="h-5 w-5 text-accent" />
                  Revenue Dashboard View
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <div className="rounded-lg border border-border/60 bg-background/60 p-4">
                  <p className="text-foreground">Lead Source Performance</p>
                  <p className="mt-1">Google Business Profile, Local SEO, Paid Ads, Referral</p>
                </div>
                <div className="rounded-lg border border-border/60 bg-background/60 p-4">
                  <p className="text-foreground">Speed-to-Lead Tracking</p>
                  <p className="mt-1">First response time by channel and team member</p>
                </div>
                <div className="rounded-lg border border-border/60 bg-background/60 p-4">
                  <p className="text-foreground">Pipeline-to-Revenue Attribution</p>
                  <p className="mt-1">Which sources close and what they are worth</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mx-auto max-w-4xl text-center text-xl font-medium md:text-2xl">
            SNRG Labs installs the infrastructure that turns marketing into measurable revenue.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
