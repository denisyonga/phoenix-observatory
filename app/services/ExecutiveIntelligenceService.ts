import { CountryViewModel } from "../types";
import CountryStatusService from "./CountryStatusService";

export type ExecutiveProfile = {
  country: string;
  region: string;
  status: string;
  healthScore: number;
  rank: number;
  totalCountries: number;
  lastUpdated: string;
};

export default class ExecutiveIntelligenceService {

  static getProfile(
    view: CountryViewModel | undefined,
    allCountries: CountryViewModel[]
  ): ExecutiveProfile | undefined {

    if (!view) return undefined;

    const status =
      CountryStatusService.getStatus(view);

    const totalCountries = allCountries.length;

    const healthScore = this.calculateHealth(status);

    const rank =
      this.calculateRank(view, allCountries);

    return {

      country: view.country.name,

      region:
        view.country.region || "Europe",

      status,

      healthScore,

      rank,

      totalCountries,

      lastUpdated: "18 July 2026",

    };
  }

  private static calculateHealth(
    status: string
  ) {

    switch (status) {

      case "Healthy":
        return 98;

      case "Good":
        return 91;

      case "Warning":
        return 74;

      case "Needs Attention":
        return 56;

      case "Critical":
        return 32;

      default:
        return 50;

    }

  }

  private static calculateRank(

    view: CountryViewModel,

    countries: CountryViewModel[]

  ) {

    return (
      countries.findIndex(
        c => c.country.iso3 === view.country.iso3
      ) + 1
    );

  }

}