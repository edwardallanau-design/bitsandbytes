'use client'

import Link from 'next/link'

export type Post = {
  id: string
  date: string
  category: string
  readTime: string
  title: string
  excerpt: string
  featured: boolean
  body: { type: 'p' | 'h2'; text: string }[]
}

export const POSTS: Post[] = [
  {
    id: 'why-we-stopped-using-tailwind',
    date: 'May 19, 2026', category: 'Engineering', readTime: '6 min', featured: true,
    title: 'Why we stopped using Tailwind for client work',
    excerpt: 'We used Tailwind on every project for two years. Then we stopped. Here\'s what we learned about the difference between moving fast and building something that lasts.',
    body: [
      { type: 'p', text: 'For about two years, Tailwind was our default. Every project started with a Tailwind config. It was fast to set up, fast to prototype, and our whole team knew it. We shipped a lot of good work with it.' },
      { type: 'p', text: 'But over time, we started noticing a pattern. Client handoffs were hard. Anyone who wasn\'t already fluent in Tailwind had to learn a new mental model just to change a font size. The markup became dense — a paragraph with twenty utility classes is not readable markup.' },
      { type: 'h2', text: 'What we use instead' },
      { type: 'p', text: 'We moved back to vanilla CSS — specifically, a small custom design token system with a handful of utility classes for layout. Nothing fancy. A spacing scale, a type scale, a color palette, and a grid. That\'s it.' },
      { type: 'p', text: 'The result: our CSS bundles are smaller, our markup is cleaner, and clients can actually edit things without our help. A developer who\'s never seen the codebase can open a stylesheet and immediately understand what\'s happening.' },
      { type: 'h2', text: 'This isn\'t a hot take' },
      { type: 'p', text: 'Tailwind is a good tool. It\'s the right tool for a lot of projects — especially product teams who own their codebase long-term and have developers who know it well. But for client work, where we hand off to people who may not be developers at all, it creates more problems than it solves.' },
      { type: 'p', text: 'The lesson isn\'t \'Tailwind is bad.\' It\'s that the right tool depends on who maintains the code after you leave.' },
    ],
  },
  {
    id: 'lighthouse-99-every-project',
    date: 'Apr 28, 2026', category: 'Performance', readTime: '4 min', featured: false,
    title: 'How we hit 99 Lighthouse on every project',
    excerpt: 'Performance isn\'t a feature — it\'s a baseline. A rundown of the non-negotiables we ship with every site.',
    body: [
      { type: 'p', text: 'Every site we ship hits at least 99 on Lighthouse. Not because we chase the number — but because the things that produce that score are the same things that make a site feel good to use.' },
      { type: 'h2', text: 'The non-negotiables' },
      { type: 'p', text: 'No unused CSS. No render-blocking scripts. Every image has explicit width and height attributes to prevent layout shift. Fonts load with font-display: swap. And we audit the bundle on every build — if a dependency adds more than 10kb, it has to justify its existence.' },
      { type: 'h2', text: 'The things most people skip' },
      { type: 'p', text: 'Accessibility is half the Lighthouse score and it\'s the half people skip. Proper heading hierarchy. Sufficient color contrast. Focus states on every interactive element. Labels on every input. We check all of it before handoff.' },
    ],
  },
  {
    id: 'the-48-hour-landing-page',
    date: 'Mar 14, 2026', category: 'Process', readTime: '5 min', featured: false,
    title: 'The 48-hour landing page',
    excerpt: 'A founder came to us on a Tuesday with a launch date of Thursday. This is how we shipped it.',
    body: [
      { type: 'p', text: 'The message came in on a Tuesday afternoon. A founder launching a SaaS product had just found out their original agency had dropped the ball. Launch was Thursday morning. Could we help?' },
      { type: 'h2', text: 'Hour 0–4: triage and decisions' },
      { type: 'p', text: 'We didn\'t start designing. We started asking questions. What\'s the one thing this page needs to do? Who\'s the audience? What\'s the CTA?' },
      { type: 'h2', text: 'What we learned' },
      { type: 'p', text: 'Speed comes from decisions, not shortcuts. The site launched on time. They got 400 signups on day one.' },
    ],
  },
  {
    id: 'swiftui-2025',
    date: 'Feb 3, 2026', category: 'iOS', readTime: '7 min', featured: false,
    title: 'SwiftUI in 2025: what\'s actually good now',
    excerpt: 'Three years ago we were cautious about SwiftUI for production apps. Now it\'s our default. Here\'s what changed.',
    body: [
      { type: 'p', text: 'In 2022, we were still reaching for UIKit on any project where production stability mattered. SwiftUI was fast to prototype with but slow to ship.' },
      { type: 'h2', text: 'The good' },
      { type: 'p', text: 'The List and LazyVStack performance improvements in iOS 17 were real. The animation APIs have matured significantly.' },
      { type: 'h2', text: 'Our approach' },
      { type: 'p', text: 'We build everything in SwiftUI first, and bridge to UIKit only when we hit a specific limitation. That\'s maybe 10–15% of any given app.' },
    ],
  },
  {
    id: 'design-system-decision-log',
    date: 'Jan 11, 2026', category: 'Design', readTime: '4 min', featured: false,
    title: 'Your design system needs a decision log',
    excerpt: 'Every component has a reason it looks the way it does. When you don\'t write that down, you spend the next year relitigating the same decisions.',
    body: [
      { type: 'p', text: 'We\'ve worked on a lot of design systems. The ones that stay coherent over time have one thing in common: they wrote down why.' },
      { type: 'h2', text: 'What a decision log looks like' },
      { type: 'p', text: 'A shared doc with one entry per non-obvious decision. Each entry has three fields: the decision, the reasoning, and the date.' },
    ],
  },
  {
    id: 'shipping-beats-perfect',
    date: 'Dec 2, 2025', category: 'Studio', readTime: '3 min', featured: false,
    title: 'Shipping beats perfect',
    excerpt: 'The best version of your site is the one people can actually use.',
    body: [
      { type: 'p', text: 'There\'s a version of your site that doesn\'t exist yet. It has perfect copy, a hero image that converts like mad, and exactly the right shade of blue. You\'ve been designing it for three months.' },
      { type: 'h2', text: 'What we tell clients' },
      { type: 'p', text: 'Ship the 80% version. Learn from it. Improve it. The best version of your site is the one that exists.' },
    ],
  },
]

