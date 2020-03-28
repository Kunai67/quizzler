import { UPDATE_QUIZ_STATUS, RECORD_TIME, MARK_CORRECT, MARK_WRONG } from '../../actions';

// STATUS OF THE QUIZ
export default function status(state = { 
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