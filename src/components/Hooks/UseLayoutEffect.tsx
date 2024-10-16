import React, { useLayoutEffect, useEffect, useRef } from 'react'

const LayoutEffectHook = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  useLayoutEffect(() => {
    if (inputRef.current) {
      console.log('layout effect', inputRef.current.value)
    }
  }, [])
  useEffect(() => {
    if (inputRef.current) {
      console.log('use  effect', inputRef.current.value)
      inputRef.current.value = 'Hello'
    }
  }, [])
  return (
    <div className="app">
      <input ref={inputRef} value="John" style={{ width: 200, height: 100 }} />
    </div>
  )
}

export default LayoutEffectHook
