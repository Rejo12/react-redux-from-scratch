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
import DisplayTree from "./components/CodingInterview/DisplayTreeStructure";
import Synonym from "./components/Synonyms/Synonym";
import Permission from "./components/PermisssionMap";
import DragDrop from "./components/CodingInterview/DragDrop";
import Rating from "./components/RatingComponent/Rating";
import Form from "./components/CustomHooks/Form";
import IncrementComp from "./components/CustomHooks/IncrementComp";
import Pointer from "./components/CustomHooks/Pointer";
import HamburgerComponent from "./components/HamburgerComponent";

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
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <Router>
      <div style={{}}>
        <AppLayout />
        <HamburgerComponent/>
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
              <Route path="/interview-dragNdrop" component={DragDrop} />
              <Route path="/react-memo" component={ParentCompMemo} />
              <Route path="/hoc-study" component={BaseComponent} />
              <Route path="/render-props" component={FormComponent} />
              <Route path="/axios" component={Display} />
              <Route path="/coding-interview" component={ClickComponnent} />
              <Route path="/tree-structure" component={DisplayTree} />
              <Route path="/synonym" component={Synonym} />
              <Route path="/permission" component={Permission} />
              <Route path="/rating-component" component={Rating} />
              <Route path="/useLocalStorage" component={Form} />
              <Route path="/useDebounce" component={IncrementComp} />
              <Route path="/useHistory" component={Pointer} />
              {/* </Suspense> */}
            </Switch>
          </div>
        </ErrorBoundary>
      </div>
    </Router>
  </Provider>
);
