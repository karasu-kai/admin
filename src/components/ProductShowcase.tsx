import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { heroProducts, productPath, type Product } from '../data/products'
import ProductVisual from './ProductVisual'
import type { SkincareType } from '../data/products'

function ProductCard({ product, index }: { product: Product; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex-shrink-0 snap-center"
      style={{ width: 'min(85vw, 380px)' }}
    >
      <Link to={productPath(product)} className="block">
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-kodo-charcoal/50 p-8 transition-all duration-500 group-hover:border-white/15 group-hover:bg-kodo-stone/80">
          {/* Hover glow */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/[0.04] to-transparent"
          />

          <div className="relative mx-auto h-64 md:h-72">
            <motion.div
              animate={{ y: hovered ? -8 : 0, scale: hovered ? 1.03 : 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <ProductVisual type={product.type as SkincareType} className="h-full" />
            </motion.div>
          </div>

          <div className="relative mt-6 space-y-2">
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-kodo-silver">
              {product.tagline}
            </p>
            <h3 className="font-display text-xl font-bold tracking-wide text-white md:text-2xl">
              {product.shortName}
            </h3>
            <div className="flex items-center justify-between pt-2">
              <span className="text-sm text-kodo-silver">{product.size}</span>
              <span className="font-display text-lg font-semibold text-white">
                ${product.price}
                <span className="text-kodo-silver"> AUD</span>
              </span>
            </div>
          </div>

          <motion.div
            initial={false}
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
            className="mt-4 text-center text-xs uppercase tracking-[0.25em] text-white/70"
          >
            View Details →
          </motion.div>
        </div>
      </Link>
    </motion.article>
  )
}

export default function ProductShowcase() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section id="products" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-kodo-silver">The Collection</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
              Hero Products
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-kodo-silver">
            Four essentials. One ritual. Engineered around GHK-Cu — the copper peptide your skin recognises.
          </p>
        </motion.div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 md:gap-8 md:px-10">
        <div className="w-[max(0px,calc((100vw-80rem)/2+2.5rem))] flex-shrink-0" aria-hidden />
        {heroProducts.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
        <div className="w-6 flex-shrink-0 md:w-10" aria-hidden />
      </div>
    </section>
  )
}
