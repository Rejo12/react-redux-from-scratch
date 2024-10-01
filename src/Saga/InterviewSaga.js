import { take, put, call, takeEvery, takeLatest } from 'redux-saga/effects'
import { fetchInterviewDataApi } from '../Api/InterviewApi'
import {
  fetchInterviewDataDone,
  fetchPostsDone,
  fetchPostByIdDone,
} from '../Action.js/InterviewAction'
import Api from '../Api/index'

export function* fetchInterviewData() {
  try {
    const response = yield call(fetchInterviewDataApi)
    yield put(fetchInterviewDataDone(response.data))
    // yield call();
  } catch (err) {}
}

// export function* WatchInterviewSaga() {
//   console.log("watcher saga");
//   yield take("FETCH_INTERVIEW_DATA", fetchInterviewData);
// }

export function* fethcPostsSaga() {
  let response = yield call(Api.getPosts)
  console.log('41', response)

  yield put(fetchPostsDone(response.data))
}

export function* fetchPostByIdSaga(action) {
  try {
    const { payload } = action
    let response = yield call(Api.getPostById, payload)
    yield put(fetchPostByIdDone(response.data))
    console.log({ response })
  } catch (e) {}
}

export default [
  takeEvery('FETCH_INTERVIEW_DATA', fetchInterviewData),
  takeLatest('FETCH_POSTS', fethcPostsSaga),
  takeLatest('FETCH_POST_BY_ID', fetchPostByIdSaga),
]
