import React from "react";
import Toggle from "./Toggle";

const Question = ({ questionObj: { question, answers } }) => {
	console.log(question);
	console.log(answers);
	return (
		<div className="currentQuestion">
			<h1 className='question'>{question}</h1>
			{answers.map((optionObj) => (
				<Toggle answerOptions={optionObj} />
			))}
		</div>
	);
};

export default Question;
