import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Demo.css";


export default function Demo() {
    return(
        <div className="Demo-main">
            <Row className="demo-head-row">
                <Col className="demo-head-col">
                    <p className="demo-head-para">
                    Seeing is believing.<br></br> Get a demo now!
                    </p>
                </Col>
            </Row>
            <Row>
            <Col className="demo-head-col">
              <div className="tryNow">
                <p className="demo-text">Try Now</p>
              </div>
            </Col>
          </Row>
        </div>
    );
}