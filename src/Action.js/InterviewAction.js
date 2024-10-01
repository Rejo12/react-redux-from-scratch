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

export function fetchInterviewDataDone(response) {
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

export function fetchPostsDone(response) {
  return {
    type: 'FETCH_POSTS_DONE',
    payload: response,
  }
}

export function fetchPostById(id) {
  console.log('inside actions')
  return {
    type: 'FETCH_POST_BY_ID',
    payload: id,
  }
}

export function fetchPostByIdDone(response) {
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
