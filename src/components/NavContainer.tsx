import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';

const NavContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar bg="light" expand="lg" fixed='top'>
  <Navbar.Brand>NutriJess</Navbar.Brand>
  {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
  {/* <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
  </Navbar.Collapse> */}
</Navbar>
    // <div>
    //   <Navbar color="light" light fixed="top" shadow="true" expand="md">
    //     <NavbarBrand href="/">NutriJess</NavbarBrand>
    //     <NavbarToggler onClick={toggle} />
    //   </Navbar>
    // </div>
  );
};
export default NavContainer;
