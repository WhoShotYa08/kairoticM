import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaClipboard } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { FaCalendarDay } from "react-icons/fa";
import { FaFileSignature } from "react-icons/fa6";
import { IoCloudUpload } from "react-icons/io5";
import { IoIosSave } from "react-icons/io";
import "../assets/sideBar.css";

export default function TopNav({ displayScreen, changeTo }) {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      className="w-100 top-nav h-100 bg-white align-items-start my-1 rounded-3 py-3"
      style={{ boxShadow: "0px 4px 20px 6px" }}
    >
      <Container fluid>
        {/* <Navbar.Brand href="#">Brand</Navbar.Brand> */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 justify-content-around flex-lg-column">
            <Nav.Link
              className={
                displayScreen === "upload" || displayScreen === "saved"
                  ? "rounded bg-success-subtle my-1"
                  : "my-1"
              }
              onClick={() => changeTo("upload")}
            >
              <FaClipboard size={20} className="mx-2" />
              Documents
            </Nav.Link>
            {(displayScreen === "upload" || displayScreen === "saved") && (
              <>
                <Nav.Link
                  className={
                    displayScreen === "upload"
                      ? "rounded bg-success-subtle my-1 w-75 align-self-end"
                      : "rounded my-1 w-75 align-self-end"
                  }
                  onClick={() => changeTo("upload")}
                >
                  <IoCloudUpload size={20} className="mx-2" />
                  Upload
                </Nav.Link>
                <Nav.Link
                  className={
                    displayScreen === "saved"
                      ? "rounded bg-success-subtle my-1 w-75 align-self-end"
                      : "rounded my-1 w-75 align-self-end"
                  }
                  onClick={() => changeTo("saved")}
                >
                  <IoIosSave size={20} className="mx-2"/>
                  Saved
                </Nav.Link>
              </>
            )}
            <Nav.Link
              className={
                displayScreen === "signee"
                  ? "rounded bg-success-subtle my-1"
                  : "my-1"
              }
              onClick={() => changeTo("signee")}
            >
              <MdPeople size={20} className="mx-2" />
              Authorized signee's
            </Nav.Link>
            <Nav.Link
              className={
                displayScreen === "drawing"
                  ? "rounded bg-success-subtle my-1"
                  : "my-1"
              }
              onClick={() => changeTo("drawing")}
            >
              <FaFileSignature size={20} className="mx-2" />
              Authorize Drawings
            </Nav.Link>
            <Nav.Link
              className={
                displayScreen === "progress"
                  ? "rounded bg-success-subtle my-1"
                  : "my-1"
              }
              onClick={() => changeTo("progress")}
            >
              <FaCalendarDay size={20} className="mx-2" />
              Track Progress
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
