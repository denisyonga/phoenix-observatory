type Props = {
    alerts?: string[];
  };
  
  export default function PriorityAlertsCard({
    alerts,
  }: Props) {
  
    return (
  
      <div className="rounded-xl border bg-white p-6 shadow">
  
        <h2 className="mb-5 text-2xl font-bold">
  
          🚨 Priority Operational Alerts
  
        </h2>
  
        {!alerts ? (
  
          <div className="py-8 text-center text-slate-500">
  
            Select a country.
  
          </div>
  
        ) : (
  
          <div className="space-y-3">
  
            {alerts.map((alert, index) => (
  
              <div
                key={index}
                className="rounded-lg border-l-4 border-red-500 bg-slate-50 p-3"
              >
  
                {alert}
  
              </div>
  
            ))}
  
          </div>
  
        )}
  
      </div>
  
    );
  
  }