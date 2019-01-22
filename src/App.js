import React, { Component } from 'react';

import './App.css';
import Calculator from './components/Calculator/Calculator';
import CalculatorStore from './stores/CalculatorStore';
import RecordItem from './components/RecordItem/RecordItem';

class App extends Component {
  state = {
    result: CalculatorStore.getCurrentResult(),
    records: []
  };

  componentDidMount() {
    CalculatorStore.on('getResult', this.updateResult);
    CalculatorStore.on('sumNum', this.sumResult);
  }

  componentDidUpdate() {
    if (this.state.records.length > 5) {
      const records = [...this.state.records];
      records.splice(-1, 1);
      this.setState({ records });
    }
  }

  componentWillUnmount() {
    CalculatorStore.removeListener('getResult', this.updateResult);
    CalculatorStore.removeListener('sumNum', this.updateResult);
  }

  updateResult = () => {
    this.setState({ result: CalculatorStore.getCurrentResult() });
  };

  sumResult = () => {
    this.setState({ result: CalculatorStore.getCurrentResult() });
  };

  handleResult = () => {
    try {
      const records = [...this.state.records];
      records.unshift(this.state.result);

      this.setState({ result: eval(this.state.result), records });
    } catch (e) {
      this.setState({ result: 'ERROR TRY AGAIN' });
    }
  };

  onClickHandler = button => {
    switch (button) {
      case 'DEL':
        this.setState({ result: CalculatorStore.getCurrentResult() });
        break;
      case '=':
        this.handleResult();
        break;
      case '+':
        CalculatorStore.sumNumbers(button);

      default:
        this.setState(prevState => ({
          result: prevState.result + button
        }));
    }
  };

  displayRecords = () =>
    this.state.records.map((record, i) => {
      return <RecordItem key={i} operation={record} />;
    });

  render() {
    return (
      <div className="container">
        <Calculator
          result={this.state.result}
          click={this.onClickHandler}
          records={this.displayRecords}
        />
      </div>
    );
  }
}

export default App;
