import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import '../game.css'

type DragNDropProps = RouteComponentProps & {
  age: number
  name: string
  setDataFromDrag: (e: React.DragEvent<HTMLDivElement>) => void
  toggle: boolean
}

export default class DragNDrop extends React.Component<DragNDropProps> {
  dropEvent(event: React.DragEvent<HTMLDivElement>) {
    console.log('here drop')
    var data = event.dataTransfer.getData('text')
    ;(event.target as HTMLDivElement).appendChild(
      document.getElementById(data) as HTMLElement,
    )
    event.preventDefault()
  }
  dragEvent(event: React.DragEvent<HTMLDivElement>) {
    console.log('here drag')
    this.props.setDataFromDrag(event)
    event.preventDefault()
  }
  dragStartEvent(event: React.DragEvent<HTMLImageElement>) {
    console.log('here drag start')
    event.dataTransfer.setData('text', (event.target as HTMLImageElement).id)
  }
  render() {
    console.log('21', this.props)
    return (
      <div>
        <main>
          <div className="container">
            <React.Fragment>
              <h3>Box1</h3>
              <div
                className="box1"
                onDrop={this.dropEvent.bind(this)}
                onDragOver={(e) => this.dragEvent.bind(this)}
              ></div>
            </React.Fragment>
            <React.Fragment>
              <div
                className="box1"
                onDrop={this.dropEvent.bind(this)}
                onDragOver={this.dragEvent.bind(this)}
              ></div>
            </React.Fragment>
          </div>
          <br />
          <img
            id="img1"
            src="http://localhost:3000/games.png"
            alt="games"
            width="100px"
            height="100px"
            draggable="true"
            onDragStart={this.dragStartEvent.bind(this)}
          />
        </main>
      </div>
    )
  }
}
