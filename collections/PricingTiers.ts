import { CollectionConfig } from 'payload/types';

const PricingTiers: CollectionConfig = {
  slug: 'pricing-tiers',
  admin: {
    useAsTitle: 'name',
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
        { label: 'None (leave blank for Enterprise)', value: '' },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      admin: {
        description: 'Mark as "Most popular"',
      },
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'feature',
          type: 'text',
        },
      ],
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        position: 'sidebar',
      },
    },
  ],
};

export default PricingTiers;
