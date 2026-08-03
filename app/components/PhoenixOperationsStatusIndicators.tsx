"use client";

import React from "react";

type Props = {

  submissions: number;

  totalCountries: number;

  pendingValidation: number;

  publications: number;

  activeAlerts: number;

};

export default function PhoenixOperationsStatusIndicators({

  submissions,

  totalCountries,

  pendingValidation,

  publications,

  activeAlerts,

}: Props) {

  const indicators = [

    {
      icon: "🟢",
      label: "Submissions",
      value: `${submissions}/${totalCountries}`,
      colour: "text-green-700",
    },

    {
      icon: "🟡",
      label: "Pending Validation",
      value: pendingValidation,
      colour: "text-amber-600",
    },

    {
      icon: "🔵",
      label: "Publications",
      value: publications,
      colour: "text-sky-700",
    },

    {
      icon: "🔴",
      label: "Critical Alerts",
      value: activeAlerts,
      colour: "text-red-700",
    },

  ];

  return (

    <section className="rounded-xl bg-white p-6 shadow-sm">

      <div className="mb-6">

        <h3 className="text-xl font-bold text-slate-900">

          🚦 Operational Status Indicators

        </h3>

        <p className="mt-2 text-slate-500">

          Live operational indicators across participating countries.

        </p>

      </div>

      <div className="grid gap-4 md:grid-cols-4">

        {indicators.map((indicator) => (

          <div

            key={indicator.label}

            className="rounded-lg border border-slate-200 bg-slate-50 p-5 transition hover:border-sky-300"

          >

            <div className="flex items-center gap-2">

              <span className="text-2xl">

                {indicator.icon}

              </span>

              <p className="text-sm font-medium text-slate-500">

                {indicator.label}

              </p>

            </div>

            <h4
              className={`mt-4 text-3xl font-bold ${indicator.colour}`}
            >

              {indicator.value}

            </h4>

          </div>

        ))}

      </div>

    </section>

  );

}