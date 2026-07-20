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

      🦅 Phoenix Executive Dashboard

    </h2>

    <div className="grid grid-cols-3 gap-6">

      <Metric
        title="Countries Reporting"
        value={countriesLoaded}
      />

      <Metric
        title="Healthy Countries"
        value={healthy}
      />

      <Metric
        title="Good Standing"
        value={good}
      />

      <Metric
        title="Needs Review"
        value={warning}
      />

      <Metric
        title="Needs Attention"
        value={needsAttention}
      />

      <Metric
        title="Critical Issues"
        value={critical}
      />

      <Metric
        title="RIPE Index Operational Indicators"
        value={`${averageLatency} ms`}
      />

      <Metric
        title="Submission Processing Time"
        value={`${averagePacketLoss}%`}
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