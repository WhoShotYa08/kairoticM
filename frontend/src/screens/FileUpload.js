import React, { useState } from "react";
// import axios from "axios";
import { UploadButton, UploadDropzone } from "../utils/uploadthing";
import "@uploadthing/react/styles.css";

const FileUploadScreen = () => {
  const [url_, setUrl] = useState("");
  return (
    <div className="containerOne w-100 border h-100">
      <div className="border border-dashed-3">
        <h4 className="text-success">Saved Documents</h4>
        <UploadDropzone
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            // Do something with the response
            // console.log("Files: ", );
            setUrl(res[0].url);
            
            alert("Upload Completed");
          }}
          onUploadError={(error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
          className="bg-transparent-800 ut-label:text-lg ut-allowed-content:ut-uploading:text-red-300"
        />
        {
          url_ && <a href={url_} className="fw-bold mx-auto fs-9">File download link</a>
        }
      </div>
    </div>
  );
};

export default FileUploadScreen;
