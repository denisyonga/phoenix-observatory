    "use client";

import React from "react";

type Props = {

  countriesReporting: number;

  totalCountries: number;

  pendingValidation: number;

  activeAlerts: number;

};

export default function PhoenixOperationsHealth({

  countriesReporting,

  totalCountries,

  pendingValidation,

  activeAlerts,

}: Props) {

  return (

    <section className="rounded-xl bg-white p-6 shadow-sm">

      <div className="mb-6">

        <h3 className="text-xl font-bold text-slate-900">

          📈 Operational Health

        </h3>

        <p className="mt-2 text-slate-500">

          Current operational indicators across the programme.

        </p>

      </div>

      <div className="grid gap-4 md:grid-cols-4">

        <div className="rounded-lg bg-slate-50 p-4">

          <p className="text-sm text-slate-500">

            Countries Reporting

          </p>

          <h4 className="mt-2 text-3xl font-bold">

            {countriesReporting}

          </h4>

          <p className="text-sm text-slate-400">

            of {totalCountries}

          </p>

        </div>

        <div className="rounded-lg bg-slate-50 p-4">

          <p className="text-sm text-slate-500">

            Pending Validation

          </p>

          <h4 className="mt-2 text-3xl font-bold text-amber-600">

            {pendingValidation}

          </h4>

        </div>

        <div className="rounded-lg bg-slate-50 p-4">

          <p className="text-sm text-slate-500">

            Active Alerts

          </p>

          <h4 className="mt-2 text-3xl font-bold text-red-600">

            {activeAlerts}

          </h4>

        </div>

        <div className="rounded-lg bg-slate-50 p-4">

          <p className="text-sm text-slate-500">

            Programme Status

          </p>

          <h4 className="mt-2 text-2xl font-bold text-green-600">

            Healthy

          </h4>

        </div>

      </div>

    </section>

  );

}