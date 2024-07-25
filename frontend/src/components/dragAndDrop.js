import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF", "PDF", "DOC", "DOCX", "PPT"];

function DragDrop() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    console.log(file);
    setFile(file);
  };
  return (
    <FileUploader
      handleChange={handleChange}
      name="file"
      types={fileTypes}
      allowedExtensions={["PDF", "DOC", "DOCX", "PPT", ""]}
    />
  );
}

export default DragDrop;
