import React from 'react'
import ButtonHOC from './ButtonHoc'

type StateType = {
  count: number
}

type PropType = {
  handleClick: () => void
  dataToDisp: number
}

class ButtonComponent extends React.Component<PropType, StateType> {
  constructor(props: PropType) {
    super(props)
    this.state = {
      count: 0,
    }
  }
  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e.currentTarget.value)
  }
  render() {
    return (
      <div>
        <button type="button" onClick={this.props.handleClick}>
          Click Me
        </button>
        <br />
        Button has been clicked <strong>{this.props.dataToDisp}</strong> times
      </div>
    )
  }
}

export default ButtonHOC(ButtonComponent, 5)
