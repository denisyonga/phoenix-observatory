type NarrativeInput = {
    country: string;
    status: string;
  };
  
  export default class ExecutiveNarrativeService {
  
    static generate({
      country,
      status,
    }: NarrativeInput): string {
  
      switch (status) {
  
        case "Healthy":
  
          return `${country} continues to demonstrate excellent operational performance. Current RIPE indicators remain healthy and no executive intervention is required.`;
  
        case "Good":
  
          return `${country} is operating normally with only minor observations. Routine monitoring should continue.`;
  
        case "Warning":
  
          return `${country} requires closer operational monitoring. Validation activities should continue before publication.`;
  
        case "Needs Attention":
  
          return `${country} has emerging operational concerns. Programme coordination should review outstanding issues.`;
  
        case "Critical":
  
          return `${country} requires immediate executive attention. Operational risks may affect reporting quality.`;
  
        default:
  
          return `${country} is currently under review.`;
  
      }
  
    }
  
  }