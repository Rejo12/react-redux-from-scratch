import { combineReducers } from 'redux';
import gameReducer from './GameReducer';

export default combineReducers({
    gameReducer:gameReducer
});