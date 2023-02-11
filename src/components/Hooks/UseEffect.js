import React, { useEffect, useState } from "react";
import axios from "axios";

const EffectHook = () => {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    console.log("render from [count] useEffect", count);
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => setData(response.data[0].email));
    //setWindowWidth(window.innerWidth);
    return () => {
      console.log("return from  [count] useEffect", count);
    };
  }, [count]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("render from [] useEffect");
    return () => {
      console.log("return from [] useEffect", count);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    console.log({ window });
    setWindowWidth(window.innerWidth);
  };

  return (
    <>
      <h1>{data}</h1>
      <span>
        Current window width is{" "}
        <strong>
          <em>{windowWidth}</em>
        </strong>
      </span>
      <h1>{count}</h1>
      <button className="toggle-size1" onClick={(e) => setCount(count + 1)}>
        Click me
      </button>
    </>
  );
};

export default EffectHook;
