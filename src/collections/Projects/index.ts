import type { CollectionConfig } from 'payload'

import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'year', 'client', 'featured', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      admin: {
        position: 'sidebar',
        description: 'Auto-populate from title, or set manually',
      },
    },
    {
      name: 'year',
      type: 'number',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'client',
      type: 'text',
    },
    {
      name: 'kind',
      type: 'select',
      options: [
        { label: 'Web app', value: 'web-app' },
        { label: 'iOS app', value: 'ios' },
        { label: 'Website', value: 'website' },
        { label: 'Design system', value: 'design-system' },
      ],
    },
    {
      name: 'category',
      type: 'text',
      admin: {
        description: 'e.g., Engineering, Design, Product',
      },
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Show on homepage',
      },
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
