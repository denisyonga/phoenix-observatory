import React from "react";

import { Dataset } from "../types";

type Props = {
  dataset: Dataset;
};

export default function DatasetSummaryCard({
  dataset,
}: Props) {

  const countriesWithScores =
    dataset.countries.filter(
      (country) =>
        typeof country.overallScore === "number"
    ).length;

  const totalScore =
    dataset.countries.reduce(
      (sum, country) =>
        sum + country.overallScore,
      0
    );

  const averageScore =
    dataset.countries.length > 0
      ? Math.round(
          totalScore / dataset.countries.length
        )
      : 0;

  const indicatorsAvailable =
    new Set(
      dataset.countries.flatMap(
        (country) =>
          country.indicators.map(
            (indicator) => indicator.id
          )
      )
    ).size;

  return (

    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

      <div>

        <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
          Current Dataset
        </p>

        <h2 className="mt-2 text-2xl font-bold text-slate-900">
          {dataset.title}
        </h2>

        <p className="mt-2 text-slate-600">
          {dataset.description}
        </p>

      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">

        <Info
          label="Dataset ID"
          value={dataset.id}
        />

        <Info
          label="Version"
          value={dataset.version}
        />

        <Info
          label="Reporting Year"
          value={dataset.year}
        />

        <Info
          label="Source"
          value={dataset.source}
        />

      </div>

      <div className="mt-6 border-t border-slate-100 pt-6">

        <h3 className="text-lg font-semibold text-slate-800">
          Dataset Coverage
        </h3>

        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">

          <Metric
            label="Countries"
            value={dataset.countries.length}
          />

          <Metric
            label="With Scores"
            value={countriesWithScores}
          />

          <Metric
            label="Average Score"
            value={averageScore}
          />

          <Metric
            label="Indicators"
            value={indicatorsAvailable}
          />

        </div>

      </div>

    </section>

  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {

  return (

    <div className="rounded-lg bg-slate-50 p-4">

      <p className="text-sm text-slate-500">
        {label}
      </p>

      <p className="mt-1 font-semibold text-slate-800">
        {value}
      </p>

    </div>

  );

}

function Metric({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {

  return (

    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">

      <p className="text-sm text-slate-500">
        {label}
      </p>

      <p className="mt-2 text-2xl font-bold text-slate-900">
        {value}
      </p>

    </div>

  );

}