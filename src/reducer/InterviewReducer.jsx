const initialState = {
  fetchedData: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ghjm,":
      return Object.assign({}, state, { fetchedData: "fdf" });

    case "FETCH_INTERVIEW_DATA_DONE":
      return Object.assign({}, state, { fetchedData: action.payload });

    default:
      return state;
  }
}
