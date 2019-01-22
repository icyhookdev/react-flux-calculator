import React from 'react';

import classes from './RecordItem.module.css';

const RecordItem = ({ operation }) => (
  <li className={classes.item}>
    <p>{operation}</p>
  </li>
);

export default RecordItem;
