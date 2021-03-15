import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavContainer: React.FC = () => {
  return (
    <Navbar
      variant="light"
      bg="light"
      expand="lg"
      fixed="top"
      className="shadow"
    >
      <img
        src="/img/logo.png"
        width="60"
        height="60"
        className="d-inline-block align-top"
        alt="Nutri logo"
      />
      <Navbar.Brand>NutriJess</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {/* <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
      </Navbar.Collapse> */}
    </Navbar>
  );
};
export default NavContainer;
