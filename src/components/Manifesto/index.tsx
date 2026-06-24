'use client'

import { useEffect, useRef, useState } from 'react'
import type { About, TeamMember } from '@/payload-types'

type Token = { t: string; v: string }
type Line = Token[]

const colorMap: Record<string, string> = {
  kw: 'var(--code-kw)', vn: 'var(--code-vn)', pr: 'var(--code-pr)',
  st: 'var(--code-st)', nm: 'var(--code-st)', cm: 'var(--fg-3)',
  pl: 'var(--fg-2)', sp: 'transparent',
}

function buildLines(member: TeamMember): Line[] {
  const varName = member.name.toLowerCase()

  type PropRow =
    | { kind: 'str'; key: string; value: string }
    | { kind: 'num'; key: string; value: number }
    | { kind: 'arr'; key: string; items: string[] }

  const rows: PropRow[] = []

  if (member.background) {
    rows.push({ kind: 'str', key: 'background', value: member.background })
  }
  if (member.metricKey && member.metricValue != null) {
    rows.push({ kind: 'num', key: member.metricKey, value: member.metricValue })
  }
  if (member.itemsKey && member.items && member.items.length > 0) {
    rows.push({ kind: 'arr', key: member.itemsKey, items: member.items.map((i) => i.item) })
  }
  if (member.secondaryItemsKey && member.secondaryItems && member.secondaryItems.length > 0) {
    rows.push({ kind: 'arr', key: member.secondaryItemsKey, items: member.secondaryItems.map((i) => i.item) })
  }
  if (member.focus) {
    rows.push({ kind: 'str', key: 'focus', value: member.focus })
  }

  const maxKeyLen = rows.length > 0 ? Math.max(...rows.map((r) => r.key.length)) : 0
  // Padding goes in the separator so property names stay clean
  const makeSep = (key: string) => ': ' + ' '.repeat(maxKeyLen - key.length)

  const lines: Line[] = []

  lines.push([
    { t: 'kw', v: 'const ' },
    { t: 'vn', v: varName },
    { t: 'pl', v: ' = {' },
  ])

  rows.forEach((row, idx) => {
    const isLast = idx === rows.length - 1

    if (row.kind === 'str') {
      lines.push([
        { t: 'sp', v: '  ' },
        { t: 'pr', v: row.key },
        { t: 'pl', v: makeSep(row.key) },
        { t: 'st', v: `"${row.value}"` },
        ...(isLast ? [] : [{ t: 'pl', v: ',' } as Token]),
      ])
    } else if (row.kind === 'num') {
      lines.push([
        { t: 'sp', v: '  ' },
        { t: 'pr', v: row.key },
        { t: 'pl', v: makeSep(row.key) },
        { t: 'nm', v: String(row.value) },
        ...(isLast ? [] : [{ t: 'pl', v: ',' } as Token]),
      ])
    } else {
      const itemTokens: Token[] = []
      row.items.forEach((item, ii) => {
        itemTokens.push({ t: 'st', v: `"${item}"` })
        if (ii < row.items.length - 1) itemTokens.push({ t: 'pl', v: ', ' })
      })
      lines.push([
        { t: 'sp', v: '  ' },
        { t: 'pr', v: row.key },
        { t: 'pl', v: makeSep(row.key) + '[' },
        ...itemTokens,
        { t: 'pl', v: isLast ? ']' : '],' },
      ])
    }
  })

  lines.push([{ t: 'pl', v: '}' }])

  return lines
}

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
  const lines = m ? buildLines(m) : []
  const stats = about.stats ?? []

  return (
    <section className="manifesto" id="about-us">
      <div className="container">
        <div className="about-grid">
          <div className="about-col">
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
          <div className="about-col">
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
            {m && (
              <div className="stack-snippet">
                <div className="stack-head">
                  <span>team.bios.ts</span>
                  <span className="stack-tag">{m.name.toLowerCase()}.ts</span>
                </div>
                <pre
                  className="stack-code"
                  key={selected}
                  style={{ animation: 'bioFadeIn 0.25s ease-out' }}
                >
                  {lines.map((line, li) => (
                    <div key={li} className="bio-line">
                      {line.map((p, pi) => (
                        <span key={pi} style={{ color: colorMap[p.t] }}>
                          {p.v}
                        </span>
                      ))}
                    </div>
                  ))}
                  {'\n'}
                  <span style={{ color: 'var(--fg-3)', fontStyle: 'italic' }}>
                    {about.snippetComment ?? '// Senior-only. No juniors, no agencies.'}
                  </span>
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
