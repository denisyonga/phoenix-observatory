type Props = {
    country?: string;
    region?: string;
    healthScore?: number;
    status?: string;
    rank?: number;
    totalCountries?: number;
    lastUpdated?: string;
  };
  
  export default function ExecutiveGeographicFocusCard({
    country,
    region,
    healthScore,
    status,
    rank,
    totalCountries,
    lastUpdated,
  }: Props) {
  
        return (

            <div className="rounded-xl border bg-gradient-to-r from-sky-50 via-white to-slate-50 p-6 shadow">

            <h2 className="text-2xl font-bold">
                🌍 Executive Geographic Focus
            </h2>

            {!country ? (

            <div className="mt-6 rounded-xl bg-sky-50 p-8 text-center">

            <div className="text-5xl">
        🌍
            </div>

            <h3 className="mt-5 text-2xl font-semibold text-slate-800">
                No country selected
            </h3>

            <p className="mt-4 leading-8 text-slate-600">

                Select a participating country from the map to begin
                an executive regional briefing, including operational
                health, programme intelligence and recommended actions.

            </p>

            </div>

        ) : (
            
                    <>
            
            <div className="mt-6 rounded-xl bg-sky-50 p-5">

                <div className="flex flex-wrap items-center justify-between gap-5">

                    <div>

                         <p className="text-3xl font-bold">

                            🇪🇸 {country}

                         </p>

                         <p className="mt-1 text-base text-slate-500">

                            {region}

                        </p>

            </div>

            <div className="mt-4 flex flex-wrap items-center gap-6 text-base font-semibold text-slate-700">

                        <span>
                         🟢 {status}
                         </span>

                        <span>
                         ❤️ {healthScore}/100
                        </span>

                        <span>
                        🏆 #{rank}/{totalCountries}
                        </span>

                        <span>
                        📅 {lastUpdated}
                        </span>

            </div>

    </div>

</div>
            
                        <div className="mt-6 rounded-xl bg-sky-50 p-5">
            
                        <h3 className="font-semibold text-blue-900">
            
                            🦅 Phoenix Observation
            
                        </h3>
            
                        <p className="mt-3 leading-8 text-slate-700">
            
                            {country} continues to demonstrate
                            stable operational performance.
            
                            Current RIPE Atlas measurements
                            remain healthy and validation activities
                            continue according to programme schedule.
            
                            No immediate executive intervention
                            is required.
            
                        </p>
            
                    </div>
            
                    </>
            
                )}
            
            </div>
            
            );
  
  }