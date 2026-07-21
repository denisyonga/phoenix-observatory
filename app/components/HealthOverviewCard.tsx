import { calculateHealthScore } from "../utils/calculateHealthScore";
type NetworkData = {
    latency: number;
    packetLoss: string;
    ipv4: string;
    ipv6: string;
  };
  
  type AtlasData = {
    probes: number;
    online: number;
    anchors: number;
    measurements: number;
  };
  
  type Props = {
    country?: string;
    networkData?: NetworkData;
    atlasData?: AtlasData;
  };
  
  export default function HealthOverviewCard({
    country,
    networkData,
    atlasData,
  }: Props) {
  
    if (!country || !networkData || !atlasData) {
      return (
        <div className="rounded-lg border bg-white p-6 shadow">
          <h2 className="mb-4 text-2xl font-bold">
          Country Assessment
          </h2>
  
          <div className="py-8 text-center text-slate-500">
            Select a country to begin.
          </div>
        </div>
      );
    }

    const healthScore = calculateHealthScore(
      networkData.latency,
      parseFloat(networkData.packetLoss),
      atlasData.online,
      atlasData.probes

    );

    const availability =
      (atlasData.online / atlasData.probes) * 100;

      let operationalStatus = "Validated";

        if (parseFloat(networkData.packetLoss) >= 1) {
         operationalStatus = "Critical";
      } else if (
        networkData.latency > 50 ||
        availability < 80
      ) {
  operationalStatus = "Requires Follow-up";
      } else if (
        parseFloat(networkData.packetLoss) > 0.3
      ) {
        operationalStatus = "Good";
      }

    return (
      <div className="rounded-lg border bg-gradient-to-br from-blue-50 to-white p-6 shadow">
  
        <h2 className="text-2xl font-bold">
          Country Assessment
        </h2>
  
        <div className="mt-3">
          <p className="text-3xl font-bold text-slate-800">
            {country}
          </p>

  <p className="text-sm uppercase tracking-wide text-slate-500">
    Country Operational Assessment
  </p>
</div>
  
        <div className="mt-6 rounded-xl bg-white p-5 shadow">

        <p className="text-sm uppercase tracking-wide text-slate-500">
            Overall Assessment
        </p>
  
          <p className="mt-3 text-3xl font-bold">
          {healthScore >= 90
            ?"🟢 Excellent"
            : healthScore >= 75
            ? "🟡 Stable"
            : "🔴 Needs Attention"}
          </p>
  
          <p className="mt-3 text-5xl font-extrabold text-blue-600">
            {healthScore}
          </p>
  
          <p className="text-sm font-medium text-slate-500">
            Operational Score /100
          </p>
  
        </div>

      <div className="mt-4 rounded-lg border bg-slate-50 p-4">

  <p className="text-sm text-slate-500">
    Reporting Status
  </p>

  <div className="mt-4 rounded-lg border bg-slate-50 p-4">

  <p className="text-sm text-slate-500">
    Confidence Level
  </p>

  <p className="mt-2 text-2xl font-bold text-green-600">
    High
  </p>

  </div>

  <p className="mt-2 text-2xl font-bold">
    {operationalStatus}
  </p>

</div>

    <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">

  <div
    className={`h-full transition-all duration-700 ${
      healthScore >= 90
        ? "bg-green-500"
        : healthScore >= 75
        ? "bg-yellow-500"
        : "bg-red-500"
    }`}
    style={{
      width: `${healthScore}%`,
    }}
  />

    </div>

    <div className="mt-6 grid grid-cols-3 gap-3">

  <div className="rounded-lg border bg-slate-50 p-4 text-center">

    <p className="text-xs text-slate-500">
    ⚡ Network Responsiveness
    </p>

    <p className="mt-2 text-xl font-bold">
      {networkData.latency} ms
    </p>

  </div>

  <div className="rounded-lg border bg-slate-50 p-4 text-center">

    <p className="text-xs text-slate-500">
      📡 Active RIPE Atlas Probes
    </p>

    <p className="mt-2 text-xl font-bold">
      {atlasData.online}/{atlasData.probes}
    </p>

  </div>

  <div className="rounded-lg border bg-slate-50 p-4 text-center">

    <p className="text-xs text-slate-500">
      🌐 IPv6 Reachability
    </p>

    <p className="mt-2 text-lg font-bold">
      {networkData.ipv6 === "Reachable"
        ? "Available"
        : "Unavailable"}
    </p>

  </div>

</div>
  
      </div>
    );
  }