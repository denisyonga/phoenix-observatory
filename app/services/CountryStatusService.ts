import { CountryViewModel } from "../types";
import { mockNetworkData } from "../components/data/mockNetworkData";
import { mockAtlasData } from "../components/data/mockAtlasData";

export type CountryStatus =
  | "Healthy"
  | "Good"
  | "Warning"
  | "Needs Attention"
  | "Critical";

class CountryStatusService {

  getStatus(view: CountryViewModel): CountryStatus {

    const network =
      mockNetworkData[
        view.country.name as keyof typeof mockNetworkData
      ];

    const atlas =
      mockAtlasData[
        view.country.name as keyof typeof mockAtlasData
      ];

    if (!network || !atlas) {
      return "Warning";
    }
    const packetLoss = Number(network.packetLoss);

    const availability =
    (atlas.online / atlas.probes) * 100;

    if (packetLoss >= 1) {
      return "Critical";
    }

    if (network.latency > 50) {
      return "Needs Attention";
    }

    if (availability < 80) {
      return "Needs Attention";
    }

    if (packetLoss > 0.3) {
      return "Good";
    }

    return "Healthy";
  }
  
  getColor(view: CountryViewModel): string {

    switch (this.getStatus(view)) {

        case "Healthy":
            return "#22c55e";

        case "Good":
            return "#84cc16";

        case "Warning":
            return "#eab308";

        case "Needs Attention":
            return "#f97316";

        case "Critical":
            return "#dc2626";

        default:
            return "#e5e7eb";
    }

}

}

export default new CountryStatusService();
