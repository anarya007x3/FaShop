import React, { Component } from 'react';
import './list.css';
import Faker from 'faker';
import ProductItem from "./../../product/item/item"


class ProductList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentWillMount() {
    for (let i = 0; i < 5; i++) {
      const product = {
        title: Faker.lorem.sentence(),
        image: Faker.image.technics(),
        description: Faker.lorem.sentences(),
        price: Faker.finance.amount(),
      };
      this.setState(prevState => ({
        products: [...prevState.products, product],
      }))
    }
  }

  render() {
    const { products } = this.state;
    console.log(products);
    return (

      <div className="product-list-container">
        {products.map((product, index) => (<ProductItem key={index} product={product}/>))}
      </div>
    );
  }
}

export default ProductList;
