// REQUESTING QUESTIONS
const FETCH_QUESTIONS_REQUEST = "FETCH_QUESTIONS_REQUEST";
function requestQuestions() {
    return {
        type: FETCH_QUESTIONS_REQUEST
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
function fetchQuestions(category, numberOfQuestions, difficulty, choiceType) {
    return function (dispatch) {
        dispatch(requestQuestions());
        console.log(`https://opentdb.com/api.php?category=${category}&amount=${numberOfQuestions}&difficulty=${difficulty}&type=${choiceType}`);
        return fetch(`https://opentdb.com/api.php?category=${category}&amount=${numberOfQuestions}&difficulty=${difficulty}&type=${choiceType}`)
                .then(res => res.json())
                .then(questions => {
                    dispatch(receiveQuestions(questions.results));
                });
    }
}

// ON SETTINGS CHANGE
const SETTINGS_CHANGE = "SETTINGS_CHANGE";
function settingsChange(category, numberOfQuestions, difficulty, choiceType) {
    return {
        type: SETTINGS_CHANGE,
        category,
        numberOfQuestions,
        difficulty,
        choiceType
    }
}

function changeSettings(category, numberOfQuestions, difficulty, choiceType) {
    return function(dispatch) {
        dispatch(settingsChange(category, numberOfQuestions, difficulty, choiceType));
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

// MARK CORRECT ANSWER
const MARK_CORRECT = "MARK_CORRECT";
function markCorrect() {
    return {
        type: MARK_CORRECT,
    }
}

// MARK WRONG ANSWER
const MARK_WRONG = "MARK_WRONG";
function markWrong() {
    return {
        type: MARK_WRONG,
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
        dispatch(requestCategory());

        return fetch('https://opentdb.com/api_category.php')
                .then(res => res.json())
                .then(categories => 
                    dispatch(
                        receiveCategory([{id: 0, name: 'No Category'}]
                        .concat(categories.trivia_categories))
                    )
                );
    }
}

// SAVE FINISH TIME
const RECORD_TIME = "RECORD_TIME";
function recordTime(minutes, seconds) {
    return {
        type: RECORD_TIME,
        minutes,
        seconds
    }
}

// CLEAR GAME DATA (FOR RESET)
const CLEAR_GAME_DATA = "CLEAR_GAME_DATA";
function clearGameData() {
    return {
        type: CLEAR_GAME_DATA
    }
}

export {
    FETCH_CATEGORY_REQUEST,
    FETCH_CATEGORY_SUCCESS,
    FETCH_QUESTIONS_REQUEST,
    FETCH_QUESTIONS_SUCCESS,
    SETTINGS_CHANGE,
    UPDATE_QUIZ_STATUS,
    MARK_CORRECT,
    MARK_WRONG,
    RECORD_TIME,
    CLEAR_GAME_DATA,

    requestQuestions,
    fetchQuestions,
    fetchCategory,
    markCorrect,
    markWrong,
    updateStatus,
    changeSettings,
    recordTime,
    clearGameData,
}