import React, { useState } from "react";
import { Row, Col, Modal, ModalBody } from "react-bootstrap";
import logo from "../images/1.svg";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import trypic from "../images/try.jpg";
import "./try.css";
import Form from "react-bootstrap/Form";

export default function Try() {
  const tabstyle = {
    color: "#212121",
  };
  const [show, setShow] = useState(false);
  const [code, setCode] = useState(logo);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCode = () => {
    axios
      .get(
        "http://api.qrserver.com/v1/create-qr-code/?data=HelloWorld!&size=100x100"
      )
      .then((res) => {
        console.log(res);
        setCode(res.data);
      });
  };
  // const qr = axios.get("http://api.qrserver.com/v1/create-qr-code/?data=HelloWorld!&size=100x100").then((res)=>res.data);

  return (
    <div className="try-main">
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
      <Row
        className="try-sec"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Col className="try-inst" sm={6}>
          <Row>
            <h2 className="help">We'll Help You Out</h2>
          </Row>
          <Row>
            <h3 className="inst">
              Step 1: Put your Product name and description.
            </h3>
          </Row>
          <Row>
            <h3 className="inst">
              Step 2: Press the button to generate CHEQIT QR codes.
            </h3>
          </Row>
          <Row>
            <h3 className="inst">
              Step 3: Use CHEQIT APP to scan the generated QR code.
            </h3>
          </Row>
        </Col>
        <Col className="try-form" sm={6}>
          <Form>
            <Form.Group
              controlId="exampleForm.ControlInput1"
              style={{ paddingBottom: "3%" }}
            >
              <Form.Label className="cri">Name</Form.Label>
              <Form.Control
                className="field na"
                type="text"
                placeholder="Name of product/company"
              />
            </Form.Group>
            <Form.Group
              controlId="exampleForm.ControlTextarea1"
              style={{ display: "flex" }}
            >
              <Form.Label className="cri">Description</Form.Label>
              <Form.Control className="field des" as="textarea" rows={3} />
            </Form.Group>
          </Form>
          <Row style={{ marginLeft: "3%" }}>
            <Button className="btn-learn" onClick={handleCode}>
              <span>Get QR Code</span>
            </Button>
          </Row>

          <img src={code} alt="" title="" />
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              I will not close if you click outside me. Don't even try to press
              escape key.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary">Understood</Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </div>
  );
}
