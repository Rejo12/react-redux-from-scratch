import React, { useState, useEffect } from 'react'

// Build a Typewriter effect component(https://reactpractice.dev/exercise/build-a-typewriter-effect-component/)

const Typewriter = () => {
  const [typedText, setTypedText] = useState<string>('')
  const [textWithEffect, setTextWIthEffect] = useState<string>('')
  const [isButtonCLicked, setIsButtonClicked] = useState(false)
  useEffect(() => {
    if (isButtonCLicked) {
      let timerId = setInterval(() => displayTextWithEffect(timerId), 1000)
    }
  }, [isButtonCLicked])

  const displayTextWithEffect = (timerId: NodeJS.Timeout) => {
    setTextWIthEffect((prevText) => {
      if (prevText.length !== typedText.length) {
        return prevText + typedText[prevText.length]
      } else {
        setIsButtonClicked(false)
        clearInterval(timerId)
        return typedText
      }
    })
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsButtonClicked((prevValue) => !prevValue)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={typedText}
          onChange={(e) => {
            setTypedText(e.target.value)
            setTextWIthEffect('')
          }}
        />
        <button disabled={typedText === textWithEffect}>
          Display with typewriter effect
        </button>
        <p>You typed - {textWithEffect}</p>
      </form>
    </>
  )
}

export default Typewriter
