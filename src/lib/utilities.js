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
	shuffledAnswers = shuffleAnswers.map((answer) => {
		answer.options = _.shuffle(answer.options);
		return answer;
	});
	const randomisedQuestionObj = {
		question: questionObj.question,
		answers: shuffledAnswers,
	};
	return randomisedQuestionObj;
};

export const isQuestionCorrect = (answeredQuestion) => {
    return _.every(answeredQuestion.answers, (option) => option.correct);
}