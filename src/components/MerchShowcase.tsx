import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { heroMerch, productPath, type Product } from '../data/products'
import MerchVisual from './MerchVisual'
import type { MerchType } from '../data/products'

function MerchCard({ product, index }: { product: Product; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative"
    >
      <Link to={productPath(product)} className="block">
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.04] bg-[#080808] p-8 transition-all duration-500 group-hover:border-white/10">
          {/* Black-on-black hover reveal — subtle light sweep */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? '100%' : '-100%' }}
            transition={{ duration: 0.6 }}
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent"
          />

          <div className="relative mx-auto h-56 md:h-64">
            <motion.div
              animate={{ y: hovered ? -6 : 0, scale: hovered ? 1.02 : 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <MerchVisual type={product.type as MerchType} className="h-full" />
            </motion.div>
          </div>

          <div className="relative mt-6 space-y-2">
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/25">
              {product.tagline}
            </p>
            <h3 className="font-display text-lg font-bold tracking-wide text-white/90 md:text-xl">
              {product.shortName}
            </h3>
            <div className="flex items-center justify-between pt-2">
              <span className="text-sm text-white/30">{product.size}</span>
              <span className="font-display text-lg font-semibold text-white/80">
                ${product.price}
                <span className="text-white/30"> AUD</span>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export default function MerchShowcase() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="merch" ref={ref} className="relative overflow-hidden border-t border-white/[0.04] bg-[#060606] py-24 md:py-32">
      {/* Ambient depth */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        <div className="absolute bottom-1/4 right-0 h-[300px] w-[300px] rounded-full bg-white/[0.008] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-white/25">Merch</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white/90 md:text-5xl">
              Black on Black
            </h2>
          </div>
          <div className="max-w-sm space-y-4">
            <p className="text-sm leading-relaxed text-white/35">
              Tonal logos. Matte fabrics. Zero contrast until the light hits. Wear the brand without shouting it.
            </p>
            <Link
              to="/merch"
              className="inline-block text-xs font-medium uppercase tracking-[0.25em] text-white/50 transition-colors hover:text-white/80"
            >
              Shop Merch →
            </Link>
          </div>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {heroMerch.map((product, i) => (
            <MerchCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
