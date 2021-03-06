import React, { PureComponent } from 'react';

import styles from './App.css';
import Persons from '../components/Persons/Persons'
import PersonListControl from '../components/PersonListControl/PersonListControl'
import Aux from '../hoc/Aux'
import withClass from '../hoc/withClass'

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }
  
  // When using PureComponent React does this check for you
  // so shouldComponentUpdate can not be used
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[App.js] Inside shouldComponentUpdate()', nextProps, nextState);
  //   // DOM will not update with changes if false
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[App.js] Inside componentWillUpdate()', nextProps, nextState);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      '[App.js] Inside getDerivedStateFromProps()', 
      nextProps, 
      prevState);

      return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log('[App.js] Inside getSnapshotBeforeUpdate()');
  }

  componentDidUpdate() {
    console.log('[App.js] Inside componentDidUpdate()');
  }

  state = {
    persons: [
      { id: '0001', name: 'Finley', age: 3 },
      { id: '0002', name: 'Casey', age: 27 }
    ],
    showPersons: false,
    toggleClicked: 0,
    authenticated: false
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

  // never call this.state in setState
  // instead implement like below
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( (prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    console.log('[App.js] Inside render()');

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
      <Aux>
        <button onClick={() => this.setState({showPersons: true})}>Show Persons</button>
        <PersonListControl 
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons} 
          clicked={this.togglePersonHandler}
          login={this.loginHandler} />
        <AuthContext.Provider value={this.state.authenticated} >
        {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, styles.App);
