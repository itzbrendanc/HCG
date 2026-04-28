export default function SystemsVisual() {
  return (
    <div className="relative overflow-hidden rounded-[22px] bg-black/35 p-5 ring-1 ring-white/10">
      <div className="pointer-events-none absolute -right-20 -bottom-24 h-72 w-72 rounded-full bg-hcg-600/14 blur-3xl" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
            Operating System
          </div>
          <div className="text-xs font-medium text-white/50">Cadence • Metrics • Handoffs</div>
        </div>

        <div className="mt-4 grid gap-3">
          {[
            { k: 'Weekly', v: 'Priorities + blockers' },
            { k: 'Daily', v: 'Execution cadence' },
            { k: 'Monthly', v: 'Review + optimize' },
          ].map((r) => (
            <div key={r.k} className="rounded-2xl bg-black/35 p-4 ring-1 ring-white/10">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold tracking-tight text-white">{r.k}</div>
                <div className="text-xs font-semibold tracking-[0.14em] uppercase text-hcg-300">
                  Active
                </div>
              </div>
              <div className="mt-2 text-sm text-white/75">{r.v}</div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-2/3 rounded-full bg-hcg-500/50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

