import React,{ useLayoutEffect,useEffect,useRef } from "react";

const LayoutEffectHook =()=>{
	const inputRef = useRef(null);
	useLayoutEffect(()=>{
		console.log(inputRef.current.value);
	},[]);
	useEffect(()=>{
		inputRef.current.value="Hello";
	},[]);
	return(
		<div className="app">
			<input ref={inputRef} value="John" style={{width:200,height:100}} />
		</div>
	);
};

export default LayoutEffectHook;