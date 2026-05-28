import { Manifesto } from '@/components/Manifesto'

export default function AboutPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header-title">Small team,<br />big results.</h1>
          <p className="page-header-sub">Senior talent only. No juniors, no account managers — just the people who do the work, talking directly to you.</p>
        </div>
      </section>
      <Manifesto />
    </>
  )
}
