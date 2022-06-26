import React, { useState, useCallback, useRef, useEffect } from "react";
import ChildComp from "./ChildComp";

const ParentComp = () => {
  const [count, setCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const childRef = useRef(null);
  // useEffect(() => {
  //   childRef.current = "initialValue";
  //   console.log("childRef in effect", childRef.current);
  // }, []);
  const incChildCount = useCallback(() => {
    console.log(childRef.current);
    setChildCount((prevChildCount) => prevChildCount + 1);
  }, [childCount]);

  const list = [{ id: 21 }, { id: 22 }, { id: 23 }];

  console.log("childRef", childRef);
  if (childRef.current !== null) {
    console.log(childRef.current.refMethod());
  }
  return (
    <>
      <button onClick={(e) => setCount((prevCount) => prevCount + 1)}>
        Click Me
      </button>
      <hr style={{ backgroundColor: "#fff" }} />
      <span>
        Current count is : <strong>{count}</strong>
      </span>
      {list.map((item) => (
        <ChildComp
          value={childCount}
          incChildCount={incChildCount}
          key={item.id}
          id={item.id}
          ref={childRef}
        />
      ))}
    </>
  );
};

export default ParentComp;
