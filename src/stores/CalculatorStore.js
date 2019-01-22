import dispatcher from '../Dispatcher';
import { EventEmitter } from 'events';

import { GET_RESULT, SUM_NUM } from '../actions/types';
import { getResult, sum } from '../classes/Calculator';

class CalculatorStore extends EventEmitter {
  constructor() {
    super();
    this.result = getResult();
  }

  handleActions = action => {
    switch (action.type) {
      case GET_RESULT:
        this.emit('getResult');
        break;
      case SUM_NUM:
        this.emit('sumNum');
        break;
      default:
    }
  };

  getCurrentResult = () => getResult();

  sumNumbers = num => sum(num);
}

const calculatorstore = new CalculatorStore();
dispatcher.register(calculatorstore.handleActions.bind(calculatorstore));
export default calculatorstore;
