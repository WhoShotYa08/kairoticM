import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SidePanel from "../components/sidePanel";
import FileUploadScreen from "./FileUpload";
import AuthorizeDrawingScreen from "./AuthorizeDrawings";
import AuthorizeSigneesScreen from "./AuthorizeSignees";

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

          <Col>
            {screen === "upload" ? (
              <FileUploadScreen />
            ) : screen === "signee" ? (
              <AuthorizeSigneesScreen />
            ) : (
              <AuthorizeDrawingScreen />
            )}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
