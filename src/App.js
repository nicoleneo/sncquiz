import React from "react";
import Question from "./components/Question";
import { getQuestions, getShuffledQuestions } from "./lib/utilities";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.questions = getShuffledQuestions();
		this.numQuestions = this.questions.length;
		this.state = { questionIndex: 0 };

		this.handlePrev = this.handlePrev.bind(this);
		this.handleNext = this.handleNext.bind(this);
	}
	handlePrev() {
		let { questionIndex } = this.state;
		if (questionIndex - 1 >= 0) {
			questionIndex = questionIndex - 1;
		} else {
			questionIndex = this.numQuestions - 1; // wrap around to last
		}
		this.setState({ questionIndex });
	}
	handleNext() {
		console.log("nexy");
		let { questionIndex } = this.state;
		if (questionIndex + 1 < this.numQuestions) {
			questionIndex = questionIndex + 1;
		} else {
			questionIndex = 0; // wrap around to first
		}
		console.log(questionIndex);
		this.setState({ questionIndex });
	}
	render() {
		const { questionIndex } = this.state;

		return (
			<div className='App'>
				{this.questions.map((question, q) => (
					<Question
						questionObj={question}
						key={`question-${q}`}
						activeQuestion={q === questionIndex}
					/>
				))}
				<div className='buttons'>
					<button onClick={this.handlePrev}>Previous</button>
					<button onClick={this.handleNext}>Next</button>
				</div>
			</div>
		);
	}
}

export default App;
