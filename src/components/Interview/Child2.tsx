import React from 'react'

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

type Child2Prop = {
  dataToPrint: userProp | null
}

export default class Child2 extends React.Component<Child2Prop> {
  render() {
    return (
      this.props.dataToPrint !== null && (
        <span>
          Selected id is: <strong>{this.props.dataToPrint.id} </strong>
          and selected name is: <strong>{this.props.dataToPrint.name}</strong>
        </span>
      )
    )
  }
}
