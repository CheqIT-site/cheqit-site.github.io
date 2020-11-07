import React from "react";
import "./cont.css";
import { Row, Col, Card, Modal, ModalBody } from "react-bootstrap";
import cont from "../images/cont.svg";
import { Link } from "react-router-dom";
import logo from "../images/1.svg";

export default function Contact() {
  const tabstyle = {
    color: "#212121",
  };
  return (
    <div>
      <Row className="nav">
        <Col className="chq-head" sm={{ span: 4, offset: 1 }}>
          <Link to="/home">
            <img className="chq-logo" src={logo} alt="Cheqit-logo" />
          </Link>
        </Col>
        <Col className="nav-options" sm={6}>
          <Link to="#features" style={tabstyle}>
            <p className="home-nav">Features</p>
          </Link>
          <Link to="/try" style={tabstyle}>
            <p className="home-nav">Try Us</p>
          </Link>
          <Link to="/blog" style={tabstyle}>
            <p className="home-nav">Blogs</p>
          </Link>
          <Link to="/about" style={tabstyle}>
            <p className="home-nav">About Us</p>
          </Link>
          <Link to="/contact" style={tabstyle}>
            <p className="home-nav">Contact Us</p>
          </Link>
        </Col>
      </Row>
      <Row className="cont-main">
          <Col sm={6}>
              <Row className="offrow">
                <h2 className="off-head">Office</h2>
                <h3 className="off">Pune, Maharashtra, India</h3>
              </Row>
              <Row>
                {/* map */}
              </Row>
          </Col>
          <Col sm={6} style={{marginLeft:"49%"}}>
          <img src={cont} className="cont-img"></img>

          </Col>
      </Row>
    </div>
  );
}
