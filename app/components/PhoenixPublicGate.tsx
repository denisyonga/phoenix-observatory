import React from "react";

import PhoenixPublicMap
    from "./PhoenixPublicMap";

import PhoenixFundingCalls
    from "./PhoenixFundingCalls";

export default function PhoenixPublicGate() {

    return (

        <section className="space-y-10">

            <div className="rounded-xl bg-white p-8 shadow-sm">

                <h1 className="text-3xl font-bold text-slate-900">
                    Phoenix Public Gate
                </h1>

                <p className="mt-3 max-w-3xl text-slate-600">
                    Explore programme information, participating countries,
                    funding opportunities, training and other public resources.
                </p>

            </div>

            <PhoenixPublicMap />

            <PhoenixFundingCalls />

        </section>

    );

}