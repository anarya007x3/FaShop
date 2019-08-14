import React, { Component } from 'react';
import styles from './view.css';
import IconBackArrow from '../../../svg/icons';
import Modal from 'react-modal';
import DefaultButton from "./../../buttons/default-button/button";
import {Link} from "react-router-dom";

Modal.setAppElement('#root');


class ProductView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }
  render() {
    const { product } = this.props.location.state;
    return (
        product ? (<div className={"product-view-container"}>
          <div className={"product-view-top-container"}>
            <Link className={"icon-back-arrow-link"} to={"/products"}>
              <IconBackArrow/>
            </Link>
            <h1>{ product.title }</h1>
          </div>
          <div className={"product-view-middle-container"}>
            <div className={"product-view-img-container"}>
              <img src={product['image']} alt="Avatar"/>
            </div>
            <div className={"product-view-info-container"}>
              <div className={"product-view-info-desc-container"}>
                <h4>Description</h4>
                <span> {product.description} </span>
              </div>
              <div className={"product-view-info-bottom-container"}>
                <div className={"product-view-info-price-container"}>
                  <span> {product.price}{" ₴"} </span>
                </div>
                <div className="product-view-button-container">
                  <DefaultButton value={'Get one'}/>
                </div>
              </div>
            </div>
          </div>
       </div>

        ) : (
          <h2>Loading...</h2>
        )
    );
  }
}

export default ProductView;
