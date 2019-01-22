import dispatcher from '../Dispatcher';
import { EventEmitter } from 'events';

import { GET_RESULT } from '../actions/types';
import { getResult } from '../classes/Calculator';

class CalculatorStore extends EventEmitter {
  constructor() {
    super();
    // this.result = 0;
  }

  handleActions = action => {
    switch (action.type) {
      case GET_RESULT:
        this.emit('getResult');
        break;
      default:
    }
  };

  getCurrentResult = () => getResult();
}

const calculatorstore = new CalculatorStore();
dispatcher.register(calculatorstore.handleActions.bind(calculatorstore));
export default calculatorstore;
