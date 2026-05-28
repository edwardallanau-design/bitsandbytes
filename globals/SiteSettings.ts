import { GlobalConfig } from 'payload/types';

const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: {
    read: () => true,
    update: ({ req: { user } }) => !!user, // Authenticated users only
  },
  fields: [
    {
      name: 'availabilityStatus',
      type: 'text',
      defaultValue: 'Currently booking · Q1 2026',
      admin: {
        description: 'Hero banner text',
      },
    },
    {
      name: 'heroTitle',
      type: 'textarea',
      defaultValue: 'Software solutions, shipped fast.',
    },
    {
      name: 'heroSubtitle',
      type: 'textarea',
      defaultValue: 'Sites and apps, live in days. Great ideas shouldn\'t wait.',
    },
    {
      name: 'aboutPillText',
      type: 'text',
      defaultValue: 'Accepting new projects',
      admin: {
        description: 'About section availability pill',
      },
    },
    {
      name: 'contactEmail',
      type: 'email',
      defaultValue: 'hello@bitsandbytes.studio',
    },
    {
      name: 'contactPhone',
      type: 'text',
      defaultValue: '+1 (718) 555-0144',
    },
  ],
};

export default SiteSettings;
