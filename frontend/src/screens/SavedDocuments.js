import React, { useState, useEffect } from "react";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import axios from "axios";
import TableData from "../components/table";
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableBody,
  Table,
} from "semantic-ui-react";

export default function SavedDocumentsScreen() {
  const [files, setFiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filesPerPage] = useState(5); 

  const getFiles = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/files/getFiles"
      );
      setFiles(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFiles();
  }, []);

  // Get the files to display on the current page
  const indexOfLastFile = currentPage * filesPerPage;
  const indexOfFirstFile = indexOfLastFile - filesPerPage;
  const currentFiles = files.slice(indexOfFirstFile, indexOfLastFile);

  // Function to go to the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(files.length / filesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to go to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="containerOne w-100 border h-100 table-responsive">
      <h4 className="text-success">Saved Documents</h4>
      <Table celled inverted selectable className="border-primary">
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Date Uploaded</TableHeaderCell>
            <TableHeaderCell>Download</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody className="text-white">
          {currentFiles.map((item) => (
            <TableData
              key={item._id} 
              name={item.name} 
              date={new Date(item.createdAt).toLocaleDateString()} 
              url={item.url} 
            />
          ))}
        </TableBody>
      </Table>
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-light bg-transparent mx-2"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <FaCircleArrowLeft size={20} color="black" />
        </button>
        <button
          type="button"
          className="btn btn-light bg-transparent"
          onClick={nextPage}
          disabled={currentPage === Math.ceil(files.length / filesPerPage)} 
        >
          <FaCircleArrowRight size={20} color="black" />
        </button>
        
      </div>
    </div>
  );
}
