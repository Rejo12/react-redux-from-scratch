import React,{useReducer} from "react";

const reducer =(state,action)=>{
    
	switch(action.type){
	case "INCREMENT":
		return {count:state.count+action.payload, showText:state.showText};
	case "TOGGLE":
		return {count:state.count, showText:!state.showText};
	default:
		return state;        
	}
};

const ReducerHook =()=> {

	const initialState = {count:0, showText:true};
	const [state,dispatch] = useReducer(reducer,initialState);

	return(
		<>
			<h1>{state.count}</h1>
			<button 
				onClick={()=>{
					dispatch({type:"INCREMENT",payload:2});
					dispatch({type:"TOGGLE"});
				}}>
                Click Here
			</button>

			{state.showText && (
				<p>This is a text </p> 
			)}
		</>
	);
};

export default ReducerHook;
