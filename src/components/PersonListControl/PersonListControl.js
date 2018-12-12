import React from 'react';

import styles from './PersonListControl.css';
import Aux from '../../hoc/Aux';

const personListControl = (props) => {
  const classes = [];

  let btnClass = styles.Button;
  if (props.showPersons) {
    btnClass = [styles.Button, styles.Grey].join(' ');
  }

  if (props.persons.length <= 2) classes.push(styles.red);
  if (props.persons.length <= 1) classes.push(styles.bold);
  
  return (
    <Aux>
      <h1>{props.appTitle}</h1>
      <p className={classes.join(' ')}>List of People:</p>
      <button
      className={btnClass}
      onClick={props.clicked}>Toggle Person List</button>
    </Aux>
  );
};

export default personListControl;