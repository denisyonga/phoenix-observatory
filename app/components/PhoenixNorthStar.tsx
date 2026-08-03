"use client";

import React from "react";

type Props = {

  icon: string;

  title: string;

  value: string;

  subtitle: string;

  colour?: "green" | "amber" | "red" | "blue";

};

export default function PhoenixNorthStar({

  icon,

  title,

  value,

  subtitle,

  colour = "green",

}: Props) {

  const colourStyles = {

    green: {
      ring: "border-green-200",
      glow: "bg-green-50",
      value: "text-green-700",
      dot: "bg-green-500",
    },

    amber: {
      ring: "border-amber-200",
      glow: "bg-amber-50",
      value: "text-amber-700",
      dot: "bg-amber-500",
    },

    red: {
      ring: "border-red-200",
      glow: "bg-red-50",
      value: "text-red-700",
      dot: "bg-red-500",
    },

    blue: {
      ring: "border-sky-200",
      glow: "bg-sky-50",
      value: "text-sky-700",
      dot: "bg-sky-500",
    },

  };

  const style = colourStyles[colour];

  return (

    <section
      className={`rounded-2xl border ${style.ring} ${style.glow} p-8 shadow-sm`}
    >

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">

            🌟 North Star

          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">

            {icon} {title}

          </h2>

          <p className="mt-2 text-slate-500">

            {subtitle}

          </p>

        </div>

        <div
          className={`flex h-16 w-16 items-center justify-center rounded-full ${style.dot}`}
        >

          <span className="text-2xl text-white">

            ★

          </span>

        </div>

      </div>

      <div className="mt-8">

        <p
          className={`text-6xl font-extrabold tracking-tight ${style.value}`}
        >

          {value}

        </p>

      </div>

    </section>

  );

}