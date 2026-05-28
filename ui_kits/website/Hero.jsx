/**
 * Hero — homepage hero. Display headline, subhead, two CTAs, pixel grid.
 */
function Hero({ onNav }) {
  const canvasRef = React.useRef(null);
  const titleRef = React.useRef(null);
  const subRef = React.useRef(null);
  const pillRef = React.useRef(null);
  const ctasRef = React.useRef(null);
  const statsRef = React.useRef(null);
  const stat1Ref = React.useRef(null);
  const stat2Ref = React.useRef(null);
  const stat3Ref = React.useRef(null);

  React.useEffect(() => {
    // Check if animation has already played in this navigation session
    const heroAnimated = window.__heroAnimated;
    
    // Skip animation if already animated in this session
    if (heroAnimated === true) {
      // Just show all elements immediately
      if (pillRef.current) pillRef.current.classList.remove('fade-in-hidden');
      if (ctasRef.current) ctasRef.current.classList.remove('fade-in-hidden');
      if (statsRef.current) statsRef.current.classList.remove('fade-in-hidden');
      return;
    }
    
    // Clear initial content
    titleRef.current.innerHTML = '';
    subRef.current.innerHTML = '';
    
    const titlePart1 = "Software solutions,";
    const titlePart2 = "shipped fast.";
    const subText = "Sites and apps, live in days. Great ideas shouldn't wait.";
    
    let phase = 0; // 0: title part 1, 1: title part 2, 2: subtitle
    let charIndex = 0;
    
    // Create and maintain cursor only for subtitle
    let subCursor = null;
    let subTextSpan = null;
    
    const typeCharacter = () => {
      if (phase === 0 && charIndex < titlePart1.length) {
        // Add character to title part 1
        const span = titleRef.current.querySelector('.part1') || document.createElement('span');
        if (!titleRef.current.querySelector('.part1')) {
          span.className = 'part1';
          titleRef.current.appendChild(span);
        }
        span.textContent += titlePart1[charIndex];
        charIndex++;
      } else if (phase === 0) {
        // Move to title part 2 - insert line break
        const br = document.createElement('br');
        titleRef.current.appendChild(br);
        phase = 1;
        charIndex = 0;
      } else if (phase === 1 && charIndex < titlePart2.length) {
        // Add character to title part 2
        const span = titleRef.current.querySelector('.part2') || document.createElement('span');
        if (!titleRef.current.querySelector('.part2')) {
          span.className = 'part2';
          titleRef.current.appendChild(span);
        }
        span.textContent += titlePart2[charIndex];
        charIndex++;
      } else if (phase === 1) {
        // Move to subtitle - create text span and cursor
        phase = 2;
        charIndex = 0;
        
        // Create subtitle text span and cursor
        subTextSpan = document.createElement('span');
        subTextSpan.className = 'sub-text';
        subRef.current.appendChild(subTextSpan);
        
        subCursor = document.createElement('span');
        subCursor.className = 'typing-cursor';
        subRef.current.appendChild(subCursor);
      } else if (phase === 2 && charIndex < subText.length) {
        // Add character to subtitle text span
        subTextSpan.textContent += subText[charIndex];
        charIndex++;
      }
      
      let nextDelay = 75; // Default slower speed for title (75ms)
      if (phase === 2) {
        nextDelay = 30; // Faster speed for subtitle (30ms)
      }
      
      if (phase < 2 || charIndex < subText.length) {
        setTimeout(typeCharacter, nextDelay);
      } else {
        // Animation complete - show elements in sequence
        let delay = 200; // delay before first element appears
        
        if (pillRef.current) {
          setTimeout(() => {
            pillRef.current.classList.remove('fade-in-hidden');
            pillRef.current.classList.add('fade-in-visible');
          }, delay);
          delay += 200;
        }
        
        if (ctasRef.current) {
          setTimeout(() => {
            ctasRef.current.classList.remove('fade-in-hidden');
            ctasRef.current.classList.add('fade-in-visible');
          }, delay);
          delay += 200;
        }
        
        if (statsRef.current) {
          setTimeout(() => {
            statsRef.current.classList.remove('fade-in-hidden');
            statsRef.current.classList.add('fade-in-visible');
            // Mark animation as played for this navigation session
            window.__heroAnimated = true;
          }, delay);
        }
      }
    };

    
    typeCharacter();
  }, []);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf, w, h, dpr;
    const dots = [];

    const isDark = () => document.documentElement.dataset.theme !== "light";

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      const r = canvas.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots.length = 0;
      const step = 32;
      for (let y = 16; y < h; y += step) {
        for (let x = 16; x < w; x += step) {
          dots.push({
            x, y,
            base: 0.04 + Math.random() * 0.04,
            amp: 0.05 + Math.random() * 0.35,
            speed: 0.15 + Math.random() * 0.6,
            phase: Math.random() * Math.PI * 2,
            bright: Math.random() < 0.12,
          });
        }
      }
    };

    const tick = (t) => {
      ctx.clearRect(0, 0, w, h);
      const dark = isDark();
      const ms = t / 1000;
      for (const d of dots) {
        const pulse = (Math.sin(ms * d.speed + d.phase) + 1) / 2;
        let a = d.base + pulse * d.amp;
        if (d.bright) a = Math.min(1, a * 1.8);
        ctx.fillStyle = dark
          ? `rgba(255,255,255,${a})`
          : `rgba(0,0,0,${a * 0.7})`;
        const size = d.bright ? 2 : 1;
        ctx.fillRect(d.x - size/2, d.y - size/2, size, size);
      }
      raf = requestAnimationFrame(tick);
    };

    resize();
    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="hero-canvas"></canvas>
      <div className="container hero-inner">
<h1 className="hero-title" ref={titleRef}>
          Software solutions,<br/>shipped fast.
        </h1>
        <p className="hero-sub" ref={subRef}>
          Sites and apps, live in days. Great ideas shouldn&rsquo;t wait.
        </p>
        <div className="hero-ctas fade-in-hidden" ref={ctasRef}>
          <button className="btn" onClick={() => onNav("/contact")}>
            Start a project
            <i data-lucide="arrow-up-right"></i>
          </button>
          <button className="btn btn-secondary" onClick={() => onNav("/work")}>
            See our work
          </button>
        </div>
        <div className="hero-stats fade-in-hidden" ref={statsRef}>
          <div className="hero-stat">
            <div className="hero-stat-val"><span ref={stat1Ref}>20</span>+</div>
            <div className="hero-stat-lbl">Projects<br/>delivered</div>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <div className="hero-stat-val"><span ref={stat2Ref}>10</span>+</div>
            <div className="hero-stat-lbl">Yrs of<br/>experience</div>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <div className="hero-stat-val"><span ref={stat3Ref}>48</span>h</div>
            <div className="hero-stat-lbl">Avg.<br/>turnaround</div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
