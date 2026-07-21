type Props = {
    reportingCycle: string;
    countriesReporting: number;
    totalCountries: number;
    validatedDatasets: number;
    pendingReview: number;
  };
  
  export default function ExecutiveSummaryCard({
    reportingCycle,
    countriesReporting,
    totalCountries,
    validatedDatasets,
    pendingReview,
  }: Props) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow">
  
  <h2 className="mb-2 text-2xl font-bold text-slate-800">
        Operational Executive Summary
        </h2>
  
        <p className="mb-6 text-slate-600">
        Reporting Cycle: July 2026 <span className="font-semibold">{reportingCycle}</span>
        </p>
  
        <div className="rounded-lg bg-slate-50 p-6">

         <p className="text-[15px] text-slate-500 mb-6">
            Reporting Period: <span className="font-semibold text-slate-700">
            July 2026
        </span>
         </p>

        <p className="text-slate-700 leading-7">
             <strong>{countriesReporting}</strong> of <strong>{totalCountries}</strong>
            {" "}participating countries have submitted datasets for the current
            reporting cycle.
        </p>

        <p className="mt-4 text-slate-700 leading-7">
            <strong>{validatedDatasets}</strong>
            {" "}datasets have successfully completed validation and are ready
            for publication.
        </p>

        <p className="mt-4 text-slate-700 leading-7">
            <strong>{pendingReview}</strong>
            {" "}submission(s) require follow-up review before publication.
        </p>

        <hr className="my-8" />

  
        <div className="rounded-lg border border-green-200 bg-green-50 p-6">

<h3 className="text-lg font-semibold text-green-800 mb-4">
  🟢 Overall Assessment
</h3>

<div className="rounded-md bg-white p-4 border border-green-100">

  <p className="font-semibold text-slate-800">
    Programme Status
  </p>

  <p className="mt-1 text-green-700 font-bold">
    On Track
  </p>

</div>

<div className="mt-6">

  <h4 className="font-semibold text-slate-800 mb-3">
    Operational Priorities
  </h4>

  <ul className="space-y-2 text-slate-700">

    <li>✓ Complete validation of outstanding submissions.</li>

    <li>✓ Resolve follow-up observations before publication.</li>

    <li>✓ Continue monitoring RIPE Atlas probe availability.</li>

    <li>✓ Prepare validated indicators for publication.</li>

  </ul>

</div>

</div>
        </div>
  
      </div>
    );
  }