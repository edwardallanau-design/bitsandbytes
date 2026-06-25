import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  // team_members.bio: text → jsonb (no data yet, so drop & re-add is safe)
  await db.execute(sql`
    ALTER TABLE "team_members" DROP COLUMN IF EXISTS "bio";
    ALTER TABLE "team_members" ADD COLUMN "bio" jsonb;
  `)

  // About global tables — IF NOT EXISTS so this is safe whether auto-push
  // already created them (before crashing on the bio change) or not
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "about" (
      "id" serial PRIMARY KEY NOT NULL,
      "page_title_part1" varchar DEFAULT 'Small team,',
      "page_title_part2" varchar DEFAULT 'big results.',
      "page_subtitle" varchar DEFAULT 'Senior talent only. No juniors, no account managers — just the people who do the work, talking directly to you.',
      "who_we_are_heading" varchar DEFAULT 'Who we are',
      "bio1" varchar DEFAULT 'We''re a small team of designers and developers who care about getting things right. Between us, we''ve spent years building sites for artists, startups, and brands that need to make an impression.',
      "bio2" varchar DEFAULT 'Portfolios, product sites, and high-conversion landers for SaaS and iOS apps. Built with intention. Delivered fast.',
      "snippet_comment" varchar DEFAULT '// Senior-only. No juniors, no agencies.',
      "updated_at" timestamp(3) with time zone,
      "created_at" timestamp(3) with time zone
    );
  `)

  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "about_tags" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "tag" varchar NOT NULL
    );
  `)

  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "about_stats" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "value" varchar NOT NULL,
      "label" varchar NOT NULL
    );
  `)

  // FK constraints — only add if they don't already exist
  await db.execute(sql`
    DO $$ BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'about_tags_parent_id_fk') THEN
        ALTER TABLE "about_tags"
          ADD CONSTRAINT "about_tags_parent_id_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "public"."about"("id")
          ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$;
  `)

  await db.execute(sql`
    DO $$ BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'about_stats_parent_id_fk') THEN
        ALTER TABLE "about_stats"
          ADD CONSTRAINT "about_stats_parent_id_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "public"."about"("id")
          ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$;
  `)

  // Indexes
  await db.execute(sql`
    CREATE INDEX IF NOT EXISTS "about_tags_order_idx"     ON "about_tags"  USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "about_tags_parent_id_idx" ON "about_tags"  USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "about_stats_order_idx"     ON "about_stats" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "about_stats_parent_id_idx" ON "about_stats" USING btree ("_parent_id");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "team_members" DROP COLUMN IF EXISTS "bio";
    ALTER TABLE "team_members" ADD COLUMN "bio" varchar;
  `)

  await db.execute(sql`DROP TABLE IF EXISTS "about_tags";`)
  await db.execute(sql`DROP TABLE IF EXISTS "about_stats";`)
  await db.execute(sql`DROP TABLE IF EXISTS "about";`)
}
