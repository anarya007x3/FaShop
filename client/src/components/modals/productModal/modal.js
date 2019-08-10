import React, { Component } from 'react';
import modalStyles from './modal.css';
import Modal from 'react-modal';
import DefaultButton from "../../product/item/item";

Modal.setAppElement('#root');


class ProductModal extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const { product } = this.props;
    return (
        <Modal
          isOpen={this.props.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={{
            overlay: {
              backgroundColor: '#020c19bf'
            },
            content: {
              position: 'absolute',
              top: '15%',
              left: '20%',
              right: '20%',
              bottom: '15%',
              border: '1px solid #ccc',
              background: '#fff',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '20px'
            }
          }}
          onClick={event => event.stopPropagation()}
          contentLabel={product.title}
          shouldCloseOnOverlayClick={true}
        >

          <h2>{ product.title }</h2>
          <button onClick={this.closeModal}>close</button>
          <div className={"product-modal-view-img-container"}>
           <img src={product['image']} alt="Avatar"/>
          </div>
           <div className={"product-modal-info-container"}>
             {/*<h3> {product.title} </h3>*/}
             <span> {product.description} </span>
             <span> {"Price: "} {product.price} </span>
             <div className="product-button-container">
               <DefaultButton value={'Get one'}/>
             </div>
           </div>
        </Modal>
    );
  }
}

export default ProductModal;
