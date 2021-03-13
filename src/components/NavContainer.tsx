import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';

const NavContainer: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" fixed='top'>
  <Navbar.Brand>NutriJess</Navbar.Brand>
  {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
  {/* <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
  </Navbar.Collapse> */}
</Navbar>
  );
};
export default NavContainer;
