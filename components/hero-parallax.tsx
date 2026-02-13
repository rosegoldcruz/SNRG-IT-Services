"use client"

import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Spotlight } from "@/components/ui/spotlight"

export function HeroParallax() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.9, 0.7])

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-black pt-28 md:pt-32">
      <motion.video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-video-poster.jpg"
        style={{ y: shouldReduceMotion ? undefined : videoY }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/35" />

      <motion.div
        className="relative z-10 container mx-auto px-4 min-h-[calc(100vh-7rem)] flex items-center"
        style={{
          y: shouldReduceMotion ? undefined : contentY,
          opacity: shouldReduceMotion ? 1 : contentOpacity,
        }}
      >
        <div className="max-w-2xl">
          <Spotlight className="-top-40 left-0 md:left-40 md:-top-20" />
          <h1 className="text-4xl md:text-6xl font-bold text-white bg-gradient-to-b from-neutral-50 to-neutral-300 bg-clip-text text-transparent">
            The Infrastructure of Zero Downtime.
          </h1>
          <p className="mt-5 text-lg text-neutral-200 max-w-xl">
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
              className="border-neutral-500 text-white hover:bg-black/40 bg-transparent"
            >
              View Managed Support Plans
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-neutral-200 mt-6">
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
      </motion.div>
    </section>
  )
}