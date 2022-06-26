import React, { useState } from "react";

const RenderPropComponent = (props) => {
  const [compState, setCompState] = useState({
    fName: "",
    lName: "",
    email: "",
    mobileNumber: "",
  });

  const handleChange = (value, fieldName) => {
    console.log("compState", compState);
    // let tmpState =
    //   compState !== null
    //     ? [...compState]
    //     : JSON.parse(JSON.stringify(compState));
    // // let newState = { ...tmpState, [fieldName]: value };
    // console.log("tmpState", tmpState);
    setCompState((prevCompState) => ({ ...prevCompState, [fieldName]: value }));
  };
  return <div>{props.render(handleChange, compState)}</div>;
};

export default RenderPropComponent;
