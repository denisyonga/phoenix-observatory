"use client";

import React from "react";

export default function PhoenixAdministrationWorkspace() {

  return (

    <section className="rounded-xl bg-white p-8 shadow-sm">

      <div className="space-y-4">

        <div className="text-5xl">

          ⚙

        </div>

        <h2 className="text-3xl font-bold text-slate-900">

          Administration Centre

        </h2>

        <p className="text-lg leading-8 text-slate-600">

          Welcome to the governance and administration
          workspace.

          This department manages users,
          permissions,
          organisational settings,
          security
          and overall platform administration.

        </p>

      </div>

      <div className="mt-8 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6">

        <h3 className="text-lg font-semibold">

          Coming Soon

        </h3>

        <ul className="mt-4 space-y-2 text-slate-600">

          <li>👥 User Management</li>

          <li>🔐 Roles & Permissions</li>

          <li>🏢 Organisation Settings</li>

          <li>🛡 Security Centre</li>

          <li>📝 Audit Logs</li>

          <li>⚙ System Configuration</li>

        </ul>

      </div>

    </section>

  );

}