import React from "react";
import Toggle from "./Toggle";
import { checkAnswers } from "../lib/utilities";

class Question extends React.Component {
	constructor(props) {
		super(props);
        this.percentageCorrect = 0;
		this.percentageClassName = "incorrect";
		const {
			questionObj: { question, answers },
		} = this.props;
		this.state = { selectedAnswers: answers };
		this.handleToggle = this.handleToggle.bind(this);
	}
	handleToggle(answerIndex, togglePos) {
		let selectedAnswers = this.state.selectedAnswers;
		selectedAnswers[answerIndex].togglePos = togglePos;
		this.setState({ selectedAnswers });
		this.checkAnswers();
	}
	checkAnswers() {
		const { selectedAnswers } = this.state;
        const { percentageCorrect, percentageClassName } = checkAnswers(selectedAnswers);
        this.percentageClassName = percentageClassName;
        this.percentageCorrect = percentageCorrect;
		
	}
	render() {
		const {
			questionObj: { question, answers },
		} = this.props;
		console.log(question);
		console.log(answers);
		return (
			<div className={`currentQuestion ${this.percentageClassName}`}>
				<h1 className='question'>{question}</h1>
				{answers.map((optionObj, i) => (
					<Toggle
						answerOptions={optionObj}
						key={`answer-${i}`}
						handleToggle={(togglePos) => this.handleToggle(i, togglePos)}
					/>
				))}
			</div>
		);
	}
}
export default Question;
