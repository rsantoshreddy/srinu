import React, { Component } from 'react';

export class ChildB extends Component {
  render() {
    const { lastName } = this.props;
    return <h1>{lastName}</h1>;
  }
}
