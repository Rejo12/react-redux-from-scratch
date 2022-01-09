import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from '../src/reducer';
import DragNDrop from './components/GamesContainer';
import GameComp from './components/Games/TakeABreak';
import WrapperComponent from './components/WrapperComponent';
import CustomHooks from './components/CustomHooks';
import Index from './components/Index';
import AppLayout from './components/AppLayout';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import "../src/index.css"
import StateHooks from './components/Hooks/UseState';
import ReducerHook from './components/Hooks/UseReducer';

// const CustomHooks = lazy(()=>import('./components/CustomHooks'))
// const DragNDrop = lazy(()=>import('./components/GamesContainer'))
// const WrapperComponent = lazy(()=>import('./components/WrapperComponent'))
// const GameComp = lazy(()=>import('./components/Games/TakeABreak'))

const store = createStore(rootReducer, compose(applyMiddleware(thunk))); 
ReactDOM.render(
    <Provider store={store}>
    <Router>
        <div>
          <AppLayout/>
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
          {/* </Suspense> */}
          </Switch>  
          </div>
        </div>
    </Router>
    </Provider>, 
    document.getElementById("root")
);
