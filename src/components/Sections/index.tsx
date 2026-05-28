'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import { useInView } from '@/hooks/useInView'

export function TrustedBy() {
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
  )
}

function ProcessMockup({ kind }: { kind: string }) {
  if (kind === 'call') return (
    <div className="mockup mockup-call">
      <div className="mockup-bar">
        <span className="mockup-rec"><span className="mockup-rec-dot" />REC</span>
        <span className="mockup-time">00:14:32</span>
      </div>
      <div className="mockup-tiles">
        <div className="mockup-tile"><div className="mockup-avatar">B</div><span>BC</span></div>
        <div className="mockup-tile active"><div className="mockup-avatar">Y</div><span>You</span></div>
      </div>
      <div className="mockup-waveform">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} style={{ height: (4 + Math.abs(Math.sin(i * 1.3)) * 14).toFixed(2) + 'px' }} />
        ))}
      </div>
    </div>
  )
  if (kind === 'slack') return (
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
  )
  return (
    <div className="mockup mockup-deploy">
      <div className="mockup-browser">
        <div className="mockup-browser-bar">
          <span className="mockup-dot" /><span className="mockup-dot" /><span className="mockup-dot" />
          <span className="mockup-url">yoursite.com</span>
        </div>
        <div className="mockup-browser-body">
          <span className="mockup-check">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
          </span>
          <div className="mockup-deploy-text"><strong>Deployed</strong><span>just now</span></div>
        </div>
      </div>
    </div>
  )
}

function ProcessCard({ step }: { step: { n: string; tag: string; h: string; b: string; mockup: string } }) {
  const ref = useInView()
  return (
    <div ref={ref as any} className="process-card">
      <div className="process-card-top">
        <span className="process-n">{step.n}</span>
        <span className="process-tag">{step.tag}</span>
      </div>
      <h3 className="process-h">{step.h}</h3>
      <p className="process-b">{step.b}</p>
      <ProcessMockup kind={step.mockup} />
    </div>
  )
}

export function Process() {
  const ref = useInView()
  const steps = [
    { n: '1', tag: 'Discovery', h: 'Quick Call', b: '30-minute chat to understand your goals, timeline, and success criteria.', mockup: 'call' },
    { n: '2', tag: 'Collaboration', h: 'Direct Access', b: 'Real-time updates via a dedicated Slack channel. No middlemen.', mockup: 'slack' },
    { n: '3', tag: 'Delivery', h: 'Launch Fast', b: 'Design, build, and deploy. Most projects go live in under 48 hours.', mockup: 'deploy' },
  ]
  return (
    <section className="process in-view" ref={ref as any}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">How we work</span>
          <h2 className="section-title">A simple process,<br />exceptional results.</h2>
          <p className="section-sub">From first call to launch, we keep things transparent and efficient.</p>
        </div>
        <div className="process-grid">
          {steps.map(s => <ProcessCard key={s.n} step={s} />)}
        </div>
      </div>
    </section>
  )
}

function CapVisual({ kind }: { kind: string }) {
  if (kind === 'web') return (
    <div className="cap-visual cap-visual-web">
      <div className="mockup-browser">
        <div className="mockup-browser-bar">
          <span className="mockup-dot" /><span className="mockup-dot" /><span className="mockup-dot" />
          <span className="mockup-url">bitsandbytes.studio</span>
        </div>
        <div className="cap-web-body">
          <div className="cap-web-h" /><div className="cap-web-h2" />
          <div className="cap-web-grid"><div /><div /><div /></div>
        </div>
      </div>
    </div>
  )
  if (kind === 'design') return (
    <div className="cap-visual cap-visual-design">
      <div className="cap-design-frame">
        <span className="cap-design-label">Daniel</span>
        <span className="cap-design-cursor" />
      </div>
    </div>
  )
  return (
    <div className="cap-visual cap-visual-ios">
      <div className="cap-phone">
        <div className="cap-phone-notch" />
        <div className="cap-phone-screen">
          {['60%', '85%', '40%', '70%'].map((w, i) => <div key={i} className="cap-phone-row" style={{ width: w }} />)}
        </div>
      </div>
    </div>
  )
}

