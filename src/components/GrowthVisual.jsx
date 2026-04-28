export default function GrowthVisual() {
  return (
    <div className="relative overflow-hidden rounded-[22px] bg-black/35 p-5 ring-1 ring-white/10">
      <div className="pointer-events-none absolute -left-16 -bottom-20 h-64 w-64 rounded-full bg-hcg-600/16 blur-3xl" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
            Growth Funnel
          </div>
          <div className="text-xs font-medium text-white/50">Visibility → Conversion</div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-black/35 p-4 ring-1 ring-white/10">
            <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">Inputs</div>
            <div className="mt-3 grid gap-2 text-sm text-white/75">
              {['Message', 'Channels', 'Creative', 'Offer'].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-hcg-400" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-black/35 p-4 ring-1 ring-white/10">
            <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">Outcomes</div>
            <div className="mt-3 grid gap-2 text-sm text-white/75">
              {['Leads', 'Pipeline', 'Revenue'].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-hcg-400" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-2xl bg-black/35 p-4 ring-1 ring-white/10">
          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
              Conversion Curve
            </div>
            <div className="text-xs font-medium text-white/55">Last 90 days</div>
          </div>

          <div className="mt-3 rounded-2xl bg-black/35 p-3 ring-1 ring-white/10">
            <svg viewBox="0 0 520 160" className="h-[160px] w-full">
              <defs>
                <linearGradient id="hcgCurve" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(65,135,210,0.10)" />
                  <stop offset="50%" stopColor="rgba(65,135,210,0.78)" />
                  <stop offset="100%" stopColor="rgba(65,135,210,0.18)" />
                </linearGradient>
                <linearGradient id="hcgFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(65,135,210,0.22)" />
                  <stop offset="100%" stopColor="rgba(65,135,210,0.00)" />
                </linearGradient>
              </defs>

              {Array.from({ length: 9 }).map((_, i) => (
                <line
                  key={i}
                  x1={20 + i * 60}
                  y1="18"
                  x2={20 + i * 60}
                  y2="142"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="1"
                />
              ))}

              <path
                d="M20 132 C 110 120, 150 95, 210 105 C 270 115, 320 78, 365 80 C 410 82, 450 55, 500 42"
                fill="none"
                stroke="hcgCurve"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
              <path
                d="M20 132 C 110 120, 150 95, 210 105 C 270 115, 320 78, 365 80 C 410 82, 450 55, 500 42 L 500 150 L 20 150 Z"
                fill="url(#hcgFill)"
                opacity="0.95"
              />
              <circle cx="500" cy="42" r="6" fill="rgba(65,135,210,0.95)" />
            </svg>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-3">
            {[
              { k: 'Visibility', v: '+28%' },
              { k: 'Leads', v: '+19%' },
              { k: 'Conversion', v: '+11%' },
            ].map((m) => (
              <div key={m.k} className="rounded-2xl bg-black/35 p-4 ring-1 ring-white/10">
                <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">{m.k}</div>
                <div className="mt-2 text-lg font-semibold tracking-tight text-hcg-200">{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
