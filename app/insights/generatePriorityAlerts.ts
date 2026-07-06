type NetworkData = {
    latency: number;
    packetLoss: string;
    ipv4: string;
    ipv6: string;
  };
  
  type AtlasData = {
    probes: number;
    online: number;
  };
  
  export function generatePriorityAlerts(
    network: NetworkData,
    atlas: AtlasData
  ): string[] {
  
    const alerts: string[] = [];
  
    if (parseFloat(network.packetLoss) > 1) {
      alerts.push(
        "🔴 Packet loss exceeds operational threshold."
      );
    }
  
    if (network.latency > 40) {
      alerts.push(
        "🟠 Elevated latency detected."
      );
    }
  
    if (atlas.online < atlas.probes) {
      alerts.push(
        `🟡 ${atlas.probes - atlas.online} RIPE Atlas probe(s) offline.`
      );
    }
  
    if (alerts.length === 0) {
      alerts.push(
        "🟢 No operational alerts."
      );
    }
  
    return alerts;
  }