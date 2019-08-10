import React, { Component } from 'react';
import styles from './view.css';
import Modal from 'react-modal';
import DefaultButton from "../../product/item/item";

Modal.setAppElement('#root');


class ProductView extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const { product } = this.props;
    return (
        <div className={"product-view-container"}>
          <h2>{ product.title }</h2>
          <button onClick={this.closeModal}>Back</button>
          <div className={"product-view-img-container"}>
           <img src={product['image']} alt="Avatar"/>
          </div>
           <div className={"product-view-info-container"}>
             <span> {product.description} </span>
             <span> {"Price: "} {product.price} </span>
             <div className="product-view-button-container">
               <DefaultButton value={'Get one'}/>
             </div>
           </div>
        </div>
    );
  }
}

export default ProductView;
