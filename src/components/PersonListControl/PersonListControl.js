import React from 'react';

import styles from './PersonListControl.css'

const personListControl = (props) => {
  const classes = [];

  let btnClass = '';
  if (props.showPersons) {
    btnClass = styles.Grey
  }

  if (props.persons.length <= 2) classes.push(styles.red);
  if (props.persons.length <= 1) classes.push(styles.bold);
  
  return (
    <div className={styles.PersonListControl}>
      <h1>{props.appTitle}</h1>
      <p className={classes.join(' ')}>List of People:</p>
      <button
      className={btnClass}
      onClick={props.clicked}>Toggle Person List</button>
    </div>
  );
};

export default personListControl;