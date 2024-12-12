import React, { useContext, useState } from 'react'
import { connect } from 'react-redux'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone'
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone'
import Actions from '../Action.js/GameAction'
import { ThemeContext } from '../RouteComponent'
import { ThunkDispatch } from 'redux-thunk'

type PropType = {
  hamburgerClicked: (selectionValue: boolean) => void
}

const AppLayout = (props: PropType) => {
  const [mode, setMode] = useState<string>('dark-mode')
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext)

  const handleHamBurgerClicked = () => {
    props.hamburgerClicked(true)
  }

  const handleThemeChange = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    newValue: string,
  ) => {
    if (newValue) {
      setMode(newValue)
      setCurrentTheme(newValue.split('-')[0])
    }
  }

  return (
    <div className="wrapper">
      <div className="layoutContainer">
        <div className="icon-hamburger" onClick={handleHamBurgerClicked}>
          <li></li>
          <li></li>
          <li></li>
        </div>
        <div style={{ justifySelf: 'center' }}>
          <h1 className="fontWt400 glowyText">React-Redux</h1>
        </div>
        <ToggleButtonGroup
          color="primary"
          value={mode}
          exclusive
          onChange={handleThemeChange}
          aria-label="Platform"
        >
          <ToggleButton value="light-mode">
            <LightModeTwoToneIcon />
          </ToggleButton>
          <ToggleButton value="dark-mode">
            <DarkModeTwoToneIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <div className="loginDetails">
          <p>
            Logged in as <strong>Rejo</strong>
          </p>
        </div>
      </div>
    </div>
  )
}

type actionType =
  | {
      type: 'SET_DATA_FROM_DRAG'
      data: React.DragEvent<HTMLDivElement>
    }
  | {
      type: 'SET_HAMBURGER_VALUE'
      payload: boolean
    }
  | {
      type: 'SET_MENU_SELECTED'
    }

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, never, actionType>,
) => ({
  hamburgerClicked: (selectionValue: boolean) => {
    dispatch(Actions.hamburgerClicked(selectionValue))
  },
})
export default connect(null, mapDispatchToProps)(AppLayout)
