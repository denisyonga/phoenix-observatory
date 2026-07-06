import { UploadRecord } from "../dataInbox/types";

type Props = {
  uploads: UploadRecord[];
};

export default function UploadInboxCard({
  uploads,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow">

      <h2 className="mb-5 text-2xl font-bold">
        📂 Upload Inbox
      </h2>

      <div className="space-y-4">

        {uploads.map((upload) => (

          <div
            key={upload.id}
            className="rounded-lg border bg-slate-50 p-4"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="font-semibold">
                  {upload.filename}
                </p>

                <p className="text-sm text-slate-500">
                  Uploaded by {upload.uploadedBy}
                </p>

                <p className="text-xs text-slate-400">
                  {upload.uploadedAt}
                </p>

              </div>

              <div>

                <span
                  className={`rounded-full px-3 py-1 text-sm font-semibold
                  ${
                    upload.status === "Approved"
                      ? "bg-green-100 text-green-700"
                      : upload.status === "Archived"
                      ? "bg-slate-200 text-slate-700"
                      : upload.status === "Rejected"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {upload.status}
                </span>

              </div>

            </div>

            <div className="mt-4 flex gap-6 text-sm text-slate-600">

              <span>
                📄 {upload.rows} rows
              </span>

              <span>
                ⚠ {upload.warnings} warnings
              </span>

              <span>
                ❌ {upload.errors} errors
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}