import React from 'react';
import Radium from 'radium';

import './Person.css'

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '400px'
        }
    };

    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>Hi, I'm {props.name} and I'm {props.age}!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default Radium(person);