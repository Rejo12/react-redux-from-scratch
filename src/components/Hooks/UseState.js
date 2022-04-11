import React,{useState} from "react";

const StateHooks=()=>{
	const [inputValue,setInputValue] = useState("");
	return(
		<>
			<input placeholder="typing..." onChange={e=>setInputValue(e.target.value)} />
			<br/><br/>
			{inputValue}
		</>
	);
};

export default StateHooks;