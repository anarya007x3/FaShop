import React from 'react';
import ReactDOM from 'react-dom';
// bootstrap_v4
import 'bootstrap/dist/css/bootstrap.css';

import 'styles/index.scss';
import Header from 'components/Header';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Header />, document.getElementById('root'));
registerServiceWorker();
