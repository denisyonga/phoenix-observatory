type Props = {
    rows: number;
    warnings: number;
    errors: number;
  };
  
  export default function ValidationSummaryCard({
    rows,
    warnings,
    errors,
  }: Props) {
  
    const score = Math.max(
      0,
      Math.round(
        100 -
        warnings * 5 -
        errors * 20
      )
    );
  
    return (
  
      <div className="rounded-xl border bg-white p-6 shadow">
  
        <h2 className="mb-5 text-2xl font-bold">
          ✅ Data Validation
        </h2>
  
        <div className="space-y-4">
  
          <div className="flex justify-between">
            <span>Rows Imported</span>
            <strong>{rows}</strong>
          </div>
  
          <div className="flex justify-between">
            <span>Warnings</span>
            <strong>{warnings}</strong>
          </div>
  
          <div className="flex justify-between">
            <span>Errors</span>
            <strong>{errors}</strong>
          </div>
  
          <div className="mt-4">
  
            <p className="text-sm text-slate-500">
              Dataset Quality
            </p>
  
            <div className="mt-2 h-3 rounded-full bg-slate-200">
  
              <div
                className="h-full rounded-full bg-green-500"
                style={{
                  width: `${score}%`,
                }}
              />
  
            </div>
  
            <p className="mt-2 text-lg font-bold">
              {score}% Healthy
            </p>
  
          </div>
  
        </div>
  
      </div>
  
    );
  
  }