import React, { Component } from "react";
import PropTypes from "prop-types";

class Decrement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startNumber: this.props.startNumber
    };
  }

  decrement = () => {
    this.state.startNumber > 0
      ? this.setState({ startNumber: this.state.startNumber - 1 })
      : alert("Cannot be less than zero");
  };

  render() {
    return (
      <div className="container">
        <div className="numberContainer">
          <p className="Number">{this.state.startNumber}</p>
        </div>
        <div className="buttonContainer">
          <button onClick={this.decrement}>decrement</button>
        </div>
      </div>
    );
  }
}

Decrement.propTypes = {
  startNumber: PropTypes.number.isRequired
};

export default Decrement;
