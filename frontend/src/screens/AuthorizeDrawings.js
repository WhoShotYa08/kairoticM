import React, { useState, useEffect } from "react";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableBody,
  Table,
  Checkbox,
  Dropdown,
} from "semantic-ui-react";
import axios from "axios";

export default function AuthorizeDrawingScreen() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filesPerPage] = useState(5);
  const [selectedUsers, setSelectedUsers] = useState([]); // Track selected users
  const [options, setOptions] = useState([]); // State to hold dropdown options
  const [users, setUsers] = useState([]); // State to hold user data
  const [selectedFileId, setSelectedFileId] = useState(""); // State to hold selected file ID

  // Fetch files from API
  const getFiles = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/files/getFiles");
      const formattedOptions = response.data.map((file) => ({
        key: file._id.$oid, // Use the _id as the key
        text: file.name,     // Use the name as the display text
        value: file.url,     // Use the URL as the value
        drawingId: file._id.$oid, // Add drawingId
      }));
      setOptions(formattedOptions); // Update options state with formatted options
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  useEffect(() => {
    getFiles(); // Fetch files when the component mounts
  }, []);

  // Example users (replace this with actual data if needed)
  useEffect(() => {
    // This should be replaced with a call to your API to get the users
    setUsers([
      { id: 1, name: "John Doe", email: "john@example.com", bool: false },
      { id: 2, name: "Jane Smith", email: "jane@example.com", bool: false },
    ]);
  }, []);

  // Track checkbox changes
  const handleCheckboxChange = (user, checked) => {
    if (checked) {
      setSelectedUsers((prev) => [
        ...prev,
        { email: user.email, verified: false },
      ]);
    } else {
      setSelectedUsers((prev) => prev.filter((u) => u.email !== user.email));
    }
  };

  // Handle file selection
  const handleFileChange = (e, { value }) => {
    const selectedOption = options.find(option => option.value === value);
    if (selectedOption) {
      setSelectedFileId(selectedOption.drawingId); // Set the selected drawing ID
    }
  };

  // Submit selected users to backend
  const handleSubmit = async () => {
    // Prepare the data to be sent
    const postData = {
      drawingId: selectedFileId, // Include the drawingId
      employeeAssigned: selectedUsers, // Pass selected users array
      
    };

    // Log the data before posting
    console.log("Data to be submitted:", postData);

    try {
      const response = await axios.post("http://localhost:5000/api/assign", postData);

      if (response.status === 200) {
        alert("Users successfully assigned!");
      } else {
        alert("Failed to assign users.");
      }
    } catch (error) {
      console.error("Error assigning users:", error);
      alert(`Error assigning users: ${error}`);
    }
  };

  // Pagination logic
  const indexOfLastFile = currentPage * filesPerPage;
  const indexOfFirstFile = indexOfLastFile - filesPerPage;
  const currentFiles = users.slice(indexOfFirstFile, indexOfLastFile);

  return (
    <div className="containerOne w-100 border h-100 table-responsive">
      <h4 className="text-success">Authorize Drawings</h4>
      <Dropdown
        placeholder="Select File"
        fluid
        selection
        options={options} // Use the state variable for options
        onChange={handleFileChange} // Handle file change on selection
        style={{
          backgroundColor: "#343a40", // Dark gray background
          color: "white",
        }}
        className="custom-dropdown"
      />
      <Table celled inverted selectable className="border-primary">
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email Address</TableHeaderCell>
            <TableHeaderCell>Assign</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody className="text-white">
          {currentFiles.map((user) => (
            <TableRow key={user.id}>
              <TableHeaderCell>{user.name}</TableHeaderCell>
              <TableHeaderCell>{user.email}</TableHeaderCell>
              <TableHeaderCell>
                <Checkbox
                  onChange={(e, { checked }) => handleCheckboxChange(user, checked)}
                />
              </TableHeaderCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="d-flex justify-content-between">
        <div className="d-flex justify-content-start">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={handleSubmit} // Submit selected users
          >
            Assign Selected
          </button>
        </div>

        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-light bg-transparent mx-2"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <FaCircleArrowLeft size={20} color="black" />
          </button>
          <button
            type="button"
            className="btn btn-light bg-transparent"
            onClick={() =>
              setCurrentPage((prev) =>
                currentPage < Math.ceil(users.length / filesPerPage)
                  ? prev + 1
                  : prev
              )
            }
          >
            <FaCircleArrowRight size={20} color="black" />
          </button>
        </div>
      </div>
    </div>
  );
}
