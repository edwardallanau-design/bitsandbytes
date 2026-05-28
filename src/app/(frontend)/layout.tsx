import type { Metadata } from 'next'
import React from 'react'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { PageTransition } from '@/components/PageTransition'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { getServerSideURL } from '@/utilities/getURL'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="/assets/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <SiteHeader />
        <PageTransition>{children}</PageTransition>
        <SiteFooter />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  title: 'bitsandbytes — Software Studio',
  description: 'Software solutions, shipped fast. Sites and apps, live in days.',
  openGraph: mergeOpenGraph(),
}
