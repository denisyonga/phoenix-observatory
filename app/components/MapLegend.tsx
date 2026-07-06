export default function MapLegend() {
    return (
      <div className="flex justify-center gap-6 p-4 bg-white shadow m-8 rounded-lg">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
          <span>Good Progress</span>
        </div>
  
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
          <span>Moderate</span>
        </div>
  
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-orange-500"></div>
          <span>Significant Challenges</span>
        </div>
  
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-red-600"></div>
          <span>Critical</span>
        </div>
      </div>
    );
  }