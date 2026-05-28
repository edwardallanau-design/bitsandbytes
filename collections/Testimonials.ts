import { CollectionConfig } from 'payload/types';

const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'author',
  },
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      required: true,
    },
    {
      name: 'author',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      admin: {
        description: 'e.g., "A&R, Universal Music Group"',
      },
    },
    {
      name: 'avatarInitials',
      type: 'text',
      maxLength: 2,
    },
    {
      name: 'featured',
      type: 'checkbox',
    },
  ],
};

export default Testimonials;
