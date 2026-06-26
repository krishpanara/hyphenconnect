export default function DashboardMockup() {
  return (
    <div className="relative w-full max-w-lg">
      {/* Monitor frame */}
      <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white">
        {/* Top bar */}
        <div className="flex items-center justify-between bg-slate-100 px-3 py-2 border-b border-slate-200">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-white rounded-md px-3 py-0.5 text-[10px] text-slate-400 border border-slate-200 text-center">
              dashboard.hyphenconnect.ai
            </div>
          </div>
          <div className="w-16" />
        </div>

        {/* Dashboard body */}
        <div className="flex h-52">
          {/* Sidebar */}
          <div className="w-12 bg-slate-800 flex flex-col items-center py-3 gap-3">
            <div className="w-6 h-6 rounded-lg bg-sky-500 flex items-center justify-center">
              <div className="w-3 h-3 rounded-sm bg-white/90" />
            </div>
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-5 h-1 rounded-full bg-slate-600" />
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 bg-slate-50 p-3">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="w-20 h-2.5 rounded bg-slate-700 mb-1" />
                <div className="w-14 h-1.5 rounded bg-slate-300" />
              </div>
              <div className="bg-sky-500 text-white text-[8px] font-bold px-2 py-1 rounded-md">
                + New
              </div>
            </div>

            {/* Filter pills */}
            <div className="flex gap-1 mb-3">
              <div className="bg-sky-500 text-white text-[7px] px-2 py-0.5 rounded-full font-medium">All</div>
              <div className="bg-white text-slate-400 text-[7px] px-2 py-0.5 rounded-full border border-slate-200">Active</div>
              <div className="bg-white text-slate-400 text-[7px] px-2 py-0.5 rounded-full border border-slate-200">Pending</div>
            </div>

            {/* Table rows */}
            <div className="space-y-1.5">
              {[
                { color: 'bg-sky-400', name: 'CRM Integration', status: 'Active', pct: '82%' },
                { color: 'bg-emerald-400', name: 'Chatbot Deploy', status: 'Done', pct: '100%' },
                { color: 'bg-amber-400', name: 'ERP Automation', status: 'Review', pct: '67%' },
                { color: 'bg-purple-400', name: 'AI Workflow', status: 'Active', pct: '45%' },
              ].map((row) => (
                <div key={row.name} className="flex items-center gap-2 bg-white rounded-lg px-2 py-1.5 border border-slate-100">
                  <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${row.color}`} />
                  <div className="flex-1 min-w-0">
                    <div className="text-[8px] font-medium text-slate-700 truncate">{row.name}</div>
                  </div>
                  <div className="text-[7px] text-slate-400">{row.status}</div>
                  <div className="text-[7px] font-bold text-sky-600">{row.pct}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel */}
          <div className="w-24 bg-white border-l border-slate-100 p-2 flex flex-col gap-2">
            <div className="text-[8px] font-semibold text-slate-700 mb-1">Team</div>
            {[
              { initials: 'AK', color: 'bg-sky-500' },
              { initials: 'MR', color: 'bg-emerald-500' },
              { initials: 'JL', color: 'bg-purple-500' },
              { initials: 'SP', color: 'bg-amber-500' },
            ].map((member) => (
              <div key={member.initials} className="flex items-center gap-1.5">
                <div className={`w-5 h-5 rounded-full ${member.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-[6px] text-white font-bold">{member.initials}</span>
                </div>
                <div className="flex-1">
                  <div className="w-full h-1 bg-slate-200 rounded-full">
                    <div
                      className={`h-1 ${member.color} rounded-full opacity-60`}
                      style={{ width: `${40 + Math.random() * 50}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Glow effect behind card */}
      <div className="absolute -inset-4 bg-sky-500/10 blur-3xl rounded-3xl -z-10" />
    </div>
  )
}
