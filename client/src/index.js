import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignUp from './signUp/signUp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SignUp />, document.getElementById('root'));
registerServiceWorker();
