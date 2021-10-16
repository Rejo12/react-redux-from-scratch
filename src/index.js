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
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

// const CustomHooks = lazy(()=>import('./components/CustomHooks'))
// const DragNDrop = lazy(()=>import('./components/GamesContainer'))
// const WrapperComponent = lazy(()=>import('./components/WrapperComponent'))
// const GameComp = lazy(()=>import('./components/Games/TakeABreak'))

const store = createStore(rootReducer, compose(applyMiddleware(thunk))); 
ReactDOM.render(
    <Provider store={store}>
    <Router>
        <div>
          <Switch>
           {/* <Suspense fallback={<div>Loading Page ....</div>} > */}
          <Route exact path="/" component={DragNDrop} />
          <Route path="/game" component={GameComp} />
          <Route path="/wrap" component={WrapperComponent} />
          <Route path="/hooks" component={CustomHooks} />
          {/* </Suspense> */}
          </Switch>  
        </div>
    </Router>
    </Provider>, 
    document.getElementById("root")
);
