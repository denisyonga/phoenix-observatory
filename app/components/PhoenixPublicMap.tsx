"use client";

import React, { useEffect, useState } from "react";

import CountryInfoPanel from "./CountryInfoPanel";
import MapLegend from "./MapLegend";

import CountryViewService
    from "../services/CountryViewService";

import DatasetService
    from "../services/DatasetService";

import { CountryViewModel } from "../types";
import { GeoFeature } from "../types/geoFeature";

export default function PhoenixPublicMap() {

    const [hovered, setHovered] =
        useState("");

    const [selected, setSelected] =
        useState("");

    const [search, setSearch] =
        useState("");

    const [geoFeatures, setGeoFeatures] =
        useState<GeoFeature[]>([]);

    const [countryViews, setCountryViews] =
        useState<CountryViewModel[]>([]);

    useEffect(() => {

        async function initialize() {

            const features =
                await DatasetService.getGeoFeatures();

            setGeoFeatures(features);

            const views =
                await CountryViewService.getCountryViews();

            setCountryViews(views);

        }

        initialize();

    }, []);

    const selectedCountryView =
        countryViews.find(
            (view) =>
                view.country.name === selected
        );

    const selectedRIPECountry =
        selectedCountryView
            ? DatasetService.getCountryByIso3(
                selectedCountryView.country.iso3
            )
            : undefined;

    const filteredCountryViews =
        countryViews.filter((view) =>
            view.country.name
                .toLowerCase()
                .includes(search.toLowerCase())
        );

    return (

        <section className="space-y-6">

            <div>

                <h2 className="text-2xl font-bold text-slate-900">
                    Explore Participating Countries
                </h2>

                <p className="mt-2 text-slate-600">
                    Explore participating countries and available
                    geographic information.
                </p>

            </div>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

                <div className="space-y-4 xl:col-span-2">

                    <input
                        type="text"
                        placeholder="🔍 Search participating country..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                        className="w-full rounded-lg border border-slate-300 bg-white p-3 text-base shadow-sm focus:border-blue-500 focus:outline-none"
                    />

                    {search && (
                        <div className="rounded-lg border bg-white shadow">

                            {filteredCountryViews
                                .slice(0, 8)
                                .map((view) => (

                                    <div
                                        key={view.country.iso3}
                                        className="cursor-pointer border-b p-3 hover:bg-blue-50"
                                        onClick={() => {
                                            setSelected(
                                                view.country.name
                                            );
                                            setSearch("");
                                        }}
                                    >
                                        {view.country.name}
                                    </div>

                                ))}

                        </div>
                    )}

                    <div className="rounded-xl border bg-white p-4 shadow-lg">

                        <div className="mb-3 flex items-center justify-between">

                            <h3 className="font-semibold text-slate-700">
                                🛰 Geographic Selector
                            </h3>

                            <span className="text-sm text-slate-400">
                                {hovered || "Click a country"}
                            </span>

                        </div>

                        <svg
                            viewBox="0 0 900 700"
                            className="h-auto w-full"
                        >

                            {geoFeatures.map(
                                (geoFeature, index) => {

                                    const view =
                                        countryViews.find(
                                            (v) =>
                                                v.country.iso3 ===
                                                geoFeature.properties.ISO3
                                        );

                                    const geometry =
                                        geoFeature.geometry;

                                    if (
                                        geometry.type !==
                                        "MultiPolygon"
                                    ) {
                                        return null;
                                    }

                                    return geometry.coordinates.map(
                                        (
                                            polygon: any,
                                            pIndex: number
                                        ) => {

                                            const ring =
                                                polygon[0];

                                            const points =
                                                ring
                                                    .map(
                                                        (
                                                            [x, y]: number[]
                                                        ) =>
                                                            `${(x + 30) * 12},${700 - (y - 30) * 12}`
                                                    )
                                                    .join(" ");

                                            const isSelected =
                                                selected ===
                                                geoFeature
                                                    .properties
                                                    .NAME;

                                            return (
                                                <polygon
                                                    key={`${index}-${pIndex}`}
                                                    points={points}
                                                    fill={
                                                        isSelected
                                                            ? "#2563eb"
                                                            : view
                                                                ? "#22c55e"
                                                                : "#e5e7eb"
                                                    }
                                                    stroke={
                                                        hovered ===
                                                            geoFeature
                                                                .properties
                                                                .NAME
                                                            ? "#2563eb"
                                                            : "#cbd5e1"
                                                    }
                                                    strokeWidth={
                                                        hovered ===
                                                            geoFeature
                                                                .properties
                                                                .NAME
                                                            ? 2
                                                            : 0.5
                                                    }
                                                    onMouseEnter={() =>
                                                        setHovered(
                                                            geoFeature
                                                                .properties
                                                                .NAME
                                                        )
                                                    }
                                                    onMouseLeave={() =>
                                                        setHovered("")
                                                    }
                                                    onClick={() =>
                                                        setSelected(
                                                            isSelected
                                                                ? ""
                                                                : geoFeature
                                                                    .properties
                                                                    .NAME
                                                        )
                                                    }
                                                    className="transition-all duration-200"
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
                                                />
                                            );

                                        }
                                    );

                                }
                            )}

                        </svg>

                    </div>

                    <MapLegend />

                </div>

                <div>

                    <CountryInfoPanel
                        selectedCountry={
                            selectedCountryView?.geometry
                        }
                        ripeCountry={
                            selectedRIPECountry
                        }
                    />

                </div>

            </div>

        </section>

    );

}