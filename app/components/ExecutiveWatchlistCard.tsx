type WatchItem = {
    country: string;
    priority: "High" | "Medium" | "Low";
    message: string;
  };
  
  type Props = {
  items: readonly WatchItem[];
};
  
  export default function ExecutiveWatchlistCard({
    items,
  }: Props) {
  
    return (
  
      <div className="rounded-xl border bg-white p-6 shadow">
  
        <h2 className="text-2xl font-bold">
          🚧 Executive Watchlist
        </h2>
  
        <p className="mt-2 text-slate-500">
          Operational items requiring executive awareness.
        </p>
  
        <div className="mt-6 space-y-4">
  
          {items.map((item, index) => (
  
            <div
              key={index}
              className="rounded-lg border bg-slate-50 p-4"
            >
  
              <div className="flex items-center justify-between">
  
                <h3 className="font-semibold">
                  {item.country}
                </h3>
  
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    item.priority === "High"
                      ? "bg-red-100 text-red-700"
                      : item.priority === "Medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {item.priority}
                </span>
  
              </div>
  
              <p className="mt-3 text-slate-700">
                {item.message}
              </p>
  
            </div>
  
          ))}
  
        </div>
  
      </div>
  
    );
  
  }