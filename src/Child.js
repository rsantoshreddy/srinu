import React, { Component } from 'react';

class Child extends Component {
  constructor() {
    super();
    console.log('Child Constructor');
  }

  componentDidMount() {
    console.log('Child componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('Child componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('Child shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('Child componentWillUpdate');
  }

  componentDidUpdate(preProps) {
    console.log('Child componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('Child componentWillUnmount');
  }

  render() {
    const { lName } = this.props;
    return <h1>{lName}</h1>;
  }
}

export default Child;
