import {
    PhoenixFundingCall,
    PhoenixFundingCallStatus,
} from "../types/PhoenixFundingCall";

export default class PhoenixFundingService {

    static getFundingCalls(): PhoenixFundingCall[] {

        return [

            {
                id: 1,

                title:
                    "Community Inclusion Programme 2027",

                description:
                    "Funding opportunity for community-led inclusion initiatives.",

                opensAt:
                    "2026-09-01T00:00:00",

                closesAt:
                    "2026-09-30T23:59:59",

                targetCountries: [
                    "Romania",
                    "Spain",
                ],

                fundingAmount: 50000,

                currency: "EUR",

                applicationEnabled: true,
            },

            {
                id: 2,

                title:
                    "Roma Youth Leadership Training",

                description:
                    "Training opportunity for emerging youth leaders.",

                opensAt:
                    "2026-10-01T00:00:00",

                closesAt:
                    "2026-10-20T23:59:59",

                targetCountries: [
                    "ALL",
                ],

                applicationEnabled: true,
            },

            {
                id: 3,
            
                title:
                    "Evidence & Reporting Training",
            
                description:
                    "Training opportunity on programme evidence and reporting.",
            
                opensAt:
                    "2026-07-01T00:00:00",
            
                closesAt:
                    "2026-07-31T23:59:59",
            
                targetCountries: [
                    "ALL",
                ],
            
                applicationEnabled: false,
            },

        ];

    }

    static getFundingCallStatus(
        call: PhoenixFundingCall
    ): PhoenixFundingCallStatus {

        const now = new Date();

        const opensAt =
            new Date(call.opensAt);

        const closesAt =
            new Date(call.closesAt);

        if (now < opensAt) {
            return "upcoming";
        }

        if (now > closesAt) {
            return "closed";
        }

        return "open";

    }

}