type Props = {
    dataset: string;
    status: string;
    countries: number;
    updated: string;
  };
  
  export default function PhoenixHeader({
    dataset,
    status,
    countries,
    updated,
  }: Props) {
    return (
  
      <div className="mb-8 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-8 text-white shadow-xl">
  
        <h1 className="text-xl font-bold">
  
        🦅 Phoenix Observatory
  
        </h1>
  
        <p className="mt-3 text-slate-300">
  
          Operational Intelligence for the RIPE Index
  
        </p>
  
        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
  
          <div>
  
            <p className="text-xs uppercase text-slate-400">
  
              Active Dataset
  
            </p>
  
            <p className="font-semibold">
  
              {dataset}
  
            </p>
  
          </div>
  
          <div>
  
            <p className="text-xs uppercase text-slate-400">
  
              Platform Status
  
            </p>
  
            <p className="font-semibold text-green-300">
  
              {status}
  
            </p>
  
          </div>
  
          <div>
  
            <p className="text-xs uppercase text-slate-400">
  
              Participating Countries
  
            </p>
  
            <p className="font-semibold">
  
              {countries}
  
            </p>
  
          </div>
  
          <div>
  
            <p className="text-xs uppercase text-slate-400">
  
              Last Updated
  
            </p>
  
            <p className="font-semibold">
  
              {updated}
  
            </p>
  
          </div>
  
        </div>
  
      </div>
  
    );
  }