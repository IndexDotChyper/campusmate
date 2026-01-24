import { useState } from "react";

export default function Upload() {
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
  }

  return (
    <div className="bg-white shadow rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-2">
        Upload Notes / PDFs 
      </h2>

      <p className="text-sm text-gray-500 mb-4">
        Upload study material to ask questions from it
      </p>

      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />

      <button
        onClick={uploadPdf}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
      >
        Upload PDF
      </button>

      {status && (
        <p className="mt-3 text-sm text-gray-700">
          {status}
        </p>
      )}
    </div>
  );
}
