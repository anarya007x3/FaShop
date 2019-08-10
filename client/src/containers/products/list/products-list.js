import React, { Component } from 'react';
import './products-list.css';
import ProductList from "../../../components/product/list/list";


class ProductsList extends Component {
  render() {
    return (
      <div className="main-container">
        <ProductList/>
      </div>
    );
  }
}

export default ProductsList;
