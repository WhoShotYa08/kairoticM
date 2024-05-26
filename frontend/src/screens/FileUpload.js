import React, { useState} from "react";
import { Container ,ProgressBar, } from "react-bootstrap";
import { useDropzone } from 'react-dropzone';
import { WiCloudDown} from "react-icons/wi";
import DraggableIcon from "../components/draggable";

export default function FileUploadScreen() {
    const [iconUrl, setIconUrl] = useState(null);
    const [uploadProgress, setuploadProgress] = useState(0)
    const [fileName, setfileName] = useState('');
    

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setIconUrl(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const onDrop = (acceptedFiles) =>{
        const file = acceptedFiles[0];
        setfileName(file.name);
        let progress = 0;
        const interval = setInterval(() =>{
            progress += 10;
            setuploadProgress(progress);
            if(progress >= 100){
                clearInterval(interval);
            }
        }, 500);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return(
        <Container>
            <div className="containerOne">
                <h1 className="text-danger">Uploading Document</h1>
                <div>
                    <h2 className="text-dark text-center">File Upload</h2>


                    <div className="containerTwo w-75 p-3 h-60 d-inline-block col-md-8 offset-md-2 text-center">
                        <div {...getRootProps()}>
                            <input {...getInputProps()} type="file" onChange={handleFileUpload} />
                            {iconUrl && <DraggableIcon icon={<WiCloudDown size={400} />} />}
                        </div>
                        <br />
                        <h6 className="text-dark">OR</h6>
                        <h5 className="text-dark">Drop your file here</h5>
                        <div>
                            {fileName && <span>{fileName}</span>}
                            <ProgressBar animated now={uploadProgress} label={`${uploadProgress}%`} variant="primary" />
                        </div>
                    </div>

                    help

                </div>
            </div>
        </Container>
    )
}
