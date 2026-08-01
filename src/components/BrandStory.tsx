import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function BrandStory() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section id="about" ref={ref} className="relative overflow-hidden py-24 md:py-40">
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03]"
      >
        <span className="font-display text-[20vw] font-extrabold tracking-tighter text-white select-none">
          GHK-Cu
        </span>
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-center gap-16 md:grid-cols-2 md:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-kodo-silver">About KODO CO</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              Science,
              <br />
              Stripped Back.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-6 text-base leading-relaxed text-kodo-silver md:text-lg"
          >
            <p>
              KODO CO is built on a single conviction: your skin responds to what it recognises. GHK-Cu — a
              naturally occurring copper peptide — is the molecule at the centre of everything we make.
            </p>
            <p>
              No clutter. No noise. Matte black packaging, bright white type, and formulas that do one thing
              exceptionally well — repair, hydrate, and restore.
            </p>
            <p className="text-white/80">
              Designed in Australia. Formulated for skin that demands more.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 grid grid-cols-2 gap-8 border-t border-white/[0.06] pt-16 md:grid-cols-4 md:gap-12"
        >
          {[
            { value: 'GHK-Cu', label: 'Core Peptide' },
            { value: '4 + 5', label: 'Skincare & Merch' },
            { value: '100%', label: 'Cruelty Free' },
            { value: 'AU', label: 'Designed Locally' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl font-bold text-white md:text-3xl">{stat.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-kodo-silver">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
