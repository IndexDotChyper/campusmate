import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  async function uploadPdf() {
    if (!file) return;

    setStatus("Uploading...");

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("http://localhost:5000/api/upload", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    setStatus(data.message);
    setFile(null);
  }

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Brand */}
        <h1 className="font-semibold text-gray-800 dark:text-white text-lg">
            CampusMate
        </h1>

        {/* Right actions */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="text-sm px-3 py-1 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Upload PDF ▾
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-72 bg-white border rounded-xl shadow-lg p-4 z-50">
              <h3 className="text-sm font-semibold mb-2">
                Upload Notes / PDF
              </h3>

              <input
                type="file"
                accept="application/pdf"
                onChange={(e) => setFile(e.target.files[0])}
                className="mb-3 text-sm"
              />

              <button
                onClick={uploadPdf}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm"
              >
                Upload
              </button>

              {status && (
                <p className="text-xs text-gray-600 mt-2">
                  {status}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
