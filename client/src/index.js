import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from "./App.js"

import registerServiceWorker from './registerServiceWorker';

const routing = (
  <Router>
    <App/>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
registerServiceWorker();
