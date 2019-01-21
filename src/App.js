import React, { Component } from 'react';
import { calculator } from './classes/Calculator';

class App extends Component {
  render() {
    calculator._result = 1;
    return <h1>{calculator.getResult()}</h1>;
  }
}

export default App;
