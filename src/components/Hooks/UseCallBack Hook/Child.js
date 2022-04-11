import React, { useEffect } from "react";

const Child =({returnComment})=>{
	useEffect(()=>{
		console.log("useeffect");
	},[returnComment]);
	return(
		<h1>{returnComment()}</h1>
	);
};

export default Child;