import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92])

  return (
    <section ref={ref} className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden">
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-white/[0.02] blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-white/[0.015] blur-[100px]" />
      </div>

      <motion.div style={{ y, opacity, scale }} className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-32 md:px-10 md:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-kodo-silver"
        >
          Copper Peptide Skincare
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-[clamp(3.5rem,12vw,9rem)] font-extrabold leading-[0.85] tracking-tight text-white"
        >
          KODO
          <br />
          CO<sup className="text-[0.2em] font-semibold align-super">®</sup>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 max-w-md text-base leading-relaxed text-kodo-silver md:text-lg"
        >
          Minimalist formulas. Maximum repair. GHK-Cu powered rituals for skin that performs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <Link
            to="/shop"
            className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-kodo-black transition-transform hover:scale-[1.02]"
          >
            <span className="relative z-10">Explore Collection</span>
          </Link>
          <a
            href="#products"
            className="rounded-full border border-white/20 px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-white transition-all hover:border-white/40 hover:bg-white/5"
          >
            View Products
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-kodo-silver">Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-kodo-silver/50 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-kodo-black to-transparent" />
    </section>
  )
}
