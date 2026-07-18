import DatasetService from "./DatasetService";
import { Country } from "../types";

class CountryService {
  getAll(): Country[] {
    return DatasetService.getCountries();
  }

  getByIso3(iso3: string): Country | undefined {
    return DatasetService.getCountryByIso3(iso3);
  }

  getByName(name: string): Country | undefined {
    return this.getAll().find(
      country => country.name.toLowerCase() === name.toLowerCase()
    );
  }

  getByRegion(region: string): Country[] {
    return this.getAll().filter(
      country => country.region === region
    );
  }
}

export default new CountryService();