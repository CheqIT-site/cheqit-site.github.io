import React, { useState } from "react";
import "./hom.css";
import {
  Row,
  Col,
  Card,
  Modal,
  ModalBody,
  Container,
  Carousel,
} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import thumb from "../images/1.svg";
import main from "../images/main.svg";
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

import Zoom from "react-reveal/Zoom";
import blog from "../images/bl.jpg";
import Footer from "rc-footer";
import "rc-footer/assets/index.css";
import prob from "../images/prob.svg";
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
import HomeNav from "../HomeNavbar/HomeNavbar";

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
 

  return (
    <div className="main-container">
      <Row>
        <HomeNav />
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
