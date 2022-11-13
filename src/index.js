import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../src/reducer";
import DragNDrop from "./components/GamesContainer";
import GameComp from "./components/Games/TakeABreak";
import WrapperComponent from "./components/WrapperComponent";
import { CustomHooks } from "./components/CustomHooks";
import Index from "./components/Index";
import AppLayout from "./components/AppLayout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../src/index.css";
import StateHooks from "./components/Hooks/UseState";
import ReducerHook from "./components/Hooks/UseReducer";
import EffectHook from "./components/Hooks/UseEffect";
import RefHook from "./components/Hooks/UseRef";
import LayoutEffectHook from "./components/Hooks/UseLayoutEffect";
import ImperativeHandleHook from "./components/Hooks/UseImperativeHandleEffect";
import ContextProvider from "./components/Hooks/ContextHook/ContextProvider";
import MemoHook from "./components/Hooks/UseMemo";
import CallBackHook from "./components/Hooks/UseCallBack Hook/UseCallBack";
import StyledApp from "./components/StyledComponent/App";
import Counter from "./components/Counter";
import ParentComp from "./components/Interview/ParentComp";
import Main from "./components/Interview/Main";
import ParentCompMemo from "./components/ReactMemo/ParentComp";
import ErrorBoundary from "./components/ErrorBoundary";
import rootSaga from "./Saga/rootSaga";
import BaseComponent from "./components/HocStudy/BaseComponent";
import FormComponent from "./components/HocStudy/FormComponent";
import Display from "./components/Axios/Display";
import ClickComponnent from "./components/CodingInterview/ClickComponent";

// const CustomHooks = lazy(()=>import('./components/CustomHooks'))
// const DragNDrop = lazy(()=>import('./components/GamesContainer'))
// const WrapperComponent = lazy(()=>import('./components/WrapperComponent'))
// const GameComp = lazy(()=>import('./components/Games/TakeABreak'))

// Comment out initializing sagaMiddleware and sagaMiddleware.run(rootSaga);
// and pass thunk to  applyMiddleware in case want to use thunk
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware, thunk))
);
sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div style={{ position: "relative" }}>
        <AppLayout />
        <ErrorBoundary>
          <div className="appBodyCSS">
            <Switch>
              {/* <Suspense fallback={<div>Loading Page ....</div>} > */}
              <Route exact path="/" component={Index} />
              <Route exact path="/dragndrop" component={DragNDrop} />
              <Route path="/game" component={GameComp} />
              <Route path="/wrap" component={WrapperComponent} />
              <Route path="/hooks" component={CustomHooks} />
              <Route path="/useState" component={StateHooks} />
              <Route path="/useReducer" component={ReducerHook} />
              <Route path="/useEffect" component={EffectHook} />
              <Route path="/useRef" component={RefHook} />
              <Route path="/useLayoutEffect" component={LayoutEffectHook} />
              <Route
                path="/useImperativeHandle"
                component={ImperativeHandleHook}
              />
              <Route path="/useContext" component={ContextProvider} />
              <Route path="/useMemo" component={MemoHook} />
              <Route path="/useCallBack" component={CallBackHook} />
              <Route path="/styled" component={StyledApp} />
              <Route path="/counter" component={Counter} />
              <Route path="/interview-xc" component={ParentComp} />
              <Route path="/interview-inventiv" component={Main} />
              <Route path="/react-memo" component={ParentCompMemo} />
              <Route path="/hoc-study" component={BaseComponent} />
              <Route path="/render-props" component={FormComponent} />
              <Route path="/axios" component={Display} />
              <Route path="/coding-interview" component={ClickComponnent} />
              {/* </Suspense> */}
            </Switch>
          </div>
        </ErrorBoundary>
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
