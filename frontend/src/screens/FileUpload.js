import React, { useState } from "react";
import { Container, ProgressBar } from "react-bootstrap";
import { WiCloudDown } from "react-icons/wi";
import DraggableIcon from "../components/draggable";

export default function FileUploadScreen() {
  const [iconUrl, setIconUrl] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setIconUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="containerOne" >
      <h1 className="text-danger">Uploading Document</h1>
      <div>
        <h2 className="text-dark text-center">File Upload</h2>
        <div className="containerTwo w-75 p-3 h-60 d-inline-block col-md-8 offset-md-2 text-center">
          <div>
            <input type="file" onChange={handleFileUpload} />
            {iconUrl && <DraggableIcon icon={<WiCloudDown size={400} />} />}
          </div>
          <br />
          <h6 className="text-dark">OR</h6>
          <h5 className="text-dark">Drop your file here</h5>
          <div>
            <h6>drawingOneFromAutoCad.pdsx</h6>
            <ProgressBar now={60} />
          </div>
        </div>
      </div>
    </div>
  );
}
