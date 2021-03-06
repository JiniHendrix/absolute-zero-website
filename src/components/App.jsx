import React, { Component } from 'react';
import { object } from 'prop-types';
import NavBar from './NavBar/NavBar';

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
      <div>
        <NavBar />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: object, //eslint-disable-line
};
