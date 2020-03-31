import { UPDATE_QUIZ_STATUS, RECORD_TIME, MARK_CORRECT, MARK_WRONG, ON_ERROR } from '../../actions';

// STATUS OF THE QUIZ
export default function status(state = { 
    isStarted: false,
    errorMessage: undefined,
    questionPointer: 0, 
    correctAnswers: 0,
    finishTime: { minutes: 0, seconds: 0 }
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
        case ON_ERROR: 
            return Object.assign({}, state, {
                errorMessage: action.error
            });
        default:
            return state;
    }
}