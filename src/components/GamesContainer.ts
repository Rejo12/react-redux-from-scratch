import DragNDrop from './DragNDrop'
import { connect } from 'react-redux'
import Actions from '../Action.js/GameAction'
import { ThunkDispatch } from "redux-thunk";
import { RootState } from '../reducer';

interface IRootState {
  state: gameReducer;
}

type gameReducer={
  name:string,
  age:number,
  toggle:boolean,
  hamburgerSelected:boolean,
  selectedMenu:string
}

const mapStateToProps = (state:RootState) => {
  console.log(state)
  return {
    name: state.gameReducer.name,
    age: state.gameReducer.age,
    toggle: state.gameReducer.toggle,
  }
}

type actionType={
  type: 'SET_DATA_FROM_DRAG',
  data:React.DragEvent<HTMLDivElement>
}|
{
  type: 'SET_HAMBURGER_VALUE',
  payload:string
}|
{
  type: 'SET_MENU_SELECTED',
}


const mapDispatchToProps = (dispatch:ThunkDispatch<any,never,actionType>) => {
  return {
    setDataFromDrag: (event:React.DragEvent<HTMLDivElement>) => {
      console.log('container', event)
      dispatch(Actions.setDataFromDrag(event))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DragNDrop)
