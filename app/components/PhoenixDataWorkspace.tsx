"use client";

import React from "react";

import DatasetService from "../services/DatasetService";
import DatasetSummaryCard from "./DatasetSummaryCard";

export default function PhoenixDataWorkspace() {

  const dataset =
    DatasetService.getDataset();

  return (

    <section className="space-y-8">

      <div className="rounded-xl bg-white p-8 shadow-sm">

        <div className="space-y-4">

          <div className="text-5xl">
            📥
          </div>

          <h2 className="text-3xl font-bold text-slate-900">
            Data Centre
          </h2>

          <p className="text-lg leading-8 text-slate-600">

            Welcome to the data management hub of Phoenix.

            This workspace manages data collection,
            submissions, validation workflows,
            quality assurance and publication readiness
            across participating countries.

          </p>

        </div>

      </div>

      <DatasetSummaryCard
        dataset={dataset}
      />

      <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6">

        <h3 className="text-lg font-semibold text-slate-800">
          Coming Soon
        </h3>

        <ul className="mt-4 space-y-2 text-slate-600">

          <li>📥 Dataset Submission Portal</li>
          <li>✔ Validation Queue</li>
          <li>📑 Metadata Management</li>
          <li>🗂 Version Control</li>
          <li>🔎 Quality Assurance</li>
          <li>🚀 Publication Pipeline</li>

        </ul>

      </div>

    </section>

  );

}