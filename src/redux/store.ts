import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import logger from 'redux-logger';
import rootReducer from './reducers/index';
import {rootSaga} from './saga';
import thunk from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger, thunk),
);

sagaMiddleware.run(rootSaga);

export default store;
