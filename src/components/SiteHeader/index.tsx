'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const NAV_ITEMS = [
  { num: '01', label: 'Index', href: '/' },
  { num: '02', label: 'Work', href: '/work' },
  { num: '03', label: 'About', href: '/about' },
  { num: '04', label: 'Journal', href: '/journal' },
  { num: '05', label: 'Contact', href: '/contact' },
]

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2m-7.07-14.07 1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2m-4.34 5.66-1.41 1.41M6.34 6.34 4.93 4.93" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export function SiteHeader() {
  const pathname = usePathname()
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [iconFading, setIconFading] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null
    const initial = saved ?? 'dark'
    setTheme(initial)
    document.documentElement.dataset.theme = initial
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const toggleTheme = () => {
    setIconFading(true)
    setTimeout(() => {
      const next = theme === 'light' ? 'dark' : 'light'
      setTheme(next)
      document.documentElement.dataset.theme = next
      localStorage.setItem('theme', next)
      setTimeout(() => setIconFading(false), 50)
    }, 180)
  }

  return (
    <>
      <header className="site-header">
        <div className="container site-header-inner">
          <Link className="wordmark" href="/" onClick={() => setMenuOpen(false)}>
            <img
              src={theme === 'dark' ? '/assets/logo-dark.png' : '/assets/logo-light.png'}
              alt="bitsandbytes."
              className="wordmark-img"
              style={{ height: 32, width: 'auto' }}
            />
          </Link>
          <nav className="site-nav">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-item${pathname === item.href ? ' active' : ''}`}
              >
                <span className="nav-num">{item.num}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
          <div className="header-tail">
            <button
              className={`theme-toggle${iconFading ? ' icon-fading' : ''}`}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
            <button
              className="mobile-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-drawer${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="mobile-drawer-nav">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`mobile-nav-item${pathname === item.href ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              <span className="mobile-nav-num">{item.num}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="mobile-drawer-foot">
          <button
            className={`theme-toggle${iconFading ? ' icon-fading' : ''}`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            <span style={{ marginLeft: 10, fontSize: 13, fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {theme === 'light' ? 'Dark mode' : 'Light mode'}
            </span>
          </button>
        </div>
      </div>

      {menuOpen && <div className="mobile-drawer-backdrop" onClick={() => setMenuOpen(false)} />}
    </>
  )
}
