import React, { Component } from 'react';
import './header.css';
import NavigationMenu from "./../../components/menu/menu"

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <header className="main-header">
          <NavigationMenu/>
          <h2 className="header-title">Welcome to FaShop.</h2>
        </header>
      </div>
    );
  }
}

export default Header;
