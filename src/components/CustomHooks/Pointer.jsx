import React from "react";
import { useState } from "react";
import useHistory from "./useHistory";

const Pointer = () => {
    const [count, setCount] = useState(1)
    const [pointer, setPointer] = useState(0);
    const [history, setHistory, fetchPointer] = useHistory(count)
    const handleIncrement = () => {
        setHistory(history.concat(count + 2))
        setPointer(history.length)
        setCount(prevCount => prevCount + 2)
    }
    const handleBack = () => {
        const pointerValue = fetchPointer(count, 'back');
        if (pointerValue > -1) {
            setPointer(pointerValue)
            setCount(history[pointerValue])
        }
        console.log({ pointerValue })
    }
    const handleForward = () => {
        const pointerValue = fetchPointer(count, 'forward');
        if (pointerValue > -1) {
            setPointer(pointerValue)
            setCount(history[pointerValue])
        }
        console.log({ pointerValue })
    }
    const handleDouble = () => {
        let tmpHistory = [...history];
        tmpHistory.splice(pointer + 1, tmpHistory.length - pointer - 1, tmpHistory[pointer] * 2)
        setHistory(tmpHistory)
        setCount(tmpHistory[tmpHistory.length - 1])
        setPointer(tmpHistory.length - 1)
        console.log(tmpHistory)
    }
    console.log("render")
    return (
        <>
            <div>
                <label>Current value:{count}</label>
            </div>
            <div>
                <label>Pointer : {pointer}</label>
            </div>
            <div>
                <label>History : {history.toString()} </label>
            </div>
            <button onClick={handleIncrement}>Increment by 2</button>
            <button onClick={handleBack}>Go back</button>
            <button onClick={handleForward}>Go forward</button>
            <button onClick={handleDouble}>Double</button>
        </>
    )
}

export default Pointer;