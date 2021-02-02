import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import CommonFooter from "../Footer/Footer";
import HomeNav from "../HomeNavbar/HomeNavbar";
import "./Contact.css";
import AOS from "aos";

export default function Contact() {
  AOS.init();
  const [query, setQuery] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = e => {
    const target = e.target;
    setQuery(prev => ({
      ...prev,
      [target.name]: target.value
    }))
  }
  return (
    <div className="containerMain">
      <Row>
        <HomeNav />
      </Row>
      <Row className="mainBody">
        <Col
          xl={{ span: 4, offset: 2 }}
          lg={{ span: 4, offset: 2 }}
          md={{ span: 5, offset: 1 }}
          sm={{ span: 10, offset: 1 }}
          xs={{ span: 10, offset: 1 }}
          style={{ marginTop: "11vh" }}
          data-aos="zoom-out-right"
          data-aos-duration="1000"
        >
          <Row>
            <Col>
              <p className="LGTtext">
                Let's<br></br> Grow <br></br>Together
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="labelText">Email</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="epsText">cheqit@gmail.com</p>
            </Col>
          </Row>
          <hr align="left" width="50%"></hr>
          <Row>
            <Col>
              <p className="labelText">Phone</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="epsText">9838899373</p>
            </Col>
          </Row>
          <hr align="left" width="50%"></hr>
          <Row>
            <Col>
              <p className="labelText">Social</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <a
                href="https://www.linkedin.com/in/cheqit-co-1b59371b7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  class="fa fa-linkedin-square fa-2x"
                  style={{ color: "#518071", marginRight: "25px" }}
                  aria-hidden="true"
                ></i>
              </a>
              <a
                href="https://www.instagram.com/cheqitco/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  class="fa fa-instagram fa-2x"
                  style={{ color: "#518071" }}
                  aria-hidden="true"
                ></i>
              </a>
            </Col>
          </Row>
        </Col>
        <Col
          xl={{ span: 4, offset: 0 }}
          lg={{ span: 4, offset: 0 }}
          md={{ span: 5, offset: 0 }}
          sm={{ span: 10, offset: 1 }}
          xs={{ span: 10, offset: 1 }}
          className="rightBox"
          data-aos="zoom-out-left"
          data-aos-duration="1200"
        >
          <Row>
            <Col xs={{ span: 8, offset: 2 }}>
              <p className="getintouchText">Get in touch</p>
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 8, offset: 2 }}>
              <p
                className="labelText"
                style={{
                  color: "#ffffff",
                  marginBottom: "0.6rem",
                }}
              >
                Name
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 8, offset: 2 }}>
              <input
                className="contactInput"
                name="name"
                value={query.name}
                onChange={(e) => handleChange(e)}
              />
            </Col>
          </Row>
          <form>
            <Row>
              <Col xs={{ span: 8, offset: 2 }}>
                <p
                  className="labelText"
                  style={{ color: "#ffffff", marginBottom: "0.6rem" }}
                >
                  Email
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 8, offset: 2 }}>
                <input
                  type="email"
                  name="email"
                  className="contactInput"
                  value={query.email}
                  onChange={(e) => handleChange(e)}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 8, offset: 2 }}>
                <p
                  className="labelText"
                  style={{ color: "#ffffff", marginBottom: "0.6rem" }}
                >
                  Your Message
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 8, offset: 2 }}>
                <textarea
                  className="contactInput"
                  name="message"
                  style={{ borderRadius: "20px" }}
                  rows="5"
                  value={query.message}
                  onChange={(e) => handleChange(e)}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 8, offset: 2 }}>
                <div className="send">
                  <p className="send-text">Send</p>
                </div>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
      <Row>
        <Col>
          <CommonFooter />
        </Col>
      </Row>
    </div>
  );
}
