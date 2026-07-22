export function generateExecutiveNarrative(
    countriesReporting: number,
    totalCountries: number,
    pendingReview: number,
    criticalIssues: number
  ): string {
  
    if (criticalIssues > 0) {
      return `Good day. ${criticalIssues} operational issue${
        criticalIssues > 1 ? "s require" : " requires"
      } executive attention before publication.`;
    }
  
    if (pendingReview > 0) {
      return `Good day. ${countriesReporting} of ${totalCountries} participating countries have completed reporting. ${pendingReview} dataset${
        pendingReview > 1 ? "s remain" : " remains"
      } under validation.`;
    }
  
    return `Good day. Programme operations remain healthy. All participating countries have completed reporting and no outstanding validation issues currently require executive attention.`;
  }