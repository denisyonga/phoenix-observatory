type Props = {
    country?: string;
    healthScore: number;
    status: string;
    rows: number;
    warnings: number;
    errors: number;
    observations?: string[];
  };
  
  export default function PhoenixReportCard({
    country,
    healthScore,
    status,
    rows,
    warnings,
    errors,
    observations,
  }: Props) {
    return (
      <div className="rounded-xl border bg-white p-6 shadow">
  
        <h2 className="mb-5 text-2xl font-bold">
          📄 Phoenix Operational Report
        </h2>
  
        <div className="space-y-4">
  
          <div>
            <strong>Country:</strong> {country || "No country selected"}
          </div>
  
          <div>
            <strong>Overall Health:</strong> {healthScore}/100
          </div>
  
          <div>
            <strong>Status:</strong> {status}
          </div>
  
          <div>
            <strong>Rows Imported:</strong> {rows}
          </div>
  
          <div>
            <strong>Warnings:</strong> {warnings}
          </div>
  
          <div>
            <strong>Errors:</strong> {errors}
          </div>
  
          <div>
  
            <strong>Operational Summary</strong>
  
            <ul className="mt-2 list-disc space-y-1 pl-6">
  
              {observations?.map((item, index) => (
  
                <li key={index}>
                  {item}
                </li>
  
              ))}
  
            </ul>
  
          </div>
  
        </div>
  
      </div>
    );
  }