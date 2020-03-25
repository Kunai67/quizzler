import { 
    FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_REQUEST, 
    UPDATE_QUIZ_STATUS, INCREMENT_CORRECT
} from '../actions';

import { combineReducers } from 'redux';

function status(state = { 
    isStarted: false, 
    correctAnswers: 0
}, action) {
    switch (action.type) {
        case UPDATE_QUIZ_STATUS:
            return Object.assign({}, state, {
                isStarted: action.isStarted
            });
        case INCREMENT_CORRECT:
            return Object.assign({}, state, state.correctAnswers++);
        default:
            return state;
    }
}

function questions(state = {
    isFetching: false,
    isInvalidated: false,
    category: '',
    numberOfQuestions: 10,
    difficulty: 'easy',
    questions: [],
}, action) {
    switch (action.type) {
        case FETCH_QUESTIONS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                category: action.category || state.category,
                numberOfQuestions: action.numberOfQuestions || state.numberOfQuestions,
                difficulty: action.difficulty || state.difficulty
            })
        case FETCH_QUESTIONS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                questions: action.questions
            });    
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    status, 
    questions
});