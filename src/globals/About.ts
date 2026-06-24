import type { GlobalConfig } from 'payload'

import { authenticated } from '../access/authenticated'
import { revalidateAbout } from './hooks/revalidateAbout'

export const About: GlobalConfig = {
  slug: 'about',
  access: {
    read: () => true,
    update: authenticated,
  },
  admin: {
    group: 'Site',
  },
  hooks: {
    afterChange: [revalidateAbout],
  },
  fields: [
    {
      name: 'pageTitlePart1',
      type: 'text',
      defaultValue: 'Small team,',
      admin: {
        description: 'First line of the <h1> (before the line break)',
      },
    },
    {
      name: 'pageTitlePart2',
      type: 'text',
      defaultValue: 'big results.',
      admin: {
        description: 'Second line of the <h1> (after the line break)',
      },
    },
    {
      name: 'pageSubtitle',
      type: 'textarea',
      defaultValue:
        'Senior talent only. No juniors, no account managers — just the people who do the work, talking directly to you.',
    },
    {
      name: 'whoWeAreHeading',
      type: 'text',
      defaultValue: 'Who we are',
    },
    {
      name: 'bio1',
      type: 'textarea',
      defaultValue:
        'We’re a small team of designers and developers who care about getting things right. Between us, we’ve spent years building sites for artists, startups, and brands that need to make an impression.',
    },
    {
      name: 'bio2',
      type: 'textarea',
      defaultValue:
        'Portfolios, product sites, and high-conversion landers for SaaS and iOS apps. Built with intention. Delivered fast.',
    },
    {
      name: 'tags',
      type: 'array',
      defaultValue: [
        { tag: 'Speed without rush' },
        { tag: 'Taste over trends' },
        { tag: 'A11y by default' },
      ],
      admin: {
        description: 'Pill badges shown under the bio paragraphs',
      },
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'stats',
      type: 'array',
      defaultValue: [
        { value: '12+', label: 'Years exp.' },
        { value: '48hr', label: 'Turnaround' },
        { value: '100+', label: 'Projects' },
        { value: '99', label: 'Lighthouse' },
      ],
      admin: {
        description: 'Stat cards shown in the "By the numbers" column',
      },
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
          admin: { description: 'e.g. "12+" or "48hr"' },
        },
        {
          name: 'label',
          type: 'text',
          required: true,
          admin: { description: 'e.g. "Years exp."' },
        },
      ],
    },
    {
      name: 'snippetComment',
      type: 'text',
      defaultValue: '// Senior-only. No juniors, no agencies.',
      admin: {
        description: 'Italic comment shown at the bottom of each team member code snippet',
      },
    },
  ],
}
