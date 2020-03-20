import { 
    FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_REQUEST, 
    UPDATE_QUIZ_STATUS, MARK_ANSWER
} from '../actions';

import { combineReducers } from 'redux';

function status(state = false, action) {
    switch (action.type) {
        case UPDATE_QUIZ_STATUS:
            return action.isStarted
        default:
            return state
    }
}

function questions(state = {
    isFetching: false,
    isInvalidated: false,
    source: '',
    questions: [],
}, action) {
    switch (action.type) {
        case FETCH_QUESTIONS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                source: action.source
            })
        case FETCH_QUESTIONS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                questions: action.questions
            })
    
        default:
            return state;
    }
}

function answerStatus(state = false, action) {
    switch (action.type) {
        case MARK_ANSWER:
            return action.isCorrect;
    
        default:
            return state;
    }
}

export const rootReducer = combineReducers(status, questions, answerStatus);