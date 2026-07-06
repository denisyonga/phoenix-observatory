type Point = {
    time: string;
    latency: number;
  };
  
  type Props = {
    history?: Point[];
  };
  
  export default function HistoryTimelineCard({
    history,
  }: Props) {
  
    return (
  
      <div className="rounded-xl border bg-white p-6 shadow">
  
        <h2 className="mb-4 text-2xl font-bold">
  
          Network Timeline
  
        </h2>
  
        {!history ? (
  
          <div className="py-10 text-center text-slate-500">
  
            Select a country
  
          </div>
  
        ) : (
  
          <div className="space-y-3">
  
            {history.map((item) => (
  
              <div
                key={item.time}
                className="flex justify-between rounded-lg bg-slate-50 p-3"
              >
  
                <span>{item.time}</span>
  
                <span className="font-semibold">
  
                  ⚡ {item.latency} ms
  
                </span>
  
              </div>
  
            ))}
  
          </div>
  
        )}
  
      </div>
  
    );
  
  }