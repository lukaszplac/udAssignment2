import React from 'react';

const charElement = (props) => {
	const style = {
		display: "inline-block",
		padding: "16px",
		textAlign: "center",
		margin: "16px",
		border: "1px solid black"
	}
	return <h1 
			style={style}
			onClick={props.remove}>
			{props.letter}
		   </h1>
}

export default charElement;