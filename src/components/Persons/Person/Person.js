import React, { Component } from 'react';

import styles from './Person.css'
import WithClass from '../../../hoc/WithClass'

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()');
  }

  render(){
    console.log('[Person.js] Inside render()');

    return (
      <WithClass styles={styles.Person}>
        <p onClick={this.props.click}>Hi, I'm {this.props.name} and I'm {this.props.age}!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </WithClass>
    )
    // can return array of elements to not need wraping div
    // return [
    //   <p onClick={this.props.click}>Hi, I'm {this.props.name} and I'm {this.props.age}!</p>,
    //   <p>{this.props.children}</p>,
    //   <input type="text" onChange={this.props.changed} value={this.props.name}/>
    // ]
  }
}

export default Person;