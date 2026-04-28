export default function ExecutionVisual() {
  return (
    <div className="relative overflow-hidden rounded-[22px] bg-black/35 p-5 ring-1 ring-white/10">
      <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-hcg-600/14 blur-3xl" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
            Delivery Board
          </div>
          <div className="text-xs font-medium text-white/50">Plan → Ship → Measure</div>
        </div>

        <div className="mt-4 grid gap-3 lg:grid-cols-3">
          {[
            { k: 'In Progress', n: 3 },
            { k: 'In Review', n: 2 },
            { k: 'Shipped', n: 7 },
          ].map((c) => (
            <div key={c.k} className="rounded-2xl bg-black/35 p-4 ring-1 ring-white/10">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
                  {c.k}
                </div>
                <div className="text-sm font-semibold text-white">{c.n}</div>
              </div>
              <div className="mt-3 grid gap-2">
                {Array.from({ length: Math.min(3, c.n) }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10"
                  >
                    <div className="h-2 w-2/3 rounded bg-white/15" />
                    <div className="mt-2 h-2 w-1/2 rounded bg-white/10" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

