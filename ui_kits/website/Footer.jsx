/**
 * Footer — full-bleed, monospace links, tagline + contact.
 */
function Footer({ theme }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img
              src={theme === "light" ? "../../assets/logo-light.png" : "../../assets/logo-dark.png"}
              alt="bitsandbytes."
              className="footer-mark-img"
            />
            <div className="footer-tag">A studio that ships.<br/>Brooklyn, NY · est. 2024</div>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <div className="eyebrow">Studio</div>
              <a>Index</a>
              <a>Work</a>
              <a>About</a>
              <a>Journal</a>
            </div>
            <div className="footer-col">
              <div className="eyebrow">Contact</div>
              <a>hello@bitsandbytes.studio</a>
              <a>+1 (718) 555&ndash;0144</a>
              <a>56 Bond St, Brooklyn</a>
            </div>
            <div className="footer-col">
              <div className="eyebrow">Elsewhere</div>
              <a>GitHub</a>
              <a>Read.cv</a>
              <a>Are.na</a>
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
  );
}

window.Footer = Footer;
