import React from "react";
import { Form, Button } from "react-bootstrap";
import '../assets/dashboard/css/ready.css';
import '../assets/dashboard/css/demo.css';

export default function AuthorizeDrawingScreen() {
  return (
    <div className="containerOne h-100">
      <h1 className="text-primary">Authorize Signee's</h1>
      <Form>
        <div className="dropdown-row">
          <div className="dropdown-container">
            <label htmlFor="dropdown1">Drawings</label>
            <select id="dropdown1" className="dropdown">
              <option value="">Select Option 1</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
          <div className="dropdown-container">
            <label htmlFor="dropdown2">Signee's</label>
            <select id="dropdown2" className="dropdown">
              <option value="">Select Option 1</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
        </div>
        <div className="checkbox-column">
          <div className="checkbox-group">
            <label className="checkbox-label">Require All Signatures</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="checkbox1" value="yes" />
                Yes
              </label>
              <label>
                <input type="radio" name="checkbox1" value="no" />
                No
              </label>
            </div>
          </div>
          <div className="checkbox-group">
            <label className="checkbox-label">Send Out Once All Signed</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="checkbox2" value="yes" />
                Yes
              </label>
              <label>
                <input type="radio" name="checkbox2" value="no" />
                No
              </label>
            </div>
          </div>
        </div>
        <Button className="authorize-button" variant="primary">Authorize Drawing</Button>
      </Form>
    </div>
  );
}