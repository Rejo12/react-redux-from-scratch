import React, { useState, useEffect } from 'react'

export default function Test() {
  const [name, setName] = useState<string>('')
  useEffect(() => {
    setName('rejo')
  }, [])

  return <div>Your name is : {name}</div>
}
