import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { IoGridOutline } from "react-icons/io5";

export default function SidePanel() {
  const [currentPage, setCurrentPage] = useState("upload");

  const handleChangeScreen = (page) => {
    setCurrentPage(page);
  };

  return (
    <Col className="mx-auto">
      <Row md={12}>
        <Col md={3}>
          <button className="button" onClick={() => {}}>
            <IoGridOutline />
          </button>
        </Col>

        <Col>
          <img src="/images/kairotic_spelling.png" className="panel-img" />
        </Col>
      </Row>

      <Row>
        <button
          className="button"
          style={{
            borderBottom:
              currentPage === "upload" ? "3px solid rgb(68,166,173)" : "none",
          }}
          onClick={()=>setCurrentPage("upload")}
        >
          Upload Documents
        </button>
      </Row>
      <Row>
        <button
          className="button"
          style={{
            borderBottom:
              currentPage === "signee" ? "3px solid rgb(68,166,173)" : "none",
          }}
          onClick={()=>setCurrentPage('signee')}
        >
          Authorized signee's
        </button>
      </Row>
      <Row>
        <button
          className="button"
          style={{
            borderBottom:
              currentPage === "drawing" ? "3px solid rgb(68,166,173)" : "none",
          }}
          onClick={()=>setCurrentPage("drawing")}
        >
          Authorize Drawings
        </button>
      </Row>
      <Row>
        <button
          className="button"
          style={{
            borderBottom:
              currentPage === "progress" ? "3px solid rgb(68,166,173)" : "none",
          }}
          onClick={()=>setCurrentPage('progress')}
        >
          Track Progress
        </button>
      </Row>
    </Col>
  );
}
