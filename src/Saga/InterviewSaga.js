import { take, put, call, takeEvery } from "redux-saga/effects";
import { fetchInterviewDataApi } from "../Api/InterviewApi";
import { fetchInterviewDataDone } from "../Action.js/InterviewAction";

export function* fetchInterviewData() {
	try {
		const response = yield call(fetchInterviewDataApi);
		yield put(fetchInterviewDataDone(response.data));
		// yield call();
	} catch (err) {}
}

// export function* WatchInterviewSaga() {
//   console.log("watcher saga");
//   yield take("FETCH_INTERVIEW_DATA", fetchInterviewData);
// }

export default [takeEvery("FETCH_INTERVIEW_DATA", fetchInterviewData)];
