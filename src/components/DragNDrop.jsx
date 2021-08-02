import React from 'react';
import '../game.css'

export default class DragNDrop extends React.Component{
  dropEvent(event){
    console.log("here drop")
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  }
  dragEvent(event){
    console.log("here drag");
    this.props.setDataFromDrag(event);
    event.preventDefault();
  }
  dragStartEvent(event){
    console.log("here drag start")
    event.dataTransfer.setData("text", event.target.id);
  }
  render(){
    console.log(this.props.name)
    return(
      <div>
      <main>
        <div className="container">
        <React.Fragment>          
      <h3>Box1</h3>
      <div className="box1" onDrop={this.dropEvent.bind(this)} onDragOver={this.dragEvent.bind(this)}>
      </div>
        </React.Fragment>
        <React.Fragment>   
      <div className="box1" onDrop={this.dropEvent.bind(this)} onDragOver={this.dragEvent.bind(this)}>
      </div>
      </React.Fragment>
        </div>
      <br/>
      <img id="img1" src="http://localhost:3000/games.png" alt="games" width="100px" height="100px" draggable="true" 
       onDragStart={this.dragStartEvent.bind(this)}
      />
      </main>
      </div>
    )
  }
}
