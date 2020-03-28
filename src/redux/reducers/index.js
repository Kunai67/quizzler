import { combineReducers } from 'redux';
import { CLEAR_GAME_DATA } from '../actions';
import settings from './top-level/settings';
import data from './top-level/data';
import status from './top-level/status';

// COMBINES REDUCERS TO CLEAR THEM BOTH AT THE SAME TIME
const gameData = combineReducers({
    gameState: status,
    serverData: data,
})

// CLEARS THE GAME DATA ON "CLEAR_GAME_DATA" ACTION
const clearGameStateAndServerData = (state, action) => {
    switch (action.type) {
        case CLEAR_GAME_DATA:
            state = undefined;
            return gameData(state, action);
        default:
            return gameData(state, action);
    }
}

export const rootReducer = combineReducers({
    gameData: clearGameStateAndServerData,
    gameSettings: settings
});