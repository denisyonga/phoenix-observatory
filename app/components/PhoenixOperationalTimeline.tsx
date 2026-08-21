"use client";

import React from "react";

import PhoenixOperationsService
    from "../services/PhoenixOperationsService";

import {
    formatOperationalDate,
}
    from "../utils/formatOperationalDate";

interface PhoenixOperationalTimelineProps {
    selectedCountry: string;
}

export default function PhoenixOperationalTimeline({
    selectedCountry,
}: PhoenixOperationalTimelineProps) {

    const timeline =
        PhoenixOperationsService.getOperationalEvents();

    const visibleTimeline =
        selectedCountry === "ALL"
            ? timeline
            : timeline.filter(
                (item) =>
                    item.country === selectedCountry
            );

    return (

        <section className="rounded-xl bg-white p-6 shadow-sm">

            <div className="mb-6">

                <h3 className="text-xl font-bold text-slate-900">

                    🕒 Operational Timeline

                </h3>

                <p className="mt-2 text-slate-500">

                    Upcoming operational milestones across participating programme countries.

                </p>

            </div>

            <div className="space-y-4">

                {visibleTimeline.map((item) => {

                    return (
                        <div
                            key={item.id}

                            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"

                        >

                            <div className="flex items-start justify-between">

                                <div>

                                    <h4 className="text-lg font-bold text-slate-900">

                                        {item.country}

                                    </h4>

                                    <p className="mt-1 text-slate-600">

                                        {item.title}

                                    </p>

                                </div>

                                <span

                                    className={`rounded-full px-3 py-1 text-xs font-medium ${item.priority === "high"
                                        ? "bg-red-100 text-red-700"
                                        : item.priority === "normal"
                                            ? "bg-sky-100 text-sky-700"
                                            : "bg-slate-100 text-slate-600"
                                        }`}

                                >

                                    {(item.priority ?? "normal").toUpperCase()}

                                </span>

                            </div>

                            <div className="mt-5 border-t border-slate-100 pt-4 space-y-2 text-sm">

                                <p>

                                    <strong>👤 Owner:</strong>{" "}

                                    {item.owner}

                                </p>

                                <p>

                                    <strong>🎯 Milestone:</strong>{" "}

                                    {item.title}

                                </p>

                                <p>

                                    <strong>⏳ Due:</strong>{" "}

                                    {item.eventDate
                                        ? formatOperationalDate(item.eventDate)
                                        : "No date"}

                                </p>

                            </div>

                        </div>
                    );
                })}

            </div>

        </section>

    );

}