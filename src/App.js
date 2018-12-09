import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Finley', age: 3 },
      { name: 'Casey', age: 27 }
    ]
  }

  changeNameHandler = () => {
    this.setState( {
      persons: [
        { name: 'Finley', age: 3 },
        { name: 'Case', age: 27 }
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>React Course</h1>
        <button onClick={this.changeNameHandler}>Change Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>I'm a dog!</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      </div>
    );
  }
}

export default App;
