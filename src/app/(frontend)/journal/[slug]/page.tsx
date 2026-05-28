import { notFound } from 'next/navigation'
import { PostView } from '@/components/Journal'
import { POSTS } from '@/data/posts'

type Args = { params: Promise<{ slug: string }> }

export default async function PostPage({ params: paramsPromise }: Args) {
  const { slug } = await paramsPromise
  const post = POSTS.find(p => p.id === slug)
  if (!post) notFound()
  return <PostView id={slug} />
}

export function generateStaticParams() {
  return POSTS.map(p => ({ slug: p.id }))
}
