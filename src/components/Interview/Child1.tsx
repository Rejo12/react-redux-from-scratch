import React, { Fragment } from 'react'
import axios from 'axios'

type userProp = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

type Child1Props = {
  selectedRow: (item: userProp) => void
  interviewData: userProp[]
}

type Child1State = {
  data: userProp[]
}

export default class Child1 extends React.Component<Child1Props, Child1State> {
  state = {
    data: [],
  }

  static getDerivedStateFromProps(props: Child1Props, state: Child1State) {
    if (props.interviewData.length !== state.data.length) {
      return { data: props.interviewData }
    }
    return null
  }

  render() {
    const { data } = this.state
    // console.log("data", data, this.props.interviewData);
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: userProp) => {
              return (
                <tr key={item.id} onClick={(e) => this.props.selectedRow(item)}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </>
    )
  }
}
