import React from 'react';
import classes from './Button.module.css';

const Button = ({ name, clicked, className }) => (
  <button className={classes[className]} onClick={clicked} value={name}>
    {name}
  </button>
);

export default Button;
