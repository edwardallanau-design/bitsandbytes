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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t==='light'?'light':'dark';}catch(e){}})();`,
          }}
        />
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
  description: 'Software solutions, shipped fast.',
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    title: 'bitsandbytes — Software Studio',
    description: 'Software solutions, shipped fast.',
  },
}
