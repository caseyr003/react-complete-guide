import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside Constructor', props);
    this.lastPersonRef = React.createRef();
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount()');
    this.lastPersonRef.current.focusInput();
  }

  componentWillReceiveProps(nextProps) {
    console.log('[Persons.js] Inside componentWillReceiveProps()', nextProps);
  }
  
  // When using PureComponent React does this check for you
  // so shouldComponentUpdate can not be used
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] Inside shouldComponentUpdate()', nextProps, nextState);
  //   // DOM will not update with changes if false
  //   return nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[Persons.js] Inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[Persons.js] Inside componentDidUpdate()');
  }

  render(){
    console.log('[Persons.js] Inside render()');
    return this.props.persons.map((person, index) => {
      return <Person
        key={person.id}
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        position={index}
        ref={this.lastPersonRef}
        changed={(event) => this.props.changed(event, person.id)} />
    });
  }
}

export default Persons;