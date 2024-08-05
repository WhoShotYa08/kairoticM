import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faUserCheck } from '@fortawesome/free-solid-svg-icons';

export default function AuthorizeDrawingScreen() {
  return (
    <Container fluid className="py-4 px-4 bg-light min-vh-100">
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h1 className="text-primary mb-4 fw-bold" style={{fontSize: '20px'}}>Authorize Drawings</h1>
        <Form>
          <Row className="mb-4">
            <Col md={6} className="mb-3 mb-md-0">
              <Form.Group>
                <Form.Label className="fw-bold">
                  <FontAwesomeIcon icon={faFileAlt} className="me-2" />
                  Drawings
                </Form.Label>
                <Form.Select className="rounded-pill">
                  <option value="">Select Drawing</option>
                  <option value="option1">Drawing 1</option>
                  <option value="option2">Drawing 2</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-bold">
                  <FontAwesomeIcon icon={faUserCheck} className="me-2" />
                  Signees
                </Form.Label>
                <Form.Select className="rounded-pill">
                  <option value="">Select Signee</option>
                  <option value="option1">Signee 1</option>
                  <option value="option2">Signee 2</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={6} className="mb-3 mb-md-0">
              <Form.Group>
                <Form.Label className="fw-bold">Require All Signatures</Form.Label>
                <div>
                  <Form.Check
                    inline
                    type="radio"
                    label="Yes"
                    name="requireAllSignatures"
                    id="requireAllSignaturesYes"
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="No"
                    name="requireAllSignatures"
                    id="requireAllSignaturesNo"
                  />
                </div>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-bold">Send Out Once All Signed</Form.Label>
                <div>
                  <Form.Check
                    inline
                    type="radio"
                    label="Yes"
                    name="sendOutWhenSigned"
                    id="sendOutWhenSignedYes"
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="No"
                    name="sendOutWhenSigned"
                    id="sendOutWhenSignedNo"
                  />
                </div>
              </Form.Group>
            </Col>
          </Row>

          <div className="d-grid">
            <Button variant="primary" size="lg" className="rounded-pill">
              Authorize Drawing
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}