import {
    PhoenixSubmission,
    PhoenixSubmissionStatus,
  } from "../types/PhoenixSubmission";

  import { PhoenixSubmissionSummary } from "../types/PhoenixSubmissionSummary";
  
  const submissions: PhoenixSubmission[] = [
  
    {
      id: "SUB-2026-RO-001",
  
      country: "Romania",
      iso3: "ROU",
  
      reportingCycle: "July 2026",
  
      submittedBy: "Romania Country Coordinator",
      submittedAt: "2026-07-18T09:30:00",
  
      status: "validated",
  
      datasetVersion: "1.0",
  
      attachments: [],
  
      validationWarnings: 1,
      validationErrors: 0,
  
      notes:
        "Dataset validated and ready for publication.",
    },
  
    {
      id: "SUB-2026-ES-001",
  
      country: "Spain",
      iso3: "ESP",
  
      reportingCycle: "July 2026",
  
      submittedBy: "Spain Country Coordinator",
      submittedAt: "2026-07-19T11:15:00",
  
      status: "under_review",
  
      datasetVersion: "1.0",
  
      attachments: [
        "Spain-supporting-document.pdf",
      ],
  
      validationWarnings: 2,
      validationErrors: 0,
  
      notes:
        "Supporting documentation received for review.",
    },
  
  ];
  
  export default class PhoenixSubmissionService {
  
    static getSubmissions(): PhoenixSubmission[] {
      return submissions;
    }
  
    static getSubmissionById(
      id: string
    ): PhoenixSubmission | undefined {
  
      return submissions.find(
        submission => submission.id === id
      );
  
    }
  
    static getSubmissionsByCountry(
      iso3: string
    ): PhoenixSubmission[] {
  
      return submissions.filter(
        submission =>
          submission.iso3 === iso3
      );
  
    }
  
    static getSubmissionsByStatus(
      status: PhoenixSubmissionStatus
    ): PhoenixSubmission[] {
  
      return submissions.filter(
        submission =>
          submission.status === status
      );
  
    }
  
    static getLatestSubmission(
      iso3: string,
      reportingCycle: string
    ): PhoenixSubmission | undefined {
  
      return submissions.find(
        submission =>
          submission.iso3 === iso3 &&
          submission.reportingCycle === reportingCycle
      );
  
    }

static getSubmissionSummary(): PhoenixSubmissionSummary {

    const summary: PhoenixSubmissionSummary = {
      total: submissions.length,
      draft: 0,
      submitted: 0,
      underReview: 0,
      validationRequired: 0,
      validated: 0,
      rejected: 0,
      published: 0,
    };
  
    submissions.forEach((submission) => {
  
      switch (submission.status) {
  
        case "draft":
          summary.draft++;
          break;
  
        case "submitted":
          summary.submitted++;
          break;
  
        case "under_review":
          summary.underReview++;
          break;
  
        case "validation_required":
          summary.validationRequired++;
          break;
  
        case "validated":
          summary.validated++;
          break;
  
        case "rejected":
          summary.rejected++;
          break;
  
        case "published":
          summary.published++;
          break;
  
      }
  
    });
  
    return summary;
  }
  
    // -----------------------------
    // Submission Lifecycle
    // -----------------------------
  
    static submitSubmission(
      id: string
    ): PhoenixSubmission | undefined {
  
      const submission =
        this.getSubmissionById(id);
  
      if (!submission) {
        return undefined;
      }
  
      submission.status = "submitted";
  
      submission.submittedAt =
        new Date().toISOString();
  
      return submission;
    }
  
    static markUnderReview(
      id: string
    ): PhoenixSubmission | undefined {
  
      const submission =
        this.getSubmissionById(id);
  
      if (!submission) {
        return undefined;
      }
  
      submission.status = "under_review";
  
      return submission;
    }
  
    static requestRevision(
      id: string,
      notes?: string
    ): PhoenixSubmission | undefined {
  
      const submission =
        this.getSubmissionById(id);
  
      if (!submission) {
        return undefined;
      }
  
      submission.status =
        "validation_required";
  
      if (notes) {
        submission.notes = notes;
      }
  
      return submission;
    }
  
    static validateSubmission(
      id: string
    ): PhoenixSubmission | undefined {
  
      const submission =
        this.getSubmissionById(id);
  
      if (!submission) {
        return undefined;
      }
  
      if (submission.validationErrors > 0) {
        return undefined;
      }
  
      submission.status = "validated";
  
      return submission;
    }
  
    static rejectSubmission(
      id: string,
      notes?: string
    ): PhoenixSubmission | undefined {
  
      const submission =
        this.getSubmissionById(id);
  
      if (!submission) {
        return undefined;
      }
  
      submission.status = "rejected";
  
      if (notes) {
        submission.notes = notes;
      }
  
      return submission;
    }
  
    static publishSubmission(
      id: string
    ): PhoenixSubmission | undefined {
  
      const submission =
        this.getSubmissionById(id);
  
      if (!submission) {
        return undefined;
      }
  
      if (submission.status !== "validated") {
        return undefined;
      }
  
      submission.status = "published";
  
      return submission;
    }
  
    static attachDocument(
      id: string,
      documentName: string
    ): PhoenixSubmission | undefined {
  
      const submission =
        this.getSubmissionById(id);
  
      if (!submission) {
        return undefined;
      }
  
      submission.attachments.push(
        documentName
      );
  
      return submission;
    }
  
  }