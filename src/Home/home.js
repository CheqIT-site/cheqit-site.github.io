import React, { useState } from "react";
import "./hom.css";
import { Row, Col, Card, Modal, ModalBody } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import logo from "../images/1.svg";
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

// import Flippy, { FrontSide, BackSide } from "react-flippy";
const Mar = styled.div`
  width: 16vw;
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
      <Row className="nav">
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
      </Row>
      <Row className="central-theme">
        <Col className="main-left" sm={{ span: 6, offset: 2 }}>
          <Row>
            <p className="brand">CHEQIT</p>
            <p className="tag">Your Brand Custodian</p>
            <p className="que">
              {" "}
              Anti-Counterfeiting solutions to protect your brand through
              continual innovations and keeping pace with your end customers
              expectations{" "}
              <span className="over">
                by delivering authentic products to ensure better customer
                satisfaction, enhanced productivity, thus sustainable growth and
                business profitability
              </span>
            </p>
          </Row>
          <Row>
            <Button className="btn-learn">
              <span>Learn More</span>
            </Button>
          </Row>
        </Col>
        <Col className="main-right" sm={4}>
          <img src={main} className="qrpic"></img>
        </Col>
      </Row>
      <Row className="prob-start">
        <h2 className="prob-head">Market Problems</h2>
      </Row>
      <Row className="prob">
        <Col sm={3} style={{ display: "grid" }}>
          <Card className="butpro-card">
            <Row className="probut-row">
              <Col sm={12} className="type">
                <img src={doubt} className="prob-icon"></img>
                <p style={{ marginBottom: 0, textAlign: "center" }}>
                  Low visibility due to wide distribution network
                </p>
              </Col>
            </Row>
          </Card>
          <Card className="butpro-card">
            <Row className="probut-row">
              <Col sm={6} className="type">
                <img src={doubt} className="prob-icon"></img>
                <p style={{ marginBottom: 0, textAlign: "center" }}>
                  Increasing instances of brand counterfeit
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col sm={6} className="procol">
          <img src={prob} className="propic"></img>
        </Col>
        <Col sm={3} style={{ display: "grid" }}>
          <Card className="butpro-card">
            <Row className="probut-row">
              <Col sm={6} className="type">
                <img src={doubt} className="prob-icon"></img>
                <p style={{ marginBottom: 0, textAlign: "center" }}>
                  Lower customer engagement and data inadequacy
                </p>
              </Col>
            </Row>
          </Card>
          <Card className="butpro-card">
            <Row className="probut-row">
              <Col sm={6} className="type">
                <img src={doubt} className="prob-icon"></img>
                <p style={{ marginBottom: 0, textAlign: "center" }}>
                  Inventory Mismanagement
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row id={"features"}>
        <h2 className="sol">Our Solution</h2>
      </Row>
      <Row className="sec-section">
        <Col sm={4} className="use">
          <Flippy flipOnHover={true} flipDirection="horizontal">
            <FrontSide style={{ boxShadow: "none" }}>
              <Card className="button-card-top">
                <Row className="button-row">
                  <Col sm={6} className="image-col">
                    <img src={Manu} className="image-1" alt="tab photo" />
                  </Col>
                  <Col sm={6} className="type-frnt">
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
                  <Col sm={6} className="type-bk">
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
                  <Col sm={6} className="image-col">
                    <img src={war} className="image-2" alt="tab photo" />
                  </Col>
                  <Col sm={6} className="type-frnt">
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
                  <Col sm={6} className="type-bk">
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
                  <Col sm={6} className="image-col">
                    <img src={con} className="image-3" alt="tab photo" />
                  </Col>
                  <Col sm={6} className="type-frnt">
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
                  <Col sm={6} className="type-bk">
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
      <Row>
        <h2 className="post-head">Post CHEQIT</h2>
      </Row>
      <Row className="post">
        <Col sm={12} className="one">
          <Card className="butpro-card">
            <Row className="probut-row">
              <Col sm={6} className="type">
                <img src={post} className="prob-icon"></img>
                <p style={{ marginBottom: 0, textAlign: "center", zIndex: 1 }}>
                  Inventory Management
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col sm={12} className="two">
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Col sm={3} className="mid-pic">
              <Card className="butpro-card">
                <Row className="probut-row">
                  <Col sm={6} className="type">
                    <img src={post} className="prob-icon"></img>
                    <p style={{ marginBottom: 0, textAlign: "center" }}>
                      End to End Supply Chain Visibility
                    </p>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col sm={4} style={{ display: "contents" }}>
              <img className="sol-pic" src={sol}></img>
            </Col>
            <Col sm={3} className="mid-pic">
              <Card className="butpro-card">
                <Row className="probut-row">
                  <Col sm={6} className="type">
                    <img src={post} className="prob-icon"></img>
                    <p style={{ marginBottom: 0, textAlign: "center" }}>
                      Product Tracking
                    </p>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col sm={12} className="third">
          <Card className="butpro-card">
            <Row className="probut-row">
              <Col sm={6} className="type">
                <img src={post} className="prob-icon"></img>
                <p style={{ marginBottom: 0, textAlign: "center" }}>
                  Consumer Demographic Analytics
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <h2 className="post-head">Graphs</h2>
      </Row>
      <Row className="gra">
        <Col sm={6} style={{ marginLeft: "47%" }}>
          <Flippy flipOnHover={true} flipDirection="vertical">
            <FrontSide>
              <Card className="gra-card">
                <Row>
                  <Col sm={12}>
                    <h3 className="gra-head">Where we stand today?</h3>
                  </Col>
                </Row>
                <Row>
                  <Col sm={8}>
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
                  <Col sm={8}>
                    <img className="gra-pic" src={after}></img>
                  </Col>
                </Row>
              </Card>
            </BackSide>
          </Flippy>
        </Col>
      </Row>
      <Row className="workhead">
        <h2 className="wor">How CHEQIT Works</h2>
      </Row>
      <Row className="work">
        <Col sm={12}>
          <div className="vid">
            <ReactPlayer
              className="player"
              controls="true"
              url={vid}
              light={logo}
            />
          </div>
        </Col>
      </Row>
      <Row className="blog-row" id={"blog"}>
        <h2 className="blog-head">More about Counterfeiting</h2>
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
                  <Row
                    style={{
                      fontFamily: "Roboto",
                      color: "#00000",
                      padding: "1vh 0vw",
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
                      <img src={eur} className="image-bl"></img>
                    </Col>
                  </Row>
                  <Row>
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
                        defraud by passing it for the original or genuine
                        article.
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
                  <Row
                    style={{
                      fontFamily: "Roboto",
                      color: "#00000",
                      padding: "1vh 0vw",
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
                      <img src={eur} className="image-bl"></img>
                    </Col>
                  </Row>
                  <Row>
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
                      padding: "1vh 0vw",
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
                      <img src={eur} className="image-bl"></img>
                    </Col>
                  </Row>
                  <Row>
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
                  <Row
                    style={{
                      fontFamily: "Roboto",
                      color: "#00000",
                      padding: "1vh 0vw",
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
                      <img src={eur} className="image-bl"></img>
                    </Col>
                  </Row>
                  <Row>
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
                        account for over 30% of..
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
                  <Row
                    style={{
                      fontFamily: "Roboto",
                      color: "#00000",
                      padding: "1vh 0vw",
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
                      <img src={eur} className="image-bl"></img>
                    </Col>
                  </Row>
                  <Row>
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
                  <Row
                    style={{
                      fontFamily: "Roboto",
                      color: "#00000",
                      padding: "1vh 0vw",
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
                      <img src={eur} className="image-bl"></img>
                    </Col>
                  </Row>
                  <Row>
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
                        people’s homes, packaged to look like well-known brands”
                        
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
      <Row className="com-row" id={"about"}>
        <h2 className="com-head">Our Company</h2>
      </Row>
      <Row className="about">
        <Col sm={12}>
          <Row className="about" style={{ marginRight: "2%" }}>
            <Col sm={4} style={{ margin: "3%" }}>
              <Row
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <i class="fa fa-info-circle" aria-hidden="true"></i>
              </Row>
              <Row
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <h3 className="com-header">About Us</h3>
              </Row>
              <Row
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
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
            <Col sm={4} style={{ margin: "3%" }}>
              <Row
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <i class="fa fa-bolt" aria-hidden="true"></i>
              </Row>
              <Row
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <h3 className="com-header">Our Mission</h3>
              </Row>
              <Row
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
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
            <Col sm={4} style={{ margin: "3%" }}>
              <Row
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <i class="fa fa-users" aria-hidden="true"></i>
              </Row>
              <Row
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <h3 className="com-header">Our Vision</h3>
              </Row>
              <Row
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <p className="com-con">
                  Making CheqiT as one of the leading  Anti–Counterfeiting
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
            title: "Vector Credit",
            url: "https://yuque.com",
            description: "知识创作与分享工具",
            openExternal: true,
          },
        ]}
        columns={[
          {
            title: "Vector Credit",
            url: "https://yuque.com",
            description: "知识创作与分享工具",
            openExternal: true,
          },
        ]}
        bottom="Made with ❤️ by CHEQIT Product Head"
      />
      ,
    </div>
  );
}
