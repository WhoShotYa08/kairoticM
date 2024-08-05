import React, { useState } from "react";
import { FaFolderOpen } from "react-icons/fa6";
import "../assets/fileUpload.css";
import DragDrop from "../components/dragAndDrop";
// import axios from "axios";

export default function FileUploadScreen() {
  // const [iconUrl, setIconUrl] = useState(null);
  // const [file, setFile] = useState({});
  const [file, setFile] = useState(null);

  // const upload = () => {
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   axios.post("http://localhost:3000/upload", formData)
  //     .then(res => {}, console.log("done"))
  //     .catch(er => console.log(er))
  // }

  // const handleFileUpload = (e) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();

  //   reader.onload = () => {
  //     setIconUrl(reader.result);
  //   };

  //   reader.readAsDataURL(file);
  // };

  const handleUpload = (event) => {
    setFile(event.target.files[0]);
    console.log(file);
  };

  // const handleSubmit = () => {
  //   const formData = new FormData();
  //   formData.append('file', file)
  //   fetch(
  //     // file desitnation path
  //     'localhost:3000', 
  //     {
  //       method: 'POST',
  //       body: formData
  //     }
  //   ).then((response) => response.json()
  //   .then(
  //     (result) => {
  //       console.log('success', result);
  //     }
  //   ))
  //   .catch(error => {
  //     console.error("Error", error);
  //   })
  // };

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
}
