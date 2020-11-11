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
import apk from "../images/APK.jpeg";

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
    code:logo
  });
  const [show, setShow] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(file);
    axios
      .post(
        "http://localhost:8080/Identify/web-checker/genDemoQR",
        file
      )
      .then((res) => {
        console.log(res);
        setCode({
          code:res.data
        })
        setShow(true)
      });
  };
console.log(code);
  
  const tabstyle = {
    color: "#212121",
  };
 

  return (
    <div className="try-main">
      <Row className="nav">
        <Col className="chq-head" sm={{ span: 4, offset: 1 }}>
          <Link to="/">
            <img className="chq-logo" src={logo} alt="Cheqit-logo" />
          </Link>
        </Col>
        <Col className="nav-options" sm={6}>
          <Link to="/" style={tabstyle}>
            <p className="home-nav">Features</p>
          </Link>
          <Link to="/try" style={tabstyle}>
            <p className="home-nav">Get Demo</p>
          </Link>
          <Link to="/" style={tabstyle}>
            <p className="home-nav">Blogs</p>
          </Link>
          <Link to="/" style={tabstyle}>
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
          <Row>
          <h3 className="inst" style={{fontSize:"1vw"}}>
              Download CHEQIT APP from the link/QR below
            </h3>
            </Row>
          
            <Row>
              <Button className="btn-learn" href="http://ec2-13-234-213-26.ap-south-1.compute.amazonaws.com:8080/download/androidAPK" style={{paddingTop:"1%"}}>
                <span>Download APP</span>
              </Button>
            </Row>
            <Row>
              <img src={apk} style={{paddingTop:"3%"}}></img>
            </Row>
        </Col>
        <Col className="try-form" sm={6}>
          <Form onSubmit={handlesubmit}>
            <Form.Group
              controlId="exampleForm.ControlInput1"
              style={{ paddingBottom: "3%" }}
            >
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
            <Form.Group
              controlId="exampleForm.ControlTextarea1"
              style={{ display: "flex" }}
            >
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
            <Row style={{ marginLeft: "3%" }}>
              <Button className="btn-learn" type="submit">
                <span>Get QR Code</span>
              </Button>
            </Row>
          </Form>

          <Row>
            <Col className="qr-img">
              
              {show===false? <img src={logo}></img>:<img src={"data:image/png;base64," + code.code}></img>  }
              
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
