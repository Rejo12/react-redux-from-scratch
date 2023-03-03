import { useEffect, useRef } from "react";
import { useState } from "react";

export default function useHistory(currValue){
const [history,setHistory]= useState([]);
useEffect(()=>{
    
    setHistory(history.concat(currValue))
},[])

const fetchPointer=(value,direction)=>{
    let pointer = history.indexOf(value);
    return direction === 'back'?pointer-1:pointer+1;
}
console.log(history,currValue)

return [history,setHistory,fetchPointer]
}