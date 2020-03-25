import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers';

// FIX APPLY MIDDLEWARE AND THUNK IMPORT
import thunk from 'redux-thunk';

export const store = createStore(rootReducer, applyMiddleware(thunk));


// const store = {
//     isStarted: false,
//     isFetching: false,
//     selectedSource: 'https://opentdb.com/api.php?amount=10',
//     questions: [
//         {
//             id: 0,
//             question: '',
//             answer: []
//         }
//     ]
// }




