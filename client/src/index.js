import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Header from './containers/contacts/contacts';
import Landing from './containers/landing/landing';
import ProductsList from './containers/products-list/products-list';
import Contacts from './containers/contacts/contacts';

import registerServiceWorker from './registerServiceWorker';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Landing} />
      <Route path="/products" component={ProductsList} />
      <Route path="/contact" component={Contacts} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
registerServiceWorker();
