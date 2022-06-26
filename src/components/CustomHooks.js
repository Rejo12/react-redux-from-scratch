import React, { useState, useEffect } from "react";
import useLocalStorage from "./UseLocalStorage";

const CustomHooks = () => {
  const [name, setName] = useLocalStorage("name", "");
  useEffect(() => {
    return () => {
      localStorage.removeItem("name");
    };
  });
  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
};

const useStateUpdate = (inputState, update) => {
  const [currState, setCurrState] = useState(inputState);

  const updateState = () => {
    const currTime = `${
      new Date().getHours() > 12
        ? new Date().getHours() - 12
        : new Date().getHours()
    }:${new Date().getMinutes()} ${new Date().getHours() > 12 ? "PM" : "AM"}`;
    setCurrState(currTime);
  };

  return [currState, updateState];
};
export { CustomHooks, useStateUpdate };
