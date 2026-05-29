'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <section className="tight">
      <div className="container" style={{ maxWidth: 760, textAlign: 'center', paddingTop: 80, paddingBottom: 80 }}>
        <span className="eyebrow">Error</span>
        <h1 className="section-title" style={{ marginTop: 16 }}>Something went wrong.</h1>
        <p className="section-sub" style={{ marginBottom: 32 }}>
          {error.digest ? `Error ID: ${error.digest}` : 'An unexpected error occurred.'}
        </p>
        <button className="btn btn-primary" onClick={reset}>
          Try again
        </button>
      </div>
    </section>
  )
}
