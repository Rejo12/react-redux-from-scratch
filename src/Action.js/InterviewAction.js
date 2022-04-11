import { fetchInterviewDataApi } from "../Api/InterviewApi";

/*With Saga */
export default function fetchInterviewData() {
	return {
		type: "FETCH_INTERVIEW_DATA",
	};
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
		type: "FETCH_INTERVIEW_DATA_DONE",
		payload: response,
	};
}
