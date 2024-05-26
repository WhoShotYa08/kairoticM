import React, { useState } from 'react';
import { Col, Row } from "react-bootstrap";
import { IoGridOutline } from "react-icons/io5";

export default function SidePanel() {
  return (
    <Col>
      <Row md={12}>
        <Col md={3} style={{justifyContent: 'center', alignItems: 'center'}}>
            <button className="button" onClick={()=>{}}>
                <IoGridOutline/>
            </button>
        </Col>

        <Col>
          <img src="/images/kairotic_spelling.png" className="panel-img" />
        </Col>
      </Row>

      <Row>
        <button className='button'>Upload Documents</button>
      </Row>
      <Row>
        <button className='button'>Authorized signee's</button>
      </Row>
      <Row>
        <button className='button'>Authorize Drawings</button>
      </Row>
      <Row>
        <button className='button'>Track Progress</button>
      </Row>
    </Col>
  );
}
