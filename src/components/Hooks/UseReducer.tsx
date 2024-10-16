import React, { useReducer, useState } from 'react'
import ToDoList from './ToDoList'
import { toDoProps, toDoActionProps } from './TypeHooks/types'

export const ACTIONS = {
  SAVE: 'SAVE',
  TOGGLE: 'TOGGLE',
}

type reducerProps = {
  count: number
  showText: boolean
}

type reducerActionProps = {
  type: 'INCREMENT'
  payload: number
}

type reducerActionTypeProps = {
  type: 'TOGGLE'
}

type receivedReducerProps = reducerActionProps | reducerActionTypeProps

const reducer = (state: reducerProps, action: receivedReducerProps) => {
  switch (action.type) {
    case 'INCREMENT':
      if (action.payload)
        return { count: state.count + action.payload, showText: state.showText }
    case 'TOGGLE':
      return { count: state.count, showText: !state.showText }
    default:
      return state
  }
}

const todoReducer = (state: toDoProps[], action: toDoActionProps) => {
  switch (action.type) {
    case 'SAVE': {
      let obj = { id: Date.now(), value: action.payload, disabled: false }
      return [...state, obj]
    }

    case 'TOGGLE':
      console.log('57', action.payload)
      return state.map((item: toDoProps) => {
        // if (item.id === action.payload.id) {
        //   return { ...item, disabled: !item.disabled }
        // } else {
        return item
        // }
      })

    default:
      return state
  }
}

const ReducerHook = () => {
  const initialState = { count: 0, showText: true }
  const [state, dispatch] = useReducer(reducer, initialState)

  const intitalToDoState: toDoProps[] = []
  const [todoName, setToDoName] = useState('')
  const [todoState, todoDispatch] = useReducer(todoReducer, intitalToDoState)

  const handleClick = () => {
    todoDispatch({ type: ACTIONS.SAVE, payload: todoName })
    setToDoName('')
  }

  const todoDispatchHandler = (data: toDoActionProps) => {
    todoDispatch(data)
  }
  console.log({ todoState })
  return (
    <>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT', payload: 2 })
          dispatch({ type: 'TOGGLE' })
        }}
      >
        Click Here
      </button>

      {state.showText && <p>This is a text </p>}

      <div>
        <input
          type="text"
          onChange={(e) => setToDoName(e.target.value)}
          value={todoName}
        />
        <button onClick={handleClick}>Save</button>
        {todoState.map((item: toDoProps) => (
          <ToDoList
            item={item}
            key={item.id}
            dispatchToDo={todoDispatchHandler}
          />
        ))}
      </div>
    </>
  )
}

export default ReducerHook
