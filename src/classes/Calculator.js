class Calculator {
  _result = '';

  getResult = () => this._result;

  sum = num => this._result + +num;

  subs = num => this._result - +num;

  multiply = num => this._result * +num;

  divide = num => this._result / +num;
}

export const { getResult, sum, subs, multiply, divide } = new Calculator();
