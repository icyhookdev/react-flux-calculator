const _result = {
  current: 0
};

class Calculator {
  getResult = () => _result.current;

  sum = num => _result.current + +num;

  subs = num => _result.current - +num;

  multiply = num => _result.current * +num;

  divide = num => _result.current / +num;
}

export const calculator = new Calculator();
