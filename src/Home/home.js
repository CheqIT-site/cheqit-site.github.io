import React, { useState } from "react";
import "./hom.css";
import {
  Row,
  Col,
} from "react-bootstrap";
import AOS from 'aos';
// import Button from "react-bootstrap/Button";
// import thumb from "../images/1.svg";
import main from "../images/topImage.svg";
import blur from "../images/translucent one.svg";
// import Icon from "@material-ui/core/Icon";
// import { Link } from "react-router-dom";
// import Flippy, { FrontSide, BackSide } from "react-flippy";
// import { makeStyles } from "@material-ui/core/styles";
// import Manu from "../images/manu.svg";
// import war from "../images/ware.svg";
// import con from "../images/cost.svg";
// import ReactPlayer from "react-player";
// import vid from "../images/vid.mp4";
// import Marquee from "react-marquee-slider";
// import styled from "styled-components";

// import Zoom from "react-reveal/Zoom";
// import blog from "../images/bl.jpg";
import Footer from "rc-footer";
import "rc-footer/assets/index.css";
// import prob from "../images/prob.svg";
// import doubt from "../images/doubt.svg";
// import sol from "../images/sol.svg";
// import post from "../images/post.svg";
// import before from "../images/before.png";
// import after from "../images/After.png";
// import gr from "../images/graph.jpg";
// import { Link as scroll } from "react-scroll";
// import { HashLink } from "react-router-hash-link";
// import bev from "../images/bev.jpg";
// import pest from "../images/pest.jpg";
// import good from "../images/good.jpg";
// import med from "../images/med.jpg";
// import coin from "../images/coin.jpg";
// import auto from "../images/auto.jpg";
import HomeNav from "../HomeNavbar/HomeNavbar";
import Features from "../Features/feat";

export default function Home() {
  AOS.init();
  return (
    <div className="main-container">
      <Row>
        <HomeNav />
      </Row>
      <Row className="topDiv">
        <Col lg={{ span: 4, offset: 1 }} data-aos="fade-right">
          <Row>
            <Col>
              <p className="tagline">A tagline that explains why you rock!</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="topText">
                Anti-Counterfeiting solutions to protect your brand through
                continual innovations and keeping pace with your end customers
                expectations by delivering authentic products to ensure better
                customer satisfaction, enhanced productivity, thus sustainable
                growth and business profitability
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="tryNow">
                <p className="tryNow-text">Try Now</p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg={7} className="imageColumn">
          <img src={main} alt="main" className="topImage" data-aos="fade-left" data-aos-duration="1000"/>
        </Col>
      </Row>
      <Row style={{marginBottom: "8vh"}}>
        <Col lg={5} className="blur-bg" >
          <img src={blur} alt="blur" className="blur-bg-image" data-aos="fade-up" data-aos-duration="500"/>
          <div className="blurDiv" data-aos="fade-up" data-aos-duration="1000">
            <Row>
              <Col>
                <p className="tagline">What we do?</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="topText">
                  In a world full of competition, how CheQIT will help you to
                  stand out and grow
                </p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col>
          <Row>
            <Col className="wwd-col" style={{justifyContent: "center"}}>
              <div className="wwd-box" data-aos="fade-down-right" data-aos-duration="1000">
                <p className="wwd-text">Give you up to <span className="wwd-text2">10x customer</span> engagement</p>
              </div>
            </Col>
            <Col className="wwd-col" style={{justifyContent: "center", alignItems:"flex-end"}}>
              <div className="wwd-box" data-aos="fade-down-left" data-aos-duration="1000">
                <p className="wwd-text">End-to-End <span className="wwd-text2">Product Tracking</span></p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="wwd-col">
              <div className="wwd-box" data-aos="fade-up-right" data-aos-duration="1000">
                <p className="wwd-text">Give you a <span className="wwd-text2">Competitive Edge</span></p>
              </div>
            </Col>
            <Col className="wwd-col" style={{alignItems:"flex-end"}}>
              <div className="wwd-box" data-aos="fade-up-left" data-aos-duration="1000">
                <p className="wwd-text">Better <span className="wwd-text2">Market Knowledge</span> and Analysis</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Features />
        </Col>
      </Row>
      {/* <Row className="workhead">
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
              <Marquee key={2} velocity={32}>
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
      </Row> */}
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
                title: "cheqit@gmail.com",
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
        backgroundColor="#001449"
      />
      ,
    </div>
  );
}
