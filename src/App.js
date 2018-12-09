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

  changeNameHandler = (newName) => {
    this.setState( {
      persons: [
        { name: 'Finley', age: 3 },
        { name: newName, age: 27 }
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Finley', age: 3 },
        { name: event.target.value, age: 27 }
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>React Course</h1>
        <button onClick={this.changeNameHandler.bind(this, 'Case')}>Change Name</button>
        <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.changeNameHandler.bind(this, 'Caseyyyy')}>I'm a dog!</Person>
        <Person 
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.changeNameHandler.bind(this, 'Caseman')}
          changed={this.nameChangedHandler} />
      </div>
    );
  }
}

export default App;
