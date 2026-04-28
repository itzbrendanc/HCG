export default function StrategyVisual() {
  return (
    <div className="relative overflow-hidden rounded-[22px] bg-black/35 p-5 ring-1 ring-white/10">
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-hcg-600/18 blur-3xl" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
            Strategy Map
          </div>
          <div className="text-xs font-medium text-white/50">Signal → Decision</div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            { k: 'Signal', v: 'Market demand' },
            { k: 'Position', v: 'Differentiation' },
            { k: 'Path', v: 'High-leverage plan' },
          ].map((m) => (
            <div key={m.k} className="rounded-2xl bg-black/35 p-4 ring-1 ring-white/10">
              <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">{m.k}</div>
              <div className="mt-2 text-sm font-semibold tracking-tight text-white">{m.v}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-2xl bg-black/35 p-4 ring-1 ring-white/10">
          <svg viewBox="0 0 520 180" className="h-[180px] w-full">
            <defs>
              <linearGradient id="hcgLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(65,135,210,0.15)" />
                <stop offset="50%" stopColor="rgba(65,135,210,0.75)" />
                <stop offset="100%" stopColor="rgba(65,135,210,0.15)" />
              </linearGradient>
              <filter id="hcgGlow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              d="M30 120 C 90 25, 190 160, 250 70 C 310 8, 410 140, 490 50"
              fill="none"
              stroke="url(#hcgLine)"
              strokeWidth="3"
              strokeLinecap="round"
              filter="url(#hcgGlow)"
            />
            {[
              [30, 120],
              [140, 85],
              [250, 70],
              [360, 110],
              [490, 50],
            ].map(([x, y]) => (
              <g key={`${x}-${y}`}>
                <circle cx={x} cy={y} r="10" fill="rgba(65,135,210,0.12)" />
                <circle cx={x} cy={y} r="4.5" fill="rgba(65,135,210,0.95)" />
              </g>
            ))}
          </svg>
        </div>
      </div>
    </div>
  )
}

