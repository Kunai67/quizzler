import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers';

// USE THUNK FOR FETCHING QUESTIONS
import thunk from 'redux-thunk';

export const store = createStore(rootReducer, applyMiddleware(thunk));