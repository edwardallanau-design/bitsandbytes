'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const pillRef = useRef<HTMLDivElement>(null)
  const ctasRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  // Typing animation
  useEffect(() => {
    const title = titleRef.current
    const sub = subRef.current
    if (!title || !sub) return

    if ((window as any).__heroAnimated) {
      title.innerHTML = 'Software solutions,<br>shipped fast.'
      while (sub.firstChild) sub.removeChild(sub.firstChild)
      const subSpan = document.createElement('span')
      subSpan.className = 'sub-text'
      subSpan.textContent = "Sites and apps, live in days. Great ideas shouldn't wait."
      const cursor = document.createElement('span')
      cursor.className = 'typing-cursor'
      sub.appendChild(subSpan)
      sub.appendChild(cursor)
      pillRef.current?.classList.remove('fade-in-hidden')
      ctasRef.current?.classList.remove('fade-in-hidden')
      statsRef.current?.classList.remove('fade-in-hidden')
      return
    }

    while (title.firstChild) title.removeChild(title.firstChild)
    while (sub.firstChild) sub.removeChild(sub.firstChild)

    const titlePart1 = 'Software solutions,'
    const titlePart2 = 'shipped fast.'
    const subText = "Sites and apps, live in days. Great ideas shouldn’t wait."

    let phase = 0
    let charIndex = 0
    let subTextSpan: HTMLSpanElement | null = null

    const typeCharacter = () => {
      if (phase === 0 && charIndex < titlePart1.length) {
        const span = title.querySelector('.part1') as HTMLSpanElement || (() => {
          const s = document.createElement('span'); s.className = 'part1'; title.appendChild(s); return s
        })()
        span.textContent += titlePart1[charIndex++]
      } else if (phase === 0) {
        title.appendChild(document.createElement('br'))
        phase = 1; charIndex = 0
      } else if (phase === 1 && charIndex < titlePart2.length) {
        const span = title.querySelector('.part2') as HTMLSpanElement || (() => {
          const s = document.createElement('span'); s.className = 'part2'; title.appendChild(s); return s
        })()
        span.textContent += titlePart2[charIndex++]
      } else if (phase === 1) {
        phase = 2; charIndex = 0
        subTextSpan = document.createElement('span')
        subTextSpan.className = 'sub-text'
        sub.appendChild(subTextSpan)
        const cursor = document.createElement('span')
        cursor.className = 'typing-cursor'
        sub.appendChild(cursor)
      } else if (phase === 2 && charIndex < subText.length) {
        if (subTextSpan) subTextSpan.textContent += subText[charIndex++]
      }

      const delay = phase === 2 ? 30 : 75
      if (phase < 2 || charIndex < subText.length) {
        setTimeout(typeCharacter, delay)
      } else {
        let d = 200
        const show = (ref: React.RefObject<HTMLElement | null>, extra?: () => void) => {
          setTimeout(() => {
            ref.current?.classList.remove('fade-in-hidden')
            ref.current?.classList.add('fade-in-visible')
            extra?.()
          }, d)
          d += 200
        }
        show(pillRef)
        show(ctasRef)
        show(statsRef, () => { (window as any).__heroAnimated = true })
      }
    }

    typeCharacter()
  }, [])

  // Pixel grid canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let raf: number
    let w = 0, h = 0, dpr = 1
    const dots: { x: number; y: number; base: number; amp: number; speed: number; phase: number; bright: boolean }[] = []

    const isDark = () => document.documentElement.dataset.theme !== 'light'

    const resize = () => {
      dpr = window.devicePixelRatio || 1
      const r = canvas.getBoundingClientRect()
      w = r.width; h = r.height
      canvas.width = w * dpr; canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      dots.length = 0
      for (let y = 16; y < h; y += 32) {
        for (let x = 16; x < w; x += 32) {
          dots.push({ x, y, base: 0.04 + Math.random() * 0.04, amp: 0.05 + Math.random() * 0.35, speed: 0.15 + Math.random() * 0.6, phase: Math.random() * Math.PI * 2, bright: Math.random() < 0.12 })
        }
      }
    }

    const tick = (t: number) => {
      ctx.clearRect(0, 0, w, h)
      const dark = isDark()
      const ms = t / 1000
      for (const d of dots) {
        const pulse = (Math.sin(ms * d.speed + d.phase) + 1) / 2
        let a = d.base + pulse * d.amp
        if (d.bright) a = Math.min(1, a * 1.8)
        ctx.fillStyle = dark ? `rgba(255,255,255,${a})` : `rgba(0,0,0,${a * 0.7})`
        const size = d.bright ? 2 : 1
        ctx.fillRect(d.x - size / 2, d.y - size / 2, size, size)
      }
      raf = requestAnimationFrame(tick)
    }

    resize()
    raf = requestAnimationFrame(tick)
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="container hero-inner">
        <h1 className="hero-title" ref={titleRef} />
        <p className="hero-sub" ref={subRef} />
        <div className="hero-ctas fade-in-hidden" ref={ctasRef}>
          <Link href="/contact" className="btn">
            Start a project
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M7 7h10v10" /></svg>
          </Link>
          <Link href="/work" className="btn btn-secondary">See our work</Link>
        </div>
        <div className="hero-stats fade-in-hidden" ref={statsRef}>
          <div className="hero-stat">
            <div className="hero-stat-val">20+</div>
            <div className="hero-stat-lbl">Projects<br />delivered</div>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <div className="hero-stat-val">10+</div>
            <div className="hero-stat-lbl">Yrs of<br />experience</div>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <div className="hero-stat-val">48h</div>
            <div className="hero-stat-lbl">Avg.<br />turnaround</div>
          </div>
        </div>
      </div>
    </section>
  )
}
