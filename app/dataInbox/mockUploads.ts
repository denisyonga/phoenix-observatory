import { UploadRecord } from "./types";

export const mockUploads: UploadRecord[] = [

  {
    id: "001",
    filename: "RIPE_July.csv",
    uploadedBy: "Denis",
    uploadedAt: "2026-07-04 10:15",

    status: "Approved",

    rows: 126,

    warnings: 2,

    errors: 0,
  },

  {
    id: "002",
    filename: "RIPE_July_v2.csv",
    uploadedBy: "Denis",
    uploadedAt: "2026-07-04 11:40",

    status: "Archived",

    rows: 126,

    warnings: 0,

    errors: 0,
  },

];