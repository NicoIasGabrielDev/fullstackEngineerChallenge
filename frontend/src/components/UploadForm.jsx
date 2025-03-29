import React, { useRef } from "react";
import { toast } from "react-toastify";

const UploadForm = ({ onUploadSuccess }) => {
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:3000/upload/spreadsheet", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Invalid file");
      }

      toast.success("Upload successfully!");
      onUploadSuccess();
    } catch (error) {
      toast.error(error.message || "Upload failed");
    }
  };

  return (
      <div style={{ marginLeft: "32px", marginTop: "10px",display: "flex", justifyContent: "center", alignItems: "center",}}>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <button
        onClick={handleUploadClick}
        style={{
          padding: "0.6rem 1.2rem",
          fontSize: "1rem",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        {'Upload (only spreadsheet)'}
      </button>
    </div>
  );
};

export default UploadForm;
