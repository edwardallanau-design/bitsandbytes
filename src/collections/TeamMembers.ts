import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const TeamMembers: CollectionConfig = {
  slug: 'team-members',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'order', 'updatedAt'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      required: true,
      admin: {
        description: 'e.g., "Lead Developer", "Designer"',
      },
    },
    {
      name: 'initials',
      type: 'text',
      maxLength: 2,
      admin: {
        description: 'Two letters shown in avatar placeholder',
      },
    },
    {
      name: 'bio',
      type: 'textarea',
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        position: 'sidebar',
        description: 'Sort order (lower = first)',
      },
    },
    {
      name: 'background',
      type: 'text',
      admin: {
        description: 'e.g. "Ex-Stripe, ex-Vercel." — shown as the first string property in the code snippet',
      },
    },
    {
      name: 'metricKey',
      type: 'text',
      admin: {
        description: 'Property name for the numeric value (e.g. "years", "shipped"). Leave blank to omit.',
      },
    },
    {
      name: 'metricValue',
      type: 'number',
      admin: {
        description: 'The numeric value for metricKey (e.g. 8, 12)',
      },
    },
    {
      name: 'itemsKey',
      type: 'text',
      admin: {
        description: 'Property name for the primary array (e.g. "stack", "prev")',
      },
    },
    {
      name: 'items',
      type: 'array',
      admin: {
        description: 'Values for the primary array property (e.g. TypeScript, React)',
      },
      fields: [
        {
          name: 'item',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'secondaryItemsKey',
      type: 'text',
      admin: {
        description: 'Property name for an optional second array (e.g. "tools"). Leave blank to omit.',
      },
    },
    {
      name: 'secondaryItems',
      type: 'array',
      admin: {
        description: 'Values for the secondary array property (e.g. Figma, Framer)',
      },
      fields: [
        {
          name: 'item',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'focus',
      type: 'text',
      admin: {
        description: 'e.g. "Full-stack & infra" — shown as the last string property in the code snippet',
      },
    },
  ],
  timestamps: true,
}
