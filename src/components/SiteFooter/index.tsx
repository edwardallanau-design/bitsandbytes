import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img
              src="/assets/logo-dark.png"
              alt="bitsandbytes."
              className="footer-mark-img footer-mark-img--dark"
            />
            <img
              src="/assets/logo-light.png"
              alt="bitsandbytes."
              className="footer-mark-img footer-mark-img--light"
            />
            <div className="footer-tag">A studio that ships.<br />Brooklyn, NY · est. 2024</div>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <div className="eyebrow">Studio</div>
              <Link href="/">Index</Link>
              <Link href="/work">Work</Link>
              <Link href="/about">About</Link>
              <Link href="/journal">Journal</Link>
            </div>
            <div className="footer-col">
              <div className="eyebrow">Contact</div>
              <a href="mailto:hello@bitsandbytes.studio">hello@bitsandbytes.studio</a>
              <a href="tel:+17185550144">+1 (718) 555&ndash;0144</a>
              <span>56 Bond St, Brooklyn</span>
            </div>
            <div className="footer-col">
              <div className="eyebrow">Elsewhere</div>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://read.cv" target="_blank" rel="noopener noreferrer">Read.cv</a>
              <a href="https://are.na" target="_blank" rel="noopener noreferrer">Are.na</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="t-mono">&copy; 2026 Bits &amp; Bytes Software Studio LLC</span>
          <span className="t-mono">All rights reserved.</span>
          <span className="t-mono">v1.2.0 &mdash; built with care</span>
        </div>
      </div>
    </footer>
  )
}
