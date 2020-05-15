import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import createSagaMiddleware from 'redux-saga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
)

const store = createStore(reducer, enhancer)

export default store