type Props = {
  countriesLoaded: number;
  healthy: number;
  good: number;
  warning: number;
  needsAttention: number;
  critical: number;
  averageLatency: number;
  averagePacketLoss: number;
};

export default function PhoenixExecutiveDashboard({
  countriesLoaded,
  healthy,
  good,
  warning,
  needsAttention,
  critical,
  averageLatency,
  averagePacketLoss,
}: Props) {

return (

  <div className="rounded-xl border bg-gradient-to-r from-slate-900 to-slate-800 p-6 text-white shadow-lg">

    <h2 className="mb-6 text-3xl font-bold">

      🦅 RIPE Index Executive Overview

    </h2>

    <p className="mb-6 text-slate-300">
      Current reporting cycle summary across participating countries.
    </p>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      <Metric
        title="Countries Reporting"
        value={countriesLoaded}
      />

      <Metric
        title="Validated Countries"
        value={healthy}
      />

      <Metric
        title="Fully Reviewed"
        value={good}
      />

      <Metric
        title="Pending Review"
        value={warning}
      />

      <Metric
        title="Action Required"
        value={needsAttention}
      />

      <Metric
        title="Critical Findings"
        value={critical}
      />

      <Metric
        title="Reporting Cycle"
        value="July 2026"
      />

      <Metric
        title="Overall Data Quality"
        value="98%"
      />

    </div>

  </div>

);

}

function Metric({
title,
value,
}: {
title: string;
value: string | number;
}) {

return (

  <div className="rounded-lg bg-white/10 p-6">

    <p className="text-sm text-slate-300">

      {title}

    </p>

    <p className="mt-2 text-2xl font-bold">

      {value}

    </p>

  </div>

);

}