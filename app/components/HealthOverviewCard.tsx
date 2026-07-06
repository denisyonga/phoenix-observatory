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
            Phoenix Overview
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
  
    return (
      <div className="rounded-lg border bg-gradient-to-br from-blue-50 to-white p-6 shadow">
  
        <h2 className="text-2xl font-bold">
          Phoenix Overview
        </h2>
  
        <p className="mt-2 text-lg">
          {country}
        </p>
  
        <div className="mt-6 rounded-xl bg-white p-5 shadow">
  
            <p className="text-sm text-slate-500">
            Overall Health Score
            </p>
  
          <p className="mt-2 text-3xl font-bold">
          {healthScore >= 90
            ?"🟢 Excellent"
            : healthScore >= 75
            ? "🟡 Stable"
            : "🔴 Needs Attention"}
          </p>
  
          <p className="mt-3 text-5xl font-extrabold text-blue-600">
            {healthScore}
          </p>
  
          <p className="text-sm text-slate-500">
            /100
          </p>
  
        </div>

        <p className="text-lg font-semibold mt-2">
         {healthScore >= 90
         ? "🟢 Excellent"
         : healthScore >= 75
         ? "🟡 Stable"
         : "🔴 Needs Attention"}
        </p>

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
      ⚡ Latency
    </p>

    <p className="mt-2 text-xl font-bold">
      {networkData.latency} ms
    </p>

  </div>

  <div className="rounded-lg border bg-slate-50 p-4 text-center">

    <p className="text-xs text-slate-500">
      📡 Probes
    </p>

    <p className="mt-2 text-xl font-bold">
      {atlasData.online}/{atlasData.probes}
    </p>

  </div>

  <div className="rounded-lg border bg-slate-50 p-4 text-center">

    <p className="text-xs text-slate-500">
      🌐 IPv6
    </p>

    <p className="mt-2 text-xl font-bold">
      {networkData.ipv6 === "Reachable"
        ? "🟢"
        : "🟡"}
    </p>

  </div>

</div>
  
      </div>
    );
  }