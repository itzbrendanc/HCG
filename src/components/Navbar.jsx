import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import axiomStrategyLogo from '../assets/axiom-strategy-logo.png'
import MagneticButton from './MagneticButton.jsx'

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Approach', href: '#approach' },
  { label: 'About Us', href: '#about' },
  { label: 'Work With Us', href: '#work-with-us' },
  { label: 'Contact', href: '#contact' },
]

function useScrollShadow() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return scrolled
}

export default function Navbar() {
  const prefersReducedMotion = useReducedMotion()
  const scrolled = useScrollShadow()
  const [open, setOpen] = useState(false)

  const chrome = useMemo(() => {
    return [
      'sticky top-0 z-50',
      'border-b',
      scrolled
        ? 'border-hcg-400/20 bg-night-950/75 shadow-soft shadow-[0_18px_60px_rgba(0,0,0,0.45)]'
        : 'border-transparent bg-night-950/35',
      'backdrop-blur',
    ].join(' ')
  }, [scrolled])

  return (
    <header className={chrome}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3.5 sm:px-8 sm:py-4.5">
        <motion.a
          href="#top"
          whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="group flex items-center gap-2"
        >
          <div className="relative">
            <div className="pointer-events-none absolute -inset-2 rounded-xl bg-hcg-600/10 opacity-0 blur-xl transition group-hover:opacity-100" />
            <img
              src={axiomStrategyLogo}
              alt="Axiom Strategy"
              className="relative h-8 w-auto opacity-100 sm:h-9"
            />
          </div>
          <div className="hidden leading-tight sm:block">
            <div className="text-sm font-semibold tracking-tight text-white">Axiom Strategy</div>
          </div>
        </motion.a>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm font-medium text-white/70 transition hover:text-white"
            >
              {item.label}
              <span className="pointer-events-none absolute -bottom-2 left-0 h-px w-0 bg-hcg-300/80 transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          ))}
          <MagneticButton
            as="a"
            href="#contact"
            className="rounded-2xl bg-gradient-to-r from-hcg-600 to-hcg-500 px-4 py-2 text-sm font-semibold text-white ring-1 ring-hcg-300/30 shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow hover:scale-[1.01]"
          >
            Work With Axiom
          </MagneticButton>
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center rounded-xl ring-1 ring-white/15 transition hover:bg-white/5 md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1">
            <span className="h-0.5 w-5 rounded bg-white/80" />
            <span className="h-0.5 w-5 rounded bg-white/80" />
            <span className="h-0.5 w-5 rounded bg-white/80" />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="border-t border-white/10 bg-night-950/92 backdrop-blur md:hidden"
          >
            <div className="mx-auto max-w-6xl px-5 py-3 sm:px-8">
              <div className="grid gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-1.5 text-sm font-medium text-white/85 transition hover:bg-white/10"
                  >
                    {item.label}
                  </a>
                ))}
                <MagneticButton
                  as="a"
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-2xl bg-gradient-to-r from-hcg-600 to-hcg-500 px-4 py-2 text-center text-sm font-semibold text-white shadow-soft transition hover:shadow-glow"
                >
                  Work With Axiom
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
