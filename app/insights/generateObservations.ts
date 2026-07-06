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
  
  export function generateObservations(
    network: NetworkData,
    atlas: AtlasData
  ): string[] {
  
    const observations: string[] = [];
  
    if (network.latency < 20) {
      observations.push("🟢 Excellent latency.");
    } else if (network.latency < 40) {
      observations.push("🟡 Acceptable latency.");
    } else {
      observations.push("🔴 High latency detected.");
    }
  
    if (parseFloat(network.packetLoss) > 1) {
      observations.push("📦 Packet loss is above normal.");
    }
  
    if (network.ipv6 !== "Reachable") {
      observations.push("🌐 IPv6 is unavailable.");
    }
  
    if (atlas.online < atlas.probes) {
      observations.push(
        `${atlas.probes - atlas.online} probe(s) are offline.`
      );
    }
  
    if (observations.length === 0) {
      observations.push("Everything appears healthy.");
    }
  
    return observations;
  }