import type { MetadataRoute } from 'next'
import { getServerSideURL } from '@/utilities/getURL'
import { WORK } from '@/data/work'
import { POSTS } from '@/data/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getServerSideURL()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/work`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/journal`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
  ]

  const workRoutes: MetadataRoute.Sitemap = WORK.map((item) => ({
    url: `${base}/work/${item.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const journalRoutes: MetadataRoute.Sitemap = POSTS.map((post) => ({
    url: `${base}/journal/${post.id}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...workRoutes, ...journalRoutes]
}
