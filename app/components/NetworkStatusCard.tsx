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
          Operational Connectivity
        </h2>
  
        {networkData ? (
          <div className="space-y-4">
  
            <div className="rounded-lg border bg-slate-50 p-4">
              <p className="text-sm text-slate-500">
                Platform Response
              </p>
  
              <p className="text-xl font-semibold">
                ⚡ {networkData.latency} ms
              </p>
            </div>
  
            <div className="rounded-lg border bg-slate-50 p-4">
              <p className="text-sm text-slate-500">
                Submission Integrity
              </p>
  
              <p className="text-xl font-semibold">
                🛡️ {(100 - parseFloat(networkData.packetLoss)).toFixed(1)}%
              </p>
            </div>
  
            <div className="rounded-lg border bg-slate-50 p-4">
              <p className="text-sm text-slate-500">
                Data Exchange
              </p>
  
              <p className="text-xl font-semibold">
                {networkData.ipv4 === "Reachable"
                  ? "🟢 Operational"
                  : "🔴 Unavailable"}
              </p>
            </div>
  
            <div className="rounded-lg border bg-slate-50 p-4">
              <p className="text-sm text-slate-500">
                Monitoring Services
              </p>
  
              <p className="text-xl font-semibold">
                {networkData.ipv6 === "Reachable"
                  ? "🟢 Operational"
                  : "🟡 Limited"}
              </p>
            </div>
  
          </div>
        ) : (
          <div className="py-10 text-center text-slate-500">
            Select a participating country to view operational connectivity.
          </div>
        )}
      </div>
    );
  }