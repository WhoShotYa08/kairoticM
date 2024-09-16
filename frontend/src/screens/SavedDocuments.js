import React, { useState, useEffect } from "react";
import Document from "../components/document";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import axios from "axios";

export default function SavedDocumentsScreen() {
  const [files, setFiles] = useState([]);

  const getFiles = async () => {
    axios
    .get("http://localhost:5000/api/files")
    .then((response) => {
      console.log(response.data);
      setFiles([files]);
      console.log(files);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  useEffect(() => {
    getFiles()
  }, [files]);

  return (
    <div className="containerOne w-100 border h-100 table-responsive">
      <h4 className="text-success">Saved Documents</h4>
      <table className="container-sm table table-striped table-hover">
        <thead>
          <tr className="bg-light">
            <th scope="col">Name</th>
            <th scope="col">Date Uploaded</th>
            <th scope="col">Download</th>
          </tr>
        </thead>
        <tbody>
          {files.map((item) => (
            <Document
              key={item._id} // Ensure you're using the MongoDB `_id` field as a unique key
              name={item.name} // The correct field name for the file
              date={new Date(item.createdAt).toLocaleDateString()} // Formatting date if timestamps are used
              link={item.url} // The correct field for the file URL
            />
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-light bg-transparent mx-2" onClick={getFiles}>
          <FaCircleArrowLeft size={20} color="black" />
        </button>
        <button type="button" className="btn btn-light bg-transparent">
          <FaCircleArrowRight size={20} color="black" />
        </button>
      </div>
    </div>
  );
}
