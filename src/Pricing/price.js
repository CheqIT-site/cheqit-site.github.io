import React from "react";
import { Col, Row } from "react-bootstrap";
import "./price.css";
import HomeNavbar from "../HomeNavbar/HomeNavbar";
import CommonFooter from "../Footer/Footer";
import AOS from "aos";

export default function Price() {
  AOS.init();
  return (
    <div className="price-container">
      <Row>
        <Col>
          <HomeNavbar />
        </Col>
      </Row>
      <Row className="top-row-price">
        <Col>
          <p className="fp" data-aos="zoom-in-up" data-aos-duration="1000">
            <span style={{color: "#518071"}}>Flexible</span> Plans
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="fps" data-aos="zoom-in-up" data-aos-duration="1000">
            Choose a plan that works best for you <br></br>and your company.
          </p>
        </Col>
      </Row>
      <hr width="10%" />
      <Row>
          <Col xl={{span: 4}} className="priceBox-col" style={{justifyContent: "flex-end"}}>
              <div className="priceBox">
                  <Row><Col><p className="planType">Basic</p></Col></Row>
                  <Row><Col><p className="typePrice">$10,000</p></Col></Row>
                  <hr width="80%" align="left"></hr>
                  <Row><Col><p className="offerings">✔  5000 Anti Counterfeiting Tags</p></Col></Row>
                  <Row><Col><p className="offerings">✔  Customized Dashboard</p></Col></Row>
                  <Row><Col><p className="offerings">✔  Customer Demographics</p></Col></Row>
                  <Row><Col><p className="offerings">✔  CheQIT Analytics Integration</p></Col></Row>
                  <Row><Col><p className="offerings">✔  Upfront contractual period $9000</p></Col></Row>
              </div>
          </Col>
          <Col xl={{span: 4}} className="priceBox-col" style={{justifyContent: "center"}}>
              <div className="priceBox">
                  <Row><Col><p className="planType">Basic</p></Col></Row>
                  <Row><Col><p className="typePrice">$10,000</p></Col></Row>
                  <hr width="80%" align="left"></hr>
                  <Row><Col><p className="offerings">✔  5000 Anti Counterfeiting Tags</p></Col></Row>
                  <Row><Col><p className="offerings">✔  Customized Dashboard</p></Col></Row>
                  <Row><Col><p className="offerings">✔  Customer Demographics</p></Col></Row>
                  <Row><Col><p className="offerings">✔  CheQIT Analytics Integration</p></Col></Row>
                  <Row><Col><p className="offerings">✔  Upfront contractual period $9000</p></Col></Row>
              </div>
          </Col>
          <Col xl={{span: 4}} className="priceBox-col" style={{justifyContent: "flex-start"}}>
              <div className="priceBox">
                  <Row><Col><p className="planType">Basic</p></Col></Row>
                  <Row><Col><p className="typePrice">$10,000</p></Col></Row>
                  <hr width="80%" align="left"></hr>
                  <Row><Col><p className="offerings">✔  5000 Anti Counterfeiting Tags</p></Col></Row>
                  <Row><Col><p className="offerings">✔  Customized Dashboard</p></Col></Row>
                  <Row><Col><p className="offerings">✔  Customer Demographics</p></Col></Row>
                  <Row><Col><p className="offerings">✔  CheQIT Analytics Integration</p></Col></Row>
                  <Row><Col><p className="offerings">✔  Upfront contractual period $9000</p></Col></Row>
              </div>
          </Col>
      </Row>
      <Row>
      <Col xl={{span: 4, offset: 2}} className="priceBox-col" style={{justifyContent: "center"}}>
              <div className="priceBox">
                  <Row><Col><p className="planType">Basic</p></Col></Row>
                  <Row><Col><p className="typePrice">$10,000</p></Col></Row>
                  <hr width="80%" align="left"></hr>
                  <Row><Col><p className="offerings">✔  5000 Anti Counterfeiting Tags</p></Col></Row>
                  <Row><Col><p className="offerings">✔  Customized Dashboard</p></Col></Row>
                  <Row><Col><p className="offerings">✔  Customer Demographics</p></Col></Row>
                  <Row><Col><p className="offerings">✔  CheQIT Analytics Integration</p></Col></Row>
                  <Row><Col><p className="offerings">✔  Upfront contractual period $9000</p></Col></Row>
              </div>
          </Col>
          <Col xl={{span: 4}} className="priceBox-col" style={{justifyContent: "center"}}>
              <div className="priceBox">
                  <Row><Col><p className="planType">Basic</p></Col></Row>
                  <Row><Col><p className="typePrice">$10,000</p></Col></Row>
                  <hr width="80%" align="left"></hr>
                  <Row><Col><p className="offerings">✔  5000 Anti Counterfeiting Tags</p></Col></Row>
                  <Row><Col><p className="offerings">✔  Customized Dashboard</p></Col></Row>
                  <Row><Col><p className="offerings">✔  Customer Demographics</p></Col></Row>
                  <Row><Col><p className="offerings">✔  CheQIT Analytics Integration</p></Col></Row>
                  <Row><Col><p className="offerings">✔  Upfront contractual period $9000</p></Col></Row>
              </div>
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
