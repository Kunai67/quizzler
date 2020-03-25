import { 
    FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_REQUEST, 
    UPDATE_QUIZ_STATUS, INCREMENT_CORRECT, CHANGE_CATEGORY
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
    questions: [],
}, action) {
    switch (action.type) {
        case FETCH_QUESTIONS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            })
        case FETCH_QUESTIONS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                questions: action.questions
            })
        case CHANGE_CATEGORY:
            return Object.assign({}, state, {
                isFetching: true,
                category: action.category
            });
    
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    status, 
    questions
});