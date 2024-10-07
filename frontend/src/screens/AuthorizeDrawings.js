import React, { useState, useEffect } from "react";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import TableData from "../components/table";
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableBody,
  Table,
  Checkbox
} from "semantic-ui-react";
import { useGetUsersQuery } from "../slices/usersApiSlice";


export default function AuthorizeDrawingScreen() {
  const [files, setFiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filesPerPage] = useState(5);  
  const {users} = useGetUsersQuery();

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
            <TableHeaderCell>Email Address</TableHeaderCell>
            <TableHeaderCell>Assign</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody className="text-white">
          {users.map((user) => (
            <TableData
              key={user._id} 
              name={user.name}  
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