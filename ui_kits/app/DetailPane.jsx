/** DetailPane — right pane with metadata, activity, composer. */
function DetailPane({ entry, onComment }) {
  const [draft, setDraft] = React.useState("");
  const [activity, setActivity] = React.useState([
    { id: "a1", who: "Maya", when: "12m", what: "Marked routing pass complete." },
    { id: "a2", who: "Theo", when: "1h", what: "Scheduled demo for Mon 14:00." },
    { id: "a3", who: "Anna", when: "3h", what: "Closed task: write release notes draft." },
  ]);

  if (!entry) {
    return (
      <aside className="detail">
        <div className="empty">
          Select an entry to see details.
        </div>
      </aside>
    );
  }

  const send = () => {
    if (!draft.trim()) return;
    setActivity((a) => [{ id: "a" + Date.now(), who: "You", when: "now", what: draft.trim() }, ...a]);
    setDraft("");
    if (onComment) onComment(draft.trim());
  };

  return (
    <aside className="detail">
      <div className="detail-head">
        <div className="detail-eyebrow">
          <span>Entry</span>
          <span>·</span>
          <span>{entry.id.toUpperCase()}</span>
          <span style={{marginLeft: "auto"}}>{entry.time}</span>
        </div>
        <h3 className="detail-h">{entry.title}</h3>
        <div className="detail-meta-row">
          <div className="detail-meta"><span className="k">Project</span><span className="v">{entry.project}</span></div>
          <div className="detail-meta"><span className="k">Date</span><span className="v">{entry.date}</span></div>
          <div className="detail-meta"><span className="k">Tags</span><span className="v">{entry.tags.join(", ")}</span></div>
        </div>
      </div>

      <div className="detail-section">
        <h5>Notes</h5>
        <p>{entry.body}</p>
      </div>

      <div className="detail-section">
        <h5>Activity</h5>
        {activity.map((a) => (
          <div key={a.id} className="activity-row">
            <div style={{flex: 1}}>
              <div><span className="who">{a.who}</span></div>
              <div className="what">{a.what}</div>
            </div>
            <span className="when">{a.when}</span>
          </div>
        ))}
      </div>

      <div className="composer">
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Add a note or comment…"
        />
        <div className="composer-row">
          <button className="tb-icon-btn"><i data-lucide="paperclip"></i></button>
          <button className="tb-icon-btn"><i data-lucide="at-sign"></i></button>
          <span className="spacer"></span>
          <button className="tb-btn" onClick={send}>
            Comment
            <i data-lucide="arrow-right"></i>
          </button>
        </div>
      </div>
    </aside>
  );
}

window.DetailPane = DetailPane;
