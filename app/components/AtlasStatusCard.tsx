type AtlasData = {
    probes: number;
    online: number;
    anchors: number;
    measurements: number;
  };
  
  type Props = {
    atlasData?: AtlasData;
  };
  
  export default function AtlasStatusCard({
    atlasData,
  }: Props) {
    return (
      <div className="rounded-lg border bg-white p-6 shadow">
  
        <h2 className="mb-4 text-2xl font-bold">
          RIPE Atlas
        </h2>
  
        {atlasData ? (
  
          <div className="space-y-4">
  
            <div className="rounded-lg border bg-slate-50 p-4">
              <p className="text-sm text-slate-500">
                Probes
              </p>
  
              <p className="text-xl font-semibold">
                📡 {atlasData.probes}
              </p>
            </div>
  
            <div className="rounded-lg border bg-slate-50 p-4">
              <p className="text-sm text-slate-500">
                Online
              </p>
  
              <p className="text-xl font-semibold">
                🟢 {atlasData.online}
              </p>
            </div>
  
            <div className="rounded-lg border bg-slate-50 p-4">
              <p className="text-sm text-slate-500">
                Anchors
              </p>
  
              <p className="text-xl font-semibold">
                📍 {atlasData.anchors}
              </p>
            </div>
  
            <div className="rounded-lg border bg-slate-50 p-4">
              <p className="text-sm text-slate-500">
                Measurements
              </p>
  
              <p className="text-xl font-semibold">
                📈 {atlasData.measurements.toLocaleString()}
              </p>
            </div>
  
          </div>
  
        ) : (
  
          <div className="py-10 text-center text-slate-500">
            Select a country to view RIPE Atlas data.
          </div>
  
        )}
  
      </div>
    );
  }