import React,{useReducer, useState} from "react";
import ToDoList from "./ToDoList";

export const ACTIONS={
	SAVE:"SAVE",
	TOGGLE:"TOGGLE"
}

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

const todoReducer=(state,action)=>{
	switch(action.type){
		case ACTIONS.SAVE:
			let obj={id:Date.now(),value:action.payload,disabled:false}
			return [...state,obj]

		case ACTIONS.TOGGLE:
		  return state.map((item)=>{
				if(item.id===action.payload.id){
					return{...item,disabled:!item.disabled}
				}
				else{
					return item
				}
			})

		default:
			return state	
	}
}

const ReducerHook =()=> {

	const initialState = {count:0, showText:true};
	const [state,dispatch] = useReducer(reducer,initialState);

	const intitalToDoState=[];
	const [todoName,setToDoName] = useState("")
	const [todoState,todoDispatch] = useReducer(todoReducer,intitalToDoState)

	const handleClick=(e)=>{
		todoDispatch({type:ACTIONS.SAVE,payload:todoName});
		setToDoName('')
	}
	console.log({todoState})
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

			<div>
				<input type="text"  onChange={(e)=>setToDoName(e.target.value)} value={todoName}/>
				<button onClick={handleClick}>Save</button>
				{todoState.map((item)=>(
					<ToDoList item={item} key={item.id} dispatch={todoDispatch}/>
				))}
			</div>
		</>
	);
};

export default ReducerHook;
