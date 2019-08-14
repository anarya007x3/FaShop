import React, { Component } from 'react';
import './item.css';
import DefaultButton from "./../../buttons/default-button/button"
import ProductModal from "../../modals/productModal/modal"
import {Link} from "react-router-dom";


class ProductItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  onProductItemClick() {
    // func(item);
    // this.openModal();
  }

  render() {
    const { product } = this.props;
    return (
      product ? (<div onClick={() => {this.onProductItemClick()}} className="product-item-container">
        <div className={"product-image-link-container"}>
          <Link to={{
            pathname: "product/" + product.id,
            state: {
              product: product
            }
          }}
          className={"product-link-item"}>
            <img src={product['image']} alt="Avatar"/>
          </Link>
        </div>
        <div className={"product-info-container"}>
          <h3> {product.title} </h3>
          <span> {product.description} </span>
          <div className={"product-view-info-bottom-container"}>
            <div className={"product-view-info-price-container"}>
              <span> {product.price}{" ₴"} </span>
            </div>
            <div className="product-view-button-container">
              <DefaultButton value={'Get one'}/>
            </div>
          </div>
        </div>
      </div>) : null
    );
  }
}

export default ProductItem;
