export default function EnvironmentBanner() {
  return (
    <div className="mb-6 rounded-lg border border-amber-300 bg-amber-50 px-5 py-3 shadow-sm">

      <div className="flex items-center justify-between">

        <div>

          <p className="font-semibold text-amber-900">
            🧪 Demonstration Environment
          </p>

          <p className="text-sm text-amber-800">
            Phoenix Observatory prototype demonstrating operational intelligence for the RIPE Index using representative datasets.
          </p>

        </div>

        <span className="rounded-full bg-amber-200 px-3 py-1 text-xs font-semibold text-amber-900">
          Version 1.0
        </span>

      </div>

    </div>
  );
}