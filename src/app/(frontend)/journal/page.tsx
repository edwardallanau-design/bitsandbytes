import { Journal } from '@/components/Journal'

export default function JournalPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header-title">Notes from the studio.</h1>
          <p className="page-header-sub">Updated when we have something worth saying.</p>
        </div>
      </section>
      <Journal />
    </>
  )
}
