import React, { memo, useEffect } from "react";

const ChildComp = (props) => {
  useEffect(() => {}, []);
  var { value: childCount, incChildCount } = props;
  console.log(props);
  return (
    <>
      <hr style={{ backgroundColor: "#fff" }} />
      Child Component : {childCount}
      <div>
        <button onClick={(e) => incChildCount()}>Child button</button>
      </div>
      <hr style={{ backgroundColor: "#fff" }} />
    </>
  );
};

export default memo(ChildComp);
