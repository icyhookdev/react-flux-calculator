import React, { Component } from 'react';
import { getResult } from './classes/Calculator';

class App extends Component {
  render() {
    return <h1>{getResult()}</h1>;
  }
}

export default App;
