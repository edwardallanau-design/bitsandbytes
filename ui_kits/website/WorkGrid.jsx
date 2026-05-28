/**
 * WorkGrid — visual work cards with image placeholders and tags.
 * Inspired by BlackCube's "Selected work" alternating layout.
 */
const WORK = [
  {
    id: "voltline",
    num: "01",
    year: "2025",
    client: "Voltline",
    title: "Voltline",
    summary: "An operator console for the night shift. We rebuilt the dispatch tool from the routing layer up.",
    kind: "Web app",
    sub: "Dispatch & routing",
    tags: ["Engineering", "Design", "12 wks"],
    visual: "console",
    feature: true,
  },
  {
    id: "field",
    num: "02",
    year: "2024",
    client: "Field",
    title: "Field",
    summary: "Pricing and labels for craft producers. A tiny, fast app that prints itself.",
    kind: "iOS app",
    sub: "Inventory · pricing",
    tags: ["Product", "iOS", "8 wks"],
    visual: "phone",
    feature: false,
  },
  {
    id: "monogram",
    num: "03",
    year: "2024",
    client: "Monogram",
    title: "Monogram",
    summary: "A reading app that doesn't sell you anything. Quiet, paid-for, no ads.",
    kind: "Web app",
    sub: "Subscriptions · reader",
    tags: ["Product", "Web", "16 wks"],
    visual: "reader",
    feature: false,
  },
  {
    id: "halftone",
    num: "04",
    year: "2023",
    client: "Halftone",
    title: "Halftone",
    summary: "An archive viewer for a 90-year-old magazine. Half a million pages, searchable.",
    kind: "Web app",
    sub: "Archive · search",
    tags: ["Product", "Archive", "20 wks"],
    visual: "archive",
    feature: true,
  },
];

function WorkVisual({ kind }) {
  if (kind === "console") {
    return (
      <div className="work-visual work-visual-console">
        <div className="wv-sidebar">
          <div className="wv-sb-item active"></div>
          <div className="wv-sb-item"></div>
          <div className="wv-sb-item"></div>
          <div className="wv-sb-item"></div>
        </div>
        <div className="wv-main">
          <div className="wv-row" style={{width: "70%"}}></div>
          <div className="wv-row" style={{width: "90%"}}></div>
          <div className="wv-row" style={{width: "50%"}}></div>
          <div className="wv-row" style={{width: "80%"}}></div>
          <div className="wv-row" style={{width: "30%"}}></div>
        </div>
      </div>
    );
  }
  if (kind === "phone") {
    return (
      <div className="work-visual work-visual-phone">
        <div className="cap-phone">
          <div className="cap-phone-notch"></div>
          <div className="cap-phone-screen">
            <div className="cap-phone-row" style={{width: "50%"}}></div>
            <div className="cap-phone-row" style={{width: "80%"}}></div>
            <div className="cap-phone-row" style={{width: "60%"}}></div>
            <div className="cap-phone-row" style={{width: "30%"}}></div>
          </div>
        </div>
      </div>
    );
  }
  if (kind === "reader") {
    return (
      <div className="work-visual work-visual-reader">
        <div className="wv-page">
          <div className="wv-page-h"></div>
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="wv-page-line" style={{ width: (60 + ((i * 37) % 40)) + "%" }}></div>
          ))}
        </div>
      </div>
    );
  }
  // archive
  return (
    <div className="work-visual work-visual-archive">
      <div className="wv-grid">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="wv-thumb" style={{ opacity: 0.3 + (i % 5) * 0.15 }}></div>
        ))}
      </div>
    </div>
  );
}

function WorkCard({ item, onClick, wide, delay, pageMode }) {
  const ref = useInView();
  return (
    <a
      ref={ref}
      className={`work-card ${wide ? "wide" : ""} ${!pageMode ? "work-card--display" : ""}`}
      onClick={pageMode ? () => onClick && onClick(item) : undefined}
      style={!pageMode ? {cursor: "default", pointerEvents: "none"} : {}}
    >
      <WorkVisual kind={item.visual} />
      <div className="work-card-meta">
        <span className="work-card-kind">{item.kind} &middot; {item.sub}</span>
        <h3 className="work-card-h">{item.title}</h3>
        <p className="work-card-b">{item.summary}</p>
      </div>
    </a>
  );
}

function WorkGrid({ onItem, limit, onViewAll, pageMode }) {
  const items = limit ? WORK.slice(0, limit) : WORK;

  const heading = pageMode
    ? "All work."
    : <>Projects we&rsquo;ve<br/>worked on.</>;
  const subtitle = pageMode
    ? "Every project we've shipped, start to finish. No half-measures, no shortcuts."
    : "A short list by design. Every project here got our complete attention.";

  return (
    <section className="work-section">
      <div className="container">
        {!pageMode && (
        <div className="section-head" style={{display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16}}>
          <div>
            <span className="eyebrow" style={{display: "block", marginBottom: 16}}>What we&rsquo;ve built</span>
            <h2 className="section-title">{heading}</h2>
            <p className="section-sub" style={{marginTop: 16}}>{subtitle}</p>
          </div>
          {onViewAll && (
            <button className="work-view-all" onClick={onViewAll}>
              View all work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          )}
        </div>
        )}
        <div className="work-grid">
          {items.map((it, i) => (
            <WorkCard key={it.id} item={it} onClick={onItem} wide={i % 3 === 0} delay={(i % 6) + 1} pageMode={pageMode} />
          ))}
        </div>
      </div>
    </section>
  );
}

window.WorkGrid = WorkGrid;
window.WORK = WORK;
