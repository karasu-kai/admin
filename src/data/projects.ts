export type ProjectStatus = 'live' | 'beta' | 'docs' | 'planned'

export type Project = {
  id: string
  name: string
  tagline: string
  category: 'flagship' | 'live' | 'business' | 'tools' | 'brand'
  status: ProjectStatus
  repo: string
  liveUrl?: string
  docsPath?: string
  stack?: string[]
  uploadHint: string
}

export const categories = [
  { id: 'flagship' as const, label: 'Flagship' },
  { id: 'live' as const, label: 'Live apps' },
  { id: 'business' as const, label: 'Business & brand' },
  { id: 'tools' as const, label: 'Internal tools' },
  { id: 'brand' as const, label: 'Brand assets' },
]

export const projects: Project[] = [
  {
    id: 'geo-met',
    name: 'Geo-Met',
    tagline: 'Real-time weather intelligence for Australia — crowdsourced reports, AI validation, interactive maps.',
    category: 'flagship',
    status: 'beta',
    repo: 'https://github.com/karasu-kai/geo-met',
    liveUrl: 'https://geomet.tech',
    docsPath: 'docs/portfolio/',
    stack: ['Node.js', 'PostgreSQL', 'Leaflet', 'Express'],
    uploadHint: 'server.js, map frontend, badge assets, deploy scripts',
  },
  {
    id: 'neohawk',
    name: 'NeoHawk',
    tagline: 'Quantum-resistant blockchain identity verification — SHA-3, SPHINCS+, smart contracts.',
    category: 'flagship',
    status: 'docs',
    repo: 'https://github.com/karasu-kai/neohawk',
    docsPath: 'docs/portfolio/NeoHawk_Whitepaper.docx',
    stack: ['Solidity', 'Python', 'Ethereum'],
    uploadHint: 'Smart contracts, hashing scripts, testnet deploy notes',
  },
  {
    id: 'huddleup',
    name: 'Huddle Up',
    tagline: 'Shared lists for anything you are planning together.',
    category: 'live',
    status: 'live',
    repo: 'https://github.com/karasu-kai/huddleup',
    liveUrl: 'https://huddleup.wtf',
    stack: ['Next.js', 'Node 20', 'Tailwind'],
    uploadHint: 'Full codebase already in repo',
  },
  {
    id: 'kodoco',
    name: 'Kodoco',
    tagline: 'Merch collection and website rebrand.',
    category: 'live',
    status: 'planned',
    repo: 'https://github.com/karasu-kai/kodoco',
    stack: ['Vite', 'TypeScript'],
    uploadHint: 'Vite site, public assets, product images',
  },
  {
    id: 'aerotech',
    name: 'Aerotech Industries',
    tagline: 'Brisbane drone photography, thermal surveys, and precision mapping.',
    category: 'business',
    status: 'live',
    repo: 'https://github.com/karasu-kai/aerotech-industries',
    liveUrl: 'https://aerotechindustries.com.au',
    docsPath: 'docs/portfolio/Business Scope-2.pdf',
    uploadHint: 'Website code, media, pitch materials',
  },
  {
    id: 'yatagarasu',
    name: 'Yatagarasu',
    tagline: 'Anime crow brand mark and drop-in assets.',
    category: 'brand',
    status: 'planned',
    repo: 'https://github.com/karasu-kai/yatagarasu',
    uploadHint: 'SVG/PNG marks, snippet docs',
  },
  {
    id: 'stock-collation',
    name: 'Stock Order Collation',
    tagline: 'Vial and box quantity rules for inventory collation.',
    category: 'tools',
    status: 'planned',
    repo: 'https://github.com/karasu-kai/stock-order-collation',
    uploadHint: 'order-collation scripts and rules',
  },
  {
    id: 'testplatform',
    name: 'Test Platform',
    tagline: 'Maintenance page and deploy reference.',
    category: 'tools',
    status: 'planned',
    repo: 'https://github.com/karasu-kai/testplatform',
    uploadHint: 'index.html, deploy instructions',
  },
]

export const statusLabels: Record<ProjectStatus, string> = {
  live: 'Live',
  beta: 'Beta',
  docs: 'Spec / docs',
  planned: 'Repo ready',
}
