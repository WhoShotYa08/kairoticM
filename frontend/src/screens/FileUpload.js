import React, { useState } from "react";
// import axios from "axios";
import { UploadButton, UploadDropzone } from "../utils/uploadthing";
import "@uploadthing/react/styles.css";

const FileUploadScreen = () => {
  const [url_, setUrl] = useState("");
  return (
    <div className="containerOne" style={{ backgroundColor: "#f0f0f0" }}>
      <h4 className="text-success">Uploading Document</h4>
      <form>
        <div
          className="w-100 container border-3 border-dark-subtle d-flex flex-column align-items-center"
          style={{ borderStyle: "dashed" }}
        >
          {/* Drag and drop */}
          <div className="my-2">
            <DragDrop />
          </div>
          <p className="fw-bold">OR</p>
          {/* File upload */}
          <div className="w-25">
            <div>
              <label
                htmlFor="file-upload"
                className="cursor-pointer"
                id="fileUpload"
              >
                <FaFolderOpen size={50} color="brown" className="mx-4" />
                <p className="block text-gray-400 font-normal">
                  {
                    !file ? "Browse Your Files" : file.name.toString()
                  }
                </p>
              </label>
            </div>
            <input
              id="file-upload"
              type="file"
              className="h-full w-full opacity-0 border"
              name="file"
              onChange={handleUpload}
            />
          </div>

          {/* <button type="button" onClick={upload}>Upload</button> */}
        </div>
      </form>
    </div>
  );
};

export default FileUploadScreen;
