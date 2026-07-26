"use client";

import React from "react";
import { useState } from "react";

import PhoenixOperationsCentreHeader
  from "./PhoenixOperationsCentreHeader";

export default function PhoenixOperationsCentre() {

  const [

    activeWorkspace,

    setActiveWorkspace,

  ] = useState("executive");

  return (

    <section className="space-y-8">

      <PhoenixOperationsCentreHeader

        activeWorkspace={activeWorkspace}
        onWorkspaceChange={setActiveWorkspace}

      >

         {/* Executive Office */}

        {activeWorkspace === "executive" && (
        <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center">

        <h2 className="text-2xl font-bold">
      
          🦅 Executive Workspace
      
        </h2>
      
        <p className="mt-3 text-slate-500">
      
          Executive Office will be rendered here.
      
        </p>
      
      </div>
        )}

      </PhoenixOperationsCentreHeader>

    </section>

  );

}