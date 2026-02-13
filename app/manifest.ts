export default function manifest() {
  return {
    name: 'SNRG Labs',
    short_name: 'SNRG',
    description:
      'Enterprise-grade managed security, cloud orchestration, and proactive infrastructure management for zero downtime operations.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        type: 'image/png',
        sizes: '192x192',
        purpose: 'any',
      },
      {
        src: '/android-chrome-512x512.png',
        type: 'image/png',
        sizes: '512x512',
        purpose: 'any maskable',
      },
      {
        src: '/snrg.svg',
        type: 'image/svg+xml',
        sizes: 'any',
        purpose: 'any',
      },
    ],
  }
}
