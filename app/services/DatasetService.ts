import dataset from "../data/ripe.json";

import { Dataset, GeoFeature } from "../types";
import { DatasetSummary } from "../types/DatasetSummary";

class DatasetService {
  private currentDataset: Dataset = dataset as Dataset;

  getDataset(): Dataset {
    return this.currentDataset;
  }

  getCountries() {
    return this.currentDataset.countries;
  }

  getCountryByIso3(iso3: string) {
    return this.currentDataset.countries.find(
      (country) => country.iso3 === iso3
    );
  }

  getDatasetSummary(): DatasetSummary {

    const countries =
      this.currentDataset.countries;

    const countriesWithScores =
      countries.filter(
        (country) =>
          typeof country.overallScore === "number"
      ).length;

    const totalScore =
      countries.reduce(
        (sum, country) =>
          sum + country.overallScore,
        0
      );

    const averageScore =
      countries.length > 0
        ? Math.round(totalScore / countries.length)
        : 0;

    const indicatorsAvailable =
      new Set(
        countries.flatMap(
          (country) =>
            country.indicators.map(
              (indicator) => indicator.id
            )
        )
      ).size;

    return {

      totalCountries:
        countries.length,

      countriesWithScores,

      averageScore,

      indicatorsAvailable,

    };

  }

  async getGeoFeatures(): Promise<GeoFeature[]> {
    const response = await fetch("/maps/europe.geojson");

    const geoJson = await response.json();
    console.log(geoJson.features[0].properties);

    return geoJson.features;
  }
}

export default new DatasetService();