import type { Metadata } from 'next'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Haedon Kaufman | Software Engineer',
  description: 'Software engineer specializing in dependable backend services, integrations, and cloud automation.',
  openGraph: {
    title: 'Haedon Kaufman | Software Engineer',
    description:
      'Software engineer specializing in dependable backend services, integrations, and cloud automation.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haedon Kaufman | Software Engineer',
    description:
      'Software engineer specializing in dependable backend services, integrations, and cloud automation.',
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-[var(--bg)]">
      <body className={`${inter.variable} ${plexMono.variable} font-sans bg-[var(--bg)] text-[var(--text)]`}>
        {children}
      </body>
    </html>
  )
}