export function Journal() {
  const featured = POSTS[0]
  const rest = POSTS.slice(1)

  return (
    <section className="journal-section">
      <div className="container">
        <Link href={`/journal/${featured.id}`} className="journal-featured">
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
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
        </Link>
        <div className="journal-list-head">
          <span className="eyebrow">All posts</span>
        </div>
        <div className="journal-list">
          {rest.map((post) => (
            <Link key={post.id} href={`/journal/${post.id}`} className="journal-row">
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
                <svg className="journal-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PostView({ id }: { id: string }) {
  const post = POSTS.find(p => p.id === id)
  if (!post) return (
    <section className="post-view">
      <div className="container post-container">
        <p style={{ color: 'var(--fg-3)' }}>Post not found.</p>
      </div>
    </section>
  )

  return (
    <section className="post-view">
      <div className="container post-container">
        <Link href="/journal" className="post-back">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 7H3M7 3L3 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Journal
        </Link>
        <header className="post-header">
          <div className="post-meta">
            <span className="journal-cat">{post.category}</span>
            <span className="journal-date">{post.date}</span>
            <span className="journal-read">{post.readTime} read</span>
          </div>
          <h1 className="post-title">{post.title}</h1>
          <p className="post-excerpt">{post.excerpt}</p>
        </header>
        <div className="post-body">
          {post.body.map((block, i) => {
            if (block.type === 'h2') return <h2 key={i} className="post-h2">{block.text}</h2>
            return <p key={i} className="post-p">{block.text}</p>
          })}
        </div>
        <div className="post-footer">
          <Link href="/journal" className="post-back">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 7H3M7 3L3 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Back to Journal
          </Link>
        </div>
      </div>
    </section>
  )
}
