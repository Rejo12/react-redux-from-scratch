import React, { lazy, Suspense, createContext } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import rootSaga from './Saga/rootSaga'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../src/reducer'
import RouteComponent from './RouteComponent'

// const CustomHooks = lazy(()=>import('./components/CustomHooks'))
// const DragNDrop = lazy(()=>import('./components/GamesContainer'))
// const WrapperComponent = lazy(()=>import('./components/WrapperComponent'))
// const GameComp = lazy(()=>import('./components/Games/TakeABreak'))

// Comment out initializing sagaMiddleware and sagaMiddleware.run(rootSaga);
// and pass thunk to  applyMiddleware in case want to use thunk
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware, thunk)),
)
sagaMiddleware.run(rootSaga)
const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)
console.log('-----------index.js-----------------')
root.render(
  <Provider store={store}>
    <Router>
      <RouteComponent />
    </Router>
  </Provider>,
)
