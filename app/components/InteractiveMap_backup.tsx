"use client";

import { useEffect, useState } from "react";

export default function InteractiveMap() {
  const [country, setCountry] = useState<any>(null);

  useEffect(() => {
    fetch("/maps/europe.geojson")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.features[0]);
        setCountry(data.features[0]);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h2 className="mb-6 text-3xl font-bold">
        {country?.properties.NAME ?? "Loading..."}
      </h2>

      <pre className="max-w-4xl overflow-auto rounded bg-slate-900 p-6 text-sm text-green-300">
        {country
          ? JSON.stringify(country.geometry, null, 2)
          : "Loading geometry..."}
      </pre>
    </div>
  );
}