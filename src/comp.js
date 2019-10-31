import React, { Component } from 'react';
import { ChildA } from './A';
import { ChildB } from './B';

export class Parent extends Component {
  constructor() {
    super();
    this.state = {
      firstName: 'First Name',
      lastName: 'Last Name'
    };
  }

  onAction = () => {
    this.setState({
      lastName: `'Changed Name'+ ${Math.random()}`
    });
  };

  render() {
    const { firstName, lastName } = this.state;
    return (
      <div>
        <ChildA {...this.state} onAction={this.onAction}></ChildA>
        <ChildB lastName={lastName}></ChildB>
      </div>
    );
  }
}
