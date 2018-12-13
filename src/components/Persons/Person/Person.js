import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

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
      <Aux>
        <p onClick={this.props.click}>Hi, I'm {this.props.name} and I'm {this.props.age}!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </Aux>
    )
    // can return array of elements to not need wraping div
    // return [
    //   <p onClick={this.props.click}>Hi, I'm {this.props.name} and I'm {this.props.age}!</p>,
    //   <p>{this.props.children}</p>,
    //   <input type="text" onChange={this.props.changed} value={this.props.name}/>
    // ]
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  clicked: PropTypes.func,
  changed: PropTypes.func
};

export default withClass(Person, styles.Person);