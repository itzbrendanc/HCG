import axiomStrategyLogo from '../assets/axiom-strategy-logo.png'
import MagneticButton from './MagneticButton.jsx'

export default function Footer() {
  return (
    <footer className="bg-night-950 text-white">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img src={axiomStrategyLogo} alt="Axiom Strategy" className="h-8 w-auto opacity-95 sm:h-9" />
            <div className="text-sm font-semibold tracking-tight text-white/90">
              Axiom Strategy
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-white/60">Ready to take the next step?</span>
            <MagneticButton
              as="a"
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 shadow-soft transition hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-card"
            >
              Work With Axiom
            </MagneticButton>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/60">
            <a href="#privacy" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#terms" className="transition hover:text-white">
              Terms of Service
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/usf.hcg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 transition-transform duration-200 hover:scale-[1.05] hover:text-blue-400"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4"
              >
                <path
                  d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  opacity="0.9"
                />
                <path
                  d="M12 16a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  opacity="0.9"
                />
                <path
                  d="M17.2 6.9h.01"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
              Instagram
            </a>
            <a
              href="mailto:usfhcg@gmail.com"
              className="inline-flex items-center gap-2 text-gray-400 transition-transform duration-200 hover:scale-[1.05] hover:text-blue-400"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4"
              >
                <path
                  d="M4 6h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  opacity="0.9"
                  strokeLinejoin="round"
                />
                <path
                  d="m4 8 8 6 8-6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  opacity="0.9"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
              usfhcg@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-2 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} Axiom Strategy. All rights reserved.</div>
            <div className="text-white/45">
              Strategic advisory. Operational clarity. Measurable growth.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
