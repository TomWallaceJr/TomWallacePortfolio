import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
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
      <Navbar.Brand className="menu-label">Menu</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navbar">
          <Nav.Link as={Link} to="/" className="navlink">
            About Me
          </Nav.Link>
          <Nav.Link as={Link} to="/portfolio" className="navlink">
            My Portfolio
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="navlink">
            Contact Me
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
