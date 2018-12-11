import React, { Component } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons'
import PersonListControl from '../components/PersonListControl/PersonListControl'

class App extends Component {
  state = {
    persons: [
      { id: '0001', name: 'Finley', age: 3 },
      { id: '0002', name: 'Casey', age: 27 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      );
    }
    
    return (
      <div className={styles.App}>
        <PersonListControl 
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons} 
          clicked={this.togglePersonHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
