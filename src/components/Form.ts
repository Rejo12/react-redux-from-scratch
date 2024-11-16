import React from 'react'

type ContextType={
    data:number,
    getData:(data:number)=>void,
    setData:(data:number)=>void
  }

const Form = React.createContext<ContextType>({} as ContextType)

export default Form
