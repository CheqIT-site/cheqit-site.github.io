import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./login.css";
import logpic from "../images/login.svg";
import Home from "../Home/home";
import HomeNav from "../HomeNavbar/HomeNavbar";
import { Redirect } from "react-router-dom";
import Admin from "../layouts/Admin";

export default function Login() {
  const AdminUser={
    email:"cheqit",
    password:"client",
  }

  const [user,setUser]=useState({
    email:"",
    password:""
  })


  const {email,password}=user;
  
  const [error,setError]=useState("");
  
  const handleDetails=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setUser((prevdata)=>({...prevdata,[name]:value}));
  }

  const loginSubmit=(e)=>{
    e.preventDefault();
    if(email===AdminUser.email && password===AdminUser.password)
    {
      
    }
    else{
      console.log("404");
    }
  }
  console.log(user);






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
                value={email}
                onChange={handleDetails}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="login-fields">Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" value={password} onChange={handleDetails} />
            </Form.Group>
            <Button
              className="btn-learn"
              type="submit"
              onClick={loginSubmit}
            >
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
