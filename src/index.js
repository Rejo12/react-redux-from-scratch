import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from '../src/reducer';
import DragNDrop from './components/GamesContainer';
import GameComp from './components/Games/TakeABreak';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import WrapperComponent from './components/WrapperComponent';

const store = createStore(rootReducer, compose(applyMiddleware(thunk))); 
ReactDOM.render(
    <Provider store={store}>
    <Router>
        <div>
          <Switch>
          <Route exact path="/" component={DragNDrop} />
          <Route path="/game" component={GameComp} />
          <Route path="/wrap" component={WrapperComponent} />
          </Switch>  
        </div>
    </Router>
    </Provider>, 
    document.getElementById("root")
);
