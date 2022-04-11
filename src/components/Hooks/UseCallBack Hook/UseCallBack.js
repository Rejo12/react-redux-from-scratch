import React,{useState,useCallback} from "react";
import Child from "./Child";

const CallBackHook =()=>{
	const [data,setData] = useState("Hi,learning usecallback hook");
	const [toggle,setToggle] = useState(false);

	const returnComment=useCallback(
		()=>{
			console.log("function called");
			return data;
		},
		[data]);

	return(
		<>
			<Child returnComment={returnComment}/>
			<button onClick={()=>setToggle(!toggle)}>Click me</button>
			<br/>
			{toggle &&(
				<h2>Toggle is true</h2>  
			)}
		</>
	);
};

export default CallBackHook;