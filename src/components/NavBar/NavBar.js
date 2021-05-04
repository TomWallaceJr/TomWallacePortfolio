import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBarCSS from './NavBar.module.css';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">
        Thomas Wallace
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav.Link className="navlink" as={Link} to="/about">
          About Me
        </Nav.Link>
        <Nav.Link className="navlink" as={Link} to="/portfolio">
          My Portfolio
        </Nav.Link>
        <Nav.Link className="navlink" as={Link} to="/contact">
          Contact Me
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
