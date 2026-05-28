/** Timeline — grouped list of entries by day, used as the main view. */
const SAMPLE_ENTRIES = [
  { id: "e1", day: "Today", date: "May 9", meta: "Friday · Wk 19", time: "14:32", title: "Voltline — operator console: routing pass complete", body: "Final pass on the routing layer. Scheduled the demo for Monday at 2 — Theo and Maya leading. Need to write release notes.", tags: ["Voltline", "Engineering"], project: "Voltline" },
  { id: "e2", day: "Today", date: "May 9", meta: "Friday · Wk 19", time: "11:08", title: "Field — pricing v2 specs handed to engineering", body: "Specs are in the doc. One open question on tax handling for non-US producers — Anna is checking.", tags: ["Field", "Design"], project: "Field" },
  { id: "e3", day: "Today", date: "May 9", meta: "Friday · Wk 19", time: "09:14", title: "Studio — invoice sent, May", body: "Sent monthly invoices to all three active clients. Voltline running at $48k/wk this cycle.", tags: ["Studio"], project: "Studio" },

  { id: "e4", day: "Yesterday", date: "May 8", meta: "Thursday · Wk 19", time: "17:55", title: "Monogram — paywall A/B kicked off", body: "Variant A live to 10% of new users. Cohorts will be readable Tuesday, full readout Friday.", tags: ["Monogram", "Product"], project: "Monogram" },
  { id: "e5", day: "Yesterday", date: "May 8", meta: "Thursday · Wk 19", time: "14:00", title: "Halftone — archive ingest fix", body: "Root cause of the missing 1989 issues was a year-string off-by-one in the importer. Backfilled.", tags: ["Halftone", "Engineering"], project: "Halftone" },
  { id: "e6", day: "Yesterday", date: "May 8", meta: "Thursday · Wk 19", time: "10:42", title: "Voltline — interview with night-shift dispatcher", body: "Talked to Reza for 50 min. Three big takeaways in the synthesis doc. Most useful: the 04:00 pattern.", tags: ["Voltline", "Research"], project: "Voltline" },

  { id: "e7", day: "May 7", date: "May 7", meta: "Wednesday · Wk 19", time: "16:20", title: "Field — finalized icon set with the team", body: "Twelve new glyphs at 1.5px stroke. Replacing the placeholder set in the build by Friday.", tags: ["Field", "Design"], project: "Field" },
];

function Timeline({ activeId, onSelect, onNew }) {
  const [entries, setEntries] = React.useState(SAMPLE_ENTRIES);

  React.useEffect(() => {
    // Re-render icons as DOM updates.
    const t = setTimeout(() => window.lucide && window.lucide.createIcons(), 30);
    return () => clearTimeout(t);
  }, [entries, activeId]);

  // expose setter for parent
  React.useEffect(() => { window.__timelineAdd = (e) => setEntries((arr) => [e, ...arr]); }, []);

  const days = entries.reduce((acc, e) => {
    const k = e.day;
    (acc[k] = acc[k] || []).push(e);
    return acc;
  }, {});

  return (
    <div className="timeline">
      {Object.keys(days).map((day) => (
        <div key={day} className="timeline-day">
          <div className="day-head">
            <span className="date">{day}</span>
            <span className="meta">{days[day][0].meta}</span>
            <span className="rule"></span>
            <span className="meta">{days[day].length} entries</span>
          </div>
          {days[day].map((e) => (
            <div
              key={e.id}
              className={`entry ${activeId === e.id ? "active" : ""}`}
              onClick={() => onSelect(e)}
            >
              <span className="entry-time">{e.time}</span>
              <div className="entry-body">
                <h4>{e.title}</h4>
                <p>{e.body}</p>
                <div className="entry-tags">
                  {e.tags.map((t) => <span key={t} className="entry-tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

window.Timeline = Timeline;
window.SAMPLE_ENTRIES = SAMPLE_ENTRIES;
