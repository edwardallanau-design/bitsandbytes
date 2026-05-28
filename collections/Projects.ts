import { CollectionConfig } from 'payload/types';

const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'year', 'client', 'featured', 'createdAt'],
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
      },
    },
    {
      name: 'year',
      type: 'number',
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
      name: 'featured',
      type: 'checkbox',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        position: 'sidebar',
        description: 'Sort order on homepage',
      },
    },
  ],
};

export default Projects;
