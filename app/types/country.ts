import { Indicator } from "./indicator";

export interface Country {
  id: string;

  name: string;

  iso2: string;

  iso3: string;

  region: string;

  latitude: number;

  longitude: number;

  overallScore: number;

  indicators: Indicator[];
}