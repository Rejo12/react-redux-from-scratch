import { CombinedState, combineReducers } from 'redux'
import gameReducer from './GameReducer'
import interviewReducer from './InterviewReducer'
import { initialGameStateType } from './GameReducer'
import { InterviewStateType } from './InterviewReducer'
import { Reducer } from 'react'
import { actionType } from './GameReducer'

 const rootReducer = combineReducers({
  gameReducer: gameReducer,
  interviewReducer: interviewReducer,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>;
