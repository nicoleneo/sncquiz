import logo from './logo.svg';
import './App.css';
import Question from './components/Question';
import { getQuestions } from './lib/utilities';

const questions = getQuestions();
console.log(questions);

function App() {
  return (
    <div className="App">
      <Question questionObj={questions[0]} />
    </div>
  );
}

export default App;
