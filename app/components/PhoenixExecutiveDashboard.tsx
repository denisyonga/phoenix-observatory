type Props = {
  countriesLoaded: number;
  healthy: number;
  warning: number;
  critical: number;
  averageLatency: number;
  averagePacketLoss: number;
};

export default function PhoenixExecutiveDashboard({
countriesLoaded,
healthy,
warning,
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
        title="Countries Loaded"
        value={countriesLoaded}
      />

      <Metric
        title="Healthy"
        value={healthy}
      />

      <Metric
        title="Warning"
        value={warning}
      />

      <Metric
        title="Critical"
        value={critical}
      />

      <Metric
        title="Avg Latency"
        value={`${averageLatency} ms`}
      />

      <Metric
        title="Avg Packet Loss"
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