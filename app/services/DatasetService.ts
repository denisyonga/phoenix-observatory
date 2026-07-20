import dataset from "../data/ripe.json";

import { Dataset, GeoFeature } from "../types";

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

  async getGeoFeatures(): Promise<GeoFeature[]> {
    const response = await fetch("/maps/europe.geojson");

    const geoJson = await response.json();
    console.log(geoJson.features[0].properties);

    return geoJson.features;
  }
}

export default new DatasetService();