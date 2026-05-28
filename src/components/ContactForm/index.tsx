'use client'

import { useState } from 'react'

const TIMES = ['09:00', '10:30', '12:00', '13:30', '15:00', '16:30']
const AVAIL_DAYS = [7, 8, 12, 13, 14, 19, 20, 21, 26, 27, 28]

function dayLabel(day: number) {
  const names = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const d = new Date(2026, 4, day)
  return `${names[d.getDay()]} May ${day}`
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [pickedDay, setPickedDay] = useState(14)
  const [pickedTime, setPickedTime] = useState<string | null>(null)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !message || !pickedTime) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="contact">
        <div className="container">
          <div className="contact-confirm">
            <div className="contact-confirm-check">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M6 14l6 6 10-12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="section-title" style={{ margin: '24px 0 12px' }}>You&rsquo;re booked.</h2>
            <p className="section-sub" style={{ marginBottom: 40 }}>See you {dayLabel(pickedDay)} at {pickedTime}. We&rsquo;ll also reply to your brief within two business days.</p>
            <div className="contact-receipt" style={{ maxWidth: 480 }}>
              <span className="eyebrow" style={{ display: 'block', marginBottom: 12 }}>Receipt</span>
              <div className="receipt-row"><span>Name</span><span>{name || '(no name)'}</span></div>
              <div className="receipt-row"><span>Email</span><span>{email}</span></div>
              <div className="receipt-row"><span>Call</span><span>{dayLabel(pickedDay)} &middot; {pickedTime}</span></div>
              <div className="receipt-row"><span>Brief</span><span>{message.length} chars sent</span></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="contact">
      <div className="container">
        <form className="contact-merged" onSubmit={submit}>
          <div className="contact-merged-cal">
            <span className="eyebrow" style={{ display: 'block', marginBottom: 20 }}>Pick a time</span>
            <div className="cal">
              <div className="cal-head">
                <span className="cal-month">May 2026</span>
                <div className="cal-nav">
                  <button type="button" className="tb-icon-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                  </button>
                  <button type="button" className="tb-icon-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                  </button>
                </div>
              </div>
              <div className="cal-dow">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => <span key={i}>{d}</span>)}
              </div>
              <div className="cal-grid">
                {Array.from({ length: 35 }).map((_, i) => {
                  const day = i - 4
                  const isMonth = day > 0 && day <= 31
                  const isAvail = isMonth && AVAIL_DAYS.includes(day)
                  const isSel = day === pickedDay
                  return (
                    <span
                      key={i}
                      className={`cal-day${isMonth ? ' in-month' : ''}${isAvail ? ' avail' : ''}${isSel ? ' selected' : ''}`}
                      onClick={() => { if (isAvail) { setPickedDay(day); setPickedTime(null) } }}
                      style={{ cursor: isAvail ? 'pointer' : undefined }}
                    >
                      {isMonth ? day : ''}
                    </span>
                  )
                })}
              </div>
              <div className="cal-times">
                <div className="cal-times-head">Available &middot; {dayLabel(pickedDay)}</div>
                <div className="cal-times-grid">
                  {TIMES.map(t => (
                    <button key={t} type="button" className={`cal-time${pickedTime === t ? ' active' : ''}`} onClick={() => setPickedTime(t)}>{t}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="contact-merged-fields">
            <span className="eyebrow" style={{ display: 'block', marginBottom: 20 }}>Your details</span>
            <div className="field-row">
              <div className="field">
                <span className="eyebrow">Name</span>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Theo Bennett" />
              </div>
              <div className="field">
                <span className="eyebrow">Email *</span>
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="hello@example.com" required />
              </div>
            </div>
            <div className="field" style={{ flex: 1 }}>
              <span className="eyebrow">What are you working on? *</span>
              <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="A few sentences is plenty." required style={{ flex: 1, minHeight: 140 }} />
            </div>
            <div className="contact-merged-footer">
              <button className="btn" type="submit" disabled={!pickedTime || !email || !message}>
                {pickedTime ? `Book ${pickedTime} & send brief` : 'Pick a time to continue'}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M7 7h10v10" /></svg>
              </button>
              <div className="contact-merged-direct">
                <span className="eyebrow">Or reach us directly</span>
                <a href="mailto:hello@bitsandbytes.studio" className="book-direct-link">hello@bitsandbytes.studio</a>
                <a href="tel:+17185550144" className="book-direct-link">+1 (718) 555-0144</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
