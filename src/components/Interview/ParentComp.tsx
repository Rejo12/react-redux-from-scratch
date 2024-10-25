import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Child1 from './Child1'
import Child2 from './Child2'
import fetchInterviewData from '../../Action.js/InterviewAction'
import { useProps } from '@mui/x-data-grid/internals'

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

type ParentCompProps = {
  fetchInterviewData: () => void
  interviewData: userProp[]
}

type ParentCompState = {
  selectedData: null | userProp
}

class ParentComp extends React.Component<ParentCompProps, ParentCompState> {
  state = {
    selectedData: null,
  }
  componentDidMount() {
    this.props.fetchInterviewData()
  }

  customPromise(time: number, type: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('promise log')
        resolve(type)
      }, time)
    })
  }
  saveData = async (item: userProp) => {
    console.log({ item })
    const p1 = await this.customPromise(2000, '2000')
    console.log('1st log')
    const p2 = await this.customPromise(5000, '5000')
    console.log('2nd log')
    console.log('3rd log')

    this.setState({
      selectedData: item,
    })
  }
  render() {
    console.log(this.props.interviewData)
    return (
      <>
        <Child1
          selectedRow={this.saveData}
          interviewData={this.props.interviewData}
        />
        <Child2 dataToPrint={this.state.selectedData} />
      </>
    )
  }
}

const mapStateToProps = (state: any) => ({
  interviewData: state.interviewReducer.fetchedData,
})

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchInterviewData: () => {
      dispatch(fetchInterviewData())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParentComp)
