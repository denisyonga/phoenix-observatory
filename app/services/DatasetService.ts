import dataset from "../data/ripe.json";
import { Dataset } from "../types";

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
      country => country.iso3 === iso3
    );
  }
}

export default new DatasetService();