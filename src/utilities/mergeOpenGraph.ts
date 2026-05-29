import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: 'Software solutions, shipped fast.',
  images: [
    {
      url: `${getServerSideURL()}/assets/logo-dark.png`,
    },
  ],
  siteName: 'bitsandbytes — Software Studio',
  title: 'bitsandbytes — Software Studio',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
