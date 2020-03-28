import { 
    FETCH_CATEGORY_REQUEST, FETCH_CATEGORY_SUCCESS, 
    FETCH_QUESTIONS_REQUEST, FETCH_QUESTIONS_SUCCESS 
} from '../../actions';

// DATA FROM SERVER
export default function data(state = {
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