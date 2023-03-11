const initialState = {
	name: "Rejo",
	age: 26,
	toggle: false,
	hamburgerSelected:false,
	selectedMenu:null
};

export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
	case "SET_DATA_FROM_DRAG":
		console.log("reducer", action.data);
		var data = [];

		return Object.assign({}, state, {
			name: "updatedName",
			toggle: !state.toggle,
		});

	case "SET_HAMBURGER_VALUE":
		return {...state,hamburgerSelected:action.payload}

	case "SET_MENU_SELECTED":
		return{...state,selectedMenu:'Option 1',hamburgerSelected:false}

	default:
		return state;
	}
}
