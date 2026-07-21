type Props = {
  observations?: string[];
};

export default function InsightsCard({
  observations,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow">

      <h2 className="mb-4 text-2xl font-bold">
        💡 Assessment Highlights
      </h2>

      {!observations ? (
        <div className="py-8 text-center text-slate-500">
          Select a participating country to view key findings.
        </div>
      ) : (
        <ul className="space-y-3">
          {observations.map((item, index) => (
            <li
              key={index}
              className="rounded-lg bg-slate-50 p-3"
            >
              {item}
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}