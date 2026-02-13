import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background"
import { SparklesCore } from "@/components/ui/sparkles"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import { Navbar } from "@/components/ui/navbar"
import { Pricing } from "@/components/ui/pricing"
import {
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Clock,
  Shield,
  Cloud,
  PhoneCall,
  Wrench,
  Server,
  Globe,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation Component */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="container mx-auto px-4">
          <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden border-none">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

            <div className="flex h-full">
              {/* Left content */}
              <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text">
                  The Infrastructure of Zero Downtime.
                </h1>
                <p className="mt-4 text-neutral-300 max-w-lg">
                  Deploying AI-driven security and cloud-native management to protect and scale professional firms.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                    Schedule Infrastructure Audit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-neutral-600 text-neutral-300 hover:bg-neutral-800 bg-transparent"
                  >
                    View Managed Support Plans
                  </Button>
                </div>

                <div className="flex items-center gap-8 text-sm text-neutral-400 mt-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>24/7 AI Monitoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Uptime-First SLA Coverage</span>
                  </div>
                </div>
              </div>

              {/* Right content */}
              <div className="flex-1 relative p-8 flex items-center justify-center">
                <div className="relative w-full h-full rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950 via-blue-950/30 to-black overflow-hidden">
                  <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.35),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(34,197,94,0.25),transparent_35%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
                  <div className="relative z-10 h-full flex flex-col items-center justify-center gap-6 text-white">
                    <div className="h-20 w-20 rounded-full border border-white/20 bg-white/10 flex items-center justify-center">
                      <Shield className="h-10 w-10 text-blue-300" />
                    </div>
                    <div className="flex items-center gap-8 text-white/80">
                      <Server className="h-8 w-8" />
                      <Globe className="h-8 w-8" />
                    </div>
                    <p className="text-center text-sm text-neutral-300 max-w-xs">
                      Universal Infrastructure Support for firms that can’t afford a second of downtime.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Still Fighting Fires Across Your Stack?</h2>
              <div className="space-y-4 text-gray-300">
                <p className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  Legacy infrastructure creates hidden outages and expensive downtime
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  Security gaps leave legal, medical, and finance workflows exposed
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  Slow on-prem systems bottleneck teams during critical client hours
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  Reactive IT support resolves issues after damage is already done
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">SNRG Labs Runs Your Infrastructure End-to-End</h3>
              <div className="space-y-4 text-gray-300">
                <p className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  Zero-Trust security architecture enforced across users, devices, and apps
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  Cloud migration and orchestration built for high-speed, compliant operations
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  AI-assisted telephony and communication infrastructure with 100% uptime focus
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  Proactive remediation that fixes issues before your staff notices
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Universal Infrastructure Support</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Aggressive, cloud-native IT management for organizations that cannot afford downtime.
            </p>
          </div>

          <BentoGrid className="lg:grid-rows-2">
            <BentoCard
              name="Compliance-Grade Defense"
              className="lg:col-span-2"
              background={<div className="absolute inset-0 bg-black/80 backdrop-blur-sm border border-white/10" />}
              Icon={Shield}
              description="Zero-Trust architecture, 24/7 ransomware monitoring, and HIPAA/legal-grade data protection for high-stakes operations."
              href="#"
              cta="Learn more"
            />
            <BentoCard
              name="Cloud Orchestration"
              className="lg:col-span-1"
              background={<div className="absolute inset-0 bg-black/80 backdrop-blur-sm border border-white/10" />}
              Icon={Cloud}
              description="Migrate legacy office hardware into secure, high-speed virtual environments built for scale and resilience."
              href="#"
              cta="Learn more"
            />
            <BentoCard
              name="Communication Infrastructure"
              className="lg:col-span-1"
              background={<div className="absolute inset-0 bg-black/80 backdrop-blur-sm border border-white/10" />}
              Icon={PhoneCall}
              description="100% voice uptime focus with AI-powered call routing systems engineered for uninterrupted client communication."
              href="#"
              cta="Learn more"
            />
            <BentoCard
              name="Proactive Management"
              className="lg:col-span-2"
              background={<div className="absolute inset-0 bg-black/80 backdrop-blur-sm border border-white/10" />}
              Icon={Wrench}
              description="We resolve glitches, latency, and hardware failures remotely before your staff even notices."
              href="#"
              cta="Learn more"
            />
          </BentoGrid>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="testimonials" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Reliability Trusted in High-Stakes Environments</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-black/80 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                  <p className="text-gray-300">
                    "Since SNRG Labs took over our infrastructure, we haven’t had a single unplanned outage. Our
                    team finally has peace of mind before every filing deadline."
                  </p>
                  <div>
                    <p className="font-semibold text-white">Alex Martinez</p>
                    <p className="text-sm text-gray-400">Managing Partner, Boutique Litigation Firm</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/80 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                  <p className="text-gray-300">
                    "Their proactive monitoring caught a storage failure before it disrupted patient scheduling. We
                    trust them with every critical system in our practice."
                  </p>
                  <div>
                    <p className="font-semibold text-white">Dr. Rachel Nguyen</p>
                    <p className="text-sm text-gray-400">Director of Operations, Multi-State Specialty Clinic</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/80 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                  <p className="text-gray-300">
                    "We moved from constant IT fire drills to stable, secure operations. SNRG gives our team the
                    confidence to operate at full speed."
                  </p>
                  <div>
                    <p className="font-semibold text-white">Jordan Patel</p>
                    <p className="text-sm text-gray-400">CTO, Regional Manufacturing Group</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Operational Confidence at Scale</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built for teams where every second online matters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-green-900/40 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">24/7</h3>
              <p className="text-gray-300">AI-Driven Monitoring Coverage</p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-blue-900/40 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Zero-Trust</h3>
              <p className="text-gray-300">Security Posture by Default</p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-purple-900/40 rounded-full flex items-center justify-center mx-auto">
                <Cloud className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Cloud-First</h3>
              <p className="text-gray-300">Legacy Modernization Engine</p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-orange-900/40 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">100%</h3>
              <p className="text-gray-300">Communication Uptime Focus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-black">
        <Pricing
          title="Managed Support Plans"
          description="Universal infrastructure coverage for firms that cannot afford a second of downtime"
          plans={[
            {
              name: "Professional Tier",
              price: "1497",
              yearlyPrice: "1197",
              period: "month",
              features: [
                "Zero-Trust baseline setup and endpoint hardening",
                "Business-hour support with priority ticketing",
                "Managed backups and ransomware recovery playbooks",
                "Cloud productivity management and patching",
                "HIPAA/Legal compliance control checklists",
              ],
              description: "For organizations requiring enterprise-grade security and operational reliability",
              buttonText: "Start Professional",
              href: "#contact",
              isPopular: false,
            },
            {
              name: "Business Continuity",
              price: "2997",
              yearlyPrice: "2397",
              period: "month",
              features: [
                "24/7 AI-driven monitoring and incident escalation",
                "Secure cloud migration for legacy office infrastructure",
                "Advanced threat detection with rapid containment",
                "Communication infrastructure with call flow continuity controls",
                "Priority phone and email support",
                "Monthly resilience reviews and optimization",
              ],
              description: "For growing firms that require uninterrupted operations and proactive response",
              buttonText: "Activate Continuity",
              href: "#contact",
              isPopular: true,
            },
            {
              name: "Universal Infrastructure",
              price: "4997",
              yearlyPrice: "3997",
              period: "month",
              features: [
                "Dedicated infrastructure pod for your organization",
                "Cross-site network, voice, and security orchestration",
                "Compliance-first architecture for regulated industries",
                "Custom SLA strategy with executive response lanes",
                "24/7 priority support across all critical systems",
                "Quarterly strategic infrastructure planning",
              ],
              description: "For high-stakes organizations demanding elite, full-spectrum infrastructure management",
              buttonText: "Contact Infrastructure Team",
              href: "#contact",
              isPopular: false,
            },
          ]}
        />
      </section>

      {/* Process Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">3-Step Infrastructure Takeover</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Audit. Migrate. Orchestrate.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-6">
              <div className="h-20 w-20 bg-white text-black rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-white">Audit</h3>
              <p className="text-gray-300">
                We map your current mess, expose critical risk, and define your uptime priorities.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="h-20 w-20 bg-white text-black rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-white">Migrate</h3>
              <p className="text-gray-300">
                We move your operations to secure, high-speed cloud infrastructure without business interruption.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="h-20 w-20 bg-white text-black rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-white">Orchestrate</h3>
              <p className="text-gray-300">
                24/7 AI-driven management begins with proactive response across every endpoint, network, and app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <AnimatedGradientBackground
          Breathing={true}
          gradientColors={["#0A0A0A", "#2979FF", "#FF80AB", "#FF6D00", "#FFD600", "#00E676", "#3D5AFE"]}
          gradientStops={[35, 50, 60, 70, 80, 90, 100]}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="relative h-32 w-full flex flex-col items-center justify-center">
              <div className="w-full absolute inset-0">
                <SparklesCore
                  id="ctasparticles"
                  background="transparent"
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={100}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                  speed={0.8}
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 relative z-20 text-balance">
                Need Infrastructure That Never Blinks?
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-gray-100">
                Schedule an Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Call (480) 364-8205
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative py-20 bg-black border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-black/90" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">SNRG Labs</h3>
                <p className="text-gray-300 leading-relaxed">
                  Elite Managed IT & Infrastructure for legal, medical, finance, and any business that cannot afford
                  downtime.
                </p>
              </div>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Services</h4>
              <ul className="space-y-3">
                {[
                  "Compliance-Grade Defense",
                  "Cloud Orchestration",
                  "Communication Infrastructure",
                  "Proactive Management",
                  "Universal Infrastructure Support",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Company</h4>
              <ul className="space-y-3">
                {[
                  { name: "About Us", href: "#" },
                  { name: "Reliability Stories", href: "#testimonials" },
                  { name: "Blog", href: "#" },
                  { name: "Careers", href: "#" },
                  { name: "Contact", href: "#contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                    <Mail className="h-4 w-4" />
                  </div>
                  <a href="mailto:info@snrglabs.com" className="hover:text-white transition-colors duration-300">
                    info@snrglabs.com
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                    <Mail className="h-4 w-4" />
                  </div>
                  <a href="mailto:support@snrglabs.com" className="hover:text-white transition-colors duration-300">
                    support@snrglabs.com
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                    <Mail className="h-4 w-4" />
                  </div>
                  <a href="mailto:sales@snrglabs.com" className="hover:text-white transition-colors duration-300">
                    sales@snrglabs.com
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                    <Phone className="h-4 w-4" />
                  </div>
                  <a href="tel:+14803648205" className="hover:text-white transition-colors duration-300 font-semibold text-white">
                    (480) 364-8205
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span>Phoenix, AZ</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 mt-16 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <p className="text-gray-400 text-center lg:text-left">© 2026 SNRG Labs. All rights reserved.</p>

              <div className="flex flex-wrap justify-center lg:justify-end space-x-8">
                <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
