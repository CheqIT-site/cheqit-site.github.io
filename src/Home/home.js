import React, { useState } from "react";
import "./hom.css";
import {
  Row,
  Col,
  Card,
  Modal,
  ModalBody,
  Container,
  NavDropdown,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Carousel,
} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import logo from "../images/2.svg";
import thumb from "../images/1.svg";
import main from "../images/main.jpg";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { makeStyles } from "@material-ui/core/styles";
import Manu from "../images/manu.svg";
import war from "../images/ware.svg";
import con from "../images/cost.svg";
import ReactPlayer from "react-player";
import vid from "../images/vid.mp4";
import Marquee from "react-marquee-slider";
import styled from "styled-components";
import eur from "../images/0.png";
import Zoom from "react-reveal/Zoom";
import blog from "../images/bl.jpg";
import Footer from "rc-footer";
import "rc-footer/assets/index.css";
import prob from "../images/prob.jpg";
import doubt from "../images/doubt.svg";
import sol from "../images/sol.svg";
import post from "../images/post.svg";
import before from "../images/before.png";
import after from "../images/After.png";
import gr from "../images/graph.jpg";
import { Link as scroll } from "react-scroll";
import { HashLink } from "react-router-hash-link";
import bev from "../images/bev.jpg";
import pest from "../images/pest.jpg";
import good from "../images/good.jpg";
import med from "../images/med.jpg";
import coin from "../images/coin.jpg";
import auto from "../images/auto.jpg";

// import Flippy, { FrontSide, BackSide } from "react-flippy";
const Mar = styled.div`
  width: 18vw;
  height: 32vh;
  margin-right: 4vw;
  background: white;
  border: 6px solid #ffffff;
  box-sizing: border-box;
  box-shadow: inset 2px 2px 7px #735544, inset -2px -2px 7px #ffffff;
  border-radius: 20px;
  overflow: hidden;
`;

