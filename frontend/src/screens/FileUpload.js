import React, { useState } from "react";
import axios from "axios";

const FileUploadScreen = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [downloadLink, setDownloadLink] = useState("");

  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "application/pdf",
    "video/mp4",
    "video/quicktime",
    "audio/mpeg",
    "audio/wav",
    "application/acad",
    "image/vnd.dwg",
    "image/vnd.dxf",
    "application/vnd.ms-pki.stl",
    "model/stl",
    "model/iges",
    "application/iges",
    "application/step",
    "application/x-step",
  ];

  const allowedExtensions = [
    ".jpeg", ".jpg", ".png", ".pdf", ".mp4", ".mov", ".mpeg", ".wav",
    ".dwg", ".dxf", ".stl", ".iges", ".igs", ".step", ".stp",
  ];

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return;

    const fileExtension = selectedFile.name.split('.').pop().toLowerCase();
    const fileType = selectedFile.type;

    const isAllowedType = allowedTypes.includes(fileType);
    const isAllowedExtension = allowedExtensions.includes(`.${fileExtension}`);

    if (isAllowedType || isAllowedExtension) {
      setFile(selectedFile);
    } else {
      alert("Invalid file type. Supported types include images, PDFs, audio, video, and CAD files.");
    }
  };

  const uploadFile = async () => {
    if (!file) return;
    setUploading(true);

    try {
      const response = await axios.get("http://localhost:5000/api/files/generate-presigned-url", {
        params: {
          fileName: file.name,
          fileType: file.type,
        },
      });

      const { url } = response.data;

      await axios.put(url, file, {
        headers: {
          "Content-Type": file.type,
        },
      });

      const permanentUrl = url.split("?")[0]; 
      setDownloadLink(permanentUrl);
      alert("File uploaded successfully.");
    } catch (error) {
      console.error("Error uploading file:", error);
      alert(`Error uploading file: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="containerOne">
      <h4 className="text-success">Uploading Document</h4>
      <input type="file" required onChange={handleFileChange} />
      <button onClick={uploadFile} disabled={!file || uploading}>
        {uploading ? "Uploading..." : "Upload File"}
      </button>
      {downloadLink && (
        <div>
          <a href={downloadLink} target="_blank" rel="noopener noreferrer">
            Download Uploaded File
          </a>
        </div>
      )}
    </div>
  );
};

export default FileUploadScreen;
