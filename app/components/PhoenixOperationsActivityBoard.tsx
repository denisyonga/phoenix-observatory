"use client";

import React from "react";

import PhoenixOperationsService
    from "../services/PhoenixOperationsService";

interface PhoenixOperationsActivityBoardProps {
    selectedCountry: string;
}

export default function PhoenixOperationsActivityBoard({
    selectedCountry,
}: PhoenixOperationsActivityBoardProps) {

    const activities =
        PhoenixOperationsService.getActivities();
    
        const visibleActivities =
        selectedCountry === "ALL"
            ? activities
            : activities.filter(
                (activity) =>
                    activity.country === selectedCountry
            );

    const countries =
        PhoenixOperationsService.getCountries();

    const useSelector =
        countries.length > 5;

    const country =
        selectedCountry === "ALL"
            ? countries[0]
            : countries.find(
                (country) =>
                    country.name === selectedCountry
            );

    return (

        <section className="mt-8 space-y-8">

            {/* Operational Activity */}

            <section className="rounded-xl bg-white p-6 shadow-sm">

                <div className="mb-6">

                    <h3 className="text-xl font-bold text-slate-900">

                        🌍 Live Operations Feed

                    </h3>

                    <p className="mt-2 text-slate-500">

                        Real-time operational events across participating programme countries.

                    </p>

                </div>

                <div className="space-y-3">

                    {visibleActivities.map((activity) => (
                        <div
                            key={activity.id}
                            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-300"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">{activity.status}</span>

                                    <div>
                                        <h4 className="font-semibold text-slate-900">
                                            {activity.country}
                                        </h4>

                                        <p className="text-slate-600">
                                            {activity.title}
                                        </p>
                                    </div>
                                </div>

                                <span className="text-sm text-slate-500">
                                    {activity.timestamp}
                                </span>
                            </div>

                            <div className="mt-4">
                                <span
                                    className={`rounded-full px-3 py-1 text-xs font-medium ${activity.priority === "high"
                                        ? "bg-red-100 text-red-700"
                                        : activity.priority === "normal"
                                            ? "bg-sky-100 text-sky-700"
                                            : "bg-slate-100 text-slate-600"
                                        }`}
                                >
                                    {activity.priority.toUpperCase()}
                                </span>
                            </div>

                            <div className="my-5 border-t border-slate-100" />

                            <div className="space-y-2 text-sm">
                                <p>
                                    <strong>👤 Owner:</strong> {activity.owner}
                                </p>

                                <p>
                                    <strong>➡ Next Action:</strong> {activity.nextAction}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>

            </section>

            <section className="rounded-xl bg-white p-6 shadow-sm">

                {country && (

                    <section className="mt-8 rounded-xl bg-slate-50 p-6">

                        <h3 className="text-2xl font-bold text-slate-900">

                            {country.flag} {country.name}

                        </h3>

                        <div className="mt-6 space-y-2">

                            <p>

                                <strong>Status:</strong>{" "}

                                {country.status}

                            </p>

                            <p>

                                <strong>Submission:</strong>{" "}

                                {country.submission}

                            </p>

                            <p>

                                <strong>Publication:</strong>{" "}

                                {country.publication}

                            </p>

                        </div>

                        <div className="mt-6 rounded-lg bg-white p-4">

                            <p className="font-semibold text-slate-800">

                                💡 Recommendation

                            </p>

                            <p className="mt-2 text-slate-600">

                                {country.recommendation}

                            </p>

                        </div>

                    </section>

                )}

            </section>

        </section>

    );

}