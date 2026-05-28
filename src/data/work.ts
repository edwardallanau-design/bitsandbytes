export type WorkItem = {
  id: string
  num: string
  year: string
  client: string
  title: string
  summary: string
  kind: string
  sub: string
  tags: string[]
  visual: 'console' | 'phone' | 'reader' | 'archive'
  feature: boolean
}

export const WORK: WorkItem[] = [
  { id: 'voltline', num: '01', year: '2025', client: 'Voltline', title: 'Voltline', summary: 'An operator console for the night shift. We rebuilt the dispatch tool from the routing layer up.', kind: 'Web app', sub: 'Dispatch & routing', tags: ['Engineering', 'Design', '12 wks'], visual: 'console', feature: true },
  { id: 'field', num: '02', year: '2024', client: 'Field', title: 'Field', summary: 'Pricing and labels for craft producers. A tiny, fast app that prints itself.', kind: 'iOS app', sub: 'Inventory · pricing', tags: ['Product', 'iOS', '8 wks'], visual: 'phone', feature: false },
  { id: 'monogram', num: '03', year: '2024', client: 'Monogram', title: 'Monogram', summary: "A reading app that doesn't sell you anything. Quiet, paid-for, no ads.", kind: 'Web app', sub: 'Subscriptions · reader', tags: ['Product', 'Web', '16 wks'], visual: 'reader', feature: false },
  { id: 'halftone', num: '04', year: '2023', client: 'Halftone', title: 'Halftone', summary: 'An archive viewer for a 90-year-old magazine. Half a million pages, searchable.', kind: 'Web app', sub: 'Archive · search', tags: ['Product', 'Archive', '20 wks'], visual: 'archive', feature: true },
]
