/**
 * Journal — editorial list + individual post reading view.
 */
const POSTS = [
  {
    id: "why-we-stopped-using-tailwind",
    date: "May 19, 2026",
    category: "Engineering",
    readTime: "6 min",
    title: "Why we stopped using Tailwind for client work",
    excerpt: "We used Tailwind on every project for two years. Then we stopped. Here's what we learned about the difference between moving fast and building something that lasts.",
    featured: true,
    body: [
      { type: "p", text: "For about two years, Tailwind was our default. Every project started with a Tailwind config. It was fast to set up, fast to prototype, and our whole team knew it. We shipped a lot of good work with it." },
      { type: "p", text: "But over time, we started noticing a pattern. Client handoffs were hard. Anyone who wasn't already fluent in Tailwind had to learn a new mental model just to change a font size. The markup became dense — a paragraph with twenty utility classes is not readable markup." },
      { type: "h2", text: "What we use instead" },
      { type: "p", text: "We moved back to vanilla CSS — specifically, a small custom design token system with a handful of utility classes for layout. Nothing fancy. A spacing scale, a type scale, a color palette, and a grid. That's it." },
      { type: "p", text: "The result: our CSS bundles are smaller, our markup is cleaner, and clients can actually edit things without our help. A developer who's never seen the codebase can open a stylesheet and immediately understand what's happening." },
      { type: "h2", text: "This isn't a hot take" },
      { type: "p", text: "Tailwind is a good tool. It's the right tool for a lot of projects — especially product teams who own their codebase long-term and have developers who know it well. But for client work, where we hand off to people who may not be developers at all, it creates more problems than it solves." },
      { type: "p", text: "The lesson isn't 'Tailwind is bad.' It's that the right tool depends on who maintains the code after you leave." },
    ],
  },
  {
    id: "lighthouse-99-every-project",
    date: "Apr 28, 2026",
    category: "Performance",
    readTime: "4 min",
    title: "How we hit 99 Lighthouse on every project",
    excerpt: "Performance isn't a feature — it's a baseline. A rundown of the non-negotiables we ship with every site.",
    featured: false,
    body: [
      { type: "p", text: "Every site we ship hits at least 99 on Lighthouse. Not because we chase the number — but because the things that produce that score are the same things that make a site feel good to use." },
      { type: "h2", text: "The non-negotiables" },
      { type: "p", text: "No unused CSS. No render-blocking scripts. Every image has explicit width and height attributes to prevent layout shift. Fonts load with font-display: swap. And we audit the bundle on every build — if a dependency adds more than 10kb, it has to justify its existence." },
      { type: "p", text: "We also don't use any animation library that isn't tree-shakeable. Most of our animations are CSS-only. For the ones that need JavaScript, we write them ourselves. It's usually fifty lines." },
      { type: "h2", text: "The things most people skip" },
      { type: "p", text: "Accessibility is half the Lighthouse score and it's the half people skip. Proper heading hierarchy. Sufficient color contrast. Focus states on every interactive element. Labels on every input. We check all of it before handoff." },
      { type: "p", text: "The score is a byproduct. Build the site right, and the number follows." },
    ],
  },
  {
    id: "the-48-hour-landing-page",
    date: "Mar 14, 2026",
    category: "Process",
    readTime: "5 min",
    title: "The 48-hour landing page",
    excerpt: "A founder came to us on a Tuesday with a launch date of Thursday. This is how we shipped it — and what it taught us about the difference between done and perfect.",
    featured: false,
    body: [
      { type: "p", text: "The message came in on a Tuesday afternoon. A founder launching a SaaS product had just found out their original agency had dropped the ball. Launch was Thursday morning. Could we help?" },
      { type: "p", text: "We said yes. Here's how 48 hours actually breaks down." },
      { type: "h2", text: "Hour 0–4: triage and decisions" },
      { type: "p", text: "We didn't start designing. We started asking questions. What's the one thing this page needs to do? Who's the audience? What do you have — copy, logo, brand colors? What's the CTA?" },
      { type: "p", text: "We got a brand kit, a Google Doc full of copy, and a clear goal: get email signups before the Product Hunt launch. That's enough to start." },
      { type: "h2", text: "Hour 4–24: build" },
      { type: "p", text: "One developer, one designer, working in parallel. The designer built the component library in Figma while the developer scaffolded the project and built the layout. By hour 12 we had a working prototype. By hour 20 it was in staging." },
      { type: "h2", text: "What we learned" },
      { type: "p", text: "Speed comes from decisions, not shortcuts. Every hour we spent arguing about something could have been spent building. The pages we ship fastest are the ones where someone has already decided what matters." },
      { type: "p", text: "The site launched on time. They got 400 signups on day one." },
    ],
  },
  {
    id: "swiftui-2025",
    date: "Feb 3, 2026",
    category: "iOS",
    readTime: "7 min",
    title: "SwiftUI in 2025: what's actually good now",
    excerpt: "Three years ago we were cautious about SwiftUI for production apps. Now it's our default. Here's what changed, and what still hasn't.",
    featured: false,
    body: [
      { type: "p", text: "In 2022, we were still reaching for UIKit on any project where production stability mattered. SwiftUI was fast to prototype with but slow to ship — too many edge cases, too many platform inconsistencies, too few escape hatches." },
      { type: "p", text: "In 2025, that's mostly changed. SwiftUI is our default for new projects. Here's what actually got better." },
      { type: "h2", text: "The good" },
      { type: "p", text: "The List and LazyVStack performance improvements in iOS 17 were real. Smooth scrolling on large datasets used to require UICollectionView — now SwiftUI handles it. The animation APIs have matured significantly. And bridging to UIKit is much cleaner when you need it." },
      { type: "p", text: "Previews are also genuinely fast now. The rebuild cycle that used to make prototyping painful is largely gone on Apple Silicon." },
      { type: "h2", text: "What still hasn't changed" },
      { type: "p", text: "Custom text layout is still painful. If your design calls for fine-grained control over text rendering — mixed styles, precise line breaking, custom baselines — you're still going to UIKit. The TextKit 2 APIs help, but they're not fully surfaced in SwiftUI." },
      { type: "p", text: "Complex multi-window iPad apps are also still tricky. The scene management model is better than it was, but it still requires more UIKit than it should." },
      { type: "h2", text: "Our approach" },
      { type: "p", text: "We build everything in SwiftUI first, and we bridge to UIKit only when we hit a specific limitation. That's maybe 10–15% of any given app. The rest is pure SwiftUI, and we're happy with it." },
    ],
  },
  {
    id: "design-system-decision-log",
    date: "Jan 11, 2026",
    category: "Design",
    readTime: "4 min",
    title: "Your design system needs a decision log",
    excerpt: "Every component has a reason it looks the way it does. When you don't write that down, you spend the next year relitigating the same decisions.",
    featured: false,
    body: [
      { type: "p", text: "We've worked on a lot of design systems. The ones that stay coherent over time have one thing in common: they wrote down why." },
      { type: "p", text: "Not just what — any design system documents what. The decision log documents why the button has 12px horizontal padding instead of 16. Why the border radius is 4px on cards and 999px on pills. Why there's no medium font weight." },
      { type: "h2", text: "What a decision log looks like" },
      { type: "p", text: "It doesn't have to be elaborate. A shared doc with one entry per non-obvious decision is enough. Each entry has three fields: the decision, the reasoning, and the date. That's it." },
      { type: "p", text: "When someone asks 'why is the primary button blue?' in six months, you have an answer. And more importantly, when someone proposes changing it, they have context for whether that change is safe." },
      { type: "h2", text: "The compounding value" },
      { type: "p", text: "The real value isn't the individual entries. It's the culture it creates. When everyone knows that decisions get written down, they start making decisions more deliberately. The log is the artifact; the intentionality is the point." },
    ],
  },
  {
    id: "shipping-beats-perfect",
    date: "Dec 2, 2025",
    category: "Studio",
    readTime: "3 min",
    title: "Shipping beats perfect",
    excerpt: "The best version of your site is the one people can actually use. A short argument for momentum over polish.",
    featured: false,
    body: [
      { type: "p", text: "There's a version of your site that doesn't exist yet. It has perfect copy, a hero image that converts like mad, and exactly the right shade of blue. You've been designing it for three months." },
      { type: "p", text: "Meanwhile, your competitor shipped something mediocre in two weeks, and they've been collecting user feedback, running experiments, and iterating ever since. Their site isn't perfect either. It's better." },
      { type: "h2", text: "What we tell clients" },
      { type: "p", text: "Ship the 80% version. Learn from it. Improve it. The feedback from real users is worth more than any amount of internal deliberation." },
      { type: "p", text: "This doesn't mean ship something embarrassing. It means stop moving the launch date because the founder wants to tweak the headline one more time. Good enough and live beats perfect and upcoming." },
      { type: "p", text: "The best version of your site is the one that exists." },
    ],
  },
];

