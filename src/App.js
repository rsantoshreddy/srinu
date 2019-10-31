import React, { Component } from 'react';
import Child from './Child';
import './App.css';

class App extends Component {
  constructor() {
    super();
    console.log('Constructor');
    this.state = {
      lName: 'Panuganti'
    };
    this.add = this.add.bind(this);
  }

  add() {
    this.setState({
      lName: 'Panuganti'
    });
    this.state.lName = 'Panuganti2';
    console.log(this.state.lName);
  }

  componentWillount() {}

  componentDidMount() {
    console.log('componentDidMount');
    // fettch().then(()=>{
    //   this.setState({
    //   })
    // })
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    console.log('render');

    return (
      <div className='App'>
        <h1>Srinu {this.state.lName}</h1>
        <button onClick={this.add}>Add</button>
        {this.state.lName === 'Panuganti2' ? null : <Child lName={<button>HI</button>}></Child>}
      </div>
    );
  }
}

export default App;
