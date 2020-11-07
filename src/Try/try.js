import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Header, Image, Modal } from "semantic-ui-react";
import logo from "../images/1.svg";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import trypic from "../images/try.jpg";
import "./try.css";
import Form from "react-bootstrap/Form";
const base64url = require("base64-url");

export default function Try() {
  const [open, setOpen] = React.useState(false);
  const tabstyle = {
    color: "#212121",
  };
  const [show, setShow] = useState(false);
  const [code, setCode] = useState({
    code: logo,
  });
  const [file, setfile] = useState({
    file: null,
  });
  // const link = base64url.decode(
  //   "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"
  // );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCode = () => {
    axios
      .get(
        "http://api.qrserver.com/v1/create-qr-code/?data=HelloWorld!&size=100x100"
      )
      .then((res) => {
        // console.log(res);
        setCode({
          code: 
            Buffer.from(res.data, "binary").toString("base64")
          
        });
      });
  };
  var link="data"
  // function onChangeFile() {
  //   setfile({
  //     file: URL.createObjectURL(code)
  //   });
  // };
  console.log(code);
  console.log(file);

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
          <Row>
            <Col className="qr-img">
              <img src={"data:image/png;base64,"+code}></img>
          {/* <img src="data:image/png;base64,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" /> */}

            </Col>
          </Row>


        </Col>
      </Row>
    </div>
  );
}
