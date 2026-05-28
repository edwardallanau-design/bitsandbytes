import { WorkGrid } from '@/components/WorkGrid'

export default function WorkPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header-title">All work.</h1>
          <p className="page-header-sub">Every project we&rsquo;ve shipped, start to finish. No half-measures, no shortcuts.</p>
        </div>
      </section>
      <WorkGrid pageMode />
    </>
  )
}
