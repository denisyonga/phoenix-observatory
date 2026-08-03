"use client";

import React from "react";

interface PhoenixCountryOperationsPanelProps {
    selectedCountry: string;
}

export default function PhoenixCountryOperationsPanel({
    selectedCountry,
}: PhoenixCountryOperationsPanelProps) {
  return (
    <section className="rounded-xl bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold">
        🌍 Country Operations
      </h3>
    </section>
  );
}