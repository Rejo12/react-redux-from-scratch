import React from 'react'
import { Multiselect } from 'multiselect-react-dropdown'
// import {hot} from "react-hot-loader";

type StateType = {
  initialValue: number
  options: {
    name: string
    id: number
    age: number
  }[]
}

export default class App extends React.Component<{}, StateType> {
  state = {
    initialValue: 1,
    options: [
      { name: 'Srigar', id: 1, age: 24 },
      { name: 'Sam', id: 2, age: 25 },
      { name: 'Rejo', id: 3, age: 26 },
      { name: 'Mathew', id: 4, age: 27 },
    ],
  }
  componentDidMount() {
    var _this = this
    var count = 0
    var timerId: NodeJS.Timeout = setInterval(() => {
      count++
      if (count == 4) {
        clearInterval(timerId)
      }
      this.callIncrement(timerId)
    }, 100000000)
    console.log(timerId)
  }
  callIncrement(timerId: NodeJS.Timeout) {
    console.log('152')
    this.setState((prevState) => ({
      initialValue: prevState.initialValue + 1,
    }))
  }
  onSelect(e) {
    console.log(e)
  }
  render() {
    var longDescription = ''
    var customerBenefit = 'customerBenefit text'
    var peopleAndPlanet = 'peopleAndPlanet text'
    var goodToKnow = 'goodToKnow text'
    console.log(this.state.initialValue)
    return (
      <React.Fragment>
        <div>
          <div>
            {longDescription != '' && longDescription + '<br></br>'} +
            {customerBenefit +
              '<br></br>' +
              peopleAndPlanet +
              '<br></br>' +
              goodToKnow || '-'}
          </div>
          This is a starter react project with updates {this.state.initialValue}
          ...
          <button onClick={(e) => this.callIncrement.bind(this)}>
            Click me
          </button>
        </div>
        {this.state.initialValue != 0 && (
          <div>
            update value id {this.state.initialValue}
            <br />
            <Multiselect
              options={this.state.options} // Options to display in the dropdown
              showCheckbox={true}
              singleSelect={false}
              closeOnSelect={false}
              onSelect={this.onSelect.bind(this)}
              // Function will trigger on remove event
              displayValue="name" // Property name to display in the dropdown options
            />
          </div>
        )}
      </React.Fragment>
    )
  }
}
