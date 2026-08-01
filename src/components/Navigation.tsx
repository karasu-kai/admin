import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Skincare' },
  { to: '/merch', label: 'Merch' },
  { to: '/#ritual', label: 'Ritual' },
  { to: '/#about', label: 'About' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-kodo-black/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <Link to="/" className="font-display text-lg font-bold tracking-[0.2em] text-white md:text-xl">
            KODO CO<sup className="text-[0.45em] font-normal">®</sup>
          </Link>

          <ul className="hidden items-center gap-10 md:flex">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-xs font-medium uppercase tracking-[0.25em] text-kodo-silver transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/shop"
            className="hidden rounded-full border border-white/20 px-6 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-white transition-all hover:border-white/50 hover:bg-white/5 md:inline-block"
          >
            Shop All
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`block h-px w-6 bg-white transition-all ${menuOpen ? 'translate-y-[3.5px] rotate-45' : ''}`}
            />
            <span className={`block h-px w-6 bg-white transition-all ${menuOpen ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
          </button>
        </nav>
      </motion.header>

      <motion.div
        initial={false}
        animate={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'auto' : 'none' }}
        className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-kodo-black/95 backdrop-blur-2xl md:hidden"
      >
        <ul className="flex flex-col items-center gap-8">
          {links.map((link, i) => (
            <motion.li
              key={link.to}
              initial={{ opacity: 0, y: 20 }}
              animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={link.to}
                className="font-display text-3xl font-bold uppercase tracking-wider text-white"
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </>
  )
}