function CapRow({ cap, statsRow }: { cap?: { num: string; label: string; h: string; b: string; tags: string[]; visual: string }; statsRow?: boolean }) {
  const ref = useInView()
  const stats = [
    { big: '48h', label: 'Avg. turnaround' },
    { big: '99', label: 'Lighthouse score' },
    { big: '0', label: 'Bloat' },
    { big: '∞', label: 'Iterations' },
  ]
  if (statsRow) return (
    <div ref={ref as any} className="cap-row cap-row--stats" style={{ opacity: 0, transform: 'translateY(24px)' }}>
      <div className="cap-row-num" style={{ color: 'var(--border)' }}>—</div>
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
  )
  if (!cap) return null
  return (
    <div ref={ref as any} className="cap-row" style={{ opacity: 0, transform: 'translateY(24px)' }}>
      <div className="cap-row-num">{cap.num}</div>
      <div className="cap-row-hed">
        <div className="cap-row-label">{cap.label}</div>
        <h3 className="cap-row-h">{cap.h}</h3>
      </div>
      <div className="cap-row-body">
        <p className="cap-b">{cap.b}</p>
        <div className="cap-tags">{cap.tags.map(t => <span key={t} className="cap-tag">{t}</span>)}</div>
      </div>
      <CapVisual kind={cap.visual} />
    </div>
  )
}

export function Capabilities() {
  const caps = [
    { num: '01', label: 'WEB', h: 'Sites that ship in days, not months.', b: 'Next.js, React, TypeScript. SEO-first architecture. 99+ Lighthouse scores standard.', tags: ['Landing pages', 'SaaS', 'E-commerce', 'Web apps'], visual: 'web' },
    { num: '02', label: 'DESIGN', h: 'Pixel-perfect interfaces.', b: 'From wireframes to polished UI. Design systems that scale.', tags: ['UI systems', 'Motion', 'Brand'], visual: 'design' },
    { num: '03', label: 'iOS', h: 'Native Swift apps.', b: 'SwiftUI & UIKit. App Store ready. Widgets included.', tags: ['SwiftUI', 'UIKit', 'Widgets'], visual: 'ios' },
  ]
  return (
    <section className="capabilities">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Capabilities</span>
          <h2 className="section-title">Three things.<br />Done exceptionally well.</h2>
        </div>
        <div className="cap-rows">
          {caps.map(c => <CapRow key={c.num} cap={c} />)}
          <CapRow statsRow />
        </div>
      </div>
    </section>
  )
}

function PricingTierCard({ tier }: { tier: { name: string; desc: string; price: string; cadence: string; featured: boolean; features: string[] } }) {
  const ref = useInView()
  return (
    <div ref={ref as any} className={`tier${tier.featured ? ' featured' : ''}`}>
      {tier.featured && <span className="tier-badge">Most popular</span>}
      <h3 className="tier-name">{tier.name}</h3>
      <p className="tier-desc">{tier.desc}</p>
      <div className="tier-price">
        <span className="tier-price-val">{tier.price}</span>
        {tier.cadence && <span className="tier-cadence">{tier.cadence}</span>}
      </div>
      <ul className="tier-features">
        {tier.features.map(f => (
          <li key={f}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            {f}
          </li>
        ))}
      </ul>
      <Link href="/contact" className={tier.featured ? 'btn' : 'btn btn-secondary'}>
        {tier.name === 'Enterprise' ? "Let's talk →" : tier.featured ? 'Start a project →' : 'Get started →'}
      </Link>
    </div>
  )
}

export function Pricing() {
  const tiers = [
    { name: 'Starter', desc: 'Perfect for MVPs and landing pages', price: '$999', cadence: 'one-time', featured: false, features: ['Single landing page', 'Mobile responsive', 'Live in 48 hours', 'SEO optimized', '1 revision round'] },
    { name: 'Professional', desc: 'Complete website solution', price: '$2,499', cadence: 'one-time', featured: true, features: ['Up to 5 pages', 'Custom design system', 'Live in 48 hours', 'Advanced SEO', 'Contact forms + CMS', '3 revision rounds', 'Performance optimization'] },
    { name: 'Enterprise', desc: 'For complex projects', price: 'Custom', cadence: '', featured: false, features: ['Unlimited pages', 'Full app development', 'Custom timeline', 'API integrations', 'Dedicated support', 'Unlimited revisions'] },
  ]
  return (
    <section className="pricing">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Pricing</span>
          <h2 className="section-title">Simple pricing,<br />no surprises.</h2>
          <p className="section-sub">One-time payment. You own everything. No recurring fees.</p>
        </div>
        <div className="pricing-grid">
          {tiers.map(t => <PricingTierCard key={t.name} tier={t} />)}
        </div>
        <div className="pricing-foot">
          <span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            Money-back guarantee
          </span>
          <span>No hidden fees</span>
          <span>You own the code</span>
        </div>
      </div>
    </section>
  )
}

