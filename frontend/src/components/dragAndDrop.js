import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { IoCloudUploadOutline } from "react-icons/io5";

function MyDropzone() {
  const [file, setFile] = useState();
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleUpload = (event) => {
    setFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} onChange={handleUpload} name="file"/>
      <IoCloudUploadOutline size={150} color="" />
      <p>Drop your files here</p>
    </div>
  );
}

export default MyDropzone;
