"use client";

import React from "react";

export default function PhoenixOperationsWorkspace() {

  return (

    <section className="rounded-xl bg-white p-8 shadow-sm">

      <div className="space-y-4">

        <div className="text-5xl">

          🌍

        </div>

        <h2 className="text-3xl font-bold text-slate-900">

          Operations Centre

        </h2>

        <p className="text-lg leading-8 text-slate-600">

          Welcome to the operational heart of Phoenix.

          This workspace coordinates programme execution,
          country participation, workflow management,
          validation and publication readiness across the
          RIPE ecosystem.

        </p>

      </div>

      <div className="mt-8 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6">

        <h3 className="text-lg font-semibold text-slate-800">

          Coming Soon

        </h3>

        <ul className="mt-4 space-y-2 text-slate-600">

          <li>✅ Country Workflow Monitor</li>

          <li>🚧 Submission Queue</li>

          <li>🚧 Validation Pipeline</li>

          <li>🚧 Publication Readiness</li>

          <li>🚧 Regional Coordination Board</li>

          <li>🚧 Operational Alerts</li>

        </ul>

      </div>

    </section>

  );

}