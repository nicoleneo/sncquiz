import React from "react";
import Toggle from "./Toggle";
import { checkAnswers } from "../lib/utilities";

class Question extends React.Component {
	constructor(props) {
		super(props);
        this.lockAnswer = false;
        this.percentageCorrect = 0;
		this.percentageClassName = "incorrect";
        this.correctnessText = "The answer is incorrect";
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
        if (this.percentageCorrect === 1) {
            this.correctnessText = "The answer is correct!";
            this.lockAnswer = true;
        }
		
	}
	render() {
		const {
			questionObj: { question, answers },
            activeQuestion,
		} = this.props;
		console.log(question);
		console.log(answers);
		return (
			<div className={`currentQuestion ${this.percentageClassName} ${activeQuestion ? '' : 'hidden'}`}>
				<h1 className='question'>{question}</h1>
				{answers.map((optionObj, i) => (
					<Toggle
						answerOptions={optionObj}
						key={`answer-${i}`}
						handleToggle={(togglePos) => this.handleToggle(i, togglePos)}
                        lockAnswer={this.lockAnswer}
					/>
				))}
                <h2 className="correctnessText">{this.correctnessText}</h2>
			</div>
		);
	}
}
export default Question;
