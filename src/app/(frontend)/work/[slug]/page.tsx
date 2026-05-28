import Link from 'next/link'
import { notFound } from 'next/navigation'
import { WORK } from '@/data/work'

type Args = { params: Promise<{ slug: string }> }

export default async function WorkDetailPage({ params: paramsPromise }: Args) {
  const { slug } = await paramsPromise
  const item = WORK.find(w => w.id === slug)
  if (!item) notFound()

  return (
    <section className="tight">
      <div className="container" style={{ maxWidth: 760 }}>
        <span className="eyebrow">Case study &mdash; {item.num}</span>
        <h1 className="section-title" style={{ marginTop: 16 }}>{item.title}</h1>
        <p className="section-sub">{item.summary}</p>
        <div style={{ marginTop: 32, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <div><div className="eyebrow">Client</div><div style={{ marginTop: 4, fontSize: 16 }}>{item.client}</div></div>
          <div><div className="eyebrow">Year</div><div style={{ marginTop: 4, fontSize: 16 }}>{item.year}</div></div>
          <div><div className="eyebrow">Tags</div><div style={{ marginTop: 4, fontSize: 16 }}>{item.tags.join(' · ')}</div></div>
        </div>
        <div style={{ marginTop: 56, padding: 64, border: '1px solid var(--border)', textAlign: 'center', color: 'var(--fg-3)' }}>
          Case-study body would live here.
        </div>
        <Link href="/work" className="btn btn-secondary" style={{ marginTop: 32, display: 'inline-flex' }}>
          &larr; Back to work
        </Link>
      </div>
    </section>
  )
}

export function generateStaticParams() {
  return WORK.map(w => ({ slug: w.id }))
}
