export default function fetchInterviewData() {
  return {
    type: "FETCH_INTERVIEW_DATA",
  };
}

export function fetchInterviewDataDone(response) {
  return {
    type: "FETCH_INTERVIEW_DATA_DONE",
    payload: response,
  };
}
