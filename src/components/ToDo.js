import React from 'react'

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { text: 'Learn JavaScript', done: false },
        { text: 'Learn React', done: false },
        { text: 'Play around in JSFiddle', done: true },
        { text: 'Build something awesome', done: true },
      ],
    }
  }

  render() {
    return (
      <div>
        <h2>Todos:</h2>
        <ol>
          {this.state.items.map((item) => (
            <li key={item.id}>
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

const HOC = (InputComponent) => {
  return class SubHOC extends React.Component {
    render() {
      console.log(InputComponent)
      console.log(InputComponent.children)
      return <InputComponent />
    }
  }
}

export default HOC(TodoApp)
