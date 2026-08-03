"use client";

import React from "react";

interface PhoenixOperationsFilterProps {

    selectedCountry: string;

    onCountryChange: (country: string) => void;

    countries: {

        id: number;

        name: string;

        flag: string;

    }[];

}

export default function PhoenixOperationsFilter({

    selectedCountry,

    onCountryChange,

    countries,

}: PhoenixOperationsFilterProps) {

    return (

        <section className="rounded-xl bg-white p-6 shadow-sm">

            <div className="flex items-center justify-between">

                <div>

                    <h3 className="text-lg font-bold text-slate-900">

                        🌍 Operations Filter

                    </h3>

                    <p className="mt-1 text-sm text-slate-500">

                        Filter the entire Operations workspace by country.

                    </p>

                </div>

                <select

                    value={selectedCountry}

                    onChange={(event) =>
                        onCountryChange(event.target.value)
                    }

                    className="rounded-lg border border-slate-300 bg-white px-4 py-2"

                >

                    <option value="ALL">

                        🌍 All Countries

                    </option>

                    {countries.map((country) => (

                        <option

                            key={country.id}

                            value={country.name}

                        >

                            {country.flag} {country.name}

                        </option>

                    ))}

                </select>

            </div>

        </section>

    );

}