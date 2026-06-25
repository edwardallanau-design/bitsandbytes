import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { getCachedGlobal } from '@/utilities/getGlobals'
import { Manifesto } from '@/components/Manifesto'

export default async function AboutPage() {
  const about = await getCachedGlobal('about')()

  const payload = await getPayload({ config: configPromise })
  const { docs: members } = await payload.find({
    collection: 'team-members',
    sort: 'order',
    limit: 20,
    depth: 0,
  })

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header-title">
            {about.pageTitlePart1 ?? 'Small team,'}
            <br />
            {about.pageTitlePart2 ?? 'big results.'}
          </h1>
          <p className="page-header-sub">
            {about.pageSubtitle ??
              'Senior talent only. No juniors, no account managers — just the people who do the work, talking directly to you.'}
          </p>
        </div>
      </section>
      <Manifesto about={about} members={members} />
    </>
  )
}
