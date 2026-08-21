export type PhoenixFundingCallStatus =
    | "upcoming"
    | "open"
    | "closed";

export interface PhoenixFundingCall {
    id: number;

    // Identity
    title: string;
    description?: string;

    // Availability
    opensAt: string;
    closesAt: string;

    // Eligibility
    targetCountries: string[];

    // Funding
    fundingAmount?: number;
    currency?: string;

    // Application
    applicationEnabled: boolean;
}