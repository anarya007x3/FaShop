import React, { Component } from 'react';
import './signUp.css';

class SignUp extends Component {
  render() {
    return (
      <div className="SignUp">
        <header className="SignUp-header">
          <h1 className="SignUp-title">Welcome to FaShop.</h1>
        </header>
        <p className="SignUp-intro">
          Hello my new friend!
        </p>
      </div>
    );
  }
}

export default SignUp;
