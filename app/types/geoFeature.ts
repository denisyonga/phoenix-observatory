export interface GeoFeature {
    properties: {
      NAME: string;
      ISO2: string;
      ISO3: string;
      POP2005: number;
      REGION: number;
      SUBREGION: number;
    };
  
    geometry: {
      type: string;
      coordinates: number[][][][] | number[][][];
    };
  }