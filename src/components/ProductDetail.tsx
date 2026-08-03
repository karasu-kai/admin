import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { Product } from '../data/products'
import { buyUrl, hasPaymentLink } from '../data/products'
import ProductVisual from './ProductVisual'
import MerchVisual from './MerchVisual'
import type { MerchType, SkincareType } from '../data/products'

interface ProductDetailProps {
  product: Product
  index: number
}

export default function ProductDetail({ product, index }: ProductDetailProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const isEven = index % 2 === 0
  const isMerch = product.category === 'merch'

  return (
    <article
      id={product.id}
      ref={ref}
      className={`scroll-mt-28 border-b py-20 md:py-28 ${
        isMerch ? 'border-white/[0.03] bg-[#060606]' : 'border-white/[0.06]'
      }`}
    >
      <div
        className={`mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-20 md:px-10 ${
          isEven ? '' : 'md:[&>*:first-child]:order-2'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative flex h-80 items-center justify-center md:h-[420px]"
        >
          <div
            className={`absolute inset-0 rounded-full blur-3xl ${
              isMerch ? 'bg-white/[0.01]' : 'bg-white/[0.02]'
            }`}
          />
          {isMerch ? (
            <MerchVisual type={product.type as MerchType} className="h-full" />
          ) : (
            <ProductVisual type={product.type as SkincareType} className="h-full" />
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p
            className={`text-xs font-medium uppercase tracking-[0.35em] ${
              isMerch ? 'text-white/25' : 'text-kodo-silver'
            }`}
          >
            {product.tagline}
          </p>
          <h2
            className={`mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl ${
              isMerch ? 'text-white/90' : 'text-white'
            }`}
          >
            {product.name}
          </h2>
          <p
            className={`mt-6 text-base leading-relaxed ${isMerch ? 'text-white/40' : 'text-kodo-silver'}`}
          >
            {product.description}
          </p>

          <ul className="mt-8 space-y-3">
            {product.benefits.map((benefit) => (
              <li
                key={benefit}
                className={`flex items-center gap-3 text-sm ${isMerch ? 'text-white/50' : 'text-white/70'}`}
              >
                <span className={`h-px w-6 ${isMerch ? 'bg-white/15' : 'bg-white/30'}`} />
                {benefit}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <div>
              <span className={`font-display text-3xl font-bold ${isMerch ? 'text-white/85' : 'text-white'}`}>
                ${product.price}
              </span>
              <span className={isMerch ? 'ml-1 text-white/30' : 'ml-1 text-kodo-silver'}>AUD</span>
              <span className={`ml-4 text-sm ${isMerch ? 'text-white/30' : 'text-kodo-silver'}`}>
                {product.size}
              </span>
            </div>
            <a
              href={buyUrl(product)}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full px-8 py-3.5 text-xs font-medium uppercase tracking-[0.25em] transition-transform hover:scale-[1.02] ${
                isMerch
                  ? 'border border-white/15 bg-white/5 text-white/80 hover:border-white/25 hover:bg-white/10'
                  : 'bg-white text-kodo-black'
              }`}
            >
              {hasPaymentLink(product) ? 'Buy Now' : 'Enquire'}
            </a>
          </div>
        </motion.div>
      </div>
    </article>
  )
}
