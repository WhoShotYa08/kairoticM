import React, { useState } from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import SidePanel from "../components/sidePanel";
import FileUploadScreen from "./FileUpload";
import AuthorizeDrawingScreen from "./AuthorizeDrawings";
import AuthorizeSigneesScreen from "./AuthorizeSignees";
import ProgressTracking from "./ProgressTracking";
import SavedDocumentsScreen from "./SavedDocuments";

export default function HomeScreen() {
  const mainContainter = {
    border: "1px solid rgb(0, 0, 0)",
  };

  const [screen, changeScreen] = useState("upload");

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col md={3}>
            <SidePanel displayScreen={screen} changeTo={changeScreen} />
          </Col>

          <Col className="" style={{overflow: 'auto'}}>
            {screen === "upload" ? (
              <FileUploadScreen />
            ) : screen === "saved" ? (
              <SavedDocumentsScreen />
            ) 
            : screen === "signee" ? (
              <AuthorizeSigneesScreen />
            ) : screen === "drawing" ? (
              <AuthorizeDrawingScreen />
            ) : (
              <ProgressTracking />
            )}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
