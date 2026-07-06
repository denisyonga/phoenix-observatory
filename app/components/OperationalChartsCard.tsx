import {
    latencyTrend,
    packetLossDistribution,
  } from "../charts/mockChartData";
  
  export default function OperationalChartsCard() {
    return (
      <div className="rounded-xl border bg-white p-6 shadow">
  
        <h2 className="mb-6 text-2xl font-bold">
          📊 Operational Trends & Insights
        </h2>
  
        {/* LATENCY */}
  
        <div className="mb-8">
  
          <h3 className="mb-3 text-lg font-semibold">
            Average Latency
          </h3>
  
          <div className="space-y-2">
  
            {latencyTrend.map((item) => (
  
              <div
                key={item.day}
                className="flex items-center gap-4"
              >
  
                <span className="w-12 text-sm font-medium">
                  {item.day}
                </span>
  
                <div className="h-4 flex-1 rounded bg-slate-200">
  
                  <div
                    className="h-4 rounded bg-blue-500"
                    style={{
                      width: `${item.latency * 3}%`,
                    }}
                  />
  
                </div>
  
                <span className="w-12 text-right text-sm">
                  {item.latency} ms
                </span>
  
              </div>
  
            ))}
  
          </div>
  
        </div>
  
        {/* PACKET LOSS */}
  
        <div>
  
          <h3 className="mb-3 text-lg font-semibold">
            Packet Loss
          </h3>
  
          <div className="space-y-2">
  
            {packetLossDistribution.map((item) => (
  
              <div
                key={item.country}
                className="flex justify-between rounded bg-slate-50 p-2"
              >
  
                <span>
  
                  {item.country}
  
                </span>
  
                <span className="font-semibold">
  
                  {item.value}%
  
                </span>
  
              </div>
  
            ))}
  
          </div>
  
        </div>
  
      </div>
    );
  }