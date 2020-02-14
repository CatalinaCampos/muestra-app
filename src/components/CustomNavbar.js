import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import "./CustomNavbar.css";

class CustomNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Nav className="mx-auto">
            <a href="/">
              <img src={logo} style={{ marginTop: "1em" }} />
            </a>
          </Nav>
        </Navbar>
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="mx-auto">
              <Nav.Link href="/about">Sobre nosotros</Nav.Link>
              <Nav.Link href="/projects">Proyectos</Nav.Link>
              <Nav.Link href="/services">Servicios</Nav.Link>
              <Nav.Link href="/contact">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default CustomNavbar;
