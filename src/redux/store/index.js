import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

// USE THUNK MIDDLEWARE FOR FETCHING QUESTIONS
import thunk from 'redux-thunk';

// USES COMPOSE WITH DEV TOOLS TO USE REDUX DEV TOOLS FOR CHROME
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));