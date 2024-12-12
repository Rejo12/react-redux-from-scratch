import { take, put, call, takeEvery, takeLatest, CallEffect, PutEffect } from 'redux-saga/effects'
import { fetchInterviewDataApi } from '../Api/InterviewApi'
import {
  fetchInterviewDataDone,
  fetchPostsDone,
  fetchPostByIdDone,
} from '../Action.js/InterviewAction'
import Api from '../Api/index'
import { AxiosResponse } from 'axios'

type userDataType={
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}[]

type ResponseType={
  data:userDataType
}

// Generator types needs to be understand in depth
type fetchInterviewType={
  type:string,
  payload:userDataType
}
export function* fetchInterviewData():Generator<CallEffect<AxiosResponse<ResponseType>>| PutEffect<fetchInterviewType>,void, ResponseType> {
  try {
    const response = yield call(fetchInterviewDataApi)
    let body = response.data
    yield put(fetchInterviewDataDone(body))
    // yield call();
  } catch (err) {}
}

// export function* WatchInterviewSaga() {
//   console.log("watcher saga");
//   yield take("FETCH_INTERVIEW_DATA", fetchInterviewData);
// }

type PostsResponseType={
  data:{
    userId:number,
    id:number,
    title:string,
    body:string
  }[]
}

type FetchPostsDoneType={
  type:string,
  payload:{
    userId:number,
    id:number,
    title:string,
    body:string
  }[]
}

export function* fethcPostsSaga():Generator<CallEffect<AxiosResponse<PostsResponseType>>| PutEffect<FetchPostsDoneType>,void,PostsResponseType> {
  try {
    const newApi = new Api()
    let response = yield call(newApi.getPosts)
    console.log('41', response)

    yield put(fetchPostsDone(response.data))
  } catch (e) {
    console.log({ e })
  }
}

type SinglePostResponseType={
  data:{
    userId:number,
    id:number,
    title:string,
    body:string
  }
}

type FetchPostDoneType={
  type:string,
  payload:{
    userId:number,
    id:number,
    title:string,
    body:string
  }
}

export function* fetchPostByIdSaga(action:{
  type: string,
  payload: string,
}):Generator<CallEffect<AxiosResponse<SinglePostResponseType>>| PutEffect<FetchPostDoneType>,void,SinglePostResponseType> {
  try {
    const newApi = new Api()
    const { payload } = action
    let response = yield call(newApi.getPostById, payload)
    yield put(fetchPostByIdDone(response.data))
    console.log({ response })
  } catch (e) {}
}

export default [
  takeEvery('FETCH_INTERVIEW_DATA', fetchInterviewData),
  takeLatest('FETCH_POSTS', fethcPostsSaga),
  takeLatest('FETCH_POST_BY_ID', fetchPostByIdSaga),
]


