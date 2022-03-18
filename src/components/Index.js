import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

const Index = ({ history }) => {
  const changeRoute = (route) => {
    console.log("inside change route", route);
    history.push(route);
  };

  return (
    <div className="main">
      <br />
      <div className="welcome">
        <section>
          <h3>Welcome to React-Redux</h3>
        </section>
        <section className="body">
          <p>Click on below link to navigate to particular page:</p>
          <ul className="containerUL">
            <span
              id="customToolTip"
              className="hoverClass"
              onClick={(e) => changeRoute("/dragndrop")}
            >
              {" "}
              DragNDrop{" "}
            </span>
            <span className="descriptionText">Dummy text for tooltip</span>
            <br />
            <br />
            <br />

            <li>
              <a className="hoverClass" onClick={(e) => changeRoute("/game")}>
                {" "}
                GameComp{" "}
              </a>
            </li>
            <li>
              <a className="hoverClass" onClick={(e) => changeRoute("/wrap")}>
                {" "}
                WrapperComponent{" "}
              </a>
            </li>
            <li>
              <a className="hoverClass" onClick={(e) => changeRoute("/hooks")}>
                {" "}
                CustomHooks{" "}
              </a>
            </li>
            <li>
              React hooks
              <ul>
                <li>
                  <a
                    className="hoverClass"
                    onClick={(e) => changeRoute("/useState")}
                  >
                    {" "}
                    UseState{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="hoverClass"
                    onClick={(e) => changeRoute("/useReducer")}
                  >
                    {" "}
                    UseReducer{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="hoverClass"
                    onClick={(e) => changeRoute("/useEffect")}
                  >
                    {" "}
                    UseEffect{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="hoverClass"
                    onClick={(e) => changeRoute("/useRef")}
                  >
                    {" "}
                    UseRef{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="hoverClass"
                    onClick={(e) => changeRoute("/useLayoutEffect")}
                  >
                    {" "}
                    UseLayoutEffect{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="hoverClass"
                    onClick={(e) => changeRoute("/useImperativeHandle")}
                  >
                    {" "}
                    UseImperativeHandle{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="hoverClass"
                    onClick={(e) => changeRoute("/useContext")}
                  >
                    {" "}
                    UseContext{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="hoverClass"
                    onClick={(e) => changeRoute("/useMemo")}
                  >
                    {" "}
                    UseMemo{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="hoverClass"
                    onClick={(e) => changeRoute("/useCallBack")}
                  >
                    {" "}
                    UseCallBack{" "}
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a className="hoverClass" onClick={(e) => changeRoute("/styled")}>
                {" "}
                Styled Component{" "}
              </a>
            </li>
            <li>
              <a
                className="hoverClass"
                onClick={(e) => changeRoute("/counter")}
              >
                Counter
              </a>
            </li>
            <li>
              <a
                className="hoverClass"
                onClick={(e) => changeRoute("/interview")}
              >
                Interview
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Index;
