import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    num: '01',
    title: 'Cleanse',
    desc: 'Start with a gentle cleanse to prep skin for peptide absorption.',
  },
  {
    num: '02',
    title: 'Treat',
    desc: 'Apply GHK-Cu Serum — two drops, pressed into face and neck.',
  },
  {
    num: '03',
    title: 'Mist',
    desc: 'Lock hydration with the HA Mist. Spritz over serum or makeup.',
  },
  {
    num: '04',
    title: 'Moisturise',
    desc: 'Finish with GHK-Cu Cream. Rich repair while you sleep.',
  },
  {
    num: '05',
    title: 'Renew',
    desc: 'Weekly Renewal Mask for deep copper peptide recovery.',
  },
]

export default function RitualSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="ritual" ref={ref} className="relative border-y border-white/[0.06] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center md:mb-20"
        >
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-kodo-silver">The Ritual</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            Five Steps. One System.
          </h2>
        </motion.div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] md:grid-cols-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-kodo-charcoal p-8 transition-colors hover:bg-kodo-stone md:p-10"
            >
              <span className="font-display text-3xl font-bold text-white/10 transition-colors group-hover:text-white/20">
                {step.num}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-wider text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-kodo-silver">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
