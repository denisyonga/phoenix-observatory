import CountryService from "./CountryService";
import DatasetService from "./DatasetService";

import { CountryViewModel } from "../types";

class CountryViewService {

  async getCountryViews(): Promise<CountryViewModel[]> {

    const countries = CountryService.getAll();

    const geoFeatures = await DatasetService.getGeoFeatures();

    return countries.map((country) => {

      const geometry = geoFeatures.find(
        feature => feature.properties.ISO3 === country.iso3
      );
      
      if (!geometry) {
        console.log(
          "Missing geometry:",
          country.name,
          country.iso3
        );
      }

      return {
        country,
        geometry: geometry!,
        isMapped: !!geometry
      };

    });

  }
  async getCountryViewByIso3(
    iso3: string
  ): Promise<CountryViewModel | undefined> {

    const countryViews = await this.getCountryViews();

    return countryViews.find(
      view => view.country.iso3 === iso3
    );

  }

}

export default new CountryViewService();;