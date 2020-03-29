import { SETTINGS_CHANGE } from '../../actions';

// GAME SETTINGS
export default function settings(state = {
    selectedCategory: 0,
    numberOfQuestions: 10,
    difficulty: 'easy',
    isModified: false,
}, action) {
    switch (action.type) {
        case SETTINGS_CHANGE:
            return Object.assign({}, state, {
                selectedCategory: action.category,
                numberOfQuestions: action.numberOfQuestions,
                difficulty: action.difficulty,
                isModified: true
            });
        default:
            return state;
    }
}