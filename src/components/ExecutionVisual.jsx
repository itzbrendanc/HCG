export default function ExecutionVisual() {
  return (
    <div className="relative overflow-hidden rounded-[22px] bg-black/35 p-5 ring-1 ring-white/10">
      <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-hcg-600/14 blur-3xl" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
            Roadmap
          </div>
          <div className="text-xs font-medium text-white/50">Plan → Ship → Measure</div>
        </div>

        <div className="mt-4 rounded-2xl bg-black/35 p-4 ring-1 ring-white/10">
          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
              Milestones
            </div>
            <div className="text-xs font-medium text-white/55">Q1 → Q2</div>
          </div>

          <div className="mt-4 relative">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-hcg-400/30" />
            <div className="grid gap-3">
              {[
                { k: 'Align goals + KPIs', s: 'Done' },
                { k: 'Diagnose constraints', s: 'Done' },
                { k: 'Design roadmap', s: 'In progress' },
                { k: 'Ship initiatives', s: 'Next' },
              ].map((m, idx) => (
                <div key={m.k} className="flex items-start gap-3">
                  <div className="relative mt-1">
                    <div
                      className={[
                        'grid h-6 w-6 place-items-center rounded-full ring-1',
                        idx < 2
                          ? 'bg-hcg-600/25 ring-hcg-400/35'
                          : idx === 2
                            ? 'bg-white/10 ring-white/15'
                            : 'bg-white/5 ring-white/10',
                      ].join(' ')}
                    >
                      {idx < 2 ? (
                        <span className="text-hcg-200 text-xs">✓</span>
                      ) : (
                        <span className="text-white/60 text-xs">•</span>
                      )}
                    </div>
                    {idx === 2 ? (
                      <div className="pointer-events-none absolute inset-0 rounded-full shadow-[0_0_30px_rgba(65,135,210,0.18)]" />
                    ) : null}
                  </div>
                  <div className="flex-1 rounded-2xl bg-black/35 p-4 ring-1 ring-white/10">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold tracking-tight text-white">{m.k}</div>
                      <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
                        {m.s}
                      </div>
                    </div>
                    <div className="mt-2 h-2 w-2/3 rounded bg-white/10" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            { k: 'In Progress', v: '3' },
            { k: 'In Review', v: '2' },
            { k: 'Shipped', v: '7' },
          ].map((m) => (
            <div key={m.k} className="rounded-2xl bg-black/35 p-4 ring-1 ring-white/10">
              <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">{m.k}</div>
              <div className="mt-2 text-lg font-semibold tracking-tight text-hcg-200">{m.v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
