import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HamburgerComponent from "./HamburgerComponent";

const Index = ({ history }) => {
  const changeRoute = (route) => {
    console.log("inside change route", route);
    history.push(route);
  };

  return (
    <div className="main">
      {/* <HamburgerComponent/> */}
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
                onClick={(e) => changeRoute("/react-memo")}
              >
                React memo
              </a>
            </li>
            <li>
              Interview
              <ul>
                <li>
                  <a
                    className="hoverClass"
                    onClick={(e) => changeRoute("/interview-xc")}
                  >
                    XC
                  </a>
                </li>
                <li>
                  <a
                    className="hoverClass"
                    onClick={(e) => changeRoute("/interview-inventiv")}
                  >
                    Inventiv-5/4/22
                  </a>
                </li>
                <li>
                  <a
                    className="hoverClass"
                    onClick={(e) => changeRoute("/interview-dragNdrop")}
                  >
                    dragNdrop
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a
                    className="hoverClass"
                    onClick={(e) => changeRoute("/hoc-study")}
                  >
                    HOC
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a
                    className="hoverClass"
                    onClick={(e) => changeRoute("/render-props")}
                  >
                    Render Props
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <li>
            <a className="hoverClass" onClick={(e) => changeRoute("/axios")}>
              Axios
            </a>
          </li>
          <li>
            <a
              className="hoverClass"
              onClick={(e) => changeRoute("/coding-interview")}
            >
              Coding interview of click
            </a>
          </li>
          <li>
            <a
              className="hoverClass"
              onClick={(e) => changeRoute("/tree-structure")}
            >
              Coding interview of displaying tree structure
            </a>
          </li>
          <li>
            <a className="hoverClass" onClick={(e) => changeRoute("/synonym")}>
              Coding interview for finding synonym word
            </a>
          </li>
          <li>
            <a
              className="hoverClass"
              onClick={(e) => changeRoute("/permission")}
            >
              Coding interview for read,write,delete
            </a>
          </li>
          <li>
            <a
              className="hoverClass"
              onClick={(e) => changeRoute("/rating-component")}
            >
              Rating Component
            </a>
          </li>
          <li>
            <a
              className="hoverClass"
              onClick={(e) => changeRoute("/useLocalStorage")}
            >
              useLocalStorage
            </a>
          </li>
          <li>
            <a
              className="hoverClass"
              onClick={(e) => changeRoute("/useDebounce")}
            >
              useDebounce
            </a>
          </li>
          <li>
            <a
              className="hoverClass"
              onClick={(e) => changeRoute("/useHistory")}
            >
              useHistory
            </a>
          </li>
        </section>
      </div>
    </div>
  );
};

export default Index;
