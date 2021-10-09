import React from 'react';
import FormProvider from "./FormProvider";
import ButtonComponent from "./ButtonComponent";

export default class WrapperComponent extends React.Component{

    state={
        wrapperData:'',
        modifiedDate:null
    }

    render(){
        return(
            <FormProvider formData={this.state}>
                <p>Data in wrapper component:</p><strong>{this.state.wrapperData}</strong>
                <ButtonComponent/>
            </FormProvider>
        )
    }
}