import { CollectionConfig } from 'payload/types';

const TeamMembers: CollectionConfig = {
  slug: 'team-members',
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
    },
    {
      name: 'bio',
      type: 'textarea',
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

export default TeamMembers;
