import React, { createContext, useState } from 'react'
import DragNDrop from "./components/GamesContainer";
import GameComp from "./components/Games/TakeABreak";
import WrapperComponent from "./components/WrapperComponent";
import { CustomHooks } from "./components/CustomHooks";
import Index from "./components/Index";
import AppLayout from "./components/AppLayout";
import { Route, Switch } from "react-router-dom";
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
import BinaryTree from "./components/Interview/BinaryTree";
import List from "./components/Views/List";
import Details from "./components/Views/Details";
import Carousel from "./components/Views/Carousel";
import StarshipList from "./components/StarShip/StarshipList";
import CardView from "./components/Starship/CardView";

export const ThemeContext = createContext();
const RouteComponent = () => {
    const [currentTheme, setCurrentTheme] = useState('light')

    const colorStyle = currentTheme === 'light' ? { backgroundColor: '#F8EFE4', color: '#6F5B3E' } : { backgroundColor: '#111111a6', color: '#fff' }
    return (
        <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
            <div style={{}}>
                <AppLayout />
                <HamburgerComponent />
                <ErrorBoundary>
                    <div className="appBodyCSS" style={colorStyle}>
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
                            <Route path="/starship-list" component={StarshipList} />
                            <Route path="/card" component={CardView} />
                            <Route path="/rating-component" component={Rating} />
                            <Route path="/useLocalStorage" component={Form} />
                            <Route path="/useDebounce" component={IncrementComp} />
                            <Route path="/useHistory" component={Pointer} />
                            <Route path="/binary-tree" component={BinaryTree} />
                            <Route path="/listView" component={List} />
                            <Route path="/post/:postId" component={Details} />
                            <Route path="/carousel" component={Carousel} />
                            {/* </Suspense> */}
                        </Switch>
                    </div>
                </ErrorBoundary>
            </div>
        </ThemeContext.Provider>
    )

}


export default RouteComponent