/* eslint-disable indent */
// eslint-disable-next-line no-unused-vars
import React, { memo, useEffect, forwardRef, useImperativeHandle } from "react";

const ChildComp = forwardRef((props, ref) => {
  useEffect(() => {
    console.log("useEffect", props);
  });
  useImperativeHandle(ref, () => {
    console.log("imperativeHandle", props);
    return {
      refValue: props.id,
      refMethod: () => {
        return `Current ref is ${ref} and id is ${props.id}`;
      },
    };
  });
  var { value: childCount, incChildCount } = props;
  console.log(props, ref);
  return (
    <>
      <hr style={{ backgroundColor: "#fff" }} ref={ref} />
      Child Component : {childCount}
      <div>
        <button onClick={() => incChildCount()}>Child button</button>
      </div>
      <hr style={{ backgroundColor: "#fff" }} />
    </>
  );
});

export default memo(ChildComp);
