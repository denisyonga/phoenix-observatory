type Activity = {
    id: number;
    action: string;
    time: string;
    type: string;
  };
  
  type Props = {
    activity: Activity[];
  };
  
  export default function ActivityFeedCard({
    activity,
  }: Props) {
  
    return (
  
      <div className="rounded-xl border bg-white p-6 shadow">
  
        <h2 className="mb-5 text-2xl font-bold">
  
          📜 Activity Feed
  
        </h2>
  
        <div className="space-y-4">
  
          {activity.map((item) => (
  
        <div
          key={item.id}
  className={`border-l-4 pl-4 ${
    item.type === "success"
      ? "border-green-500"
      : item.type === "warning"
      ? "border-yellow-500"
      : item.type === "error"
      ? "border-red-500"
      : "border-blue-500"
  }`}
>
  
              <p className="font-semibold">
  
                {item.action}
  
              </p>
  
              <p className="text-sm text-slate-500">
  
                {item.time}
  
              </p>
  
            </div>
  
          ))}
  
        </div>
  
      </div>
  
    );
  
  }