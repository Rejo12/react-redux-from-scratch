import React, { useState, useCallback } from "react";
import ChildComp from "./ChildComp";

const ParentComp = () => {
  const [count, setCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const incChildCount = useCallback(() => {
    console.log("88888");
    setChildCount((prevChildCount) => prevChildCount + 1);
  }, [childCount]);
  console.log(childCount);
  return (
    <>
      <button onClick={(e) => setCount((prevCount) => prevCount + 1)}>
        Click Me
      </button>
      <hr style={{ backgroundColor: "#fff" }} />
      <span>
        Current count is : <strong>{count}</strong>
      </span>
      <ChildComp value={childCount} incChildCount={incChildCount} />
    </>
  );
};

export default ParentComp;
