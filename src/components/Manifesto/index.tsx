'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { k: '12+', v: 'Years exp.' },
  { k: '48hr', v: 'Turnaround' },
  { k: '100+', v: 'Projects' },
  { k: '99', v: 'Lighthouse' },
]

const team = [
  {
    name: 'Daniel', role: 'Lead developer', initials: 'D',
    lines: [
      [{ t: 'kw', v: 'const ' }, { t: 'vn', v: 'daniel' }, { t: 'pl', v: ' = {' }],
      [{ t: 'sp', v: '  ' }, { t: 'pr', v: 'background' }, { t: 'pl', v: ': ' }, { t: 'st', v: '"Ex-Stripe, ex-Vercel."' }, { t: 'pl', v: ',' }],
      [{ t: 'sp', v: '  ' }, { t: 'pr', v: 'years' }, { t: 'pl', v: ':      ' }, { t: 'nm', v: '8' }, { t: 'pl', v: ',' }],
      [{ t: 'sp', v: '  ' }, { t: 'pr', v: 'stack' }, { t: 'pl', v: ':      [' }, { t: 'st', v: '"TypeScript"' }, { t: 'pl', v: ', ' }, { t: 'st', v: '"React"' }, { t: 'pl', v: '],' }],
      [{ t: 'sp', v: '  ' }, { t: 'pr', v: 'focus' }, { t: 'pl', v: ':      ' }, { t: 'st', v: '"Full-stack & infra"' }],
      [{ t: 'pl', v: '}' }],
    ],
  },
  {
    name: 'Grigory', role: 'Designer', initials: 'G',
    lines: [
      [{ t: 'kw', v: 'const ' }, { t: 'vn', v: 'grigory' }, { t: 'pl', v: ' = {' }],
      [{ t: 'sp', v: '  ' }, { t: 'pr', v: 'background' }, { t: 'pl', v: ': ' }, { t: 'st', v: '"Brand systems for Linear."' }, { t: 'pl', v: ',' }],
      [{ t: 'sp', v: '  ' }, { t: 'pr', v: 'prev' }, { t: 'pl', v: ':           [' }, { t: 'st', v: '"Arc"' }, { t: 'pl', v: ', ' }, { t: 'st', v: '"Raycast"' }, { t: 'pl', v: '],' }],
      [{ t: 'sp', v: '  ' }, { t: 'pr', v: 'tools' }, { t: 'pl', v: ':          [' }, { t: 'st', v: '"Figma"' }, { t: 'pl', v: ', ' }, { t: 'st', v: '"Framer"' }, { t: 'pl', v: '],' }],
      [{ t: 'sp', v: '  ' }, { t: 'pr', v: 'focus' }, { t: 'pl', v: ':          ' }, { t: 'st', v: '"UI systems & motion"' }],
      [{ t: 'pl', v: '}' }],
    ],
  },
  {
    name: 'Lukaz', role: 'Developer', initials: 'L',
    lines: [
      [{ t: 'kw', v: 'const ' }, { t: 'vn', v: 'lukaz' }, { t: 'pl', v: ' = {' }],
      [{ t: 'sp', v: '  ' }, { t: 'pr', v: 'background' }, { t: 'pl', v: ': ' }, { t: 'st', v: '"Native iOS since iOS 5."' }, { t: 'pl', v: ',' }],
      [{ t: 'sp', v: '  ' }, { t: 'pr', v: 'shipped' }, { t: 'pl', v: ':     ' }, { t: 'nm', v: '12' }, { t: 'pl', v: ',' }],
      [{ t: 'sp', v: '  ' }, { t: 'pr', v: 'stack' }, { t: 'pl', v: ':        [' }, { t: 'st', v: '"Swift"' }, { t: 'pl', v: ', ' }, { t: 'st', v: '"SwiftUI"' }, { t: 'pl', v: '],' }],
      [{ t: 'sp', v: '  ' }, { t: 'pr', v: 'focus' }, { t: 'pl', v: ':        ' }, { t: 'st', v: '"iOS & watchOS"' }],
      [{ t: 'pl', v: '}' }],
    ],
  },
]

const colorMap: Record<string, string> = {
  kw: 'var(--code-kw)', vn: 'var(--code-vn)', pr: 'var(--code-pr)',
  st: 'var(--code-st)', nm: 'var(--code-st)', cm: 'var(--fg-3)',
  pl: 'var(--fg-2)', sp: 'transparent',
}

export function Manifesto() {
  const statsRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)
  const [selected, setSelected] = useState(0)
  const [statsVisible, setStatsVisible] = useState([false, false, false, false])
  const [teamVisible, setTeamVisible] = useState([false, false, false])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        const el = entry.target as HTMLElement
        const idx = parseInt(el.dataset.idx ?? '0', 10)
        if (el.dataset.kind === 'stat') setStatsVisible(p => { const n = [...p]; n[idx] = true; return n })
        if (el.dataset.kind === 'team') setTeamVisible(p => { const n = [...p]; n[idx] = true; return n })
        observer.unobserve(el)
      })
    }, { threshold: 0.1, rootMargin: '-100px' })

    statsRef.current?.querySelectorAll<HTMLElement>('[data-kind="stat"]').forEach(el => {
      const r = el.getBoundingClientRect()
      if (r.top < window.innerHeight && r.bottom > 0) {
        setStatsVisible(p => { const n = [...p]; n[parseInt(el.dataset.idx ?? '0', 10)] = true; return n })
      } else observer.observe(el)
    })
    teamRef.current?.querySelectorAll<HTMLElement>('[data-kind="team"]').forEach(el => {
      const r = el.getBoundingClientRect()
      if (r.top < window.innerHeight && r.bottom > 0) {
        setTeamVisible(p => { const n = [...p]; n[parseInt(el.dataset.idx ?? '0', 10)] = true; return n })
      } else observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const m = team[selected]

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
            <h3 className="about-h" style={{ marginTop: 40 }}>The team</h3>
            <div className="about-team" ref={teamRef}>
              {team.map((member, i) => (
                <div
                  key={member.name}
                  className={`team-card${teamVisible[i] ? ' in-view' : ''}${selected === i ? ' team-card--active' : ''}`}
                  data-kind="team"
                  data-idx={i}
                  onClick={() => setSelected(i)}
                  style={{ cursor: 'pointer' }}
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
                <div key={s.k} className={`about-stat${statsVisible[i] ? ' in-view' : ''}`} data-kind="stat" data-idx={i}>
                  <div className="about-stat-k">{s.k}</div>
                  <div className="about-stat-v">{s.v}</div>
                </div>
              ))}
            </div>
            <div className="stack-snippet">
              <div className="stack-head">
                <span>team.bios.ts</span>
                <span className="stack-tag">{m.name.toLowerCase()}.ts</span>
              </div>
              <pre className="stack-code" key={selected} style={{ animation: 'bioFadeIn 0.25s ease-out' }}>
                {m.lines.map((line, li) => (
                  <div key={li} className="bio-line">
                    {line.map((p, pi) => (
                      <span key={pi} style={{ color: colorMap[p.t] }}>{p.v}</span>
                    ))}
                  </div>
                ))}
                {'\n'}
                <span style={{ color: 'var(--fg-3)', fontStyle: 'italic' }}>{'// Senior-only. No juniors, no agencies.'}</span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
