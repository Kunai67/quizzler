import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// IMPORTS FOR TEST
import { incrementCorrect, receiveQuestions, requestQuestions, updateStatus, changeCategory } from './redux/actions';
import { store } from './redux/store';

// TEST
console.log("Default State");
console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));

fetch('https://opentdb.com/api.php?amount=10')
.then(res => res.json())
.then(questions => {
    console.log("Questions Received");
    store.dispatch(receiveQuestions("https://opentdb.com/api.php?amount=10", questions.results));
});

console.log("Start Quiz");
store.dispatch(updateStatus(true));

console.log("Request Questions");
store.dispatch(requestQuestions(2, 10, 'difficult'));

console.log("Answered Correctly");
store.dispatch(incrementCorrect());

console.log("Change Category");
store.dispatch(requestQuestions(1));

console.log("Change Number of Questions");
store.dispatch(requestQuestions(null, 5, null));

console.log("Change Difficulty");
store.dispatch(requestQuestions(null, null, "medium"));



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
