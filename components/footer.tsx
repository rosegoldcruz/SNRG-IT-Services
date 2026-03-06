import Link from "next/link"

const productLinks = [
  { label: "Revenue Engine", href: "#revenue-engine" },
  { label: "What We Install", href: "#features" },
  { label: "Revenue Tracking", href: "#tracking" },
]

const supportLinks = [
  { label: "Book System Review", href: "/contact" },
  { label: "Call Now", href: "tel:+14803648205" },
]

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Revenue Infrastructure", href: "/services" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border/60 bg-card/40 p-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
                <span className="text-sm font-bold text-background">S</span>
              </div>
              <span className="text-lg font-semibold tracking-tight font-mono">SNRG Labs</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Revenue infrastructure for home service businesses.
            </p>

            <div>
              <h3 className="text-sm font-semibold">Product</h3>
              <ul className="mt-4 space-y-2">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Support</h3>
              <ul className="mt-4 space-y-2">
                {supportLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Legal</h3>
              <ul className="mt-4 space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} SNRG Labs. All rights reserved.
          </p>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            SNRG Labs installs the infrastructure that turns marketing into measurable revenue.
          </p>
        </div>
      </div>
    </footer>
  )
}
