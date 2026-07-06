type NetworkData = {
    latency: number;
    packetLoss: string;
    ipv4: string;
    ipv6: string;
  };
  
  type Props = {
    networkData?: NetworkData;
  };
  
  export default function NetworkStatusCard({
    networkData,
  }: Props) {
    return (
      <div className="rounded-lg border bg-white p-6 shadow">
        <h2 className="mb-4 text-2xl font-bold">
          Network Status
        </h2>
  
        {networkData ? (
          <div className="space-y-4">
  
            <div className="rounded-lg border bg-slate-50 p-4">
              <p className="text-sm text-slate-500">
                Latency
              </p>
  
              <p className="text-xl font-semibold">
                ⚡ {networkData.latency} ms
              </p>
            </div>
  
            <div className="rounded-lg border bg-slate-50 p-4">
              <p className="text-sm text-slate-500">
                Packet Loss
              </p>
  
              <p className="text-xl font-semibold">
                📦 {networkData.packetLoss}%
              </p>
            </div>
  
            <div className="rounded-lg border bg-slate-50 p-4">
              <p className="text-sm text-slate-500">
                IPv4
              </p>
  
              <p className="text-xl font-semibold">
                {networkData.ipv4 === "Reachable"
                  ? "🟢 Reachable"
                  : "🔴 Unreachable"}
              </p>
            </div>
  
            <div className="rounded-lg border bg-slate-50 p-4">
              <p className="text-sm text-slate-500">
                IPv6
              </p>
  
              <p className="text-xl font-semibold">
                {networkData.ipv6 === "Reachable"
                  ? "🟢 Reachable"
                  : "🟡 Unavailable"}
              </p>
            </div>
  
          </div>
        ) : (
          <div className="py-10 text-center text-slate-500">
            Select a country to view network status.
          </div>
        )}
      </div>
    );
  }