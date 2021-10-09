import React from 'react';
import Form from './Form';

export default class FormProvider extends React.Component{

    state={
        data:this.props.formData
    }

    static getDerivedStateFromProps(nextProp,currState){
        console.log("getDerivedStatesFromProp",nextProp,currState)
        return null
    }

    getData=(e)=>   {
        console.log("getData",this.state.data);

    }

    setData=(inputData)=>{
        console.log("setData",inputData,this.state);
        this.setState({
            data:inputData+1
        })
    }

    render(){
        console.log("19",this.props.formData)
        console.log("19",this.state)
        return(
            <Form.Provider value={{
                data:this.state.data,
                getData:this.getData,
                setData:this.setData
            }}>
                {this.props.children}
            </Form.Provider>
        )
    }
}