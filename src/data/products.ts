export type ProductCategory = 'skincare' | 'merch'

export type SkincareType = 'dropper' | 'pump' | 'spray' | 'mask'
export type MerchType = 'bag' | 'tee' | 'hoodie' | 'cap' | 'tote'
export type ProductType = SkincareType | MerchType

export interface Product {
  id: string
  name: string
  shortName: string
  tagline: string
  size: string
  price: number
  type: ProductType
  category: ProductCategory
  benefits: string[]
  description: string
  featured?: boolean
}

export const skincareProducts: Product[] = [
  {
    id: 'ghk-cu-serum',
    name: 'Copper Peptide GHK-Cu Serum',
    shortName: 'GHK-Cu Serum',
    tagline: 'Anti-Ageing · Repair · Hydration',
    size: '30ml',
    price: 89,
    type: 'dropper',
    category: 'skincare',
    featured: true,
    benefits: ['Boosts collagen synthesis', 'Accelerates skin repair', 'Deep cellular hydration'],
    description:
      'A concentrated copper peptide serum formulated with GHK-Cu to target fine lines, support skin renewal, and restore a luminous, hydrated complexion.',
  },
  {
    id: 'ghk-cu-cream',
    name: 'Blue Copper Peptide Cream',
    shortName: 'GHK-Cu Cream',
    tagline: 'Firm · Restore · Nourish',
    size: '50ml',
    price: 95,
    type: 'pump',
    category: 'skincare',
    featured: true,
    benefits: ['Firms and lifts', 'Rich overnight repair', 'Locks in moisture'],
    description:
      'A velvety matte-black pump cream infused with blue copper peptide. Designed for nightly renewal — firming, restoring, and deeply nourishing tired skin.',
  },
  {
    id: 'ghk-cu-mist',
    name: 'GHK-Cu Hyaluronic Acid Mist',
    shortName: 'HA Mist Spray',
    tagline: 'Refresh · Plump · Glow',
    size: '100ml',
    price: 65,
    type: 'spray',
    category: 'skincare',
    featured: true,
    benefits: ['Instant hydration boost', 'Sets makeup flawlessly', 'Copper peptide infusion'],
    description:
      'A fine-mist hybrid of hyaluronic acid and GHK-Cu. Spritz anytime for plumped, dewy skin — over makeup, post-cleanse, or mid-flight.',
  },
  {
    id: 'face-mask',
    name: 'Copper Renewal Face Mask',
    shortName: 'Renewal Mask',
    tagline: 'Detox · Brighten · Revive',
    size: '5 Pack',
    price: 48,
    type: 'mask',
    category: 'skincare',
    featured: true,
    benefits: ['Weekly deep treatment', 'Brightens dull skin', 'Peptide-powered recovery'],
    description:
      'Sheet masks saturated with copper peptide complex for an intensive weekly reset. Visible brightness and smoother texture in one session.',
  },
]

export const merchProducts: Product[] = [
  {
    id: 'travel-bag',
    name: 'KODO Travel Cosmetic Bag',
    shortName: 'Travel Bag',
    tagline: 'Carry · Protect · Elevate',
    size: 'One Size',
    price: 55,
    type: 'bag',
    category: 'merch',
    featured: true,
    benefits: ['Matte black vegan leather', 'Fits full routine', 'Water-resistant lining'],
    description:
      'A minimalist travel companion crafted in matte black with silver hardware. Holds your entire KODO CO ritual — from serum to mist.',
  },
  {
    id: 'logo-tee',
    name: 'KODO CO Logo Tee',
    shortName: 'Logo Tee',
    tagline: 'Black · Black · Minimal',
    size: 'XS – XL',
    price: 65,
    type: 'tee',
    category: 'merch',
    featured: true,
    benefits: ['Heavyweight organic cotton', 'Tonal debossed logo', 'Relaxed unisex fit'],
    description:
      'Black on black. A heavyweight tee with the KODO CO® mark rendered in tonal deboss — visible in light, invisible in shadow. Uniform dressing.',
  },
  {
    id: 'oversized-hoodie',
    name: 'KODO Oversized Hoodie',
    shortName: 'Oversized Hoodie',
    tagline: 'Layer · Lounge · Move',
    size: 'XS – XL',
    price: 120,
    type: 'hoodie',
    category: 'merch',
    featured: true,
    benefits: ['400gsm French terry', 'Tonal embroidered logo', 'Kangaroo pocket, no drawcord'],
    description:
      'Architectural volume in near-black French terry. Tonal embroidery at the chest — the quietest statement. Built for off-duty rituals.',
  },
  {
    id: 'structured-cap',
    name: 'KODO Structured Cap',
    shortName: 'Structured Cap',
    tagline: 'Shade · Structure · Signal',
    size: 'One Size',
    price: 45,
    type: 'cap',
    category: 'merch',
    featured: true,
    benefits: ['Six-panel structured crown', 'Tonal front embroidery', 'Matte black cotton twill'],
    description:
      'A low-profile six-panel in matte black twill. KODO CO® embroidered in thread-on-thread tonal black — legible only when the light catches it.',
  },
  {
    id: 'canvas-tote',
    name: 'KODO Canvas Tote',
    shortName: 'Canvas Tote',
    tagline: 'Haul · Hold · Go',
    size: 'One Size',
    price: 50,
    type: 'tote',
    category: 'merch',
    featured: true,
    benefits: ['14oz black canvas', 'Interior zip pocket', 'Tonal screen-print logo'],
    description:
      'Oversized black canvas with a tonal screen-printed mark. Carries groceries, gym gear, or a full skincare haul. Black on black, always.',
  },
]

export const products = [...skincareProducts, ...merchProducts]
export const heroProducts = skincareProducts.filter((p) => p.featured)
export const heroMerch = merchProducts.filter((p) => p.featured)

export function productPath(product: Product): string {
  return product.category === 'merch' ? `/merch#${product.id}` : `/shop#${product.id}`
}

const SHOPIFY_STORE = 'https://shop.kodoco.com.au'

export function shopifyUrl(product: Product): string {
  return `${SHOPIFY_STORE}/products/${product.id}`
}
