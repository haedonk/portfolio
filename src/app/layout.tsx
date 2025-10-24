import type { Metadata } from 'next'
import { IBM_Plex_Mono, Inter } from 'next/font/google'
import { ReactNode } from 'react'
import '../styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex-mono',
})

const siteUrl = 'https://haedonkaufman.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Haedon Kaufman | Backend Engineer & Integrations Specialist',
  description:
    'Backend engineer focused on resilient services, integrations, and automation that keep customer experiences available.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Haedon Kaufman | Backend Engineer & Integrations Specialist',
    description:
      'Backend engineer focused on resilient services, integrations, and automation that keep customer experiences available.',
    url: siteUrl,
    siteName: 'Haedon Kaufman Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haedon Kaufman | Backend Engineer & Integrations Specialist',
    description:
      'Backend engineer focused on resilient services, integrations, and automation that keep customer experiences available.',
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plexMono.variable}`}>
      <body className="bg-[var(--bg)] text-[var(--text)] antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-[#031422]">
          Skip to content
        </a>
        <div id="main">{children}</div>
      </body>
    </html>
  )
}
