"use client";

import React from "react";

import MapLegend from "./MapLegend";
import InteractiveMap from "./InteractiveMap";

export default function PhoenixExecutiveWorkspace() {

  return (

    <section className="space-y-6">

      <MapLegend />

      <InteractiveMap />

    </section>

  );

}