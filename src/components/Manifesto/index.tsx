'use client'

import { useEffect, useRef, useState } from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { About, TeamMember } from '@/payload-types'

type ManifestoProps = {
  about: About
  members: TeamMember[]
}

export function Manifesto({ about, members }: ManifestoProps) {
  const statsRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)
  const [selected, setSelected] = useState(0)
  const [statsVisible, setStatsVisible] = useState<boolean[]>(
    () => Array(about.stats?.length ?? 0).fill(false),
  )
  const [teamVisible, setTeamVisible] = useState<boolean[]>(
    () => Array(members.length).fill(false),
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          const idx = parseInt(el.dataset.idx ?? '0', 10)
          if (el.dataset.kind === 'stat')
            setStatsVisible((p) => {
              const n = [...p]
              n[idx] = true
              return n
            })
          if (el.dataset.kind === 'team')
            setTeamVisible((p) => {
              const n = [...p]
              n[idx] = true
              return n
            })
          observer.unobserve(el)
        })
      },
      { threshold: 0.1, rootMargin: '-100px' },
    )

    statsRef.current?.querySelectorAll<HTMLElement>('[data-kind="stat"]').forEach((el) => {
      const r = el.getBoundingClientRect()
      if (r.top < window.innerHeight && r.bottom > 0) {
        setStatsVisible((p) => {
          const n = [...p]
          n[parseInt(el.dataset.idx ?? '0', 10)] = true
          return n
        })
      } else observer.observe(el)
    })
    teamRef.current?.querySelectorAll<HTMLElement>('[data-kind="team"]').forEach((el) => {
      const r = el.getBoundingClientRect()
      if (r.top < window.innerHeight && r.bottom > 0) {
        setTeamVisible((p) => {
          const n = [...p]
          n[parseInt(el.dataset.idx ?? '0', 10)] = true
          return n
        })
      } else observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const m = members[selected]
  const stats = about.stats ?? []

  return (
    <section className="manifesto" id="about-us">
      <div className="container">
        <div className="about-grid">
          <div className="about-col about-col--left">
            <h3 className="about-h">{about.whoWeAreHeading ?? 'Who we are'}</h3>
            {about.bio1 && <p className="about-b">{about.bio1}</p>}
            {about.bio2 && <p className="about-b">{about.bio2}</p>}
            <div className="about-tags">
              {(about.tags ?? []).map((t) => (
                <span key={t.id ?? t.tag} className="cap-tag">
                  {t.tag}
                </span>
              ))}
            </div>
            <h3 className="about-h" style={{ marginTop: 40 }}>
              The team
            </h3>
            <div className="about-team" ref={teamRef}>
              {members.map((member, i) => (
                <div
                  key={member.id}
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
          <div className="about-col about-col--right">
            <h3 className="about-h">By the numbers</h3>
            <div className="about-stats" ref={statsRef}>
              {stats.map((s, i) => (
                <div
                  key={s.id ?? s.value}
                  className={`about-stat${statsVisible[i] ? ' in-view' : ''}`}
                  data-kind="stat"
                  data-idx={i}
                >
                  <div className="about-stat-k">{s.value}</div>
                  <div className="about-stat-v">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          {m && (
            <div className="stack-snippet">
              <div className="stack-head">
                <span>team.bios.ts</span>
                <span className="stack-tag">{m.name.toLowerCase()}.ts</span>
              </div>
              <div
                className="stack-code"
                key={selected}
                style={{ animation: 'bioFadeIn 0.25s ease-out' }}
              >
                <div className="bio-line">
                  <span style={{ color: 'var(--fg-1)', fontWeight: 600 }}>const </span>
                  <span style={{ color: 'var(--fg-1)' }}>{m.name.toLowerCase()}</span>
                  <span style={{ color: 'var(--fg-2)' }}>{' = {'}</span>
                </div>
                {m.bio && <RichText data={m.bio} className="stack-bio-para" />}
                <div className="bio-line">
                  <span style={{ color: 'var(--fg-2)' }}>{'}'}</span>
                </div>
                <span className="stack-comment">
                  {about.snippetComment ?? '// Senior-only. No juniors, no agencies.'}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
