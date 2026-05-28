import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Projects from './collections/Projects';
import Testimonials from './collections/Testimonials';
import PricingTiers from './collections/PricingTiers';
import TeamMembers from './collections/TeamMembers';
import SiteSettings from './globals/SiteSettings';

export default buildConfig({
  admin: {
    user: Users.slug,
    uploadDir: path.join(__dirname, '../media'),
  },
  collections: [
    Users,
    Projects,
    Testimonials,
    PricingTiers,
    TeamMembers,
  ],
  globals: [
    SiteSettings,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  db: {
    // Use MongoDB, PostgreSQL, or SQLite
    // Example: mongodb://localhost:27017/bits-and-bytes
    // Or: postgresql://user:password@localhost:5432/bits_and_bytes
    mongoURL: process.env.MONGODB_URI || 'mongodb://localhost:27017/bits-and-bytes',
  },
  secret: process.env.PAYLOAD_SECRET || 'my-secret-key-change-this',
  upload: {
    staticURL: '/media',
    staticDir: path.join(__dirname, '../media'),
    mimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
  },
});