export function Testimonial() {
  const ref = useInView()
  const [active, setActive] = useState(0)
  const [fwd, setFwd] = useState(true)

  const items = [
    { q: 'The team was a total pleasure to work with. Attentive, efficient, and with a close eye for detail. Would highly recommend.', name: 'Baylee', role: 'A&R, Universal Music Group', initial: 'B' },
    { q: 'Shipped our landing page in under a week. Lighthouse 100 across the board, and it looks better than anything we had before.', name: 'Marcus Chen', role: 'CTO, Amplitude', initial: 'M' },
    { q: 'They understood the brief immediately and pushed back when it needed it. That kind of honesty is rare in an agency.', name: 'Sophie Wright', role: 'Founder, Fern Studio', initial: 'S' },
    { q: 'Our iOS app went from sketch to App Store in 6 weeks. Clean code, zero drama.', name: 'Jordan Kim', role: 'Product Lead, Linear', initial: 'J' },
    { q: "We've worked with a lot of studios. This is the first time the final product felt exactly like our vision.", name: 'Tomas Reyes', role: 'CEO, Flowstate', initial: 'T' },
    { q: 'Fast, communicative, and opinionated in the best way. They told us what would work — and they were right.', name: 'Nia Osei', role: 'Head of Design, Vercel', initial: 'N' },
  ]

  const go = (idx: number) => {
    setFwd(idx > active || (active === items.length - 1 && idx === 0))
    setActive(idx)
  }

  return (
    <section className="testimonial">
      <div className="container" ref={ref as any} style={{ opacity: 0, transform: 'translateY(32px)' }}>
        <div className="testimonial-track">
          {items.map((item, i) => (
            <div key={i} className={`testimonial-slide${i === active ? ` testimonial-slide--active ${fwd ? 'testimonial-slide--fwd' : 'testimonial-slide--bwd'}` : ''}`}>
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
          <button className="testimonial-arrow" onClick={() => go((active - 1 + items.length) % items.length)} aria-label="Previous">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <div className="testimonial-dots">
            {items.map((_, i) => (
              <button key={i} className={`testimonial-dot${i === active ? ' testimonial-dot--active' : ''}`} onClick={() => go(i)} aria-label={`Testimonial ${i + 1}`} />
            ))}
          </div>
          <button className="testimonial-arrow" onClick={() => go((active + 1) % items.length)} aria-label="Next">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export function BookCall() {
  const ref = useInView()
  return (
    <section className="book-call" id="book-a-call">
      <div className="container">
        <div className="book-cta" ref={ref as any}>
          <div className="book-cta-left">
            <span className="eyebrow">Get started</span>
            <h2 className="section-title">Let&rsquo;s build something<br />great together.</h2>
            <p className="section-sub">A quick call. No commitment, no pitch deck.</p>
          </div>
          <div className="book-cta-right">
            <Link href="/contact" className="btn">
              Book a call
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Referral() {
  const ref = useInView()
  return (
    <section className="referral">
      <div className="container">
        <div className="referral-card" ref={ref as any} style={{ opacity: 0, transform: 'translateY(32px)' }}>
          <div className="referral-left">
            <span className="eyebrow">Referral program</span>
            <h3 className="referral-h">Know someone who needs a site?</h3>
            <p className="referral-b">Refer a client to us and earn 10&ndash;15% of the project value. A simple thank-you for spreading the word.</p>
          </div>
          <div className="referral-right">
            <div className="referral-num">10&ndash;15%</div>
            <div className="referral-num-lbl">Commission</div>
            <Link href="/contact" className="btn btn-secondary">
              Learn more
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M7 7h10v10" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
