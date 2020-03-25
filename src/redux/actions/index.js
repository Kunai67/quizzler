// REQUESTING QUESTIONS
const FETCH_QUESTIONS_REQUEST = "FETCH_QUESTIONS_REQUEST";
function requestQuestions(category, numberOfQuestions, difficulty) {
    return {
        type: FETCH_QUESTIONS_REQUEST,
        category,
        numberOfQuestions,
        difficulty
    }
}

// RECEIVING QUESTIONS
const FETCH_QUESTIONS_SUCCESS = "FETCH_QUESTIONS_SUCCESS";
function receiveQuestions(data) {
    return {
        type: FETCH_QUESTIONS_SUCCESS,
        questions: data
    }
}

// FETCHING OF QUESTIONS
function fetchQuestions(category, numberOfQuestions, difficulty) {
    return function (dispatch) {
        dispatch(requestQuestions(category, numberOfQuestions, difficulty));

        return fetch(`https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}`)
                .then(res => res.json())
                .then(questions => {
                    console.log("Received Questions");
                    dispatch(receiveQuestions(questions.results));
                });
    }
}

// ON SETTINGS CHANGE
const SETTINGS_CHANGE = "SETTINGS_CHANGE";
function changeSettings(category, numberOfQuestions, difficulty) {
    return function(dispatch) {
        dispatch(fetchQuestions(category, numberOfQuestions, difficulty));

        return {
            type: SETTINGS_CHANGE,
            category,
            numberOfQuestions,
            difficulty
        }
    }
}

// WHETHER QUIZ STARTED OR ENDED
const UPDATE_QUIZ_STATUS = "UPDATE_QUIZ_STATUS";
function updateStatus(isStarted) {
    return {
        type: UPDATE_QUIZ_STATUS,
        isStarted: isStarted
    }
}

// INCREMENT ON CORRECT ANSWER
const INCREMENT_CORRECT = "INCREMENT_CORRECT";
function incrementCorrect() {
    return {
        type: INCREMENT_CORRECT,
    }
}

// REQUEST CATEGORY
const FETCH_CATEGORY_REQUEST = "FETCH_CATEGORY_REQUEST";
function requestCategory() {
    return {
        type: FETCH_CATEGORY_REQUEST
    }
}

// RECEIVE CATEGORY
const FETCH_CATEGORY_SUCCESS = "FETCH_CATEGORY_SUCCESS";
function receiveCategory(data) {
    return {
        type: FETCH_CATEGORY_SUCCESS,
        categories: data
    }
}

// FETCH CATEGORY
function fetchCategory() {
    return function(dispatch) {
        dispatch(requestCategory);

        return fetch('https://opentdb.com/api_category.php')
                .then(res => res.json())
                .then(categories => dispatch(receiveCategory(categories.trivia_categories)));
    }
}

export {
    FETCH_CATEGORY_REQUEST,
    FETCH_CATEGORY_SUCCESS,
    FETCH_QUESTIONS_REQUEST,
    FETCH_QUESTIONS_SUCCESS,
    SETTINGS_CHANGE,
    UPDATE_QUIZ_STATUS,
    INCREMENT_CORRECT,

    fetchQuestions,
    fetchCategory,
    incrementCorrect,
    updateStatus,
    changeSettings
}