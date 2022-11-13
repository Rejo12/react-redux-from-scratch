import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import useLocalStorage from "./UseLocalStorage";
import useRandomJoke from "./useRandomJoke";
import Api from "../Api";

const CustomHooks = () => {
  const [name, setName] = useLocalStorage("name", "");
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const joke = useRandomJoke(firstName, lastName);
  useEffect(() => {
    return () => {
      localStorage.removeItem("name");
    };
  });

  const generateJoke = (e) => {
    e.preventDefault();
    const newApi = new Api();
    const result = newApi.getPosts();
    result.then((response) => console.table(response.data));
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };

  return (
    <React.Fragment>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>The Joke Generator</h1>
      <form>
        <input type="text" placeholder="first name" ref={firstNameRef} />
        <input type="text" placeholder="last name" ref={lastNameRef} />
        <button onClick={generateJoke}>Generate Joke</button>
      </form>
      <h3>{joke}</h3>
    </React.Fragment>
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
