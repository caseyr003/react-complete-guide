import React, { Component } from 'react';

import styles from './Person.css'

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
      <div className={styles.Person}>
        <p onClick={this.props.click}>Hi, I'm {this.props.name} and I'm {this.props.age}!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </div>
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