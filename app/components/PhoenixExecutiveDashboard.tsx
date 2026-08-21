import React from "react";

import { DatasetSummary } from "../types/DatasetSummary";

type Props = {
  summary: DatasetSummary;

  healthy: number;
  good: number;
  warning: number;
  needsAttention: number;
  critical: number;
};

export default function PhoenixExecutiveDashboard({
  summary,
  healthy,
  good,
  warning,
  needsAttention,
  critical,
}: Props) {

  return (

    <div className="rounded-xl border bg-gradient-to-r from-slate-900 to-slate-800 p-6 text-white shadow-lg">

      <h2 className="mb-6 text-3xl font-bold">
        🦅 RIPE Index Executive Overview
      </h2>

      <p className="mb-6 text-slate-300">
        Current reporting cycle summary across participating countries.
      </p>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

        <Metric
          title="Countries in Dataset"
          value={summary.totalCountries}
        />

        <Metric
          title="Countries With Scores"
          value={summary.countriesWithScores}
        />

        <Metric
          title="Average RIPE Score"
          value={summary.averageScore}
        />

        <Metric
          title="Indicators Available"
          value={summary.indicatorsAvailable}
        />

        <Metric
          title="Healthy"
          value={healthy}
        />

        <Metric
          title="Good"
          value={good}
        />

        <Metric
          title="Pending Review"
          value={warning}
        />

        <Metric
          title="Action Required"
          value={needsAttention + critical}
        />

      </div>

    </div>

  );

}

function Metric({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {

  return (

    <div className="rounded-lg bg-white/10 p-6">

      <p className="text-sm text-slate-300">
        {title}
      </p>

      <p className="mt-2 text-2xl font-bold">
        {value}
      </p>

    </div>

  );

}