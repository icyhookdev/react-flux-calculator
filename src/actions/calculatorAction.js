import dispatcher from '../Dispatcher';

import { SUM_NUM, SUBS_NUM, MULTIPLY_NUM, DIVIDE_NUM } from './types';
import { sum, subs, multiply, divide } from '../classes/Calculator';

export const sumNum = num => {
  dispatcher.dispatch({
    type: SUM_NUM,
    payload: sum(num)
  });
};
