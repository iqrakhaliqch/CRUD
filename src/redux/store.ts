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

// import {createStore, applyMiddleware} from 'redux';
// import createSagaMiddleware from '@redux-saga/core';
// import {createLogger} from 'redux-logger';
// import rootReducer from './reducers';
// import {rootSaga} from './saga';
// import thunk from 'redux-thunk';
// // import {persistStore, persistReducer} from 'redux-persist';
// // import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import {composeWithDevTools} from 'redux-devtools-extension';

// // const persistConfig = {
// //   key: 'root',
// //   stateReconciler: autoMergeLevel2,
// //   storage: AsyncStorage,
// // };

// // const reduce = persistReducer(persistConfig, rootReducer);

// const sagaMiddleware = createSagaMiddleware();

// let store = createStore(
//   reduce,
//   composeWithDevTools(applyMiddleware(sagaMiddleware, createLogger())),
// );

// export const presistor = persistStore(store);

// sagaMiddleware.run(rootSaga);

// export default store;
