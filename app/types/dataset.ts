import { Country } from "./country";

export interface Dataset {
  id: string;

  title: string;

  description: string;

  version: string;

  year: number;

  source: string;

  countries: Country[];
}