import { combineReducers } from "redux";
import gameReducer from "./GameReducer";
import interviewReducer from "./InterviewReducer";

export default combineReducers({
	gameReducer: gameReducer,
	interviewReducer: interviewReducer,
});
