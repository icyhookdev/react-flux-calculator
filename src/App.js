import React, { Component } from 'react';
import { Calculator } from './classes/Calculator';

class App extends Component {
  render() {
    return <h1>{Calculator.getResult()}</h1>;
  }
}

export default App;
