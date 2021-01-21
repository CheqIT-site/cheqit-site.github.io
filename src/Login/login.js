import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./login.css";
import logpic from "../images/login.svg";
import Home from "../Home/home";
import HomeNav from "../HomeNavbar/HomeNavbar";

export default function Login() {
  const AdminUser={
    email:"cheqit",
    password:"client",
  }
  const [user,setUser]=useState({
    email:"",
    password:""
  })
  const [error,setError]=useState("");
  return (
    <div className="login-main">
      <Row>
        <HomeNav />
      </Row>
      <Row>
        <Col sm={6} className="login-col-1">
          <img src={logpic} className="login-pic"></img>
        </Col>
        <Col sm={6} className="login-col-2">
          <Form className="login-form">
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="login-fields">Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                // onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="login-fields">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button
              className="btn-learn"
              type="submit"
              // onClick={() => sign(userData.email, userData.password)}
            >
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
