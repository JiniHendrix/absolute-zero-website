import React, { Component } from 'react';

export default class App extends Component { //eslint-disable-line 
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <a href="#" onClick={this.handleClick} role="Button">
        <h1>Hello World</h1>
        <h2>{this.state.count}</h2>
      </a>
    );
  }
}
