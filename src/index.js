import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// IMPORTS FOR TEST
import { incrementCorrect, fetchQuestions, updateStatus, changeSettings, fetchCategory } from './redux/actions';
import { store } from './redux/store';

// TEST
console.log("Default State");
console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(fetchCategory());

// console.log("Start Quiz");
// store.dispatch(updateStatus(true));

// console.log("Request Questions");
// store.dispatch(fetchQuestions(11, 10, 'easy'));

// console.log("Settings Changed");
// store.dispatch(changeSettings(11, 20, "easy"));

// console.log("Answered Correctly");
// store.dispatch(incrementCorrect());

// console.log("Change Category");
// store.dispatch(fetchQuestions(1));

// console.log("Change Number of Questions");
// store.dispatch(fetchQuestions(null, 5, null));

// console.log("Change Difficulty");
// store.dispatch(fetchQuestions(null, null, "easy"));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
