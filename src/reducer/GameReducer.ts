

type initialStateType={
  name:string,
  age:number,
  toggle:boolean,
  hamburgerSelected:boolean,
  selectedMenu:string
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

const initialState:initialStateType = {
  name: 'Rejo',
  age: 26,
  toggle: false,
  hamburgerSelected: false,
  selectedMenu: null as any as string,
}

export default function reducer(state = initialState, action:actionType) {
  switch (action.type) {
    case 'SET_DATA_FROM_DRAG':
      console.log('reducer', action.data)
      var data = []

      return Object.assign({}, state, {
        name: 'updatedName',
        toggle: !state.toggle,
      })

    case 'SET_HAMBURGER_VALUE':
      return { ...state, hamburgerSelected: action.payload }

    case 'SET_MENU_SELECTED':
      return { ...state, selectedMenu: 'Option 1', hamburgerSelected: false }

    default:
      return state
  }
}
