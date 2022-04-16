# Quiz component
Responsive down to 320 px
Answer is locked once all toggles are correct
Supports 3 toggle positions
Threshold of > 50% correct changes the state to partially correct
Examples showing 3 toggle positions and allowing switching between questions
Questions, toggle positions, answers are randomised.

I don't know how to animate the selected bar sliding. I don't use TypeScript at work and have not seen the need to use it so far. I have not had to implement CSS styles and states from scratch for React as I've always used component libraries such as Material UI, and overriding them.

## Live demo
https://code.neo.my/sncquiz

## Discussion
Answers should be checked server-side to avoid lazy students viewing the source code to find the correct answer.

An example of this is in my Life in the UK test https://lifeintheukte.st
My answer checking is server-side and I don't return the correct answer. Another reason is to avoid competitors making API calls to scrape the questions that I painstakenly typed up. I have also randomised the questions in each test and the answer options to avoid muscle memory of selecting an answer in the nth position.

## Running

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
