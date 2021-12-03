import {all, fork} from 'redux-saga/effects';
import itemSaga from './Item-saga/Item-saga';

export function* rootSaga() {
  yield all([fork(itemSaga)]);
}
