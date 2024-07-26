import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { BsCloudUploadFill } from "react-icons/bs";

const fileTypes = ["PDF", "DOC", "DOCX", "PPTX", "PPT", "TXT"];

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
      onDrop={() => {}}
      children={
        <div className="">
          <BsCloudUploadFill size={100} color="black" className="mx-3"/>
          <div className="mx-auto overflow-none">
            <p>{!file ? "Drag your file here" : file.name}</p>
          </div>
        </div>
      }
    />
  );
}

export default DragDrop;
