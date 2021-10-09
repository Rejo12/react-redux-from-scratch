import React from 'react';
import Form from './Form';

const ButtonHOC = (InputComponent,inputData) =>{
  return class extends React.Component{
    state={
      data :inputData != undefined ? inputData:0
    }
    updateCount=(context)=>{
     console.log("context",context)
       context.getData(this.state.data);
       context.setData(this.state.data);
      this.setState((prevState)=>({
        data : prevState.data + 1
      }))
    }
    render(){
      console.log("msg from HOC");
      return(
        <Form.Consumer>
          {context=>(
            <InputComponent dataToDisp={this.state.data} handleClick={(e)=>this.updateCount(context)}/>
          )

          }
        </Form.Consumer>
      )
    }
  }
}
export default ButtonHOC;
