const Actions = {
	setDataFromDrag: (event) => {
		console.log("actions",event);
		return dispatch => {
			dispatch({
				type: "SET_DATA_FROM_DRAG",
				data:event
			});
		};
	}
};

export default Actions;