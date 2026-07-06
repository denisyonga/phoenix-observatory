export function calculateSystemStatus(
    healthScore: number,
    warnings: number,
    errors: number
  ) {
  
    if (errors > 0) {
      return {
        label: "Critical",
        color: "text-red-500",
        emoji: "🔴",
      };
    }
  
    if (warnings > 0 || healthScore < 80) {
      return {
        label: "Attention Required",
        color: "text-yellow-500",
        emoji: "🟡",
      };
    }
  
    return {
      label: "Healthy",
      color: "text-green-500",
      emoji: "🟢",
    };
  
  }