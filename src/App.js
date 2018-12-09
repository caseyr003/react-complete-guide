import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Course</h1>
        <Person name="Finley" age="3">I'm a dog!</Person>
        <Person name="Casey" age="27" />
      </div>
    );
  }
}

export default App;
