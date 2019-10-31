import React, { Component } from 'react';

export class ChildA extends Component {
  render() {
    const { firstName, lastName } = this.props;
    return (
      <div>
        <h1>{firstName}</h1>
        <h1>{lastName}</h1>
        <button onClick={this.props.onAction}>Click</button>
      </div>
    );
  }
}
