import type { Metadata } from 'next'
import { DiversifiedAcceptanceContent } from './terms-content'

export const metadata: Metadata = {
  title: 'Diversified OS — Workspace Environment Acceptance',
  description:
    'Project acceptance and kickoff payment approval for the Diversified OS Workspace Environment.',
}

export default function DiversifiedAcceptancePage() {
  return <DiversifiedAcceptanceContent />
}
