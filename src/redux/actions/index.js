// ACTION TYPES
export const FETCH_QUESTIONS_REQUEST = "FETCH_QUESTIONS_REQUEST";
export const FETCH_QUESTIONS_SUCCESS = "FETCH_QUESTIONS_SUCCESS";

export const UPDATE_QUIZ_STATUS = "UPDATE_QUIZ_STATUS";

export const MARK_ANSWER = "MARK_ANSWER";

// ACTION CREATORS
export function requestQuestions(source) {
    return {
        type: FETCH_QUESTIONS_REQUEST,
        source: source
    }
}

export function receiveQuestions(source, json) {
    return {
        type: FETCH_QUESTIONS_SUCCESS,
        // questions: QUESTION LOGIC HERE
    }
}

export function updateStatus(isStarted) {
    return {
        type: UPDATE_QUIZ_STATUS,
        isStarted: isStarted
    }
}

export function markAnswer(isCorrect) {
    return {
        type: MARK_ANSWER,
        isCorrect: isCorrect
    }
}