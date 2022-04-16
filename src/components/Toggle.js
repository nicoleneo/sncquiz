import React from "react";

const Toggle = ({ answerOptions: { options } }) => {
	console.log(options);
	return (
		<div className='answerOptions'>
			{options.map((option) => (
				<span className={`answerOption ${option.correct ? 'selected': ''}`}>{option.answer}</span>
			))}
		</div>
	);
};

export default Toggle;
