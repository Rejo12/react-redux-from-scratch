import React, { useState } from 'react'

type CompStateType = {
  fName: string
  lName: string
  email: string
  mobileNumber: string
}

type handleChangeType = (value: string, fieldName: string) => void

type PropsType = {
  render: (
    handleChange: handleChangeType,
    compState: CompStateType,
  ) => React.ReactNode
}

const RenderPropComponent = (props: PropsType) => {
  const [compState, setCompState] = useState<CompStateType>({
    fName: '',
    lName: '',
    email: '',
    mobileNumber: '',
  })

  const handleChange = (value: string, fieldName: string) => {
    console.log('compState', compState)
    // let tmpState =
    //   compState !== null
    //     ? [...compState]
    //     : JSON.parse(JSON.stringify(compState));
    // // let newState = { ...tmpState, [fieldName]: value };
    // console.log("tmpState", tmpState);
    setCompState((prevCompState) => ({ ...prevCompState, [fieldName]: value }))
  }
  console.log({ props })
  return <div>{props.render(handleChange, compState)}</div>
}

export default RenderPropComponent
