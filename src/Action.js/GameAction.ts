import { ThunkDispatch } from "redux-thunk";

type actionType={
  type: 'SET_DATA_FROM_DRAG',
  data:React.DragEvent<HTMLDivElement>
}|
{
  type: 'SET_HAMBURGER_VALUE',
  payload:boolean
}|
{
  type: 'SET_MENU_SELECTED',
}


const Actions = {
  setDataFromDrag: (event:React.DragEvent<HTMLDivElement>) => {
    console.log('actions', event)
    return (dispatch:ThunkDispatch<any,never,actionType>) => {
      dispatch({
        type: 'SET_DATA_FROM_DRAG',
        data: event,
      })
    }
  },

  hamburgerClicked: (selectionValue:boolean) => {
    return (dispatch:ThunkDispatch<any,never,actionType>) => {
      dispatch({
        type: 'SET_HAMBURGER_VALUE',
        payload: selectionValue,
      })
    }
  },

  handleMenuSelect: () => {
    return (dispatch:ThunkDispatch<any,never,actionType>) => {
      dispatch({
        type: 'SET_MENU_SELECTED',
      })
    }
  },
}

export default Actions
