/* Coding interview  */
/**When user clicks anywhere on the screen a circle should appear.
 * There should be undo and redo buttons on the top**/

import React, { useState, Fragment } from "react";

const ClickComponent = () => {
  const [coordinatesArray, setCoordinatesArray] = useState([]);
  const [backupCoordinates, setBackupCoordinates] = useState(coordinatesArray);
  const handleClick = (e) => {
    console.log(e);
    let tmpCoordinates = [...coordinatesArray];
    tmpCoordinates.push({ x: e.clientX, y: e.clientY });
    setCoordinatesArray([...coordinatesArray, { x: e.clientX, y: e.clientY }]);
    setBackupCoordinates([...coordinatesArray, { x: e.clientX, y: e.clientY }]);
  };

  const handleUndo = () => {
    let tmp = [...coordinatesArray];
    tmp.pop();
    setCoordinatesArray(tmp);
  };

  const handleRedo = () => {
    let tmp = [...coordinatesArray];
    tmp.push(backupCoordinates[tmp.length]);
    setCoordinatesArray(tmp);
  };
  console.log({ coordinatesArray });
  console.log({ backupCoordinates });
  return (
    <>
      <button onClick={handleUndo} disabled={!coordinatesArray.length}>
        Undo
      </button>
      <button
        onClick={handleRedo}
        disabled={coordinatesArray.length === backupCoordinates.length}
      >
        Redo
      </button>
      <div className="container-click" onClick={handleClick}>
        <p>This is the surface area for user to click</p>
        <div className="circle"></div>
        {coordinatesArray.map((item) => {
          return (
            <div
              className="circle"
              key={`${item.x}-${item.y}`}
              style={{ marginTop: item.y - 190, marginLeft: item.x - 30 }}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default ClickComponent;
