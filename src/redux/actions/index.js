// REQUESTING QUESTIONS
export const FETCH_QUESTIONS_REQUEST = "FETCH_QUESTIONS_REQUEST";
export function requestQuestions(source) {
    return {
        type: FETCH_QUESTIONS_REQUEST,
        source: source
    }
}

// RECEIVING QUESTIONS
export const FETCH_QUESTIONS_SUCCESS = "FETCH_QUESTIONS_SUCCESS";
export function receiveQuestions(source, data) {
    return {
        type: FETCH_QUESTIONS_SUCCESS,
        questions: data
    }
}

// WHETHER QUIZ STARTED OR ENDED
export const UPDATE_QUIZ_STATUS = "UPDATE_QUIZ_STATUS";
export function updateStatus(isStarted) {
    return {
        type: UPDATE_QUIZ_STATUS,
        isStarted: isStarted
    }
}

// INCREMENT ON CORRECT ANSWER
export const INCREMENT_CORRECT = "INCREMENT_CORRECT";
export function incrementCorrect() {
    return {
        type: INCREMENT_CORRECT,
    }
}