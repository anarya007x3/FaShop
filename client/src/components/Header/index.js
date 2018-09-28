import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import logo from 'images/logo.svg';
import 'styles/Header.scss';

class Header extends Component {
  render() {
    return (
      <Navbar className="Header">
        <header className="Header-header">
          <h1 className="Header-title">FaShop</h1>
        </header>
        <div></div>
      </Navbar>
    );
  }
}

export default Header;
