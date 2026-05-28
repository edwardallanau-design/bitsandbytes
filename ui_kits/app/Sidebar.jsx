/** Sidebar — workspace nav, projects, footer. */
function Sidebar({ activeId, onSelect, theme, onToggleTheme }) {
  const main = [
    { id: "today", label: "Today", icon: "calendar", count: "12" },
    { id: "inbox", label: "Inbox", icon: "inbox", count: "3" },
    { id: "search", label: "Search", icon: "search" },
  ];
  const projects = [
    { id: "voltline", label: "Voltline", icon: "git-branch", count: "07" },
    { id: "field", label: "Field", icon: "git-branch", count: "12" },
    { id: "monogram", label: "Monogram", icon: "git-branch", count: "04" },
    { id: "halftone", label: "Halftone", icon: "git-branch" },
  ];
  const sys = [
    { id: "settings", label: "Settings", icon: "settings" },
    { id: "help", label: "Help & feedback", icon: "life-buoy" },
  ];

  const renderItem = (it) => (
    <div
      key={it.id}
      className={`sb-item ${activeId === it.id ? "active" : ""}`}
      onClick={() => onSelect(it.id)}
    >
      <i data-lucide={it.icon}></i>
      <span>{it.label}</span>
      {it.count && <span className="sb-count">{it.count}</span>}
    </div>
  );

  return (
    <aside className="sidebar">
      <div className="sb-brand">
        <span className="sb-brand-mark">B</span>
        <span className="sb-brand-name">Bits &amp; Bytes</span>
        <span className="sb-brand-meta">v1.2</span>
      </div>
      <div className="sb-section">{main.map(renderItem)}</div>
      <div className="sb-section">
        <span className="sb-label">Projects</span>
        {projects.map(renderItem)}
      </div>
      <div className="sb-section">{sys.map(renderItem)}</div>
      <div className="sb-foot">
        <span className="sb-avatar">TB</span>
        <div className="sb-foot-meta">
          <span className="sb-foot-name">Theo Bennett</span>
          <span className="sb-foot-role">Founder</span>
        </div>
        <button
          className="tb-icon-btn"
          style={{marginLeft: "auto", border: "1px solid var(--border)"}}
          onClick={onToggleTheme}
          title="Toggle theme"
        >
          <i data-lucide={theme === "dark" ? "sun" : "moon"}></i>
        </button>
      </div>
    </aside>
  );
}

window.Sidebar = Sidebar;
