import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import { Image } from "react-bootstrap";
import "./Footer.css";
import logo from "../assets/logo.png";

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>Not sure about what you want? Contact me and let's talk</p>
        <Image src={logo} style={{ margin: "1em" }} />
        <p style={{ color: "gray" }}>
          © 2020 Catalina Campos. All right reserved
        </p>
      </footer>
    );
  }
}

export default Footer;
