import { all, fork } from "redux-saga/effects";
import WatchInterviewSaga from "./InterviewSaga";

export default function* rootSaga() {
	yield all([...WatchInterviewSaga]);
}
