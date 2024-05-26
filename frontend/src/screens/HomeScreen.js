import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SidePanel from "../components/sidePanel";

export default function HomeScreen() {
  const mainContainter = {
    border: "1px solid rgb(0, 0, 0)",
    margin: 10,
  };

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col md={3} style={{justifyContent: 'center', border: "1px solid rgb(0, 0, 0)",}}>
            <SidePanel />
          </Col>

          <Col style={mainContainter}>

          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
