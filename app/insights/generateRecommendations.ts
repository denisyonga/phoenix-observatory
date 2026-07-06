type NetworkData = {
    latency: number;
    packetLoss: string;
    ipv4: string;
    ipv6: string;
  };
  
  type AtlasData = {
    probes: number;
    online: number;
    anchors: number;
    measurements: number;
  };
  
  export function generateRecommendations(
    network: NetworkData,
    atlas: AtlasData
  ): string[] {
  
    const recommendations: string[] = [];
  
    if (network.latency > 40) {
      recommendations.push(
        "Investigate elevated latency."
      );
    }
  
    if (parseFloat(network.packetLoss) > 1) {
      recommendations.push(
        "Review packet-loss trends."
      );
    }
  
    if (network.ipv6 !== "Reachable") {
      recommendations.push(
        "Verify IPv6 routing."
      );
    }
  
    if (atlas.online < atlas.probes) {
      recommendations.push(
        `Inspect ${
          atlas.probes - atlas.online
        } offline RIPE Atlas probe(s).`
      );
    }
  
    if (atlas.measurements < 100) {
      recommendations.push(
        "Increase measurement coverage."
      );
    }
  
    if (recommendations.length === 0) {
      recommendations.push(
        "No operational actions required."
      );
    }
  
    return recommendations;
  }