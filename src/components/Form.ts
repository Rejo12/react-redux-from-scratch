import React from 'react'

type  formDataType={
  wrapperData: string,
  modifiedDate: null,
}

type ContextType={
    data:number|formDataType,
    getData:(data:number)=>void,
    setData:(data:number)=>void
  }

const Form = React.createContext<ContextType>({} as ContextType)

export default Form
