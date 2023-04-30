const initialState = {
  fetchedData: [],
  posts: [],
  selectedPost: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ghjm,":
      return Object.assign({}, state, { fetchedData: "fdf" });

    case "FETCH_INTERVIEW_DATA_DONE":
      return Object.assign({}, state, { fetchedData: action.payload });

    case "FETCH_POSTS_DONE":
      return Object.assign({}, state, { posts: action.payload })

    case "FETCH_POST_BY_ID_DONE":
      return { ...initialState, selectedPost: action.payload }

    case "CLEAR_SELECTED_POST":
      return { ...initialState, selectedPost: {} }

    default:
      return state;
  }
}
