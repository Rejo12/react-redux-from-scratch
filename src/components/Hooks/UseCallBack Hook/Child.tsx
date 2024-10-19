import React, { useEffect } from 'react'

type childCompProps = {
  returnComment: () => string
}

const Child = ({ returnComment }: childCompProps) => {
  useEffect(() => {
    console.log('useeffect')
  }, [returnComment])
  return <h1>{returnComment()}</h1>
}

export default Child
