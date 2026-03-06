"use client"

const testimonials = [
  {
    company: "Kingpin Roofing",
    quote:
      "We were losing calls after-hours and missing form submissions. SNRG installed our CRM pipeline and automated SMS response, and now every lead gets touched immediately.",
    byline: "Operations Lead, Kingpin Roofing",
  },
  {
    company: "G3 Home Remodels",
    quote:
      "Before SNRG, we had no real pipeline visibility. Now we can see where each lead came from, how fast we responded, and which campaigns actually produced closed jobs.",
    byline: "General Manager, G3 Home Remodels",
  },
  {
    company: "Elite HVAC",
    quote:
      "SNRG connected call tracking, forms, and our GoHighLevel pipeline. We stopped guessing and started managing a real revenue system.",
    byline: "Owner, Elite HVAC",
  },
  {
    company: "Precision Cabinets",
    quote:
      "Our speed-to-lead changed overnight. Automated response plus lead routing gave our team a repeatable process that closes more jobs every month.",
    byline: "Sales Director, Precision Cabinets",
  },
  {
    company: "Rapid Restore",
    quote:
      "SNRG installed the infrastructure that made our marketing measurable. We now know exactly which sources generate revenue and where leads were leaking.",
    byline: "Founder, Rapid Restore",
  },
]

export function TestimonialsSection() {
  const items = [...testimonials, ...testimonials]

  return (
    <section className="py-16 border-y border-border/40 bg-card/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-mono text-3xl font-bold tracking-tight sm:text-4xl">
          Trusted by home service teams that need measurable revenue.
        </h2>

        <div className="relative mt-10 marquee">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />

          <div className="overflow-hidden">
            <div className="marquee-track flex w-max gap-6 py-2">
              {items.map((item, index) => (
                <article
                  key={`${item.company}-${index}`}
                  className="group relative w-[420px] overflow-hidden rounded-2xl border border-border/60 bg-[#141414] p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/20"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 via-transparent to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <p className="relative z-10 font-mono text-sm uppercase tracking-wider text-accent">{item.company}</p>
                  <p className="relative z-10 mt-4 text-sm leading-relaxed text-muted-foreground">“{item.quote}”</p>
                  <p className="relative z-10 mt-4 text-sm font-medium text-foreground">— {item.byline}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee-scroll 70s linear infinite;
          will-change: transform;
        }

        .marquee:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}