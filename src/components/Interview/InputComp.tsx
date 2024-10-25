import React, { useState } from 'react'

type MsgListType = {
  id: number
  msgText: string
}

type InputCompPropType = {
  saveMsg: (item: MsgListType) => void
}

const InputComp = (props: InputCompPropType) => {
  const [msgText, setMsgText] = useState('')
  const [id, setId] = useState(0)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMsgText(e.target.value)
  }

  const handleSubmit = () => {
    setId((prevId) => prevId + 1)
    let obj = { msgText, id }
    // console.log("msgText", props);
    props.saveMsg(obj)
    setMsgText('')
  }

  return (
    <>
      <input
        type="text"
        placeholder="type here..."
        onChange={(e) => handleChange(e)}
        value={msgText}
      />
      <button type="submit" onClick={(e) => handleSubmit()}>
        Submit
      </button>
    </>
  )
}

export default InputComp
