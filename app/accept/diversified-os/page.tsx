import type { Metadata } from 'next'
import { DiversifiedAcceptanceContent } from './terms-content'

export const metadata: Metadata = {
  title: 'Diversified OS — Workspace Environment Acceptance',
  description:
    'Project acceptance and kickoff payment approval for the Diversified OS Workspace Environment.',
  alternates: {
    canonical: 'https://snrglabs.com/accept/diversified-os',
  },
}

export default function DiversifiedAcceptancePage() {
  return <DiversifiedAcceptanceContent />
}
