import React from "react";
import { Col, Row } from "react-bootstrap";
import { IoGridOutline } from "react-icons/io5";

export default function SidePanel({ displayScreen, changeTo }) {
  return (
    <Col className="mx-auto sideBar">
      <Row md={12}>
        <Col md={3}>
          {/* <button className="button" onClick={() => {}}>
            <IoGridOutline />
          </button> */}
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
              displayScreen === "upload" ? "3px solid rgb(68,166,173)" : "none",
          }}
          onClick={() => {
            changeTo("upload");
          }}
        >
          Upload Documents
        </button>
      </Row>
      <Row>
        <button
          className="button"
          style={{
            borderBottom:
              displayScreen === "signee" ? "3px solid rgb(68,166,173)" : "none",
          }}
          onClick={() => {
            changeTo("signee");
          }}
        >
          Authorized signee's
        </button>
      </Row>
      <Row>
        <button
          className="button"
          style={{
            borderBottom:
              displayScreen === "drawing"
                ? "3px solid rgb(68,166,173)"
                : "none",
          }}
          onClick={() => changeTo("drawing")}
        >
          Authorize Drawings
        </button>
      </Row>
      <Row>
        <button
          className="button"
          style={{
            borderBottom:
              displayScreen === "progress"
                ? "3px solid rgb(68,166,173)"
                : "none",
          }}
          onClick={() => changeTo("progress")}
        >
          Track Progress
        </button>
      </Row>
    </Col>
  );
}
