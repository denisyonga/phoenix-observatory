export type UploadStatus =
  | "Pending"
  | "Validated"
  | "Approved"
  | "Archived"
  | "Rejected";

export type UploadRecord = {

  id: string;

  filename: string;

  uploadedBy: string;

  uploadedAt: string;

  status: UploadStatus;

  rows: number;

  warnings: number;

  errors: number;

};