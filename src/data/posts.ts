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
    excerpt: "We used Tailwind on every project for two years. Then we stopped. Here's what we learned about the difference between moving fast and building something that lasts.",
    body: [
      { type: 'p', text: 'For about two years, Tailwind was our default. Every project started with a Tailwind config. It was fast to set up, fast to prototype, and our whole team knew it. We shipped a lot of good work with it.' },
      { type: 'p', text: "But over time, we started noticing a pattern. Client handoffs were hard. Anyone who wasn't already fluent in Tailwind had to learn a new mental model just to change a font size." },
      { type: 'h2', text: 'What we use instead' },
      { type: 'p', text: "We moved back to vanilla CSS — specifically, a small custom design token system with a handful of utility classes for layout. Nothing fancy. A spacing scale, a type scale, a color palette, and a grid. That's it." },
      { type: 'h2', text: "This isn't a hot take" },
      { type: 'p', text: "Tailwind is a good tool. It's the right tool for a lot of projects. But for client work, where we hand off to people who may not be developers at all, it creates more problems than it solves." },
    ],
  },
  {
    id: 'lighthouse-99-every-project',
    date: 'Apr 28, 2026', category: 'Performance', readTime: '4 min', featured: false,
    title: 'How we hit 99 Lighthouse on every project',
    excerpt: "Performance isn't a feature — it's a baseline. A rundown of the non-negotiables we ship with every site.",
    body: [
      { type: 'p', text: 'Every site we ship hits at least 99 on Lighthouse. Not because we chase the number — but because the things that produce that score are the same things that make a site feel good to use.' },
      { type: 'h2', text: 'The non-negotiables' },
      { type: 'p', text: "No unused CSS. No render-blocking scripts. Every image has explicit width and height attributes to prevent layout shift. Fonts load with font-display: swap." },
      { type: 'h2', text: 'The things most people skip' },
      { type: 'p', text: "Accessibility is half the Lighthouse score and it's the half people skip. Proper heading hierarchy. Sufficient color contrast. Focus states on every interactive element." },
    ],
  },
  {
    id: 'the-48-hour-landing-page',
    date: 'Mar 14, 2026', category: 'Process', readTime: '5 min', featured: false,
    title: 'The 48-hour landing page',
    excerpt: 'A founder came to us on a Tuesday with a launch date of Thursday. This is how we shipped it.',
    body: [
      { type: 'p', text: "The message came in on a Tuesday afternoon. A founder launching a SaaS product had just found out their original agency had dropped the ball. Launch was Thursday morning. Could we help?" },
      { type: 'h2', text: 'Hour 0–4: triage and decisions' },
      { type: 'p', text: "We didn't start designing. We started asking questions. What's the one thing this page needs to do? Who's the audience? What's the CTA?" },
      { type: 'h2', text: 'What we learned' },
      { type: 'p', text: 'Speed comes from decisions, not shortcuts. The site launched on time. They got 400 signups on day one.' },
    ],
  },
  {
    id: 'swiftui-2025',
    date: 'Feb 3, 2026', category: 'iOS', readTime: '7 min', featured: false,
    title: "SwiftUI in 2025: what's actually good now",
    excerpt: 'Three years ago we were cautious about SwiftUI for production apps. Now it\'s our default. Here\'s what changed.',
    body: [
      { type: 'p', text: 'In 2022, we were still reaching for UIKit on any project where production stability mattered. SwiftUI was fast to prototype with but slow to ship.' },
      { type: 'h2', text: 'The good' },
      { type: 'p', text: 'The List and LazyVStack performance improvements in iOS 17 were real. The animation APIs have matured significantly.' },
      { type: 'h2', text: 'Our approach' },
      { type: 'p', text: "We build everything in SwiftUI first, and bridge to UIKit only when we hit a specific limitation. That's maybe 10–15% of any given app." },
    ],
  },
  {
    id: 'design-system-decision-log',
    date: 'Jan 11, 2026', category: 'Design', readTime: '4 min', featured: false,
    title: 'Your design system needs a decision log',
    excerpt: "Every component has a reason it looks the way it does. When you don't write that down, you spend the next year relitigating the same decisions.",
    body: [
      { type: 'p', text: "We've worked on a lot of design systems. The ones that stay coherent over time have one thing in common: they wrote down why." },
      { type: 'h2', text: 'What a decision log looks like' },
      { type: 'p', text: "A shared doc with one entry per non-obvious decision. Each entry has three fields: the decision, the reasoning, and the date." },
    ],
  },
  {
    id: 'shipping-beats-perfect',
    date: 'Dec 2, 2025', category: 'Studio', readTime: '3 min', featured: false,
    title: 'Shipping beats perfect',
    excerpt: 'The best version of your site is the one people can actually use.',
    body: [
      { type: 'p', text: "There's a version of your site that doesn't exist yet. It has perfect copy and a hero image that converts like mad. You've been designing it for three months." },
      { type: 'h2', text: 'What we tell clients' },
      { type: 'p', text: "Ship the 80% version. Learn from it. Improve it. The best version of your site is the one that exists." },
    ],
  },
]
