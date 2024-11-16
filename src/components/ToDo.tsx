import React from 'react'

type StateType = {
  items: {
    text: string
    done: boolean
  }[]
}

type PropType = {
  children?: React.ReactNode
}

class TodoApp extends React.Component<PropType, StateType> {
  state = {
    items: [
      { text: 'Learn JavaScript', done: false },
      { text: 'Learn React', done: false },
      { text: 'Play around in JSFiddle', done: true },
      { text: 'Build something awesome', done: true },
    ],
  }

  render() {
    return (
      <div>
        <h2>Todos:</h2>
        <ol>
          {this.state.items.map((item) => (
            <li key={item.text}>
              <label>
                <input type="checkbox" disabled readOnly checked={item.done} />
                <span className={item.done ? 'done' : ''}>{item.text}</span>
              </label>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

type IncrementCompProps = {
  children: React.ReactNode
}

const HOC = (InputComponent: React.ComponentType<PropType>) => {
  return class SubHOC extends React.Component {
    render() {
      // console.log(InputComponent)
      // console.log(InputComponent.children)
      return <InputComponent />
    }
  }
}

export default HOC(TodoApp)
