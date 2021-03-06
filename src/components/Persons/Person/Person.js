import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import { AuthContext } from '../../../containers/App';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()');
  }

  focusInput() {
    this.inputElement.current.focus();
  }

  render(){
    console.log('[Person.js] Inside render()');

    return (
      <Aux>
        <AuthContext.Consumer>
          {auth => auth ? <p>Log in successful!</p> : null}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>Hi, I'm {this.props.name} and I'm {this.props.age}!</p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}/>
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