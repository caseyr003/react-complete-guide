import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import { hidden } from 'ansi-colors';

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
    const btnStyle = {
      backgroundColor: 'teal',
      borderRadius: '8px',
      margin: '10px auto',
      width: '60%',
      height: '40px',
      color: 'white',
      fontSize: '24px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>React Course</h1>
        <button
          style={btnStyle} 
          onClick={this.changeNameHandler.bind(this, 'Case')}>Change Name</button>
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
