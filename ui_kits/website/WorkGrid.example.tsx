/**
 * WorkGrid.jsx — Updated to fetch from Payload.
 * 
 * Before: hardcoded WORK array
 * After: fetch /api/projects
 */

function WorkGrid({ onItem, limit }) {
  const { data: response, loading, error } = useFetchPayload('/api/projects?sort=-order');
  const items = response?.docs || [];

  if (loading) return <div className="work-section"><div className="container"><p>Loading projects…</p></div></div>;
  if (error) return <div className="work-section"><div className="container"><p style={{color: 'var(--fg-3)'}}>Error loading projects.</p></div></div>;

  const filtered = limit ? items.slice(0, limit) : items;

  return (
    <section className="work-section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Selected work</span>
          <h2 className="section-title">Projects we&rsquo;ve<br/>worked on.</h2>
        </div>
        <div className="work-grid">
          {filtered.map((it, i) => (
            <WorkCard
              key={it.id}
              item={{
                id: it.slug,
                num: String(i + 1).padStart(2, '0'),
                year: it.year,
                client: it.client,
                title: it.title,
                summary: it.summary,
                kind: it.kind,
                sub: it.category,
                tags: it.tags?.map(t => t.tag) || [],
                visual: it.slug, // or derive from kind
              }}
              onClick={onItem}
              wide={i % 3 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
