import React, { useState, useEffect } from "react";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableBody,
  Table,
} from "semantic-ui-react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/AuthorizeDrawingScreen.css";
import axios from 'axios';
import emailjs from '@emailjs/browser';

export default function AuthorizeDrawingScreen() {
  const [files, setFiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filesPerPage] = useState(5);
  const [acceptedFiles, setAcceptedFiles] = useState([]); 
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null); 
  const [rejectComment, setRejectComment] = useState("");

  // Fetch files from the API
  useEffect(() => {
    const getFiles = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/files/getFiles");
        setFiles(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFiles();
  }, []);

  // Accept/Unaccept file handler
  const handleToggleAccept = (fileId) => {
    const file = files.find((f) => f._id === fileId); // Find the file based on ID
  
    if (acceptedFiles.includes(fileId)) {
      // Unaccept file but don't send any email
      setAcceptedFiles((prev) => prev.filter((id) => id !== fileId));
    } else {
      // Accept file and send acceptance email
      setAcceptedFiles((prev) => [...prev, fileId]);
      sendEmailNotification(file, "accepted"); 
    }
  };
  
  // Reject file handler
  const handleReject = (file) => {
    setSelectedFile(file);
    setShowModal(true);
  };

  // Handle submitting the reject comment
  const handleSubmitReject = () => {
    console.log(`Rejected ${selectedFile.name} with comment: ${rejectComment}`);
    sendEmailNotification(selectedFile._id, "rejected", rejectComment);
    setShowModal(false); 
    setRejectComment("");
  };

  // Function to send email notification
  const sendEmailNotification = async (file, status, comment = "") => {
    try {
      const { to_email, name: file_name } = file; 
  
      // Provide default message if no comment is given
      const commentMessage = comment ? comment : "No comments provided.";
  
      // Send the email using the template and pass variables
      const response = await emailjs.send(
        'service_gbjfjl9',      
        'template_pkfcrq9', 
        {
          to_email,
          file_name, 
          status,  
          comment: commentMessage, 
        },
        '8fJZuvds4Umkne_A4'
      );
  
      console.log('Email successfully sent!', response);
    } catch (error) {
      console.error('Failed to send email', error);
    }
  };
  

  
  

  // Get the files to display on the current page
  const indexOfLastFile = currentPage * filesPerPage;
  const indexOfFirstFile = indexOfLastFile - filesPerPage;
  const currentFiles = files.slice(indexOfFirstFile, indexOfLastFile);

  // Pagination functions
  const nextPage = () => {
    if (currentPage < Math.ceil(files.length / filesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

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
            <TableHeaderCell>Accept</TableHeaderCell>
            <TableHeaderCell>Reject</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody className="text-white">
          {currentFiles.map((item) => (
            <TableRow key={item._id}>
              <TableHeaderCell>{item.name}</TableHeaderCell>
              <TableHeaderCell>
                {new Date(item.createdAt).toLocaleDateString()}
              </TableHeaderCell>
              <TableHeaderCell>
                <button
                  className={`btn ${
                    acceptedFiles.includes(item._id)
                      ? "btn-success"
                      : "btn-secondary"
                  }`}
                  onClick={() => handleToggleAccept(item._id)}
                >
                  {acceptedFiles.includes(item._id) ? "Unaccept" : "Accept"}
                </button>
              </TableHeaderCell>
              <TableHeaderCell>
                <button
                  className="btn btn-danger"
                  onClick={() => handleReject(item)}
                >
                  Reject
                </button>
              </TableHeaderCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
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

      {/* Reject Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Reject Document</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Reason for Rejection</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={rejectComment}
                onChange={(e) => setRejectComment(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitReject}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
