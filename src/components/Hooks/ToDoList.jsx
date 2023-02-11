import React from 'react'
import { ACTIONS } from './UseReducer'

const ToDoList=({item,dispatch})=>{

    return(
        <div key={item.id}>
        {item.value}
       <button onClick={e=>{dispatch({type:ACTIONS.TOGGLE,payload:item})}}>Toggle</button> 
       <button disabled={item.disabled}>Delete</button> 
        </div>
    )

}

export default ToDoList;