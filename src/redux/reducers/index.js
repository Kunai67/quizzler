import { 
    FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_REQUEST, 
    UPDATE_QUIZ_STATUS, INCREMENT_CORRECT, FETCH_CATEGORY_REQUEST, FETCH_CATEGORY_SUCCESS, SETTINGS_CHANGE
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
    categories: [],
    selectedCategory: '',
    numberOfQuestions: 10,
    difficulty: 'easy',
    questions: [],
}, action) {
    switch (action.type) {
        case FETCH_QUESTIONS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                selectedCategory: action.category || state.category,
                numberOfQuestions: action.numberOfQuestions || state.numberOfQuestions,
                difficulty: action.difficulty || state.difficulty
            });
        case FETCH_QUESTIONS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                questions: action.questions
            });
        case FETCH_CATEGORY_REQUEST:
            return Object.assign({}, state, { isFetching: true });
        case FETCH_CATEGORY_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                categories: action.categories
            });
        case SETTINGS_CHANGE:
            return Object.assign({}, state, {
                selectedCategory: action.category,
                numberOfQuestions: action.numberOfQuestions,
                difficulty: action.difficulty
            });
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    gameState: status, 
    questionState: questions
});