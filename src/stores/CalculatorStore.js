import dispatcher from '../Dispatcher';
import { EventEmmiter } from 'events';

import { SUM_NUM } from '../actions/types';
import { getResult } from '../actions/calculatorAction';

class CalculatorStore extends EventEmmiter {
  constructor() {
    super();
    // this.result = 0;
  }

  handleActions = action => {
    switch (action.type) {
      case SUM_NUM:
        // this.result = action.payload;
        this.emit('sumNum');
        break;
      default:
    }
  };

  getCurrentResult = () => getResult();
}

const calculatorstore = new CalculatorStore();
dispatcher.register(calculatorstore.handleActions.bind(calculatorstore));
export default calculatorstore;
