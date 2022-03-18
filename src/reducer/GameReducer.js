const initialState = {
  name: "Rejo",
  age: 26,
  toggle: false,
};

export default function reducer(state = initialState, action = {}) {
  console.log("reducer");
  switch (action.type) {
    case "SET_DATA_FROM_DRAG":
      console.log("reducer", action.data);
      var data = [];

      return Object.assign({}, state, {
        name: "updatedName",
        toggle: !state.toggle,
      });

    default:
      return state;
  }
}
