import React,{useEffect, useMemo,useState} from "react";
import axios from "axios";

const MemoHook =()=>{
	const [data,setData] = useState("");
	const [toggle,setToggle] = useState(false);

	useEffect(()=>{
		axios.get("https://jsonplaceholder.typicode.com/comments")
			.then((response)=>{
				console.log(response);
				setData(response.data);
			});
	},[]);

	const findLongestName=(comments)=>{
        
		// console.log("comments",comments)
		if(comments.length > 0){
			let longestName="";
			comments.map((item)=>{
				if(item.name > longestName){
					longestName = item.name;
				}
			});
			console.log("this was computed");
			return longestName;
		}
	};
	const getLongestName = useMemo(()=>findLongestName(data),[data]);

	return(
		<>
			<h1>
				{getLongestName}
			</h1>
			<button onClick={(e)=>setToggle(!toggle)}>clickme</button>
			<br/>
			{toggle &&
        <h3>Toggle is true</h3>}
		</>
	);
};

export default MemoHook;
