import React from 'react'
import { connect } from 'react-redux'
import Actions from '../Action.js/GameAction'
import { RootState } from '../reducer'
import { ThunkDispatch } from 'redux-thunk'

type PropsType = {
  hamburgerSelected: boolean | string
  handleMenuSelect: () => void
  selectedMenu: string
}

const HamburgerComponent = (props: PropsType) => {
  const handleMenuSelect = () => {
    props.handleMenuSelect()
  }
  console.log(window.matchMedia('(max-width:1600px)').matches)
  console.log('hamburger menu', props)
  return (
    <div
      className={
        props.hamburgerSelected
          ? 'hamburger-layout'
          : props.selectedMenu
            ? 'slow-close'
            : 'hamburger-layout-hidden'
      }
    >
      <li className="close-icon" onClick={handleMenuSelect}>
        <div className="close-left"></div>
        <div className="close-right"></div>
      </li>
      <li onClick={handleMenuSelect}>Option 1</li>
      <li>Option 2</li>
      <li>Option 3</li>
      <li>Option 4</li>
      <li>Option 5</li>
    </div>
  )
}

const mapStateToProps = (state: RootState) => {
  console.log(state)
  return {
    hamburgerSelected: state.gameReducer.hamburgerSelected,
    selectedMenu: state.gameReducer.selectedMenu,
  }
}

type actionType = {
  type: 'SET_MENU_SELECTED'
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, never, actionType>,
) => ({
  handleMenuSelect: () => {
    dispatch(Actions.handleMenuSelect())
  },
})
export default connect(mapStateToProps, mapDispatchToProps)(HamburgerComponent)
