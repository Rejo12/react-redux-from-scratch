import React, { useRef } from "react";
import { RouteChildrenProps } from "react-router-dom";

type FormTypes={
  userName:string,
  password:string
}

class Form extends React.Component<RouteChildrenProps,FormTypes> {
  static userNameRef = useRef<HTMLInputElement>(null as any as HTMLInputElement);
  static passwordRef = useRef<HTMLInputElement>(null as any as HTMLInputElement);
  constructor(props:RouteChildrenProps) {
    super(props);
    this.state = {
      userName: "",
      password: "",
    };
 
  }

  handleChange = (type:string, e:React.ChangeEvent<HTMLInputElement>) => {
    this.setState((prevState)=>({
      ...prevState,
      type: e.target.value,
    }));
  };
  handleChangeRef = (type:string, e:React.ChangeEvent<HTMLInputElement>) => {
    console.log({Form})
    if ((type = "userName")) {
      Form.userNameRef.current = e.target.value as any as HTMLInputElement;
    } else {
      Form.passwordRef.current = e.target.value as any as HTMLInputElement;
    }
  };
  render() {
    console.log("27",this.props)
    // const userNameRef = createRef();
    // const passwordRef = createRef();
    return (
      <>
        <input
          type="text"
          onChange={(e) => this.handleChange("userName",e)}
          value={this.state.userName}
        />
        <input
          type="password"
          onChange={(e) => this.handleChange("password",e)}
          value={this.state.password}
        />
        <input
          type="text"
          ref={Form.userNameRef}
          onChange={(e) => this.handleChangeRef("userName",e)}
        />
        <input
          type="password"
          ref={Form.passwordRef}
          onChange={(e) => this.handleChangeRef("password",e)}
        />
      </>
    );
  }
}

export default Form;
// import { Suspense } from "react";
// const App = React.lazy(()=>import('./App'));

// <Suspense fallback={<div>...Loading</div>} >
//     <App/>
// </Suspense>



