import { combineReducers } from 'redux'
import gameReducer from './GameReducer'
import interviewReducer from './InterviewReducer'

 const rootReducer = combineReducers({
  gameReducer: gameReducer,
  interviewReducer: interviewReducer,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>;
