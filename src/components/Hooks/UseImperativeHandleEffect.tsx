import React, { useRef } from 'react'
import Button from './Button'

type buttonRefProp = {
  alterToggle: () => void
  testvalue: string
}

const ImperativeHandleHook = () => {
  const buttonRef = useRef<buttonRefProp>(null)

  return (
    <div>
      <button
        onClick={() => {
          if (buttonRef.current)
            if (buttonRef.current.alterToggle) buttonRef.current.alterToggle()
        }}
      >
        Button from parent
      </button>
      <Button ref={buttonRef} />
    </div>
  )
}

export default ImperativeHandleHook
