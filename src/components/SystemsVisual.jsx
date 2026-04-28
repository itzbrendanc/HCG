export default function SystemsVisual() {
  return (
    <div className="relative overflow-hidden rounded-[22px] bg-black/35 p-5 ring-1 ring-white/10">
      <div className="pointer-events-none absolute -right-20 -bottom-24 h-72 w-72 rounded-full bg-hcg-600/14 blur-3xl" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
            Team Operating System
          </div>
          <div className="text-xs font-medium text-white/50">Cadence • Metrics • Handoffs</div>
        </div>

        <div className="mt-4 rounded-2xl bg-black/35 p-4 ring-1 ring-white/10">
          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
              CRM Preview
            </div>
            <div className="text-xs font-medium text-white/55">Leads • Status • Next action</div>
          </div>

          <div className="mt-3 overflow-hidden rounded-2xl ring-1 ring-white/10">
            <div className="grid grid-cols-12 gap-2 bg-white/5 px-3 py-2 text-[11px] font-semibold text-white/60">
              <div className="col-span-4">Lead</div>
              <div className="col-span-3">Status</div>
              <div className="col-span-3">Owner</div>
              <div className="col-span-2">Next</div>
            </div>
            {[
              { lead: 'Northpoint Logistics', status: 'Responded', owner: 'J. Patel', next: 'Call' },
              { lead: 'Summit Healthcare', status: 'Review', owner: 'A. Kim', next: 'Deck' },
              { lead: 'Veritas Holdings', status: 'Contacted', owner: 'M. Rivera', next: 'Follow-up' },
            ].map((r, idx) => (
              <div
                key={r.lead}
                className="grid grid-cols-12 gap-2 border-t border-white/10 px-3 py-3"
              >
                <div className="col-span-4">
                  <div className="text-sm font-semibold tracking-tight text-white">{r.lead}</div>
                  <div className="mt-1 h-2 w-24 rounded bg-white/10" />
                </div>
                <div className="col-span-3">
                  <span
                    className={[
                      'inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ring-1',
                      idx === 0
                        ? 'bg-hcg-600/20 text-white ring-hcg-400/25'
                        : idx === 1
                          ? 'bg-white/10 text-white ring-white/15'
                          : 'bg-white/5 text-white/80 ring-white/10',
                    ].join(' ')}
                  >
                    {r.status}
                  </span>
                </div>
                <div className="col-span-3 text-sm font-medium text-white/80">{r.owner}</div>
                <div className="col-span-2 text-sm font-medium text-white/80">{r.next}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            { k: 'Leads', v: '24' },
            { k: 'Active', v: '7' },
            { k: 'Follow-ups', v: '5' },
          ].map((m) => (
            <div key={m.k} className="rounded-2xl bg-black/35 p-4 ring-1 ring-white/10">
              <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
                {m.k}
              </div>
              <div className="mt-2 text-lg font-semibold tracking-tight text-hcg-200">
                {m.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
