import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { skincareProducts } from '../data/products'
import ProductDetail from '../components/ProductDetail'

export default function Shop() {
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
    <div className="pt-28 md:pt-32">
      <div className="mx-auto max-w-7xl px-6 pb-16 md:px-10 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-kodo-silver">Skincare</p>
          <h1 className="mt-3 font-display text-5xl font-bold tracking-tight text-white md:text-6xl">
            The Collection
          </h1>
          <p className="mt-6 max-w-lg text-kodo-silver">
            Copper peptide formulas in matte black. Bright white type. Nothing extra.
          </p>
        </motion.div>
      </div>

      {skincareProducts.map((product, i) => (
        <ProductDetail key={product.id} product={product} index={i} />
      ))}
    </div>
  )
}
