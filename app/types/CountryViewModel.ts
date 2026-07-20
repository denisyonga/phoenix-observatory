import { Country } from "./country";
import { GeoFeature } from "./geoFeature";

export interface CountryViewModel {
  country: Country;
  geometry: GeoFeature;

  isMapped: boolean;
}