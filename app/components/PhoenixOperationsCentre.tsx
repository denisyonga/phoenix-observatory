"use client";

import React from "react";
import PhoenixExecutiveWorkspace
  from "./PhoenixExecutiveWorkspace";
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

      </PhoenixOperationsCentreHeader>

    </section>

  );

}