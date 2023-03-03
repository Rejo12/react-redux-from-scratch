import { useEffect } from "react";

export default function useDebounce(callBack,delay,dependency){
    console.log(callBack,delay,dependency)
    let timerId;
    // useEffect(()=>{
    //     console.log("timerId",timerId)
    //     if(timerId){
    //         clearTimeout(timerId)
    //         }
    //      timerId= setTimeout(()=>{
    //         timerId=null
    //         callBack();
    //     },delay)
    // },dependency)

    useEffect(()=>{
        if(timerId){
      //  clearTimeout(timerId)
        }
    },[])

    return ()=>{
        console.log("timerId",timerId)
        if(timerId){
            clearTimeout(timerId)
            }
         timerId= setTimeout(()=>{
            timerId=null
            callBack();
    },3000)
}


  
  
}