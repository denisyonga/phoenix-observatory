"use client";

import React from "react";

import PhoenixFundingService
    from "../services/PhoenixFundingService";

import {
    PhoenixFundingCall
} from "../types/PhoenixFundingCall";

interface PhoenixFundingCallCardProps {
    call: PhoenixFundingCall;
}

export default function PhoenixFundingCallCard({
    call,
}: PhoenixFundingCallCardProps) {

    const status =
        PhoenixFundingService.getFundingCallStatus(call);

    const statusStyles =
        status === "open"
            ? "bg-green-100 text-green-700"
            : status === "upcoming"
                ? "bg-sky-100 text-sky-700"
                : "bg-slate-100 text-slate-600";

    const statusLabel =
        status === "open"
            ? "OPEN"
            : status === "upcoming"
                ? "UPCOMING"
                : "CLOSED";

    const canApply =
        status === "open" &&
        call.applicationEnabled;

    const formatNumber = (value: number) =>
        new Intl.NumberFormat("en-US").format(value);

    const formatDate = (value: string) =>
        new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            timeZone: "UTC",
        }).format(new Date(value));

    return (

        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-start justify-between gap-4">

                <div>

                    <h3 className="text-xl font-bold text-slate-900">
                        {call.title}
                    </h3>

                    {call.description && (
                        <p className="mt-2 text-slate-600">
                            {call.description}
                        </p>
                    )}

                </div>

                <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles}`}
                >
                    {statusLabel}
                </span>

            </div>

            <div className="mt-5 space-y-2 text-sm text-slate-600">

                <p>
                    <strong>🌍 Countries:</strong>{" "}
                    {call.targetCountries.join(", ")}
                </p>

                {call.fundingAmount !== undefined && (
                    <p>
                        <strong>💰 Funding:</strong>{" "}
                        {call.currency ?? ""}
                        {" "}
                        {formatNumber(call.fundingAmount)}
                    </p>
                )}

                <p>
                    <strong>📅 Opens:</strong>{" "}
                    {formatDate(call.opensAt)}
                </p>

                <p>
                    <strong>⏳ Closes:</strong>{" "}
                    {formatDate(call.closesAt)}
                </p>

            </div>

            <div className="mt-6 border-t border-slate-100 pt-5">

                {canApply ? (

                    <button
                        type="button"
                        className="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
                    >
                        APPLY
                    </button>

                ) : status === "closed" ? (

                    <button
                        type="button"
                        disabled
                        className="cursor-not-allowed rounded-lg bg-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-500"
                    >
                        CLOSED
                    </button>

                ) : (

                    <span className="text-sm font-medium text-slate-500">
                        Applications are not currently open.
                    </span>

                )}

            </div>

        </article>

    );

}