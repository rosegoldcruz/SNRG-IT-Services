'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

const KICKOFF_PAYMENT_LINK = 'https://buy.stripe.com/4gM6oA0o74fGe689g3dnW09'

export function DiversifiedAcceptanceContent() {
  const [isAccepted, setIsAccepted] = useState(false)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="rounded-3xl border border-border/70 bg-card/40 p-6 shadow-2xl sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Project Acceptance</p>
          <h1 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
            Diversified OS — Workspace Environment Acceptance
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-muted-foreground sm:text-base">
            Review the terms below, confirm acceptance, and continue to kickoff payment to begin the final
            configuration and rollout pass.
          </p>

          <div className="mt-8 grid gap-4 rounded-2xl border border-border/60 bg-black/20 p-4 sm:grid-cols-2 sm:p-6">
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Total Investment</p>
              <p className="mt-2 text-3xl font-semibold text-white">$13,987</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Kickoff Payment</p>
              <p className="mt-2 text-3xl font-semibold text-accent">$4,866</p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 text-sm text-muted-foreground sm:grid-cols-2">
            <div className="rounded-xl border border-border/60 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Client</p>
              <p className="mt-2 text-base font-medium text-foreground">Diversified Companies</p>
            </div>
            <div className="rounded-xl border border-border/60 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Provider</p>
              <p className="mt-2 text-base font-medium text-foreground">SNRG Labs LLC</p>
            </div>
            <div className="rounded-xl border border-border/60 bg-black/20 p-4 sm:col-span-2">
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Project</p>
              <p className="mt-2 text-base font-medium text-foreground">Diversified OS Workspace Environment</p>
            </div>
          </div>

          <div className="mt-10 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-white">1. Engagement Summary</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                Diversified OS is a custom internal workspace environment built to help organize internal tasks,
                projection calendar work, forms, requests, work orders, employee visibility, inventory/tracking,
                reports, files/documents, admin controls, mobile access, and AI-assisted operational support.
              </p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                The platform is already live and in the polish / workflow-hardening stage. The walkthrough and final
                configuration are used to align the remaining workflow details around how Diversified operates day to
                day.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">2. What the Kickoff Payment Covers</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                The kickoff payment begins the final configuration, workflow-hardening, and rollout alignment process
                for the Diversified OS Workspace Environment.
              </p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                This includes continued platform refinement, walkthrough preparation, priority workflow alignment,
                mobile/desktop usability polish, and configuration around Diversified&apos;s internal operations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">3. Terms of Engagement</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                By accepting below and submitting the kickoff payment, Diversified confirms approval for SNRG Labs LLC
                to continue work on the Diversified OS Workspace Environment under the agreed investment of $13,987.
              </p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                The kickoff payment is $4,866 and applies toward the total project investment.
              </p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                Additional changes outside the Workspace Environment scope, including full CRM replacement,
                ServiceTitan replacement, SMS/calling automation, marketing attribution, paid advertising management,
                or other revenue-engine systems, are not included unless separately agreed in writing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">4. Ownership</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                Upon full payment, Diversified receives the right to use the delivered internal workspace system for
                its internal business operations.
              </p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                SNRG Labs LLC retains ownership of reusable frameworks, methods, templates, underlying development
                patterns, and non-client-specific system architecture.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">5. Timeline and Client Feedback</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                Timeline and rollout depend on timely feedback, access, workflow decisions, credentials, and scope
                clarity from Diversified.
              </p>
            </section>

            <section className="rounded-2xl border border-border/70 bg-black/25 p-5 sm:p-6">
              <h2 className="text-xl font-semibold text-white">6. Acceptance</h2>
              <div className="mt-5 flex items-start gap-3">
                <Checkbox
                  id="accept-diversified-os-terms"
                  checked={isAccepted}
                  onCheckedChange={(checked) => setIsAccepted(checked === true)}
                  aria-label="I have reviewed and accept the Diversified OS Workspace Environment terms."
                />
                <label
                  htmlFor="accept-diversified-os-terms"
                  className="text-sm leading-6 text-foreground sm:text-base"
                >
                  I have reviewed and accept the Diversified OS Workspace Environment terms.
                </label>
              </div>

              <div className="mt-6">
                <Button
                  type="button"
                  size="lg"
                  variant="accent"
                  disabled={!isAccepted}
                  onClick={() => {
                    window.location.assign(KICKOFF_PAYMENT_LINK)
                  }}
                  className="w-full sm:w-auto"
                >
                  Accept &amp; Continue to Kickoff Payment
                </Button>
                <p className="mt-3 text-xs leading-5 text-muted-foreground sm:text-sm">
                  Payment of the kickoff invoice confirms acceptance of these terms and begins the final configuration
                  / rollout pass.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
