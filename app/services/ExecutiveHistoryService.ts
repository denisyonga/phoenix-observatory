export interface ExecutiveHistoryRecord {
    reportingCycle: string;
    healthScore: number;
    status: string;
    validation: string;
    publication: string;
    executiveNote: string;
  }

  const history: Record<string, ExecutiveHistoryRecord[]> = {

    Spain: [
  
      {
        reportingCycle: "May 2026",
        healthScore: 87,
        status: "Good",
        validation: "Complete",
        publication: "Published",
        executiveNote:
          "Operational indicators remained within expected thresholds."
      },
  
      {
        reportingCycle: "June 2026",
        healthScore: 89,
        status: "Good",
        validation: "Complete",
        publication: "Published",
        executiveNote:
          "Reporting timeliness improved across participating partners."
      },
  
      {
        reportingCycle: "July 2026",
        healthScore: 92,
        status: "Stable",
        validation: "Complete",
        publication: "Published",
        executiveNote:
          "Programme performance continues to improve with no executive intervention required."
      }
  
    ],
  
    Romania: [
  
      {
        reportingCycle: "May 2026",
        healthScore: 74,
        status: "Warning",
        validation: "Pending",
        publication: "Delayed",
        executiveNote:
          "Validation backlog affected publication schedule."
      },
  
      {
        reportingCycle: "June 2026",
        healthScore: 76,
        status: "Warning",
        validation: "Complete",
        publication: "Published",
        executiveNote:
          "Validation backlog reduced after regional support."
      },
  
      {
        reportingCycle: "July 2026",
        healthScore: 81,
        status: "Good",
        validation: "Complete",
        publication: "Published",
        executiveNote:
          "Operational recovery continues following corrective actions."
      }
  
    ]
  
  };

  export default class ExecutiveHistoryService {

    static getHistory(country: string): ExecutiveHistoryRecord[] {
  
      return history[country] ?? [];
  
    }
  
    static getLatest(
      country: string
    ): ExecutiveHistoryRecord | undefined {
  
      const records = this.getHistory(country);
  
      return records.at(-1);
  
    }
  
    static getTrend(country: string): string {
  
      const records = this.getHistory(country);
  
      if (records.length < 2) {
        return "Stable";
      }
  
      const latest =
        records[records.length - 1].healthScore;
  
      const previous =
        records[records.length - 2].healthScore;
  
      if (latest > previous) {
        return "Improving";
      }
  
      if (latest < previous) {
        return "Declining";
      }
  
      return "Stable";
  
    }
  
    static getAverageHealth(country: string): number {
  
      const records = this.getHistory(country);
  
      if (records.length === 0) {
        return 0;
      }
  
      const total = records.reduce(
        (sum, record) => sum + record.healthScore,
        0
      );
  
      return Math.round(total / records.length);
  
    }
  
    static getExecutiveSummary(country: string): string {
  
      const latest = this.getLatest(country);
  
      if (!latest) {
        return "No historical information available.";
      }
  
      const trend = this.getTrend(country);
  
      return `${country} is currently ${latest.status.toLowerCase()} with a health score of ${latest.healthScore}. Operational trend is ${trend.toLowerCase()}.`;
  
    }
  
  }