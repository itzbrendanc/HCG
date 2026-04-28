export default function StrategyVisual() {
  return (
    <div className="relative overflow-hidden rounded-[22px] bg-black/35 p-5 ring-1 ring-white/10">
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-hcg-600/18 blur-3xl" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
            Strategy Map
          </div>
          <div className="text-xs font-medium text-white/60">Signal → Conversion</div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-4">
          {[
            { k: 'Signal', v: 'Market demand' },
            { k: 'Position', v: 'Differentiation' },
            { k: 'Channel', v: 'Acquisition path' },
            { k: 'Conversion', v: 'Revenue flow' },
          ].map((m) => (
            <div key={m.k} className="rounded-2xl bg-black/35 p-4 ring-1 ring-white/10">
              <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">{m.k}</div>
              <div className="mt-2 text-sm font-semibold tracking-tight text-white">{m.v}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-2xl bg-black/35 p-4 ring-1 ring-white/10">
          <svg viewBox="0 0 520 220" className="h-[220px] w-full">
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

            <path d="M60 170 L 160 110 L 270 130 L 380 95 L 470 60" stroke="rgba(255,255,255,0.10)" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path
              d="M60 170 L 160 110 L 270 130 L 380 95 L 470 60"
              fill="none"
              stroke="url(#hcgLine)"
              strokeWidth="3.2"
              strokeLinecap="round"
              filter="url(#hcgGlow)"
            />

            {[
              { x: 60, y: 170, l: 'Signal' },
              { x: 160, y: 110, l: 'Position' },
              { x: 270, y: 130, l: 'Channel' },
              { x: 380, y: 95, l: 'Conversion' },
              { x: 470, y: 60, l: 'Timing' },
            ].map((n, i) => (
              <g key={n.l}>
                <circle cx={n.x} cy={n.y} r="14" fill="rgba(65,135,210,0.14)" />
                <circle cx={n.x} cy={n.y} r="7" fill="rgba(65,135,210,0.95)" />
                {i === 2 ? (
                  <circle cx={n.x} cy={n.y} r="18" fill="none" stroke="rgba(65,135,210,0.35)" strokeWidth="2">
                    <animate attributeName="r" values="16;22;16" dur="2.6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.55;0.15;0.55" dur="2.6s" repeatCount="indefinite" />
                  </circle>
                ) : null}
                <text x={n.x} y={n.y - 22} textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.72)" fontFamily="ui-sans-serif, system-ui">
                  {n.l}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </div>
  )
}
