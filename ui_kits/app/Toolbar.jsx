/** Toolbar — top of the main pane. Title, search, primary action, icon row. */
function Toolbar({ title, eyebrow, onNew }) {
  return (
    <div className="toolbar">
      <div className="tb-title">
        <span className="tb-title-eb">{eyebrow}</span>
        <span className="tb-title-h">{title}</span>
      </div>
      <div className="tb-spacer"></div>
      <div className="tb-search">
        <i data-lucide="search"></i>
        <span>Search</span>
        <kbd>⌘K</kbd>
      </div>
      <button className="tb-icon-btn" title="Filter"><i data-lucide="sliders-horizontal"></i></button>
      <button className="tb-btn" onClick={onNew}>
        <i data-lucide="plus"></i>
        New entry
      </button>
    </div>
  );
}

/** Tabs — secondary horizontal nav under the toolbar. */
function Tabs({ tabs, activeTab, onChange }) {
  return (
    <div className="tabs">
      {tabs.map((t, i) => (
        <div
          key={t.id}
          className={`tab ${activeTab === t.id ? "active" : ""}`}
          onClick={() => onChange(t.id)}
        >
          <span className="num">{String(i + 1).padStart(2, "0")}</span>
          <span>{t.label}</span>
        </div>
      ))}
    </div>
  );
}

window.Toolbar = Toolbar;
window.Tabs = Tabs;
