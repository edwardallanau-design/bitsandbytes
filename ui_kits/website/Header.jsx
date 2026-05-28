/**
 * Header — sticky, blurred, hairline-bottom.
 * Holds the wordmark, primary nav, and theme toggle.
 */
function Header({ theme, onToggleTheme, currentPath = "/", onNav }) {
  const toggleRef = React.useRef(null);
  const [iconFading, setIconFading] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleThemeToggle = () => {
    setIconFading(true);
    setTimeout(() => {
      onToggleTheme();
      setTimeout(() => setIconFading(false), 50);
    }, 180);
  };

  React.useEffect(() => {
    const t = setTimeout(() => window.lucide && window.lucide.createIcons(), 50);
    return () => clearTimeout(t);
  }, [theme]);

  // Lock body scroll when menu is open
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const items = [
    { num: "01", label: "Index", href: "/" },
    { num: "02", label: "Work", href: "/work" },
    { num: "03", label: "About", href: "/about" },
    { num: "04", label: "Journal", href: "/journal" },
    { num: "05", label: "Contact", href: "/contact" },
  ];

  const handleNav = (href) => {
    setMenuOpen(false);
    onNav(href);
  };

  const ThemeIcon = () => theme === "light" ? (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2"></path><path d="M12 20v2"></path>
      <path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path>
      <path d="M2 12h2"></path><path d="M20 12h2"></path>
      <path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path>
    </svg>
  );

  return (
    <>
      <header className="site-header">
        <div className="container site-header-inner">
          <a className="wordmark" onClick={(e) => { e.preventDefault(); handleNav("/"); }} href="/">
            <img
              src={theme === "dark" ? "../../assets/logo-dark.png" : "../../assets/logo-light.png"}
              alt="bitsandbytes."
              className="wordmark-img"
              style={{ height: 'var(--logo-size, 32px)', width: 'auto' }}
            />
          </a>
          <nav className="site-nav">
            {items.map((it) => (
              <a
                key={it.href}
                href={it.href}
                onClick={(e) => { e.preventDefault(); handleNav(it.href); }}
                className={`nav-item ${currentPath === it.href ? "active" : ""}`}
              >
                <span className="nav-num">{it.num}</span>
                <span>{it.label}</span>
              </a>
            ))}
          </nav>
          <div className="header-tail">
            <button
              ref={toggleRef}
              className={`theme-toggle ${iconFading ? "icon-fading" : ""}`}
              onClick={handleThemeToggle}
              aria-label="Toggle theme"
            >
              <ThemeIcon />
            </button>
            <button
              className="mobile-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <nav className="mobile-drawer-nav">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              onClick={(e) => { e.preventDefault(); handleNav(it.href); }}
              className={`mobile-nav-item ${currentPath === it.href ? "active" : ""}`}
            >
              <span className="mobile-nav-num">{it.num}</span>
              <span>{it.label}</span>
            </a>
          ))}
        </nav>
        <div className="mobile-drawer-foot">
          <button
            className={`theme-toggle ${iconFading ? "icon-fading" : ""}`}
            onClick={handleThemeToggle}
            aria-label="Toggle theme"
          >
            <ThemeIcon />
            <span style={{marginLeft: 10, fontSize: 13, fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase"}}>
              {theme === "light" ? "Dark mode" : "Light mode"}
            </span>
          </button>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && <div className="mobile-drawer-backdrop" onClick={() => setMenuOpen(false)} />}
    </>
  );
}

window.Header = Header;
