export function calculateHealthScore(
    latency: number,
    packetLoss: number,
    online: number,
    probes: number
  ) {
    let score = 100;
  
    score -= Math.min(latency / 2, 20);
  
    score -= packetLoss * 10;
  
    score -= (probes - online);
  
    return Math.max(0, Math.round(score));
  }