import React, { Component } from 'react';
import './landing.css';
import DefaultButton from "./../../components/buttons/default-button/button"
import ProductList from "./../../components/product/list/list"
import Header from "./../../containers/header/header";

class Landing extends Component {
  render() {
    return (
      <div>
      <Header/>
      <div className="main-container">
        <ProductList/>
      </div>
      </div>
    );
  }
}

export default Landing;
