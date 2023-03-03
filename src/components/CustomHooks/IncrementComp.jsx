import React from "react";
import { useState, useCallback } from "react";
import useDebounce from "./useDebounce";

const IncrementComp = () => {
    const [count, setCount] = useState(0)



    //useCallback(useDebounce(() => alert(`Current value is ${count}`), 3000, [count]), [])

    function debounce(fn) {
        // setCount(prevCount => prevCount + 1)
        let timerId;
        return (...args) => {
            //  setCount(prevCount => prevCount + 1)
            if (timerId) {
                clearTimeout(timerId);
            }
            timerId = setTimeout(() => {
                fn(args)
            }, 3000)
        }
    }

    function fireAlert() {
        alert(`Current value is ${count}`)
    }
    //   const handleClick = debounce(fireAlert)
    // console.log("29", useDebounce(fireAlert))
    const a = useDebounce(fireAlert, 3000)
    return (
        <>
            {count}
            <button onClick={a}>Increment
            </button>
        </>
    )
}

export default IncrementComp;