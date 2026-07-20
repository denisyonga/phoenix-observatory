"use client";

import { useEffect, useState } from "react";
import CountryInfoPanel from "./CountryInfoPanel";
import { mockNetworkData } from "./data/mockNetworkData";
import { mockAtlasData } from "./data/mockAtlasData";
import NetworkStatusCard from "./NetworkStatusCard";
import HealthOverviewCard from "./HealthOverviewCard";
import AtlasStatusCard from "./AtlasStatusCard";
import { mockActivityData } from "./data/mockActivityData";
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
import CountryViewService from "../services/CountryViewService";
import { CountryViewModel } from "../types";
import DatasetService from "../services/DatasetService";
import { GeoFeature } from "../types/geoFeature";
import CountryStatusService from "../services/CountryStatusService";

export default function InteractiveMap() {
  const [hovered, setHovered] = useState("");
  const [selected, setSelected] = useState("");
  const [search, setSearch] = useState("");
  const [geoFeatures, setGeoFeatures] =
    useState<GeoFeature[]>([]);
  const [countryViews, setCountryViews] =
    useState<CountryViewModel[]>([]);
  const selectedCountryView = countryViews.find(
    (view) => view.country.name === selected
);

  const filteredCountryViews = countryViews.filter((view) =>
    view.country.name.toLowerCase().includes(search.toLowerCase())
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
        ? mockActivityData[selected as keyof typeof mockActivityData]
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

  const healthy = countryViews.filter(
    view => CountryStatusService.getStatus(view) === "Healthy"
  ).length;
  
  const good = countryViews.filter(
    view => CountryStatusService.getStatus(view) === "Good"
  ).length;
  
  const warning = countryViews.filter(
    view => CountryStatusService.getStatus(view) === "Warning"
  ).length;
  
  const needsAttention = countryViews.filter(
    view => CountryStatusService.getStatus(view) === "Needs Attention"
  ).length;
  
  const critical = countryViews.filter(
    view => CountryStatusService.getStatus(view) === "Critical"
  ).length;

  const averageLatency = 24;

  const averagePacketLoss = 0.3;

  const recommendations =
    networkData && atlasData
      ? generateRecommendations(networkData, atlasData)
      : undefined;

      function getCountryColor(view?: CountryViewModel): string {
        if (!view) {
          // Country exists on the map but has no RIPE data
          return "#e5e7eb";
        }
      
        const data =
        mockNetworkData[
        view.country.name as keyof typeof mockNetworkData
        ];

const packetLoss = parseFloat(data.packetLoss);
      
        if (!data) {
          return "#e5e7eb";
        }
      
        // Temporary demo rules
        if (packetLoss >= 1) return "#dc2626";      // Red
        if (packetLoss >= 0.5) return "#f59e0b";    // Orange
        if (packetLoss >= 0.2) return "#eab308";    // Yellow
      
        return "#22c55e"; // Green
      }

      useEffect(() => {
        async function initialize() {

          console.log("Loading GeoJSON...");
        
          const features =
            await DatasetService.getGeoFeatures();

          setGeoFeatures(features);

          const views =
            await CountryViewService.getCountryViews();

          setCountryViews(views);
        
        }
      
        initialize();
      }, []);;

  return (

    <div className="p-8">

      <PhoenixHeader
        dataset="RIPE_July.csv"
        status="Operational"
        countries={countryViews.length}
        updated="Today 10:15 UTC"
      />
        <div className="mt-6 mb-6">

        </div>

        <EnvironmentBanner />

<div className="mt-6 mb-8">

<PhoenixExecutiveDashboard
  countriesLoaded={countriesLoaded}
  healthy={healthy}
  good={good}
  warning={warning}
  needsAttention={needsAttention}
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
              {hovered || "Participating Countries"}
            </h2>

            <input
              type="text"
              placeholder="🔍 Search participating country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mb-4 w-full rounded-lg border border-slate-400 p-3 shadow-sm focus:border-blue-500 focus:outline-none"
            />
            {/* SEARCH RESULTS */}

            {search && (
              <div className="mb-4 rounded-lg border bg-white shadow">
                {filteredCountryViews.slice(0, 8).map((view) => (
                  <div
                  key={view.country.iso3}
                    className="cursor-pointer border-b p-3 hover:bg-blue-50"
                    onClick={() => {
                      setSelected(view.country.name)
                      setSearch("");
                    }}
                  >
                    {view.country.name}
                  </div>
                ))}
              </div>
            )}
            <p className="mb-4 text-lg text-slate-600">
              {selected
                ? `📍 Selected Country: ${selected}`
                : "🌍 Select a participating country to view RIPE indicators"}
            </p>

            <div className="rounded-xl bg-white p-4 shadow-lg border">

              <svg
                viewBox="0 0 900 700"
                className="w-full"
              >
                {geoFeatures.map((geoFeature, index) => {

                  const view = countryViews.find(
                  (v) => v.country.iso3 === geoFeature.properties.ISO3
                  );

                  const geometry = geoFeature.geometry;

                  if (view) {
                    console.log(
                      geoFeature.properties.NAME,
                      geoFeature.properties.ISO3,
                      view.country.iso3
                    );
                  }

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
                            selected === geoFeature.properties.NAME
                              ? "#2563eb"
                              : view
                                ? CountryStatusService.getColor(view)
                                : "#e5e7eb"
                          }
                          stroke={hovered === geoFeature.properties.NAME ? "#2563eb" : "#cbd5e1"}
                          strokeWidth={hovered === geoFeature.properties.NAME ? 2 : 0.5}
                          onMouseEnter={() => setHovered(geoFeature.properties.NAME)}
                          onMouseLeave={() => setHovered("")}
                          onClick={() => setSelected(geoFeature.properties.NAME)}
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
              selectedCountry={selectedCountryView?.geometry}
            />

            <AtlasStatusCard
              atlasData={atlasData}
            />

                </div>
              </div>
              </div>
            
              );
}
