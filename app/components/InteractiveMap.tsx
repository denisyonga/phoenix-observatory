"use client";

import { useEffect, useState } from "react";
import CountryInfoPanel from "./CountryInfoPanel";
import { mockNetworkData } from "./data/mockNetworkData";
import { mockAtlasData } from "./data/mockAtlasData";
import NetworkStatusCard from "./NetworkStatusCard";
import HealthOverviewCard from "./HealthOverviewCard";
import AtlasStatusCard from "./AtlasStatusCard";
import { mockHistoryData } from "./data/mockHistoryData";
import HistoryTimelineCard from "./HistoryTimelineCard";
import InsightsCard from "./InsightsCard";
import { generateObservations } from "../insights/generateObservations";
import UploadInboxCard from "./UploadInboxCard";
import { mockUploads } from "../dataInbox/mockUploads";
import ValidationSummaryCard from "./ValidationSummaryCard";
import { mockValidation } from "../dataInbox/mockValidation";
import PhoenixHeader from "./PhoenixHeader";
import RecommendationCard from "./RecommendationCard";
import { generateRecommendations } from "../insights/generateRecommendations";
import PhoenixExecutiveDashboard from "./PhoenixExecutiveDashboard";
import OperationalChartsCard from "./OperationalChartsCard";
import PriorityAlertsCard from "./PriorityAlertsCard";
import { generatePriorityAlerts } from "../insights/generatePriorityAlerts";
import EnvironmentBanner from "./EnvironmentBanner";
import { GeoFeature } from "../types";
import DatasetService from "../services/DatasetService";

export default function InteractiveMap() {
  const [countries, setCountries] = useState<GeoFeature[]>([]);
  const [hovered, setHovered] = useState("");
  const [selected, setSelected] = useState("");
  const [search, setSearch] = useState("");
  const selectedCountry = countries.find(
    (country) => country.properties.NAME === selected
  );

  const filteredCountries = countries.filter((country) =>
    country.properties.NAME.toLowerCase().includes(search.toLowerCase())
  );

  const networkData =
    selected && selected in mockNetworkData
      ? mockNetworkData[selected as keyof typeof mockNetworkData]
      : undefined;

  const atlasData =
    selected && selected in mockAtlasData
      ? mockAtlasData[selected as keyof typeof mockAtlasData]
      : undefined;

  const historyData =
    selected
      ? mockHistoryData[selected as keyof typeof mockHistoryData]
      : undefined;

  const observations =
    networkData && atlasData
      ? generateObservations(networkData, atlasData)
      : undefined;

  const priorityAlerts =
    networkData && atlasData
      ? generatePriorityAlerts(networkData, atlasData)
      : undefined;

  const countriesLoaded = Object.keys(mockNetworkData).length;

  const healthy = 4;

  const warning = 1;

  const critical = 0;

  const averageLatency = 24;

  const averagePacketLoss = 0.3;

  const recommendations =
    networkData && atlasData
      ? generateRecommendations(networkData, atlasData)
      : undefined;

      useEffect(() => {
        async function loadMap() {
          const features = await DatasetService.getGeoFeatures();
      
          setCountries(features);
        }
      
        loadMap();
      }, []);

  return (

    <div className="p-8">

      <PhoenixHeader
        dataset="RIPE_July.csv"
        status="Healthy"
        countries={countries.length}
        updated="Today 10:15 UTC"
      />
        <div className="mt-6 mb-6">

        </div>

        <EnvironmentBanner />

<div className="mt-6 mb-8">

  <PhoenixExecutiveDashboard
    countriesLoaded={countriesLoaded}
    healthy={healthy}
    warning={warning}
    critical={critical}
    averageLatency={averageLatency}
    averagePacketLoss={averagePacketLoss}
  />

</div>

<div className="grid grid-cols-3 gap-6">

          {/* MAP SECTION */}
          <div className="col-span-2 space-y-8">

            <div className="mb-8">
              <OperationalChartsCard />
            </div>

            <h2 className="mb-6 text-3xl font-bold">
              {hovered || "European Network Overview"}
            </h2>

            <input
              type="text"
              placeholder="🔍 Search countries..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mb-4 w-full rounded-lg border border-slate-300 p-3 shadow-sm focus:border-blue-500 focus:outline-none"
            />
            {/* SEARCH RESULTS */}

            {search && (
              <div className="mb-4 rounded-lg border bg-white shadow">
                {filteredCountries.slice(0, 8).map((country) => (
                  <div
                    key={country.properties.ISO3}
                    className="cursor-pointer border-b p-3 hover:bg-blue-50"
                    onClick={() => {
                      setSelected(country.properties.NAME);
                      setSearch("");
                    }}
                  >
                    {country.properties.NAME}
                  </div>
                ))}
              </div>
            )}
            <p className="mb-4 text-lg text-slate-600">
              {selected
                ? `📍 Selected Country: ${selected}`
                : "🌍 Click any country to begin exploring"}
            </p>

            <div className="rounded-xl bg-white p-4 shadow-lg border">

              <svg
                viewBox="0 0 900 700"
                className="w-full"
              >
                {countries.map((country, index) => {

                  const geometry = country.geometry;

                  if (geometry.type !== "MultiPolygon") return null;

                  return geometry.coordinates.map(
                    (polygon: any, pIndex: number) => {

                      const ring = polygon[0];

                      const points = ring
                        .map(
                          ([x, y]: number[]) =>
                            `${(x + 30) * 12},${700 - (y - 30) * 12}`
                        )
                        .join(" ");

                      return (
                        <polygon
                          key={`${index}-${pIndex}`}
                          points={points}
                          fill={
                            selected === country.properties.NAME
                              ? "#2563eb"
                              : hovered === country.properties.NAME
                                ? "#93c5fd"
                                : "#e5e7eb"
                          }
                          stroke={hovered === country.properties.NAME ? "#2563eb" : "#dc2626"}
                          strokeWidth={hovered === country.properties.NAME ? 2 : 0.5}
                          onMouseEnter={() => setHovered(country.properties.NAME)}
                          onMouseLeave={() => setHovered("")}
                          onClick={() => setSelected(country.properties.NAME)}
                          className="transition-all duration-200"
                          style={{ cursor: "pointer" }}

                        />
                      );
                    }
                  );
                })}
              </svg>
            </div>

            <div className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-slate-700">
              Operational Timeline
              </h2>

              <HistoryTimelineCard
                history={historyData}
              />

              <div className="mt-8">

                <UploadInboxCard
                  uploads={mockUploads}
                />

              </div>

              <div className="mt-8">

                <ValidationSummaryCard
                  rows={mockValidation.rows}
                  warnings={mockValidation.warnings}
                  errors={mockValidation.errors}
                />

              </div>

            </div>
          </div>

          {/* Information Panel */}

          <div className="sticky top-6 self-start space-y-8">

            <HealthOverviewCard
              country={selected}
              networkData={networkData}
              atlasData={atlasData}
            />

            <InsightsCard
              observations={observations}
            />

            <RecommendationCard
              recommendations={recommendations}
            />

            <CountryInfoPanel
              selectedCountry={selectedCountry}
            />

            <NetworkStatusCard
              networkData={networkData}
            />

            <AtlasStatusCard
              atlasData={atlasData}
            />

                </div>
              </div>
              </div>
            
              );
}
