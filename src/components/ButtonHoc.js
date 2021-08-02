import React from 'react';

const ButtonHOC = (InputComponent,inputData) =>{
  return class extends React.Component{
    state={
      data :inputData != undefined ? inputData:0
    }
    updateCount=()=>{
      this.setState((prevState)=>({
        data : prevState.data + 1
      }))
    }
    render(){
      console.log("msg from HOC");
      return(
        <InputComponent dataToDisp={this.state.data} handleClick={(e)=>this.updateCount()}/>
      )
    }
  }
}
export default ButtonHOC;
