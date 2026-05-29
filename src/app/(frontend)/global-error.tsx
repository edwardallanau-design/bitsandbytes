'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body>
        <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center', padding: '0 24px', fontFamily: 'sans-serif' }}>
          <p style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16, opacity: 0.5 }}>Error</p>
          <h1 style={{ fontSize: 32, fontWeight: 600, marginBottom: 12 }}>Something went wrong.</h1>
          <p style={{ marginBottom: 32, opacity: 0.6 }}>
            {error.digest ? `Error ID: ${error.digest}` : 'An unexpected error occurred.'}
          </p>
          <button
            onClick={reset}
            style={{ padding: '10px 24px', border: '1px solid currentColor', background: 'transparent', cursor: 'pointer', fontFamily: 'inherit', fontSize: 14 }}
          >
            Try again
          </button>
        </section>
      </body>
    </html>
  )
}
