import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Button, Image } from "react-bootstrap";
import "./Home.css";
import foto4 from "../assets/foto4.jpg";
import meeting from "../assets/meeting.jpg";
import ux from "../assets/ux.jpg";
import company from "../assets/company.jpg";
import code from "../assets/code.jpg";

class Home extends Component {
  render() {
    return (
      <Container fluid style={{ padding: 0 }}>
        <Jumbotron
          style={{ backgroundImage: `url(${foto4})`, backgroundSize: "cover" }}
          className="jumbotron"
        >
          <div className="text-inf">
            <h2>CLEAN SIMPLE & MINIMAL</h2>
            <p className="p-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
            <Link to="/about">
              <Button className="about-us">ABOUT US</Button>
            </Link>
          </div>
        </Jumbotron>
        <div className="welcome-home">
          <p className="p-text-about">YOU ARE WELCOME</p>
        </div>
        <div className="objectives-container">
          <div className="col-objectives">
            <h5>CREATIVE CONCEPT</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="col-objectives">
            <h5>RIGHT SOLUTION</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="col-objectives">
            <h5>NO CODING REQUIRED</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="about">
          <Image src={meeting} className="img-home" style={{ margin: "3em" }} />
          <div className="meeting">
            <p>CREATIVE IN MIND</p>
            <h4>OUR CREATIVITY HAS NO LIMIT</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="start-proyect">
          <div>
            <h5 style={{ margin: "0 1em 0 1em" }}>LETS START A PROYECT</h5>
            <p style={{ margin: "0 1em 1em 1em" }}>
              It will be fun, I swear. Please work with me, I need money
            </p>
          </div>
          <div>
            <Link to="/contact">
              <Button className="contact-us" style={{ margin: "0 0 1em 0" }}>
                CONTACT US
              </Button>
            </Link>
          </div>
        </div>
        <h5
          style={{
            marginTop: "1em",
            textAlign: "center",
            backgroundColor: "#EFEFEF",
            margin: 0,
            padding: "2em"
          }}
        >
          OUR AMAZING WORK
        </h5>
        <div className="portfolio">
          <div
            style={{
              width: "850px",
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap"
            }}
          >
            <Image src={ux} roundedCircle className="portfolio-image" />
            <div className="portfolio-about-1">
              <p style={{ margin: 0 }}>CREATIVE DESIGN</p>
              <h5>ART DIRECTION TO DHAKA ASIAN HIGHWAY</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button>VIEW PROYECT</Button>
            </div>
          </div>
        </div>
        <div className="portfolio">
          <div
            style={{
              width: "850px",
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap"
            }}
          >
            <div className="portfolio-about-1">
              <p style={{ margin: 0 }}>BUSINESS PLANNING</p>
              <h5>BUSINESS PLANNING & STRATEGY FOR RAINY DESIGN</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button>VIEW PROYECT</Button>
            </div>
            <Image src={company} roundedCircle className="portfolio-image" />
          </div>
        </div>
        <div className="portfolio">
          <div
            style={{
              width: "850px",
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap"
            }}
          >
            <Image src={code} roundedCircle className="portfolio-image" />
            <div className="portfolio-about-1">
              <p style={{ margin: 0 }}>UI DESIGN</p>
              <h5>BRAND IDENTITY & MARKETING FOR STORM & RAIN</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button>VIEW PROYECT</Button>
            </div>
          </div>
        </div>
        <footer>ji</footer>
      </Container>
    );
  }
}

export default Home;
