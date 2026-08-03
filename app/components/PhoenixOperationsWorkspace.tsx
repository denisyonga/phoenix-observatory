"use client";

import React from "react";

import PhoenixOperationsService
    from "../services/PhoenixOperationsService";

import PhoenixOperationsFilter
    from "./PhoenixOperationsFilter";

import PhoenixNorthStar from "./PhoenixNorthStar";
import PhoenixOperationsHealth from "./PhoenixOperationsHealth";
import PhoenixOperationsStatusIndicators from "./PhoenixOperationsStatusIndicators";
import PhoenixOperationsActivityBoard from "./PhoenixOperationsActivityBoard";
import PhoenixCountryOperationsPanel from "./PhoenixCountryOperationsPanel";
import PhoenixOperationalTimeline from "./PhoenixOperationalTimeline";

export default function PhoenixOperationsWorkspace() {

    const countries = PhoenixOperationsService.getCountries();

    const [selectedCountry, setSelectedCountry] =
        React.useState("ALL");

    return (

        <section className="space-y-8">

            <PhoenixNorthStar

                icon="🌍"

                title="Operational Health"

                value="92%"

                subtitle="Healthy programme across participating countries."

                colour="green"

            />

            <PhoenixOperationsFilter
                selectedCountry={selectedCountry}
                onCountryChange={setSelectedCountry}
                countries={countries}
            />

            <PhoenixOperationsHealth

                countriesReporting={18}

                totalCountries={20}

                pendingValidation={3}

                activeAlerts={1}

            />

            <PhoenixOperationsStatusIndicators

                submissions={18}

                totalCountries={20}

                pendingValidation={3}

                publications={15}

                activeAlerts={1}

            />

            <PhoenixOperationsActivityBoard
                selectedCountry={selectedCountry}
            />

            <PhoenixCountryOperationsPanel
                selectedCountry={selectedCountry}
            />

            <PhoenixOperationalTimeline
                selectedCountry={selectedCountry}
            />
        </section>

    );

}