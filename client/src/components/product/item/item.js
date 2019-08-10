import React, { Component } from 'react';
import './item.css';
import DefaultButton from "./../../buttons/default-button/button"
import ProductModal from "../../modals/productModal/modal"


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

  onProductItemClick(func, item) {
    func(item);
    this.openModal();
  }

  render() {
    const { modalIsOpen } = this.state;
    const { product, onProductItemClick } = this.props;
    return (
      product ? (<div onClick={() => {this.onProductItemClick(onProductItemClick, product)}} className="product-item-container">
        <ProductModal product={product} modalIsOpen={modalIsOpen}/>

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
