"use client";

import React from "react";

import PhoenixFundingService
    from "../services/PhoenixFundingService";

import PhoenixFundingCallCard
    from "./PhoenixFundingCallCard";

export default function PhoenixFundingCalls() {

    const fundingCalls =
        PhoenixFundingService.getFundingCalls();

    return (

        <section className="space-y-6">

            <div>

                <h2 className="text-2xl font-bold text-slate-900">
                    Funding & Opportunities
                </h2>

                <p className="mt-2 text-slate-600">
                    Explore current and upcoming programme opportunities.
                </p>

            </div>

            <div className="grid gap-6 lg:grid-cols-2">

                {fundingCalls.map((call) => (

                    <PhoenixFundingCallCard
                        key={call.id}
                        call={call}
                    />

                ))}

            </div>

        </section>

    );

}