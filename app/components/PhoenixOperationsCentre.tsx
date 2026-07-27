"use client";

import React from "react";
import PhoenixExecutiveWorkspace
  from "./PhoenixExecutiveWorkspace";
import PhoenixOperationsWorkspace
  from "./PhoenixOperationsWorkspace";
import PhoenixAnalyticsWorkspace
  from "./PhoenixAnalyticsWorkspace";
import PhoenixDataWorkspace
  from "./PhoenixDataWorkspace";
import PhoenixAdministrationWorkspace
  from "./PhoenixAdministrationWorkspace";
import PhoenixIntelligenceWorkspace
  from "./PhoenixIntelligenceWorkspace";
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
          <PhoenixExecutiveWorkspace />
        )}

        {activeWorkspace === "operations" && (
        <PhoenixOperationsWorkspace />
        )}

        {activeWorkspace === "analytics" && (
        <PhoenixAnalyticsWorkspace />
        )}

        {activeWorkspace === "data" && (
        <PhoenixDataWorkspace />
        )}

        {activeWorkspace === "administration" && (
        <PhoenixAdministrationWorkspace />
        )}

        {activeWorkspace === "intelligence" && (
        <PhoenixIntelligenceWorkspace />
        )}

      </PhoenixOperationsCentreHeader>

    </section>

  );

}