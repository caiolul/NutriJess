import React from 'react';
import { Navbar, NavbarBrand, Media } from 'reactstrap';

const NavContainer: React.FC = () => {
  return (
    <div>
      <Navbar color="light" light fixed="top" shadow="true" expand="md">
        <Media>
          <Media object data-src="img/logo.png" />
        </Media>
        <NavbarBrand>NutriJess</NavbarBrand>
      </Navbar>
    </div>
  );
};
export default NavContainer;
