import React from 'react'
import Form from './Form'

type StateType = {
  data: number
}

type PropType = {
  handleClick: () => void
  dataToDisp: number
}

type formDataType = {
  wrapperData: string
  modifiedDate: null
}

type ContextType = {
  data: number | formDataType
  getData: (data: number) => void
  setData: (data: number) => void
}

const ButtonHOC = (
  InputComponent: React.ComponentType<PropType>,
  inputData: number,
) => {
  return class MyHOC extends React.Component<{}, StateType> {
    state = {
      data: inputData != undefined ? inputData : 0,
    }
    updateCount = (context: ContextType) => {
      console.log('context', context)
      context.getData(this.state.data)
      context.setData(this.state.data)
      this.setState((prevState) => ({
        data: prevState.data + 1,
      }))
    }
    render() {
      console.log('msg from HOC')
      return (
        <Form.Consumer>
          {(context) => (
            <InputComponent
              dataToDisp={this.state.data}
              handleClick={() => this.updateCount(context)}
            />
          )}
        </Form.Consumer>
      )
    }
  }
}
export default ButtonHOC
