import React, { useState } from "react";

const getInitialValue = () => {
  console.log("getInitialValue");
  return "hi";
};
const StateHooks = () => {
  const [inputValue, setInputValue] = useState(getInitialValue());
  console.log("dfghj");
  return (
    <>
      <input
        placeholder="typing..."
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <br />
      <br />
      {inputValue}
    </>
  );
};

export default StateHooks;
