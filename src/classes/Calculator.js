export const Calculator = (() => {
  class Calculator {
    _result = 0;

    getResult = () => this._result;

    sum = num => this._result + +num;

    subs = num => this._result - +num;

    multiply = num => this._result * +num;

    divide = num => this._result / +num;
  }

  const { getResult, sum, subs, multiply, divide } = new Calculator();

  return {
    getResult,
    sum,
    subs,
    multiply,
    divide
  };
})();
