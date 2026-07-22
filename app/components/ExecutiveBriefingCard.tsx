import { generateExecutiveNarrative } from "../utils/generateExecutiveNarrative";
type Props = {
  programmeStatus: string;
  reportingCycle: string;

  countriesReporting: number;
  totalCountries: number;
  pendingReview: number;
  criticalIssues: number;
};

  const hour = new Date().getHours();

    let greeting = "Good morning ☀";

    if (hour >= 12) {
        greeting = "Good afternoon 🌤";
    }

    if (hour >= 18) {
        greeting = "Good evening 🌙";
    }
  
    export default function ExecutiveBriefingCard({
      programmeStatus,
      reportingCycle,
      countriesReporting,
      totalCountries,
      pendingReview,
      criticalIssues,
  }: Props) {

    const executiveNarrative =
    generateExecutiveNarrative(
        countriesReporting,
        totalCountries,
        pendingReview,
        criticalIssues
    );
    return (
      <div className="rounded-xl border bg-gradient-to-r from-sky-50 to-white p-6 shadow">
  
    <h2 className="text-2xl font-bold">
        🦅 Executive Briefing
    </h2>

    <p className="mt-2 text-lg font-semibold text-slate-700">
    {greeting}
    </p>

    <p className="mt-5 rounded-lg border border-blue-100 bg-blue-50 p-5 leading-7 text-slate-700">

      {executiveNarrative}

    </p>

<p className="mt-2 text-slate-500">
  Operational intelligence summary for programme leadership.
</p>
  
        <div className="mt-6 space-y-5">
  
          <div className="rounded-lg border bg-white p-5">
  
            <h3 className="font-semibold text-slate-800">
              Programme Status
            </h3>
  
            <p className="mt-2 text-lg">
              🟢 {programmeStatus}
            </p>
  
          </div>
  
          <div className="rounded-lg border bg-white p-5">
  
            <h3 className="font-semibold text-slate-800">
              Reporting Cycle
            </h3>
  
            <p className="mt-2">
              {reportingCycle}
            </p>
  
          </div>
  
          <div className="rounded-lg border bg-white p-5">
  
            <h3 className="font-semibold text-slate-800">
              Regional Highlights
            </h3>
  
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
  
              <li>
                Central Europe has completed all scheduled submissions.
              </li>
  
              <li>
                Northern Europe continues to maintain excellent operational health.
              </li>
  
              <li>
                Southern Europe has one dataset pending review.
              </li>
  
              <li>
                South-Eastern Europe requires follow-up before publication.
              </li>
  
            </ul>
  
          </div>
  
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-5">
  
            <h3 className="font-semibold text-blue-900">
                🦅 Phoenix Observation
            </h3>
  
            <p className="mt-3 text-slate-700">
  
                Reporting performance remains stable.

                Current operational indicators suggest that programme
                delivery is progressing according to expectations.
  
            </p>

            <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 p-5">

            <h3 className="font-semibold text-emerald-900">

                Recommended Executive Action

            </h3>

            <p className="mt-3 text-slate-700">

                Continue validation activities,
                monitor pending submissions,
                and prepare validated datasets
                for publication.

  </p>

</div>
  
          </div>
  
        </div>
  
      </div>
    );
  }