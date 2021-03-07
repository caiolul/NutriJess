import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';

const NavContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="light" light fixed="top" shadow="true" expand="md">
        <NavbarBrand href="/">NutriJess</NavbarBrand>
        <NavbarToggler onClick={toggle} />
      </Navbar>
    </div>
  );
};
export default NavContainer;
