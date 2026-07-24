type RecommendationInput = {
    country: string;
    status: string;
  };
  
  export default class RecommendationService {
  
    static generate({
      country,
      status,
    }: RecommendationInput): string[] {
  
      switch (status) {
  
        case "Healthy":
  
          return [
            "Continue routine operational monitoring.",
            "Proceed with planned validation activities.",
            "Prepare validated datasets for publication."
          ];
  
        case "Good":
  
          return [
            "Maintain routine monitoring.",
            "Review minor operational observations.",
            "Confirm readiness for publication."
          ];
  
        case "Warning":
  
          return [
            "Increase monitoring frequency.",
            "Complete outstanding validation checks.",
            "Review data quality before publication."
          ];
  
        case "Needs Attention":
  
          return [
            "Escalate to regional programme coordinator.",
            "Resolve pending validation issues.",
            "Delay publication until review is complete."
          ];
  
        case "Critical":
  
          return [
            "Notify executive leadership immediately.",
            "Suspend publication activities.",
            "Initiate urgent operational review."
          ];
  
        default:
  
          return [
            "Continue operational assessment."
          ];
  
      }
  
    }
  
  }