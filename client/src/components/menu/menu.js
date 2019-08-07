import React, { Component } from 'react';
import './menu.css';

class NavigationMenu extends Component {
  render() {
    return (
      <div className="navigation-menu-container">
        <ul className="navigation-menu-ul">
          <li className="navigation-menu-li active">
            <a className="navigation-menu-item active" href="\">Home</a>
          </li>
          <li className="navigation-menu-li">
            <a className="navigation-menu-item" href="\products">Products</a>
          </li>
          <li className="navigation-menu-li">
            <a className="navigation-menu-item" href="\contacts">Contacts</a>
          </li>
          <li className="navigation-menu-li">
            <a  className="navigation-menu-item" href="\about">About</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavigationMenu;
