import DragNDrop from "./DragNDrop";
import { connect } from "react-redux";
import Actions from "../Action.js/GameAction";

const mapStateToProps=(state)=>{
	console.log(state);
	return{
		name:state.gameReducer.name,
		age:state.gameReducer.age,
		toggle:state.gameReducer.toggle
	};
};

const mapDispatchToProps=(dispatch)=>{
	return {
		setDataFromDrag:(event)=>{
			console.log("container",event);
			dispatch(Actions.setDataFromDrag(event));
		}
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(DragNDrop);