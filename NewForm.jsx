import React, { createRef } from "react";

class Form extends React.Component {
  constructor(props) {
    super();
    this.state = {
      userName: "",
      password: "",
    };
    this.userNameRef = createRef("");
    this.passwordRef = createRef("");
  }

  handleChange = (type, e) => {
    this.setState({
      type: e.target.value,
    });
  };
  handleChangeRef = (type, e) => {
    if ((type = "userName")) {
      this.userNameRef.current = e.target.value;
    } else {
      this.passwordRef.current = e.target.value;
    }
  };
  render() {
    const userNameRef = createRef("");
    const passwordRef = createRef("");
    return (
      <>
        <input
          type="text"
          onChange={(e) => handleChange("userName")}
          value={this.state.userName}
          label="controlled username"
        />
        <input
          type="password"
          onChange={(e) => handleChange("password")}
          value={this.state.password}
          label="controlled password"
        />
        <input
          type="text"
          ref={this.userNameRef}
          onChange={(e) => handleChangeRef("userName")}
          label="uncontrolled username"
        />
        <input
          type="password"
          ref={passwordRef}
          onChange={(e) => handleChangeRef("password")}
          label="controlled password"
        />
      </>
    );
  }
}
import { Suspense } from "react";
const App = React.lazy(()=>import('./App'));

<Suspense fallback={<div>...Loading</div>} >
    <App/>
</Suspense>



