import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    }

  increment() {
    this.setState(state => ({ count: state.count + 1 }));
  }

  decrement() {
    this.setState(state => ({ count: state.count - 1 }));
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-button" onClick={this.increment}>Increment</button>
        <button className="counter-button" onClick={this.decrement}>Decrement</button>
        <p className="counter-text">Count: {this.state.count}</p>
      </div>
    );
  }
}

export default Counter;