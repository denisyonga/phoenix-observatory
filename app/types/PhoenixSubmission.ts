export type PhoenixSubmissionStatus =
  | "draft"
  | "submitted"
  | "under_review"
  | "validation_required"
  | "validated"
  | "rejected"
  | "published";

export interface PhoenixSubmission {
  id: string;

  country: string;
  iso3: string;

  reportingCycle: string;

  submittedBy: string;
  submittedAt?: string;

  status: PhoenixSubmissionStatus;

  datasetVersion: string;

  attachments: string[];

  validationWarnings: number;
  validationErrors: number;

  notes?: string;
}