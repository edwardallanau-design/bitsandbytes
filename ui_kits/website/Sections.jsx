/**
 * Sections.jsx — punchy marketing sections inspired by BlackCube.
 * Exports: TrustedBy, Process, Capabilities, Stats, Pricing, Testimonial,
 *          BookCall, Referral.
 * Each section is dense, visual, and self-contained.
 */

/* ---------- TrustedBy: a logo strip ---------- */
function TrustedBy() {
  return (
    <section className="trusted">
      <div className="container">
        <div className="trusted-row">
          <span className="trusted-label eyebrow">Trusted by</span>
          <div className="trusted-logos">
            <span className="trusted-logo">VOLTLINE</span>
            <span className="trusted-logo">field<sup>&deg;</sup></span>
            <span className="trusted-logo serif-italic">Monogram</span>
            <span className="trusted-logo">HALFTONE</span>
            <span className="trusted-logo">north/star</span>
            <span className="trusted-logo">Kiln &amp; Co.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Process: 3-step "how we work" with mini mockups ---------- */
function ProcessMockup({ kind }) {
  if (kind === "call") {
    return (
      <div className="mockup mockup-call">
        <div className="mockup-bar">
          <span className="mockup-rec"><span className="mockup-rec-dot"></span>REC</span>
          <span className="mockup-time">00:14:32</span>
        </div>
        <div className="mockup-tiles">
          <div className="mockup-tile">
            <div className="mockup-avatar">B</div>
            <span>BC</span>
          </div>
          <div className="mockup-tile active">
            <div className="mockup-avatar">Y</div>
            <span>You</span>
          </div>
        </div>
        <div className="mockup-waveform">
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={i} style={{ height: 4 + Math.abs(Math.sin(i * 1.3)) * 14 + "px" }}></span>
          ))}
        </div>
      </div>
    );
  }
  if (kind === "slack") {
    return (
      <div className="mockup mockup-slack">
        <div className="mockup-channel"># project-bitsandbytes</div>
        <div className="mockup-msg">
          <div className="mockup-avatar bc">B</div>
          <div className="mockup-bubble">
            <div className="mockup-msg-head"><strong>Bits&amp;Bytes</strong><span>2:14</span></div>
            <div>Hero section is live. Thoughts?</div>
          </div>
        </div>
        <div className="mockup-msg right">
          <div className="mockup-bubble out">
            <div className="mockup-msg-head"><strong>You</strong><span>2:16</span></div>
            <div>Perfect. Ship it.</div>
          </div>
          <div className="mockup-avatar">Y</div>
        </div>
      </div>
    );
  }
  return (
    <div className="mockup mockup-deploy">
      <div className="mockup-browser">
        <div className="mockup-browser-bar">
          <span className="mockup-dot"></span>
          <span className="mockup-dot"></span>
          <span className="mockup-dot"></span>
          <span className="mockup-url">yoursite.com</span>
        </div>
        <div className="mockup-browser-body">
          <span className="mockup-check">
            <i data-lucide="check"></i>
          </span>
          <div className="mockup-deploy-text">
            <strong>Deployed</strong>
            <span>just now</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Process() {
  const ref = useInView();
  const steps = [
    { n: "1", tag: "Discovery", h: "Quick Call", b: "30-minute chat to understand your goals, timeline, and success criteria.", mockup: "call" },
    { n: "2", tag: "Collaboration", h: "Direct Access", b: "Real-time updates via a dedicated Slack channel. No middlemen.", mockup: "slack" },
    { n: "3", tag: "Delivery", h: "Launch Fast", b: "Design, build, and deploy. Most projects go live in under 48 hours.", mockup: "deploy" },
  ];
  return (
    <section className="process in-view" ref={ref}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">How we work</span>
          <h2 className="section-title">A simple process,<br/>exceptional results.</h2>
          <p className="section-sub">From first call to launch, we keep things transparent and efficient.</p>
        </div>
        <div className="process-grid">
          {steps.map((s, i) => {
            const ref = useInView();
            return (
              <div key={s.n} ref={ref} className="process-card">
                <div className="process-card-top">
                  <span className="process-n">{s.n}</span>
                  <span className="process-tag">{s.tag}</span>
                </div>
                <h3 className="process-h">{s.h}</h3>
                <p className="process-b">{s.b}</p>
                <ProcessMockup kind={s.mockup} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Capabilities: 3 things done well ---------- */
function Capabilities() {
  const r0 = useInView(), r1 = useInView(), r2 = useInView(), r3 = useInView();
  const refs = [r0, r1, r2, r3];

  const caps = [
    { num: "01", label: "WEB",    h: "Sites that ship in days, not months.", b: "Next.js, React, TypeScript. SEO-first architecture. 99+ Lighthouse scores standard.", tags: ["Landing pages", "SaaS", "E-commerce", "Web apps"], visual: "web" },
    { num: "02", label: "DESIGN", h: "Pixel-perfect interfaces.",             b: "From wireframes to polished UI. Design systems that scale.",                          tags: ["UI systems", "Motion", "Brand"],                  visual: "design" },
    { num: "03", label: "iOS",    h: "Native Swift apps.",                    b: "SwiftUI & UIKit. App Store ready. Widgets included.",                                 tags: ["SwiftUI", "UIKit", "Widgets"],                    visual: "ios" },
  ];

  const stats = [
    { big: "48h", label: "Avg. turnaround" },
    { big: "99",  label: "Lighthouse score" },
    { big: "0",   label: "Bloat" },
    { big: "∞",   label: "Iterations" },
  ];

  return (
    <section className="capabilities">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Capabilities</span>
          <h2 className="section-title">Three things.<br/>Done exceptionally well.</h2>
        </div>
        <div className="cap-rows">
          {caps.map((c, i) => (
            <div key={c.num} ref={refs[i]} className="cap-row" style={{opacity: 0, transform: "translateY(24px)"}}>
              <div className="cap-row-num">{c.num}</div>
              <div className="cap-row-hed">
                <div className="cap-row-label">{c.label}</div>
                <h3 className="cap-row-h">{c.h}</h3>
              </div>
              <div className="cap-row-body">
                <p className="cap-b">{c.b}</p>
                <div className="cap-tags">{c.tags.map(t => <span key={t} className="cap-tag">{t}</span>)}</div>
              </div>
              <CapVisual kind={c.visual} />
            </div>
          ))}
          <div ref={refs[3]} className="cap-row cap-row--stats" style={{opacity: 0, transform: "translateY(24px)"}}>
            <div className="cap-row-num" style={{color: "var(--border)"}}>—</div>
            <div className="cap-row-hed"><div className="cap-row-label">BY THE NUMBERS</div></div>
            <div className="cap-stats-inline">
              {stats.map(s => (
                <div key={s.label} className="cap-stat-inline">
                  <div className="cap-stat-big">{s.big}</div>
                  <div className="cap-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="cap-stats-caption">Every project gets the same attention to detail. No shortcuts on performance, accessibility, or code quality.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CapVisual({ kind }) {
  if (kind === "web") {
    return (
      <div className="cap-visual cap-visual-web">
        <div className="mockup-browser">
          <div className="mockup-browser-bar">
            <span className="mockup-dot"></span>
            <span className="mockup-dot"></span>
            <span className="mockup-dot"></span>
            <span className="mockup-url">bitsandbytes.studio</span>
          </div>
          <div className="cap-web-body">
            <div className="cap-web-h"></div>
            <div className="cap-web-h2"></div>
            <div className="cap-web-grid">
              <div></div><div></div><div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (kind === "design") {
    return (
      <div className="cap-visual cap-visual-design">
        <div className="cap-design-frame">
          <span className="cap-design-label">Daniel</span>
          <span className="cap-design-cursor"></span>
        </div>
      </div>
    );
  }
  return (
    <div className="cap-visual cap-visual-ios">
      <div className="cap-phone">
        <div className="cap-phone-notch"></div>
        <div className="cap-phone-screen">
          <div className="cap-phone-row" style={{width: "60%"}}></div>
          <div className="cap-phone-row" style={{width: "85%"}}></div>
          <div className="cap-phone-row" style={{width: "40%"}}></div>
          <div className="cap-phone-row" style={{width: "70%"}}></div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Stats: huge numbers strip ---------- */
function Stats() {
  const items = [
    { k: "48h", v: "Avg. turnaround" },
    { k: "99", v: "Lighthouse score" },
    { k: "0", v: "Bloat" },
    { k: "∞", v: "Iterations" },
  ];
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {items.map((it) => (
            <div key={it.k} className="stat-cell">
              <div className="stat-k">{it.k}</div>
              <div className="stat-v">{it.v}</div>
            </div>
          ))}
        </div>
        <p className="stats-foot">Every project gets the same attention to detail. No shortcuts on performance, accessibility, or code quality.</p>
      </div>
    </section>
  );
}

/* ---------- Pricing: 3 tiers ---------- */
function Pricing({ onNav }) {
  const tiers = [
    {
      name: "Starter",
      desc: "Perfect for MVPs and landing pages",
      price: "$999",
      cadence: "one-time",
      features: ["Single landing page", "Mobile responsive", "Live in 48 hours", "SEO optimized", "1 revision round"],
      cta: "Get started →",
    },
    {
      name: "Professional",
      desc: "Complete website solution",
      price: "$2,499",
      cadence: "one-time",
      featured: true,
      features: ["Up to 5 pages", "Custom design system", "Live in 48 hours", "Advanced SEO", "Contact forms + CMS", "3 revision rounds", "Performance optimization"],
      cta: "Start a project →",
    },
    {
      name: "Enterprise",
      desc: "For complex projects",
      price: "Custom",
      cadence: "",
      features: ["Unlimited pages", "Full app development", "Custom timeline", "API integrations", "Dedicated support", "Unlimited revisions"],
      cta: "Let's talk →",
    },
  ];
  return (
    <section className="pricing">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Pricing</span>
          <h2 className="section-title">Simple pricing,<br/>no surprises.</h2>
          <p className="section-sub">One-time payment. You own everything. No recurring fees.</p>
        </div>
        <div className="pricing-grid">
          {tiers.map((t, i) => {
            const ref = useInView();
            return (
              <div key={t.name} ref={ref} className={`tier ${t.featured ? "featured" : ""}`}>
                {t.featured && <span className="tier-badge">Most popular</span>}
                <h3 className="tier-name">{t.name}</h3>
                <p className="tier-desc">{t.desc}</p>
                <div className="tier-price">
                  <span className="tier-price-val">{t.price}</span>
                  {t.cadence && <span className="tier-cadence">{t.cadence}</span>}
                </div>
                <ul className="tier-features">
                  {t.features.map((f) => (
                    <li key={f}><i data-lucide="check"></i> {f}</li>
                  ))}
                </ul>
                <button
                  className={t.featured ? "btn" : "btn btn-secondary"}
                  onClick={() => onNav("/contact")}
                >
                  {t.cta}
                </button>
              </div>
            );
          })}
        </div>
        <div className="pricing-foot">
          <span><i data-lucide="shield-check"></i> Money-back guarantee</span>
          <span><i data-lucide="circle-dashed"></i> No hidden fees</span>
          <span><i data-lucide="key"></i> You own the code</span>
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonial ---------- */
function Testimonial() {
  const ref = useInView();
  const [active, setActive] = React.useState(0);
  const [fwd, setFwd] = React.useState(true);

  const items = [
    { q: "The team was a total pleasure to work with. Attentive, efficient, and with a close eye for detail. Would highly recommend.", name: "Baylee", role: "A&R, Universal Music Group", initial: "B" },
    { q: "Shipped our landing page in under a week. Lighthouse 100 across the board, and it looks better than anything we had before.", name: "Marcus Chen", role: "CTO, Amplitude", initial: "M" },
    { q: "They understood the brief immediately and pushed back when it needed it. That kind of honesty is rare in an agency.", name: "Sophie Wright", role: "Founder, Fern Studio", initial: "S" },
    { q: "Our iOS app went from sketch to App Store in 6 weeks. Clean code, zero drama.", name: "Jordan Kim", role: "Product Lead, Linear", initial: "J" },
    { q: "We've worked with a lot of studios. This is the first time the final product felt exactly like our vision.", name: "Tomas Reyes", role: "CEO, Flowstate", initial: "T" },
    { q: "Fast, communicative, and opinionated in the best way. They told us what would work — and they were right.", name: "Nia Osei", role: "Head of Design, Vercel", initial: "N" },
  ];

  const go = (idx) => {
    setFwd(idx > active || (active === items.length - 1 && idx === 0));
    setActive(idx);
  };
  const prev = () => go((active - 1 + items.length) % items.length);
  const next = () => go((active + 1) % items.length);

  return (
    <section className="testimonial">
      <div className="container" ref={ref} style={{ opacity: 0, transform: 'translateY(32px)' }}>
        <div className="testimonial-track">
          {items.map((item, i) => (
            <div key={i} className={"testimonial-slide" + (i === active ? (" testimonial-slide--active " + (fwd ? "testimonial-slide--fwd" : "testimonial-slide--bwd")) : "")}>
              <blockquote className="testimonial-quote">&ldquo;{item.q}&rdquo;</blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{item.initial}</div>
                <div className="testimonial-meta">
                  <div className="testimonial-name">{item.name}</div>
                  <div className="testimonial-role">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonial-nav">
          <button className="testimonial-arrow" onClick={prev} aria-label="Previous">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <div className="testimonial-dots">
            {items.map((_, i) => (
              <button key={i} className={"testimonial-dot" + (i === active ? " testimonial-dot--active" : "")} onClick={() => go(i)} aria-label={"Testimonial " + (i + 1)}></button>
            ))}
          </div>
          <button className="testimonial-arrow" onClick={next} aria-label="Next">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------- BookCall: simple CTA nudge ---------- */
function BookCall({ onNav }) {
  const ref = useInView();
  return (
    <section className="book-call" id="book-a-call">
      <div className="container">
        <div className="book-cta" ref={ref}>
          <div className="book-cta-left">
            <span className="eyebrow">Get started</span>
            <h2 className="section-title">Let&rsquo;s build something<br/>great together.</h2>
            <p className="section-sub">A quick call. No commitment, no pitch deck.</p>
          </div>
          <div className="book-cta-right">
            <button className="btn" onClick={() => onNav("/contact")}>
              Book a call
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Referral ---------- */
function Referral({ onNav }) {
  const ref = useInView();
  return (
    <section className="referral">
      <div className="container">
        <div className="referral-card" ref={ref} style={{ opacity: 0, transform: 'translateY(32px)' }}>
          <div className="referral-left">
            <span className="eyebrow">Referral program</span>
            <h3 className="referral-h">Know someone who needs a site?</h3>
            <p className="referral-b">Refer a client to us and earn 10&ndash;15% of the project value. A simple thank-you for spreading the word.</p>
          </div>
          <div className="referral-right">
            <div className="referral-num">10&ndash;15%</div>
            <div className="referral-num-lbl">Commission</div>
            <button className="btn btn-secondary" onClick={() => onNav("/contact")}>
              Learn more
              <i data-lucide="arrow-up-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  TrustedBy, Process, Capabilities, Stats, Pricing, Testimonial, BookCall, Referral
});
