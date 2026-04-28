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
          <div className="grid grid-cols-12 gap-2">
            {Array.from({ length: 48 }).map((_, i) => (
              <div
                key={i}
                className={[
                  'h-3 rounded',
                  i % 7 === 0
                    ? 'bg-hcg-500/35'
                    : i % 5 === 0
                      ? 'bg-white/10'
                      : 'bg-white/5',
                ].join(' ')}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

