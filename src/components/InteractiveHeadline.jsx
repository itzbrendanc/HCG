import { motion, useReducedMotion } from 'framer-motion'

function splitWords(text) {
  return text.split(' ').map((w) => w.trim()).filter(Boolean)
}

export default function InteractiveHeadline({
  line1 = 'Strategic Solutions.',
  line2 = 'Measurable Impact.',
}) {
  const prefersReducedMotion = useReducedMotion()

  const container = {
    hidden: {},
    show: {
      transition: prefersReducedMotion
        ? { staggerChildren: 0 }
        : { staggerChildren: 0.08, delayChildren: 0.08 },
    },
  }

  const word = {
    hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const glowHover =
    'transition-[letter-spacing,filter,text-shadow] duration-300 ease-out hover:tracking-[0.02em] hover:[text-shadow:0_0_28px_rgba(65,135,210,0.22)]'

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      className="mt-6 text-[56px] font-semibold leading-[0.98] tracking-tight text-white sm:text-[72px] lg:text-[92px] xl:text-[104px]"
    >
      <div className="block">
        {splitWords(line1).map((w) => (
          <motion.span
            key={`l1-${w}`}
            variants={word}
            className={['inline-block', glowHover].join(' ')}
          >
            {w}{' '}
          </motion.span>
        ))}
      </div>
      <div className="mt-3 block text-hcg-300">
        {splitWords(line2).map((w) => (
          <motion.span
            key={`l2-${w}`}
            variants={word}
            className={['inline-block', glowHover, 'hover:text-hcg-200'].join(' ')}
          >
            {w}{' '}
          </motion.span>
        ))}
      </div>
    </motion.h1>
  )
}
