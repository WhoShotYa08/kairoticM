import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function AuthorizeDrawingScreen() {
  const [selectedDrawing, setSelectedDrawing] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  const drawings = ["DrawingOne.psdx", "DrawingTwo.psdx"];
  const users = [
    "Nokuhle Ngubane",
    "Adrien Belo",
    "Brian Mabukwa",
    "Kgathiliso Mokgathle",
  ];

  const handleAuthorizeClick = () => {
    alert(`Drawing: ${selectedDrawing}\nUser: ${selectedUser}`);
  };

  return (
    <div className="containerOne">
      <Form>
        <Form.Group controlId="selectDrawing">
          <Form.Label>
            Please select the drawing to authorize (*Select from uploaded
            documents)
          </Form.Label>
          <Form.Control
            as="select"
            value={selectedDrawing}
            onChange={(e) => setSelectedDrawing(e.target.value)}
          >
            <option value="">Select a drawing</option>
            {drawings.map((drawing, index) => (
              <option key={index} value={drawing}>
                {drawing}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="selectUser" className="mt-3">
          <Form.Label>
            Please select the users to authorize (*Select from Authorized Users)
          </Form.Label>
          <Form.Control
            as="select"
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
          >
            <option value="">Select a user</option>
            {users.map((user, index) => (
              <option key={index} value={user}>
                {user}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Button
          variant="primary"
          className="mt-3"
          onClick={handleAuthorizeClick}
        >
          Authorize Drawing
        </Button>
      </Form>
    </div>
  );
}
