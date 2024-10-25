import React from 'react'

type MsgListType = {
  id: number
  msgText: string
}

type MsgCompPropType = {
  msgList: MsgListType[]
  deleteSelected: (id: number) => void
}

const MsgComp = (props: MsgCompPropType) => {
  const { msgList } = props
  const handleDelete = (item: MsgListType) => {
    props.deleteSelected(item.id)
  }
  return (
    <>
      {msgList.map((item) => {
        return (
          <div key={item.id}>
            <span>{item.msgText}</span>
            <button onClick={(e) => handleDelete(item)}>Delete</button>
            <br />
            <br />
          </div>
        )
      })}
    </>
  )
}

export default MsgComp
