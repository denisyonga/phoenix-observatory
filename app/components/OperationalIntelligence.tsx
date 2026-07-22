"use client";

import { useState } from "react";

export default function OperationalIntelligence() {
  const [activeTab, setActiveTab] = useState("regional");

  return (
    <div className="rounded-xl border bg-white p-6 shadow">

      <h2 className="text-2xl font-bold">
        🧠 Operational Intelligence
      </h2>

      <p className="mt-2 text-slate-500">
        Executive operational insights across the reporting programme.
      </p>

      {/* =========================
          Navigation Tabs
      ========================== */}

      <div className="mt-6 flex flex-wrap gap-2">

        <button
          onClick={() => setActiveTab("regional")}
          className={`rounded-lg px-4 py-2 transition ${
            activeTab === "regional"
              ? "bg-blue-600 text-white"
              : "bg-slate-100 hover:bg-slate-200"
          }`}
        >
          🌍 Regional
        </button>

        <button
          onClick={() => setActiveTab("countries")}
          className={`rounded-lg px-4 py-2 transition ${
            activeTab === "countries"
              ? "bg-blue-600 text-white"
              : "bg-slate-100 hover:bg-slate-200"
          }`}
        >
          🗺 Countries
        </button>

        <button
          onClick={() => setActiveTab("monitoring")}
          className={`rounded-lg px-4 py-2 transition ${
            activeTab === "monitoring"
              ? "bg-blue-600 text-white"
              : "bg-slate-100 hover:bg-slate-200"
          }`}
        >
          📡 Monitoring
        </button>

        <button
          onClick={() => setActiveTab("validation")}
          className={`rounded-lg px-4 py-2 transition ${
            activeTab === "validation"
              ? "bg-blue-600 text-white"
              : "bg-slate-100 hover:bg-slate-200"
          }`}
        >
          ✅ Validation
        </button>

        <button
          onClick={() => setActiveTab("intelligence")}
          className={`rounded-lg px-4 py-2 transition ${
            activeTab === "intelligence"
              ? "bg-blue-600 text-white"
              : "bg-slate-100 hover:bg-slate-200"
          }`}
        >
          🧠 Intelligence
        </button>

      </div>

      {/* =========================
          Content Area
      ========================== */}

      <div className="mt-8">

        {activeTab === "regional" && (

          <div className="rounded-lg border bg-slate-50 p-6">

            <h3 className="text-xl font-semibold">
              🌍 Regional Overview
            </h3>

            <p className="mt-2 text-slate-600">
              Regional operational reporting will appear here.
            </p>

          </div>

        )}

        {activeTab === "countries" && (

          <div className="rounded-lg border border-dashed p-8 text-center text-slate-500">

            🗺 Country operational view coming soon.

          </div>

        )}

        {activeTab === "monitoring" && (

          <div className="rounded-lg border border-dashed p-8 text-center text-slate-500">

            📡 Monitoring centre coming soon.

          </div>

        )}

        {activeTab === "validation" && (

          <div className="rounded-lg border border-dashed p-8 text-center text-slate-500">

            ✅ Validation workflow coming soon.

          </div>

        )}

        {activeTab === "intelligence" && (

          <div className="rounded-lg border border-dashed p-8 text-center text-slate-500">

            🧠 Operational intelligence engine coming soon.

          </div>

        )}

      </div>

    </div>
  );
}