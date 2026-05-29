'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Moon, Sun } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { num: '01', label: 'Index', href: '/' },
  { num: '02', label: 'Work', href: '/work' },
  { num: '03', label: 'About', href: '/about' },
  { num: '04', label: 'Journal', href: '/journal' },
  { num: '05', label: 'Contact', href: '/contact' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof document !== 'undefined') {
      return (document.documentElement.dataset.theme as 'light' | 'dark') ?? 'dark'
    }
    return 'dark'
  })
  const [iconFading, setIconFading] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const toggleTheme = () => {
    setIconFading(true)
    setTimeout(() => {
      setTheme(prev => {
        const next = prev === 'light' ? 'dark' : 'light'
        document.documentElement.dataset.theme = next
        localStorage.setItem('theme', next)
        return next
      })
      setTimeout(() => setIconFading(false), 50)
    }, 180)
  }

  return (
    <>
      <header className="site-header">
        <div className="container site-header-inner">
          <Link className="wordmark" href="/" onClick={() => setMenuOpen(false)}>
            <Image src="/assets/logo-dark.png" alt="bitsandbytes." width={119} height={32} className="wordmark-img wordmark-img--dark" priority />
            <Image src="/assets/logo-light.png" alt="" width={119} height={32} className="wordmark-img wordmark-img--light" priority aria-hidden={true} />
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
              {theme === 'light' ? <Moon size={16} strokeWidth={1.8} /> : <Sun size={16} strokeWidth={1.8} />}
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
            {theme === 'light' ? <Moon size={16} strokeWidth={1.8} /> : <Sun size={16} strokeWidth={1.8} />}
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
