import React from "react";
import RenderPropComponent from "./RenderPropComponent";

const FormComponent = () => {
  const handleSave = (data) => {
    console.log("data to save", data);
  };
  return (
    <RenderPropComponent
      render={(handleChange, compState) => (
        <div>
          <label>First name: </label>
          <input
            type="text"
            name="fName"
            onChange={(e) => handleChange(e.target.value, "fName")}
            value={compState !== null ? compState.fName : ""}
          />
          <label>Last name: </label>
          <input
            type="text"
            name="lName"
            onChange={(e) => handleChange(e.target.value, "lName")}
            value={compState !== null ? compState.lName : ""}
          />
          <label>Email: </label>
          <input
            type="email"
            name="email"
            onChange={(e) => handleChange(e.target.value, "email")}
            value={compState !== null ? compState.email : ""}
          />
          <label>Mobile number: </label>
          <input
            type="number"
            name="number"
            onChange={(e) => handleChange(e.target.value, "mobileNumber")}
            value={compState !== null ? compState.mobileNumber : ""}
          />
          <button onClick={(e) => handleSave(compState)}>Save</button>
        </div>
      )}
    ></RenderPropComponent>
  );
};

export default FormComponent;
