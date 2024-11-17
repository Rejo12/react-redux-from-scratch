import React from 'react'
import Form from './Form'

type PropType = {
  formData: {
    wrapperData: string
    modifiedDate: null
  }
  children: React.ReactNode
}

type StateType = {
  data:
    | {
        wrapperData: string
        modifiedDate: null
      }
    | number
}

export default class FormProvider extends React.Component<PropType, StateType> {
  state = {
    data: this.props.formData,
  }

  static getDerivedStateFromProps(nextProp: PropType, currState: StateType) {
    console.log('getDerivedStatesFromProp', nextProp, currState)
    return null
  }

  getData = () => {
    console.log('getData', this.state.data)
  }

  setData = (inputData: number) => {
    console.log('setData', inputData, this.state)
    this.setState({
      data: inputData + 1,
    })
  }

  render() {
    console.log('19', this.props.formData)
    console.log('19', this.state)
    return (
      <Form.Provider
        value={{
          data: this.state.data,
          getData: this.getData,
          setData: this.setData,
        }}
      >
        {this.props.children}
      </Form.Provider>
    )
  }
}
