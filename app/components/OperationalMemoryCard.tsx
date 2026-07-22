export default function OperationalMemoryCard() {
    return (
      <div className="rounded-xl border bg-white p-6 shadow">
  
        <h2 className="text-2xl font-bold">
          🧠 Operational Memory
        </h2>
  
        <p className="mt-2 text-slate-500">
          Learning from previous reporting cycles and operational trends.
        </p>
  
        {/* Yesterday */}
  
        <div className="mt-6 rounded-lg border bg-slate-50 p-5">
  
          <h3 className="font-semibold">
            Compared with Yesterday
          </h3>
  
          <ul className="mt-4 space-y-3 text-slate-700">
  
            <li>
              🟢 Two additional datasets completed validation.
            </li>
  
            <li>
              🟢 Validation backlog reduced by 18%.
            </li>
  
            <li>
              🟡 One participating organisation remains under review.
            </li>
  
          </ul>
  
        </div>
  
        {/* Previous Cycle */}
  
        <div className="mt-5 rounded-lg border bg-slate-50 p-5">
  
          <h3 className="font-semibold">
            Compared with Previous Reporting Cycle
          </h3>
  
          <ul className="mt-4 space-y-3 text-slate-700">
  
            <li>
              📈 Reporting timeliness improved across participating countries.
            </li>
  
            <li>
              🌍 Regional participation remains consistently high.
            </li>
  
          </ul>
  
        </div>
  
        {/* Learning */}
  
        <div className="mt-5 rounded-lg border border-indigo-200 bg-indigo-50 p-5">
  
          <h3 className="font-semibold text-indigo-900">
            🦅 Phoenix Learning
          </h3>
  
          <p className="mt-3 leading-7 text-slate-700">
  
            Historical reporting patterns indicate that
            validation activity consistently increases during
            the final week of each reporting cycle.
  
            Additional reviewer capacity may improve
            publication readiness.
  
          </p>
  
        </div>
  
      </div>
    );
  }