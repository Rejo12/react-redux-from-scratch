import React from 'react'
import { ACTIONS } from './UseReducer'
import { toDoProps, toDoActionProps } from './TypeHooks/types'

type propsTypes = {
  item: toDoProps
  key: number
  dispatchToDo: (data: toDoActionProps) => void
}

const ToDoList = (props: propsTypes) => {
  const { item, dispatchToDo } = props
  return (
    <div key={item.id}>
      {item.value}
      <button
        onClick={(e) =>
          dispatchToDo({ type: ACTIONS.TOGGLE, payload: item.value })
        }
      >
        Toggle
      </button>
      <button disabled={item.disabled}>Delete</button>
    </div>
  )
}

export default ToDoList
