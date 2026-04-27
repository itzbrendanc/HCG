import hilltopLogo from '../assets/hilltop-logo.png'

export default function Footer() {
  return (
    <footer className="bg-night-950 text-white">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img src={hilltopLogo} alt="Hilltop Consulting Group" className="h-9 w-auto opacity-95" />
            <div className="text-sm font-semibold tracking-tight text-white/90">
              Hilltop Consulting Group (HCG)
            </div>
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
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-2 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} Hilltop Consulting Group (HCG). All rights reserved.</div>
            <div className="text-white/45">
              Strategic advisory. Operational clarity. Measurable growth.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
