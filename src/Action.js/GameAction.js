const Actions = {
	setDataFromDrag: (event) => {
		console.log("actions",event);
		return dispatch => {
			dispatch({
				type: "SET_DATA_FROM_DRAG",
				data:event
			});
		};
	},

	hamburgerClicked:(selectionValue)=>{
		return dispatch => {
		dispatch({
			type:"SET_HAMBURGER_VALUE",
			payload:selectionValue
		})
	}
	},

	handleMenuSelect:()=>{
		return dispatch => {
			dispatch({
				type:"SET_MENU_SELECTED"
			})
		}
	}
};

export default Actions;