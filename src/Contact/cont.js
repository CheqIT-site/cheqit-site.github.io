import React from "react";
import "./cont.css";
import { Row, Col,Nav, Navbar } from "react-bootstrap";
import cont from "../images/cont.svg";
import { Link } from "react-router-dom";
import logo from "../images/2.svg";

export default function Contact() {
  const tabstyle = {
    color: "#212121",
  };
  return (
    <div>
     <Row>
      <Navbar bg="dark" fixed="top" expand="lg" style={{ paddingLeft: "3%" }}>
        <Navbar.Brand href="/">
          <img className="chq-logo" src={logo} alt="Cheqit-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features" className="home-nav">
              Features
            </Nav.Link>
            <Nav.Link href="/try" className="home-nav">
              Get Demo
            </Nav.Link>
            <Nav.Link href="#blog" className="home-nav">
              Blogs
            </Nav.Link>
            <Nav.Link href="#about" className="home-nav">
              About Us
            </Nav.Link>
            <Nav.Link href="/contact" className="home-nav">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </Row>
      {/* <Row className="cont-main">
        <Col sm={7} style={{display:"flex",justifyContent:"center"}}>
          <Row className="info">
            <Col sm={6} className="office-col">
              <Row>
                <Col>
                <h2 className="off-head">OFFICE</h2>

                </Col>
              </Row>
              <Row>
                <Col>
                <h2 className="off">India</h2>

                </Col>
              </Row>
              <Row>
                <Col>
                <h2 className="add">Alandi road, Pune, Maharashtra,India, 411016</h2>

                </Col>
              </Row>
            </Col>
            <Col sm={7} className="mail-col">
              <Row>
                <Col>
                <h2 className="off-head">MAIL US</h2>

                </Col>
              </Row>
              <Row style={{ display: "flex" }}>
                <Col sm={1} className="icon-mail">
                  <i class="fa fa-envelope-o" aria-hidden="true"></i>
                </Col>
                <Col sm={3} className="email">info@cheqit.in</Col>
              </Row>
            </Col>
            <Col sm={6} className="connect-col">
              {" "}
              <Row>
                <Col>
                <h2 className="off-head">CONNECT WITH US</h2>

                </Col>
              </Row>
              <Row style={{ display: "flex" }}>
                <Col sm={1} style={{marginRight:"3%"}}>
                  <a href="https://www.instagram.com/cheqitco/" target="_blank">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </Col>
                <Col sm={1} style={{marginRight:"3%"}}>
                  <a>
                    <i class="fa fa-facebook-square" aria-hidden="true"></i>
                  </a>
                </Col>
                <Col sm={1} style={{marginRight:"3%"}}>
                  <a href="https://www.linkedin.com/in/cheqit-co-1b59371b7" target="_blank">
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="map"></Row>
        </Col>
        <Col sm={6}>
          <img src={cont} className="cont-img"></img>
        </Col>
      </Row> */}
    </div>
  );
}
