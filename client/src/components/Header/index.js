import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavbarBrand, NavLink, Button} from 'reactstrap';
import logo from 'images/logo.svg';
import 'styles/Header.scss';


class Header extends Component {

  render() {
    return (
      <Navbar className="Header">
        <NavbarBrand className="Header-header">
          <h2 className="Header-title">FaShop</h2>
        </NavbarBrand>
        <Nav className="Header-nav">
          <NavItem className="Header-nav-item">
             <NavLink href="/">Products</NavLink>
          </NavItem>
          <NavItem className="Header-nav-item">
            <NavLink href="/">Portfolio</NavLink>
          </NavItem>
          <NavItem className="Header-nav-item">
            <NavLink href="/">Contacts</NavLink>
          </NavItem>
          <NavItem className="Header-nav-item">
            <NavLink href="/">About</NavLink>
          </NavItem>
        </Nav>
        <Button outline color="info">call us</Button>
      </Navbar>
    );
  }
}

export default Header;
