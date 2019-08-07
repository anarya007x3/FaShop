import React, { Component } from 'react';
import './button.css';

class DefaultButton extends Component {
  render() {
    const { value='Buy' } = this.props;

    return (
      <div className="button-container">
        <button className="button-style">
          <span className="button-title">{value}</span>
        </button>
      </div>
    );
  }
}

export default DefaultButton;
