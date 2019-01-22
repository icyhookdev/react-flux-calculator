import React from 'react';
import classes from './Calculator.module.css';
import Button from '../Button/Button';

const Calculator = ({ result, click, records }) => (
  <div className={classes.container}>
    <div className={classes.calculator}>
      <div className={classes.calculator__result}>{result}</div>
      <div className={classes.calculator__action_panel}>
        <Button name="1" clicked={e => click(e.target.value)} />
        <Button name="2" clicked={e => click(e.target.value)} />
        <Button name="3" clicked={e => click(e.target.value)} />
        <Button name="-" clicked={e => click(e.target.value)} />
        <Button name="4" clicked={e => click(e.target.value)} />
        <Button name="5" clicked={e => click(e.target.value)} />
        <Button name="6" clicked={e => click(e.target.value)} />
        <Button name="+" clicked={e => click(e.target.value)} />
        <Button name="7" clicked={e => click(e.target.value)} />
        <Button name="8" clicked={e => click(e.target.value)} />
        <Button name="9" clicked={e => click(e.target.value)} />
        <Button name="*" clicked={e => click(e.target.value)} />
        <Button name="0" clicked={e => click(e.target.value)} />
        <Button name="DEL" clicked={e => click(e.target.value)} />
        <Button name="/" clicked={e => click(e.target.value)} />
        <Button name="=" clicked={e => click(e.target.value)} />
      </div>
    </div>
    <div className={classes.calculator__records}>
      <h1>Records</h1>
      <ul>{records()}</ul>
    </div>
  </div>
);

export default Calculator;
