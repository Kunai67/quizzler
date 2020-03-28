import { 
    FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_REQUEST, 
    UPDATE_QUIZ_STATUS, MARK_CORRECT, MARK_WRONG, 
    FETCH_CATEGORY_REQUEST, FETCH_CATEGORY_SUCCESS, 
    SETTINGS_CHANGE, RECORD_TIME, CLEAR_GAME_DATA
} from '../actions';

import { combineReducers } from 'redux';

// STATUS OF THE QUIZ
function status(state = { 
    isStarted: false,
    questionPointer: 0, 
    correctAnswers: 0,
    finishTime: { minutes: 0, seconds: 0}
}, action) {
    switch (action.type) {
        case UPDATE_QUIZ_STATUS:
            return Object.assign({}, state, {
                isStarted: action.isStarted
            });
        case RECORD_TIME: 
            return Object.assign({}, state, {
                finishTime: { minutes: action.minutes, seconds: action.seconds }
            });
        case MARK_CORRECT:
            return Object.assign({}, state, state.correctAnswers++, state.questionPointer++);
        case MARK_WRONG:
            return Object.assign({}, state, state.questionPointer++);
        default:
            return state;
    }
}

// GAME SETTINGS
function settings(state = {
    selectedCategory: 0,
    numberOfQuestions: 10,
    difficulty: 'easy',
}, action) {
    switch (action.type) {
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

// DATA FROM SERVER
function data(state = {
    isFetching: false,
    categories: [],
    questions: [],
}, action) {
    switch (action.type) {
        case FETCH_QUESTIONS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
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
        default:
            return state;
    }
}

const gameData = combineReducers({
    gameState: status,
    serverData: data,
})

const clearGameStateAndServerData = (state, action) => {
    switch (action.type) {
        case CLEAR_GAME_DATA:
            state = undefined;
            return gameData(state, action);
        default:
            return gameData(state, action);
    }
}

export const rootReducer = combineReducers({
    gameData: clearGameStateAndServerData,
    gameSettings: settings
});