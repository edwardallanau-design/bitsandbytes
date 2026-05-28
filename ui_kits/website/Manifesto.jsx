/**
 * Manifesto / About — "Small team, big results" style.
 * Split layout: ethos + numbered stats + team avatars + bio snippet.
 * Clicking a team card highlights that person's lines in the code block.
 */
function Manifesto() {
  const statsRef = React.useRef(null);
  const teamRef = React.useRef(null);
  const [selected, setSelected] = React.useState(0);
  const [statsVisible, setStatsVisible] = React.useState([false, false, false, false]);
  const [teamVisible, setTeamVisible] = React.useState([false, false, false]);

  const stats = [
    { k: "12+", v: "Years exp." },
    { k: "48hr", v: "Turnaround" },
    { k: "100+", v: "Projects" },
    { k: "99", v: "Lighthouse" },
  ];

  const team = [
    {
      name: "Daniel", role: "Lead developer", initials: "D",
      lines: [
        { parts: [{ t:"kw", v:"const " }, { t:"vn", v:"daniel" }, { t:"pl", v:" = {" }] },
        { parts: [{ t:"sp", v:"  " }, { t:"pr", v:"background" }, { t:"pl", v:": " }, { t:"st", v:'"Ex-Stripe, ex-Vercel."' }, { t:"pl", v:"," }] },
        { parts: [{ t:"sp", v:"  " }, { t:"pr", v:"years" }, { t:"pl", v:":      " }, { t:"nm", v:"8" }, { t:"pl", v:"," }] },
        { parts: [{ t:"sp", v:"  " }, { t:"pr", v:"stack" }, { t:"pl", v:":      [" }, { t:"st", v:'"TypeScript"' }, { t:"pl", v:", " }, { t:"st", v:'"React"' }, { t:"pl", v:"]," }] },
        { parts: [{ t:"sp", v:"  " }, { t:"pr", v:"focus" }, { t:"pl", v:":      " }, { t:"st", v:'"Full-stack & infra"' }] },
        { parts: [{ t:"pl", v:"}" }] },
      ],
    },
    {
      name: "Grigory", role: "Designer", initials: "G",
      lines: [
        { parts: [{ t:"kw", v:"const " }, { t:"vn", v:"grigory" }, { t:"pl", v:" = {" }] },
        { parts: [{ t:"sp", v:"  " }, { t:"pr", v:"background" }, { t:"pl", v:": " }, { t:"st", v:'"Brand systems for Linear."' }, { t:"pl", v:"," }] },
        { parts: [{ t:"sp", v:"  " }, { t:"pr", v:"prev" }, { t:"pl", v:":           [" }, { t:"st", v:'"Arc"' }, { t:"pl", v:", " }, { t:"st", v:'"Raycast"' }, { t:"pl", v:"]," }] },
        { parts: [{ t:"sp", v:"  " }, { t:"pr", v:"tools" }, { t:"pl", v:":          [" }, { t:"st", v:'"Figma"' }, { t:"pl", v:", " }, { t:"st", v:'"Framer"' }, { t:"pl", v:"]," }] },
        { parts: [{ t:"sp", v:"  " }, { t:"pr", v:"focus" }, { t:"pl", v:":          " }, { t:"st", v:'"UI systems & motion"' }] },
        { parts: [{ t:"pl", v:"}" }] },
      ],
    },
    {
      name: "Lukaz", role: "Developer", initials: "L",
      lines: [
        { parts: [{ t:"kw", v:"const " }, { t:"vn", v:"lukaz" }, { t:"pl", v:" = {" }] },
        { parts: [{ t:"sp", v:"  " }, { t:"pr", v:"background" }, { t:"pl", v:": " }, { t:"st", v:'"Native iOS since iOS 5."' }, { t:"pl", v:"," }] },
        { parts: [{ t:"sp", v:"  " }, { t:"pr", v:"shipped" }, { t:"pl", v:":     " }, { t:"nm", v:"12" }, { t:"pl", v:"," }] },
        { parts: [{ t:"sp", v:"  " }, { t:"pr", v:"stack" }, { t:"pl", v:":        [" }, { t:"st", v:'"Swift"' }, { t:"pl", v:", " }, { t:"st", v:'"SwiftUI"' }, { t:"pl", v:"]," }] },
        { parts: [{ t:"sp", v:"  " }, { t:"pr", v:"focus" }, { t:"pl", v:":        " }, { t:"st", v:'"iOS & watchOS"' }] },
        { parts: [{ t:"pl", v:"}" }] },
      ],
    },
  ];

  const colorMap = {
    kw: "var(--code-kw)",
    vn: "var(--code-vn)",
    pr: "var(--code-pr)",
    st: "var(--code-st)",
    nm: "var(--code-st)",
    cm: "var(--fg-3)",
    pl: "var(--fg-2)",
    sp: "transparent",
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const idx = parseInt(entry.target.dataset.idx, 10);
          const kind = entry.target.dataset.kind;
          if (kind === "stat") setStatsVisible(prev => { const n = [...prev]; n[idx] = true; return n; });
          if (kind === "team") setTeamVisible(prev => { const n = [...prev]; n[idx] = true; return n; });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "-100px" });

    const statCards = statsRef.current?.querySelectorAll('[data-kind="stat"]') || [];
    statCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const idx = parseInt(card.dataset.idx, 10);
        setStatsVisible(prev => { const n = [...prev]; n[idx] = true; return n; });
      } else {
        observer.observe(card);
      }
    });

    const teamCards = teamRef.current?.querySelectorAll('[data-kind="team"]') || [];
    teamCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const idx = parseInt(card.dataset.idx, 10);
        setTeamVisible(prev => { const n = [...prev]; n[idx] = true; return n; });
      } else {
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  const m = team[selected];

  return (
    <section className="manifesto" id="about-us">
      <div className="container">
        <div className="about-grid">
          <div className="about-col">
<h3 className="about-h">Who we are</h3>
            <p className="about-b">We&rsquo;re a small team of designers and developers who care about getting things right. Between us, we&rsquo;ve spent years building sites for artists, startups, and brands that need to make an impression.</p>
            <p className="about-b">Portfolios, product sites, and high-conversion landers for SaaS and iOS apps. Built with intention. Delivered fast.</p>
            <div className="about-tags">
              <span className="cap-tag">Speed without rush</span>
              <span className="cap-tag">Taste over trends</span>
              <span className="cap-tag">A11y by default</span>
            </div>
            <h3 className="about-h" style={{marginTop: 40}}>The team</h3>
            <div className="about-team" ref={teamRef}>
              {team.map((member, i) => (
                <div
                  key={member.name}
                  className={"team-card" + (teamVisible[i] ? " in-view" : "") + (selected === i ? " team-card--active" : "")}
                  data-kind="team"
                  data-idx={i}
                  onClick={() => setSelected(i)}
                  style={{cursor: "pointer"}}
                >
                  <div className="team-avatar">{member.initials}</div>
                  <div className="team-name">{member.name}</div>
                  <div className="team-role">{member.role}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-col">
            <h3 className="about-h">By the numbers</h3>
            <div className="about-stats" ref={statsRef}>
              {stats.map((s, i) => (
                <div key={s.k} className={"about-stat" + (statsVisible[i] ? " in-view" : "")} data-kind="stat" data-idx={i}>
                  <div className="about-stat-k">{s.k}</div>
                  <div className="about-stat-v">{s.v}</div>
                </div>
              ))}
            </div>
            <div className="stack-snippet">
              <div className="stack-head">
                <span>team.bios.ts</span>
                <span className="stack-tag" style={{transition: "opacity 0.2s"}}>{m.name.toLowerCase()}.ts</span>
              </div>
              <pre className="stack-code" key={selected} style={{animation: "bioFadeIn 0.25s ease-out"}}>
                {m.lines.map((line, li) => (
                  <div key={li} className="bio-line">
                    {line.parts.map((p, pi) => (
                      <span key={pi} style={{color: colorMap[p.t]}}>{p.v}</span>
                    ))}
                  </div>
                ))}
                {"\n"}
                <span style={{color: "var(--fg-3)", fontStyle: "italic"}}>{"// Senior-only. No juniors, no agencies."}</span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Manifesto = Manifesto;
