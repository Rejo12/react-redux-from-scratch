import React from 'react';
import { connect } from 'react-redux';
import Actions from '../Action.js/GameAction';

const HamburgerComponent = (props) => {
    const handleMenuSelect = () => {
        props.handleMenuSelect()
    }
    console.log(window.matchMedia('(max-width:1600px)').matches)
    console.log(props)
    return (
        <div className={props.hamburgerSelected ? 'hamburger-layout' : (props.selectedMenu ? 'slow-close' : 'hamburger-layout-hidden')}>
            <li className="close-icon" onClick={handleMenuSelect} >
                <div className='close-left'></div>
                <div className='close-right'></div>
            </li>
            <li onClick={handleMenuSelect}>
                Option 1
            </li>
            <li>
                Option 2
            </li>
            <li>
                Option 3
            </li>
            <li>
                Option 4
            </li>
            <li>
                Option 5
            </li>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        hamburgerSelected: state.gameReducer.hamburgerSelected,
        selectedMenu: state.gameReducer.selectedMenu
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleMenuSelect: () => {
        dispatch(Actions.handleMenuSelect())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(HamburgerComponent);