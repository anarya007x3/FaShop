import React from 'react';
import ReactDOM from 'react-dom';
// bootstrap_v3
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import 'styles/index.scss';
import Header from 'components/Header';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Header />, document.getElementById('root'));
registerServiceWorker();
