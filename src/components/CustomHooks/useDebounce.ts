import { useEffect } from 'react'

export default function useDebounce(callBack:()=>void, delay:number, dependency:string) {
  console.log(callBack, delay, dependency)
  let timerId:NodeJS.Timeout
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

  useEffect(() => {
    if (timerId) {
      //  clearTimeout(timerId)
    }
  }, [])

  return () => {
    console.log('timerId', timerId)
    if (timerId) {
      clearTimeout(timerId)
    }
    timerId = setTimeout(() => {
      timerId = null as any as NodeJS.Timeout
      callBack()
    }, 3000)
  }
}
