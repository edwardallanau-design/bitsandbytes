import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const PricingTiers: CollectionConfig = {
  slug: 'pricing-tiers',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'price', 'featured', 'order'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'price',
      type: 'text',
      required: true,
      admin: {
        description: 'e.g., "$999" or "Custom"',
      },
    },
    {
      name: 'cadence',
      type: 'select',
      options: [
        { label: 'One-time', value: 'one-time' },
        { label: 'Per month', value: 'per-month' },
        { label: 'Per year', value: 'per-year' },
        { label: 'Enterprise (no cadence)', value: 'none' },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Mark as "Most popular"',
      },
    },
    {
      name: 'features',
      type: 'array',
      admin: {
        description: 'List of included features',
      },
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        position: 'sidebar',
        description: 'Sort order (lower = first)',
      },
    },
  ],
  timestamps: true,
}
