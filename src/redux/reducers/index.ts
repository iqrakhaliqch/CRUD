import {combineReducers} from 'redux';
import itemReducers from './Item-reducers/Item-reducers';

const rootReducer = combineReducers({
  itemReducer: itemReducers,
});

export type ApplicationStates = ReturnType<typeof rootReducer>;
export default rootReducer;
