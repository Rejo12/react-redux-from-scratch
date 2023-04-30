import { useState, useEffect } from "react";

export const createNewState = (input, fieldsRequired = [], shape) => {
  const [newState, setNewState] = useState(shape);
  useEffect(() => {
    let tmp = {};
    fieldsRequired.forEach((item) => {
      //   console.log({ input });
      if (Object.keys(input).length > 0) {
        if (Object.hasOwn(input, item)) {
          console.log("here", input, item, newState);
          tmp[item] = input[item] ?? "missing value";
        }
      }
    });
    setNewState(tmp);
  }, [input.id]);

  //   console.log({ newState });
  return [newState, setNewState];
};
