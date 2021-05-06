import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      className="nav-container"
      variant="dark"
    >
      <Navbar.Brand className="brand">Menu</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav.Link as={Link} to="/portfolio">
          My Portfolio
        </Nav.Link>
        <Nav.Link as={Link} to="/contact">
          Contact Me
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
