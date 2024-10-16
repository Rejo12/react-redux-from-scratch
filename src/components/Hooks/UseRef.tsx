import React, { useRef } from 'react'

const RefHook = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const setFocus = () => {
    // console.log(inputRef.current)
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }
  const handleChange = () => {
    console.log('e.target.value')
  }
  console.log('here inside useref')
  return (
    <div>
      <h1>John doe</h1>
      <input
        type="text"
        placeholder="Ex.."
        ref={inputRef}
        onChange={handleChange}
      />
      <button onClick={setFocus}>Set Focus</button>
    </div>
  )
}

export default RefHook
