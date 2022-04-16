import questions from "./questions.json";
var _ = require("lodash");

export const getQuestions = () => {
	return questions;
};

export const getShuffledQuestions = () => {
	let shuffledQuestions = _.shuffle(questions);
	shuffledQuestions = shuffledQuestions.map((questionObj) =>
		shuffleAnswers(questionObj)
	);
	return shuffledQuestions;
};

export const shuffleAnswers = (questionObj) => {
	let shuffledAnswers = _.shuffle(questionObj.answers);
	shuffledAnswers = shuffledAnswers.map((answer) => {
		answer.options = _.shuffle(answer.options);
		return answer;
	});
	const randomisedQuestionObj = {
		question: questionObj.question,
		answers: shuffledAnswers,
	};
	return randomisedQuestionObj;
};

export const checkAnswers = (selectedAnswers) => {
    const numAnswers = selectedAnswers.length;
		let numCorrect = 0;

		selectedAnswers.forEach((selectedAnswer) => {
			console.log(selectedAnswer);
			let { options, togglePos } = selectedAnswer;
			if (togglePos >= 0) {
				const isCorrectAnswer = options[togglePos].correct;
				if (isCorrectAnswer) {
					numCorrect++;
				}
			}
		});

		const percentageCorrect = numCorrect === 0 ? 0 : numCorrect / numAnswers;
		const percentageClassName =
			percentageCorrect > 0.5
				? percentageCorrect === 1
					? "correct"
					: "almostCorrect"
				: "incorrect";
	return {
        percentageCorrect,
        percentageClassName,
    }
}