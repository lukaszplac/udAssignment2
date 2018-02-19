import React from 'react';

const validator = (props) => {
	let output = null;
	if (props.textLength >= 5) output = <p>text long enough</p>	
		else output = <p>text too short</p>
	return output;
}

export default validator;