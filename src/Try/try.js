import React, { useState } from "react";
import { Row, Col, Nav, Navbar, Modal } from "react-bootstrap";
import logo from "../images/2.svg";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import trypic from "../images/try.jpg";
import "./try.css";
import Form from "react-bootstrap/Form";
import apk from "../images/APK.jpeg";
import Footer from "rc-footer";
import "rc-footer/assets/index.css";
export default function Try() {
  const [file, setfile] = useState({
    name: "",
    description: "",
  });
  const { name, description } = file;

  const changehandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setfile((prevdata) => ({ ...prevdata, [name]: value }));
  };
  // console.log(file);
  const [code, setCode] = useState({
    code: logo,
  });
  const [show, setShow] = useState(false);

  const [model, setModel] = useState(false);
  const handleClose = () => setModel(false);
  const handleShow = () => setModel(true);

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(file);
    axios
      .post("https://cheqit.in/Identify/web-checker/genDemoQR", file)
      .then((res) => {
        console.log(res);
        setCode({
          code: res.data,
        });
        setShow(true);
        setModel(true);
      });
  };
  console.log(code);
  console.log(model);

  const tabstyle = {
    color: "#212121",
  };

  return (
    <div className="try-main">
      <Row>
        <Col sm={12}>
          <Navbar
            bg="dark"
            fixed="top"
            expand="lg"
            style={{ paddingLeft: "3%" }}
          >
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
        </Col>
      </Row>
      <Row className="try-section">
        <Col sm={6} style={{ padding: "4%" }}>
          <Form onSubmit={handlesubmit} className="Form">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className="cri">Name</Form.Label>
              <Form.Control
                className="field na"
                type="text"
                placeholder="Name of product/company"
                value={name}
                onChange={changehandle}
                name="name"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label className="cri">Description</Form.Label>
              <Form.Control
                className="field des"
                as="textarea"
                name="description"
                value={description}
                onChange={changehandle}
                rows={3}
              />
            </Form.Group>
            <Row>
              <Button className="btn-learn" type="submit">
                <span>Get QR Code</span>
              </Button>
            </Row>
          </Form>
          <Modal
            show={model}
            onHide={handleShow}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header style={{ justifyContent: "center" }}>
              <Modal.Title className="scan">Scan It !!!!!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col
                  sm={12}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  {show === false ? (
                    <img src={logo}></img>
                  ) : (
                    <img src={"data:image/png;base64," + code.code} className="qr-img"></img>
                  )}
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleClose} className="btn-learn">
                Done
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
        <Col sm={6}>
          <Row>
            <Col sm={12} style={{ display: "flex", justifyContent: "center" }}>
              <p className="inst">
                Get CHEQIT APP by scanning or clicking the button below.
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm={12} style={{ display: "flex", justifyContent: "center" }}>
              <img src={apk}></img>
            </Col>
          </Row>
          <Row>
            <Col sm={12} style={{ display: "flex", justifyContent: "center" }}>
              <Button
                className="btn-learn"
                href="https://cheqit.in/Identify/download/androidAPK"
                style={{ paddingTop: "1%" }}
              >
                <span>Download APP</span>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Footer
        columns={[
          {
            title: "CHEQIT",
            url: "CHEQIT.COM",
            items: [
              { title: "Anti-Counterfeiting solutions to protect your brand" },
              { title: "Pune, India" },
            ],

            openExternal: true,
          },
          {
            title: "Useful Links",
            items: [
              {
                title: "Get Demo",
                url: "/try",
                openExternal: false,
              },
              {
                title: "About Us",
                url: "/about",
                openExternal: false,
              },
              {
                title: "Features",
                url: "#features",
                openExternal: false,
              },
              {
                title: "Vector Credits",
                url: "/credit",
                openExternal: true,
              },
            ],
          },
          {
            title: "Contact Us",
            items: [
              {
                icon: <i class="fa foot fa-phone" aria-hidden="true"></i>,
                title: "8074638794",
              },
              {
                icon: <i class="fa foot fa-instagram" aria-hidden="true"></i>,
                title: "cheqitco",
                url: "https://www.instagram.com/cheqitco/",
              },
              {
                icon: (
                  <i class="fa foot fa-linkedin-square" aria-hidden="true"></i>
                ),

                title: "cheqit-co",
                url: "https://www.linkedin.com/in/cheqit-co-1b59371b7",
              },
            ],
          },
        ]}
        backgroundColor="#343a40"
       
      />
    </div>
  );
}
