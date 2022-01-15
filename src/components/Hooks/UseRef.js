import React,{useRef} from 'react';

const RefHook =()=>{
    const inputRef = useRef(null);
    const setFocus =()=>{
        // console.log(inputRef.current)
        inputRef.current.focus();
    }

    return(
        <div>
            <h1>John doe</h1>
            <input type="text" placeholder='Ex..' ref={inputRef}/>
            <button onClick={setFocus}>Change name</button>
        </div>
    )
}

export default RefHook;