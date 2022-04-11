import React,{useImperativeHandle,forwardRef,useState} from "react";

const Button =forwardRef((props,ref)=>{

	const [toggle,setToggle] = useState(false);

	console.log("ref",ref);

	useImperativeHandle(ref,()=>({
		alterToggle(){
			setToggle(!toggle);
		},
		testvalue:"fghjk"
	})
	);
	return(
		<>
			<button 
				// onClick={e=>{setToggle(!toggle)}}
			>
            Button from child
			</button>
			<br/>
			{toggle &&(
				"Toggle is true"
			)}
		</>
	);
});

export default Button;