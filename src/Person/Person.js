import React from 'react';

const person = (props)=>{

	
	return (
	<div className="Person" >
	   <p onClick={props.click}> Hi , my name is {props.name} and age is {props.age} </p>
	   <p> know more {props.children} </p>
	   <input type="text" onChange={props.changed} value={props.name} />

	</div>
	)
};

export default person;