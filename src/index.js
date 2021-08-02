import React from 'react';
import ReactDOM from 'react-dom';
import Test from './components/GamesContainer';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from '../src/reducer';

const store = createStore(rootReducer, compose(applyMiddleware(thunk))); 
ReactDOM.render(
    <Provider store={store}>
    <Test />
    </Provider>, 
    document.getElementById("root")
);
