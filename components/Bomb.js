import React from 'react';
import ReactDOM from 'react-dom';

class Bomb extends React.Component {
  constructor(time) {
    super();

    this.state = {
      secondsLeft: time.initialCount
    };
  }

  render() {
    return (
      <div>{this.state.secondsLeft > 0 ? `${this.state.secondsLeft}  seconds left before I go boom!` : 'Boom!'}</div>
    );
  }
}

module.exports = Bomb;
