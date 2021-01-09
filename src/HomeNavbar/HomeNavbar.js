import React from "react";
import "./HomeNavbar.css";
import { NavDropdown, Navbar, NavItem, NavLink, Nav } from "react-bootstrap";
import logo from "../images/cheqitlogo.svg";

export default function HomeNav() {
  return (
    <Navbar bg="dark" fixed="top" expand="lg" style={{ paddingLeft: "3%" }}>
      <Navbar.Brand href="/">
        <img className="chq-logo" src={logo} alt="Cheqit-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/login" className="home-nav">
            Login
          </Nav.Link>
          <Nav.Link href="#features" className="home-nav">
            Features
          </Nav.Link>
          <Nav.Link href="/cert" className="home-nav">
            Get Certificate
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
  );
}
