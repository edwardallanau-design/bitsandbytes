export default function Loading() {
  return (
    <section className="tight">
      <div className="container" style={{ maxWidth: 760, paddingTop: 80, paddingBottom: 80 }}>
        <div style={{ height: 12, width: 80, background: 'var(--border)', marginBottom: 24 }} />
        <div style={{ height: 40, width: '60%', background: 'var(--border)', marginBottom: 16 }} />
        <div style={{ height: 20, width: '80%', background: 'var(--border)', marginBottom: 8 }} />
        <div style={{ height: 20, width: '70%', background: 'var(--border)' }} />
      </div>
    </section>
  )
}