export default function Home() {
  const tabstyle = {
    color: "#212121",
  };

  return (
    <div className="main-container">
      <Row>
        <Navbar bg="dark" fixed="top" expand="lg" style={{ paddingLeft: "3%" }}>
          <Navbar.Brand href="/">
            <img className="chq-logo" src={logo} alt="Cheqit-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#features" className="home-nav">
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
      </Row>
      {/* <Row className="nav">
        <Col className="chq-head" sm={{ span: 4, offset: 1 }}>
          <Link to="/">
            <img className="chq-logo" src={logo} alt="Cheqit-logo" />
          </Link>
        </Col>
        <Col className="nav-options" sm={6}>
          <HashLink smooth to="#features">
            <p className="home-nav">Features</p>
          </HashLink>

          <Link to="/try" style={tabstyle}>
            <p className="home-nav">Get Demo</p>
          </Link>
          <HashLink smooth to="#blog">
            <p className="home-nav">Blogs</p>
          </HashLink>

          <HashLink smooth to="#about">
            <p className="home-nav">About Us</p>
          </HashLink>

          <Link to="/contact" style={tabstyle}>
            <p className="home-nav">Contact Us</p>
          </Link>
        </Col>
      </Row> */}
      <Row className="central-theme">
        <Col className="main-left" lg={{ span: 5, offset: 1 }} sm={12} md={8}>
          <Row>
            <Col>
              <p className="brand">CheqIt</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="tag">Your Brand Custodian</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="que">
                {" "}
                Anti-Counterfeiting solutions to protect your brand through
                continual innovations and keeping pace with your end customers
                expectations{" "}
                <span className="over">
                  by delivering authentic products to ensure better customer
                  satisfaction, enhanced productivity, thus sustainable growth
                  and business profitability
                </span>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <button className="btn-learn">
                <span>Learn More</span>
              </button>
            </Col>
          </Row>
        </Col>
        <Col className="main-right" lg={6}>
          <img src={main} className="qrpic"></img>
        </Col>
      </Row>
      <Row className="prob-start">
        <Col lg={12}>
          <h2 className="prob-head">Problems in market</h2>
        </Col>
      </Row>
      <Row className="prob">
        <Col sm={3} className="prob-col">
          <Card className="butpro-card">
            <Row className="probut-row">
              <Col sm={12} className="type">
                <img src={doubt} className="prob-icon-1"></img>
              </Col>
            </Row>
            <Row style={{ marginRight: "0" }}>
              <Col className="type">
                <p style={{ textAlign: "center" }}>
                  Low visibility due to wide distribution network
                </p>
              </Col>
            </Row>
          </Card>
          <Card className="butpro-card">
            <Row className="probut-row">
              <Col sm={6} className="type">
                <img src={doubt} className="prob-icon-1"></img>
              </Col>
            </Row>
            <Row style={{ marginRight: "0" }}>
              <Col className="type">
                <p style={{ textAlign: "center" }}>
                  Increasing instances of brand counterfeit
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col sm={6} className="procol">
          <img src={prob} className="propic"></img>
        </Col>
        <Col sm={3} className="prob-col">
          <Card className="butpro-card">
            <Row className="probut-row">
              <Col sm={6} className="type">
                <img src={doubt} className="prob-icon-1"></img>
              </Col>
            </Row>
            <Row style={{ marginRight: "0" }}>
              <Col className="type">
                <p style={{ textAlign: "center" }}>
                  Lower customer engagement and data inadequacy
                </p>
              </Col>
            </Row>
          </Card>
          <Card className="butpro-card">
            <Row className="probut-row">
              <Col sm={6} className="type">
                <img src={doubt} className="prob-icon-1"></img>
              </Col>
            </Row>
            <Row style={{ marginRight: "0" }}>
              <Col className="type">
                <p style={{ textAlign: "center" }}>Inventory Mismanagement</p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row id={"features"} className="sol-start">
        <Col sm={12}>
          <h2 className="sol">Our Solution</h2>
        </Col>
      </Row>
      <Row className="sec-section">
        <Col sm={4} className="use">
          <Flippy flipOnHover={true} flipDirection="horizontal">
            <FrontSide style={{ boxShadow: "none" }}>
              <Card className="button-card-top">
                <Row className="button-row">
                  <Col sm={12} className="image-col">
                    <img src={Manu} className="image-1" alt="tab photo" />
                  </Col>
                  <Col sm={12} className="type-frnt">
                    <p style={{ marginTop: 0 }}>Manufacturer</p>
                  </Col>
                </Row>
              </Card>
            </FrontSide>
            <BackSide style={{ boxShadow: "none" }}>
              <Card className="button-card-top">
                <Row className="button-row">
                  {/* <Col sm={6} className="image-col">
                      <img src={Manu} className="image-ki" alt="tab photo" />
                    </Col> */}
                  <Col sm={12} className="type-bk">
                    <p style={{ marginBottom: 0 }}>
                      Assign our patent secured image code (ACT: Anti
                      counterfeiting Tags) to each of your product for unique
                      identification
                    </p>
                  </Col>
                </Row>
              </Card>
            </BackSide>
          </Flippy>
        </Col>
        <Col sm={4} className="use">
          <Flippy flipOnHover={true} flipDirection="horizontal">
            <FrontSide style={{ boxShadow: "none" }}>
              <Card className="button-card-top">
                <Row className="button-row">
                  <Col sm={12} className="image-col">
                    <img src={war} className="image-2" alt="tab photo" />
                  </Col>
                  <Col sm={12} className="type-frnt">
                    <p style={{ marginBottom: 0, marginTop: 0 }}>
                      Warehouse Distributor Retailor
                    </p>
                  </Col>
                </Row>
              </Card>
            </FrontSide>
            <BackSide style={{ boxShadow: "none" }}>
              <Card className="button-card-top">
                <Row className="button-row">
                  {/* <Col sm={6} className="image-col">
                      <img src={Manu} className="image-kid" alt="tab photo" />
                    </Col> */}
                  <Col sm={12} className="type-bk">
                    <p style={{ marginBottom: 0 }}>
                      Track and Trace each smart product to secure product
                      diversions and for inventory supervision and management
                    </p>
                  </Col>
                </Row>
              </Card>
            </BackSide>
          </Flippy>
        </Col>
        <Col sm={4} className="use">
          <Flippy flipOnHover={true} flipDirection="horizontal">
            <FrontSide style={{ boxShadow: "none" }}>
              <Card className="button-card-top">
                <Row className="button-row">
                  <Col sm={12} className="image-col">
                    <img src={con} className="image-3" alt="tab photo" />
                  </Col>
                  <Col sm={12} className="type-frnt">
                    <p style={{ marginTop: 0 }}>Happy End Consumers</p>
                  </Col>
                </Row>
              </Card>
            </FrontSide>
            <BackSide style={{ boxShadow: "none" }}>
              <Card className="button-card-top">
                <Row className="button-row">
                  {/* <Col sm={6} className="image-col">
                      <img src={Manu} className="image-kid" alt="tab photo" />
                    </Col> */}
                  <Col sm={12} className="type-bk">
                    <p style={{ marginBottom: 0 }}>
                      Ensure happy and informed customers who can scan and
                      verify authenticity and remain loyal to the brand
                    </p>
                  </Col>
                </Row>
              </Card>
            </BackSide>
          </Flippy>
        </Col>
      </Row>
      <Row className="post-start">
        <Col lg={12}>
          <h2 className="post-head">Post CheqIt</h2>
        </Col>
      </Row>
      <Row className="post">
        <Col sm={12} className="one">
          <Card className="butpost-card">
            <Row className="probut-row">
              <Col sm={12} style={{ display: "contents" }}>
                <img src={post} className="prob-icon"></img>
              </Col>
            </Row>
            <Row style={{ marginRight: "0%" }}>
              <Col className="type">
                <p style={{ textAlign: "center" }}>Inventory Management</p>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col sm={12} className="two">
          <Row style={{ marginRight: "0%" }}>
            <Col sm={3} className="mid-pic">
              <Card className="butpost-card">
                <Row className="probut-row">
                  <Col sm={12} style={{ display: "contents" }}>
                    <img src={post} className="prob-icon"></img>
                  </Col>
                </Row>
                <Row style={{ marginRight: "0%" }}>
                  <Col className="type">
                    <p style={{ textAlign: "center" }}>
                      End to End Supply Chain Visibility
                    </p>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col sm={6}>
              <img className="sol-pic" src={sol}></img>
            </Col>
            <Col sm={3} className="mid-pic">
              <Card className="butpost-card">
                <Row className="probut-row">
                  <Col sm={6} style={{ display: "contents" }}>
                    <img src={post} className="prob-icon"></img>
                  </Col>
                </Row>
                <Row style={{ marginRight: "0%" }}>
                  <Col className="type">
                    <p style={{ textAlign: "center" }}>Product Tracking</p>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col sm={12} className="third">
          <Card className="butpost-card">
            <Row className="probut-row">
              <Col sm={6} style={{ display: "contents" }}>
                <img src={post} className="prob-icon"></img>
              </Col>
            </Row>
            <Row style={{ marginRight: "0%" }}>
              <Col className="type">
                <p style={{ textAlign: "center" }}>
                  Consumer Demographic Analytics
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row className="gra-start">
        <Col>
          <h2 className="post-head">Graphs</h2>
        </Col>
      </Row>
      <Row className="gra" style={{ justifyContent: "flex-end" }}>
        <Col sm={6}>
          <Flippy flipOnHover={true} flipDirection="vertical">
            <FrontSide>
              <Card className="gra-card">
                <Row>
                  <Col sm={12}>
                    <h3 className="gra-head">Where we stand today?</h3>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <img className="gra-pic" src={before}></img>
                  </Col>
                </Row>
              </Card>
            </FrontSide>
            <BackSide>
              <Card className="gra-card">
                <Row>
                  <Col sm={12}>
                    <h3 className="gra-head">What we can achieve together?</h3>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <img className="gra-pic" src={after}></img>
                  </Col>
                </Row>
              </Card>
            </BackSide>
          </Flippy>
        </Col>
      </Row>
      <Row className="workhead">
        <Col>
          <h2 className="wor">How CheqIt Works</h2>
        </Col>
      </Row>
      <Row className="work">
        <Col sm={12}>
          <div className="vid">
            <ReactPlayer
              className="player"
              controls="true"
              url={vid}
              light={thumb}
            />
          </div>
        </Col>
      </Row>
      <Row className="blog-row" id={"blog"}>
        <Col>
          <h2 className="blog-head">More about Counterfeiting</h2>
        </Col>
      </Row>
      <Row className="blog">
        <Col sm={6}>
          <img src={blog} className="blim"></img>
        </Col>
        <Col sm={6} style={{ paddingRight: "2%" }}>
          <Row>
            <Col>
              <Marquee key={1} velocity={30}>
                <Mar>
                  <Row style={{ marginLeft: "0%" }}>
                    <Col
                      sm={12}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingRight: 0,
                      }}
                    >
                      <img src={coin} className="image-bl"></img>
                    </Col>
                  </Row>
                  <Row className="bl-con">
                    <Col
                      sm={12}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "2%",
                      }}
                    >
                      <p className="bcon">
                        Counterfeiting, manufacture of false money for gain, a
                        kind of forgery in that something is copied so as to
                        defraud by passing it for the original or..
                        <a
                          href="https://www.britannica.com/topic/counterfeiting"
                          target="_blank"
                        >
                          Read More
                        </a>
                      </p>
                    </Col>
                  </Row>
                </Mar>
                <Mar>
                  <Row>
                    <Col
                      sm={12}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingRight: 0,
                      }}
                    >
                      <img src={auto} className="image-bl"></img>
                    </Col>
                  </Row>
                  <Row className="bl-con">
                    <Col
                      sm={12}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "2%",
                      }}
                    >
                      <p className="bcon">
                        According to the Authentication Solution Providers’
                        Association (ASPA), the overall counterfeit products
                        across various industries in India are..
                        <a
                          href="https://auto.economictimes.indiatimes.com/news/auto-components/opinion-its-time-to-call-a-fake-a-fake/74225240"
                          target="_blank"
                        >
                          Read More
                        </a>
                      </p>
                    </Col>
                  </Row>
                </Mar>
                <Mar>
                  <Row
                    style={{
                      fontFamily: "Roboto",
                      color: "#00000",
                    }}
                  >
                    <Col
                      sm={12}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingRight: 0,
                      }}
                    >
                      <img src={med} className="image-bl"></img>
                    </Col>
                  </Row>
                  <Row className="bl-con">
                    <Col
                      sm={12}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "2%",
                      }}
                    >
                      <p className="bcon">
                        $200 Billion Pharma Counterfeit Drug Market Growing by
                        20% Per Year alarming growth i.e. twice the rate of the
                        legitimate pharmaceutical market, and..
                        <a
                          href="https://www.packworld.com/home/article/21102806/200-billion-pharma-counterfeit-drug-market-growing-by-20-per-year"
                          target="_blank"
                        >
                          Read More
                        </a>
                      </p>
                    </Col>
                  </Row>
                </Mar>
              </Marquee>
            </Col>
          </Row>
          <Row>
            <Col>
              <Marquee key={2} velocity={40}>
                <Mar>
                  <Row>
                    <Col
                      sm={12}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingRight: 0,
                      }}
                    >
                      <img src={good} className="image-bl"></img>
                    </Col>
                  </Row>
                  <Row className="bl-con">
                    <Col
                      sm={12}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "2%",
                      }}
                    >
                      <p className="bcon">
                        Fast-moving consumer goods (FMCG) packaging remains the
                        worst affected industry due to fraudulent products which
                        account for over 30%..
                        <a
                          href="https://brandequity.economictimes.indiatimes.com/news/business-of-brands/fmcg-loses-30-of-its-business-due-to-counterfeit-products/56965353"
                          target="_blank"
                        >
                          Read More
                        </a>
                      </p>
                    </Col>
                  </Row>
                </Mar>
                <Mar>
                  <Row>
                    <Col
                      sm={12}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingRight: 0,
                      }}
                    >
                      <img src={pest} className="image-bl"></img>
                    </Col>
                  </Row>
                  <Row className="bl-con">
                    <Col
                      sm={12}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "2%",
                      }}
                    >
                      <p className="bcon">
                        There is a significant share of non-genuine pesticides
                        in the Indian market, which can be counterfeit,
                        spurious, adulterated or sub-standard..
                        <a
                          href="https://kashmirreader.com/2020/06/14/fake-pesticide-mafia-and-destruction-of-apple-industry/"
                          target="_blank"
                        >
                          Read More
                        </a>
                      </p>
                    </Col>
                  </Row>
                </Mar>
                <Mar>
                  <Row>
                    <Col
                      sm={12}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingRight: 0,
                      }}
                    >
                      <img src={bev} className="image-bl"></img>
                    </Col>
                  </Row>
                  <Row className="bl-con">
                    <Col
                      sm={12}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "2%",
                      }}
                    >
                      <p className="bcon">
                        Counterfeit alcohol is defined as “fake or illegally
                        produced alcohol made in unlicensed distilleries or
                        people’s homes, packaged to look like..
                        <a
                          href="https://alcoholchange.org.uk/blog/2020/counterfeit-alcohol-getting-to-grips-with-fake-booze#:~:text=Recent%20seizures%20of%20counterfeit%20alcohol,of%20fake%20Smirnoff%20were%20found"
                          target="_blank"
                        >
                          Read More
                        </a>
                      </p>
                    </Col>
                  </Row>
                </Mar>
              </Marquee>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="blog-slides">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={coin} alt="First slide" />
            <Carousel.Caption>
              <p className="bcon">
                Counterfeiting, manufacture of false money for gain, a kind of
                forgery in that something is copied so as to defraud by passing
                it for the original or..
                <a
                  href="https://www.britannica.com/topic/counterfeiting"
                  target="_blank"
                >
                  Read More
                </a>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src={good}
              alt="Third slide"
              style={{ height: "39vh" }}
            />
            <Carousel.Caption>
              <p className="bcon">
                Fast-moving consumer goods (FMCG) packaging remains the worst
                affected industry due to fraudulent products which account for
                over 30%..
                <a
                  href="https://brandequity.economictimes.indiatimes.com/news/business-of-brands/fmcg-loses-30-of-its-business-due-to-counterfeit-products/56965353"
                  target="_blank"
                >
                  Read More
                </a>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={med} alt="Third slide" />
            <Carousel.Caption>
              <p className="bcon">
                $200 Billion Pharma Counterfeit Drug Market Growing by 20% Per
                Year alarming growth i.e. twice the rate of the legitimate
                pharmaceutical market, and..
                <a
                  href="https://www.packworld.com/home/article/21102806/200-billion-pharma-counterfeit-drug-market-growing-by-20-per-year"
                  target="_blank"
                >
                  Read More
                </a>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row className="com-row" id={"about"}>
        <Col>
          <h2 className="com-head">Our Company</h2>
        </Col>
      </Row>
      <Row className="about">
        <Col sm={12}>
          <Row className="about" style={{ marginRight: "2%" }}>
            <Col sm={4} style={{ paddingRight: "0%" }}>
              <Row className="com-content">
                <i class="fa fa-info-circle" aria-hidden="true"></i>
              </Row>
              <Row className="com-content">
                <h3 className="com-header">About Us</h3>
              </Row>
              <Row className="com-content">
                <p className="com-con">
                  We're an association of youthful and innovative entrepreneurs.
                  We help you build stronger, more secure and transparent supply
                  chain and help your consumers verify authenticity of your
                  products to make them your forever loyal customers CheqIt came
                  into existence with an only aim to secure and grow your brand
                  value and enable trust in your customers
                </p>
              </Row>
            </Col>
            <Col sm={4} style={{ paddingRight: "0%" }}>
              <Row className="com-content">
                <i class="fa fa-bolt" aria-hidden="true"></i>
              </Row>
              <Row className="com-content">
                <h3 className="com-header">Our Mission</h3>
              </Row>
              <Row className="com-content">
                <p className="com-con">
                  We at CheqIt are committed to provide customised
                  Anti-Counterfeiting solutions to protect your brand through
                  continual innovations and keeping pace with your end customers
                  expectations by delivering authentic products to ensure better
                  customer satisfaction, enhanced productivity, thus sustainable
                  growth and business profitability
                </p>
              </Row>
            </Col>
            <Col sm={4} style={{ paddingRight: "0%" }}>
              <Row className="com-content">
                <i class="fa fa-users" aria-hidden="true"></i>
              </Row>
              <Row className="com-content">
                <h3 className="com-header">Our Vision</h3>
              </Row>
              <Row className="com-content">
                <p className="com-con">
                  Making CheqIt as one of the leading  Anti–Counterfeiting
                  Solution Provider for the established and upcoming brands by
                  delivering genuine products to their target audience , thus 
                  becoming a  brand custodian partner in the emerging
                  counterfeiting domain.
                </p>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Footer
        columns={[
          {
            title: "CheqIt",
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
                url: "#about",
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
                icon: <i class="fa foot fa-envelope-o" aria-hidden="true"></i>,
                title: "chegit@gmail.com",
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
      ,
    </div>
  );
}
