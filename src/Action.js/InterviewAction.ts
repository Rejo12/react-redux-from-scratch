import { fetchInterviewDataApi } from '../Api/InterviewApi'

/*With Saga */
export default function fetchInterviewData() {
  return {
    type: 'FETCH_INTERVIEW_DATA',
  }
}

/*With thunk */
// export default function fetchInterviewData() {
//   return (dispatch, getState) => {
//     console.log("getState", getState());
//     try {
//       const response = fetchInterviewDataApi();
//       response.then((res) => {
//         dispatch({
//           type: "FETCH_INTERVIEW_DATA_DONE",
//           payload: res.data,
//         });
//       });
//     } catch (error) {}
//   };
// }

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

export function fetchInterviewDataDone(response:userDataType) {
  return {
    type: 'FETCH_INTERVIEW_DATA_DONE',
    payload: response,
  }
}

export function fetchPosts() {
  return {
    type: 'FETCH_POSTS',
  }
}

type PostsResponseType={
    userId:number,
    id:number,
    title:string,
    body:string
}[]

export function fetchPostsDone(response:PostsResponseType) {
  return {
    type: 'FETCH_POSTS_DONE',
    payload: response,
  }
}

export function fetchPostById(id:string) {
  console.log('inside actions')
  return {
    type: 'FETCH_POST_BY_ID',
    payload: id,
  }
}

type SinglePostResponseType={
    userId:number,
    id:number,
    title:string,
    body:string
}

export function fetchPostByIdDone(response:SinglePostResponseType) {
  return {
    type: 'FETCH_POST_BY_ID_DONE',
    payload: response,
  }
}

export function clearSelectedPost() {
  return {
    type: 'CLEAR_SELECTED_POST',
  }
}