function Journal({ onNav }) {
  const featured = POSTS[0];
  const rest = POSTS.slice(1);

  return (
    <section className="journal-section">
      <div className="container">
        <a className="journal-featured" onClick={() => onNav && onNav("/journal/" + featured.id)}>
          <span className="journal-featured-label">Featured</span>
          <div className="journal-featured-meta">
            <span className="journal-cat">{featured.category}</span>
            <span className="journal-date">{featured.date}</span>
            <span className="journal-read">{featured.readTime} read</span>
          </div>
          <h2 className="journal-featured-title">{featured.title}</h2>
          <p className="journal-featured-excerpt">{featured.excerpt}</p>
          <span className="journal-cta">
            Read post
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </a>
        <div className="journal-list-head">
          <span className="eyebrow">All posts</span>
        </div>
        <div className="journal-list">
          {rest.map((post) => (
            <a key={post.id} className="journal-row" onClick={() => onNav && onNav("/journal/" + post.id)}>
              <div className="journal-row-left">
                <span className="journal-cat">{post.category}</span>
                <span className="journal-date">{post.date}</span>
              </div>
              <div className="journal-row-body">
                <h3 className="journal-row-title">{post.title}</h3>
                <p className="journal-row-excerpt">{post.excerpt}</p>
              </div>
              <div className="journal-row-right">
                <span className="journal-read">{post.readTime}</span>
                <svg className="journal-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function PostView({ id, onNav }) {
  const post = POSTS.find(p => p.id === id);
  if (!post) return (
    <section className="post-view">
      <div className="container post-container">
        <p style={{color: "var(--fg-3)"}}>Post not found.</p>
      </div>
    </section>
  );

  return (
    <section className="post-view">
      <div className="container post-container">

        {/* Back link */}
        <button className="post-back" onClick={() => onNav && onNav("/journal")}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 7H3M7 3L3 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Journal
        </button>

        {/* Header */}
        <header className="post-header">
          <div className="post-meta">
            <span className="journal-cat">{post.category}</span>
            <span className="journal-date">{post.date}</span>
            <span className="journal-read">{post.readTime} read</span>
          </div>
          <h1 className="post-title">{post.title}</h1>
          <p className="post-excerpt">{post.excerpt}</p>
        </header>

        {/* Body */}
        <div className="post-body">
          {post.body.map((block, i) => {
            if (block.type === "h2") return <h2 key={i} className="post-h2">{block.text}</h2>;
            if (block.type === "p")  return <p key={i} className="post-p">{block.text}</p>;
            return null;
          })}
        </div>

        {/* Footer nav */}
        <div className="post-footer">
          <button className="post-back" onClick={() => onNav && onNav("/journal")}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 7H3M7 3L3 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back to Journal
          </button>
        </div>

      </div>
    </section>
  );
}

window.Journal  = Journal;
window.PostView = PostView;
window.POSTS    = POSTS;
