type Props = {
    recommendations?: string[];
  };
  
  export default function RecommendationCard({
    recommendations,
  }: Props) {
  
    return (
  
      <div className="rounded-xl border bg-white p-6 shadow">
  
        <h2 className="mb-4 text-2xl font-bold">
  
        🎯 Recommended Actions
  
        </h2>
  
        {!recommendations ? (
  
          <div className="py-8 text-center text-slate-500">
  
            Select a participating country to view recommended actions.
  
          </div>
  
        ) : (
  
          <ul className="space-y-3">
  
            {recommendations.map((item, index) => (
  
              <li
                key={index}
                className="rounded-lg bg-blue-50 p-3"
              >
  
                ➜ {item}
  
              </li>
  
            ))}
  
          </ul>
  
        )}
  
      </div>
  
    );
  
  }