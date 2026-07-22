export default function RegionalIntelligenceBoard() {
    return (
      <div className="rounded-xl border bg-white p-6 shadow">
  
        <h2 className="text-2xl font-bold">
          🌍 Regional Intelligence
        </h2>
  
        <p className="mt-2 text-slate-500">
          Operational performance across programme regions.
        </p>
  
        <div className="mt-6 space-y-5">
  
          <RegionCard
            region="Central Europe"
            score={94}
            reporting="5 / 5"
            status="Operational"
            colour="green"
          />
  
          <RegionCard
            region="Northern Europe"
            score={91}
            reporting="4 / 4"
            status="Operational"
            colour="green"
          />
  
          <RegionCard
            region="Southern Europe"
            score={78}
            reporting="4 / 6"
            status="Monitoring Recommended"
            colour="yellow"
          />
  
          <RegionCard
            region="South-Eastern Europe"
            score={65}
            reporting="3 / 5"
            status="Executive Attention"
            colour="red"
          />
  
        </div>
  
      </div>
    );
  }
  
  type Props = {
    region: string;
    score: number;
    reporting: string;
    status: string;
    colour: "green" | "yellow" | "red";
  };
  
  function RegionCard({
    region,
    score,
    reporting,
    status,
    colour,
  }: Props) {
  
    const barColour =
      colour === "green"
        ? "bg-green-500"
        : colour === "yellow"
        ? "bg-yellow-500"
        : "bg-red-500";
  
    return (
  
      <div className="rounded-lg border bg-slate-50 p-5">
  
        <div className="flex items-center justify-between">
  
          <h3 className="text-lg font-bold">
  
            {region}
  
          </h3>
  
          <span className="font-semibold">
  
            {status}
  
          </span>
  
        </div>
  
        <div className="mt-4">
  
          <p className="text-sm text-slate-500">
  
            Operational Score
  
          </p>
  
          <p className="text-3xl font-bold">
  
            {score}
  
          </p>
  
        </div>
  
        <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">
  
          <div
            className={`h-full ${barColour}`}
            style={{
              width: `${score}%`,
            }}
          />
  
        </div>
  
        <div className="mt-4 flex justify-between text-sm">
  
          <span>
  
            Countries Reporting
  
          </span>
  
          <span className="font-semibold">
  
            {reporting}
  
          </span>
  
        </div>
  
      </div>
  
    );
  }