import React, { Component } from 'react';
import './App.css';
import Header from "./containers/header/header";
import Landing from "./containers/landing/landing";
import ProductsList from "./containers/products/list/products-list";
import Contacts from "./containers/contacts/contacts";
import { Route, Switch } from 'react-router-dom'
import ProductView from "./components/product/view/view";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="main-container">


        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/products" component={ProductsList} />
          <Route path="/contact" component={Contacts} />
          <Route path="/product/:id" component={ProductView} />

        </Switch>
          </div>
      </div>
    );
  }
}

export default App;
