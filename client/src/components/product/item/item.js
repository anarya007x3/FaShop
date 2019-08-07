import React, { Component } from 'react';
import './item.css';
import DefaultButton from "./../../buttons/default-button/button"


class ProductItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  render() {
    const { product } = this.props;
    console.log(product);
    return (
      product ? (<div className="product-item-container">
        <img src={product['image']} alt="Avatar"/>
        <div className={"product-info-container"}>
          <h3> {product.title} </h3>
          <span> {product.description} </span>
          <span> {"Price: "} {product.price} </span>

          <div className="product-button-container">
            <DefaultButton value={'Get one'}/>
          </div>
        </div>
      </div>) : null
    );
  }
}

export default ProductItem;
