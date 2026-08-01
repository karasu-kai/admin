import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { merchProducts } from '../data/products'
import ProductDetail from '../components/ProductDetail'

export default function Merch() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
      }
    }
  }, [location])

  return (
    <div className="min-h-screen bg-[#060606] pt-28 md:pt-32">
      <div className="mx-auto max-w-7xl px-6 pb-16 md:px-10 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-white/25">Merch</p>
          <h1 className="mt-3 font-display text-5xl font-bold tracking-tight text-white/90 md:text-6xl">
            Black on Black
          </h1>
          <p className="mt-6 max-w-lg text-white/35">
            Tonal logos on matte black fabrics. The brand is there — you just have to look for it.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-block text-xs font-medium uppercase tracking-[0.25em] text-white/40 transition-colors hover:text-white/70"
          >
            ← Skincare Collection
          </Link>
        </motion.div>
      </div>

      {merchProducts.map((product, i) => (
        <ProductDetail key={product.id} product={product} index={i} />
      ))}
    </div>
  )
}
