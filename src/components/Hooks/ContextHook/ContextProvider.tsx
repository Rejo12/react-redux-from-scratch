import React, { createContext, useState } from 'react'
import Login from './Login'
import User from './User'

type contextProps = {
  userName: string
  setUserName: React.Dispatch<React.SetStateAction<string>>
}

export const AppContext = createContext<contextProps>(
  null as unknown as contextProps,
)

const ContextProvider = () => {
  const [userName, setUserName] = useState<string>('')
  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      <Login />
      <User />
    </AppContext.Provider>
  )
}

export default ContextProvider
