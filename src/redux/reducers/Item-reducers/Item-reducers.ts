import {requests} from '../../actions/Item-action/Item-action';

type mainState = {
  items: addData;
};

const initialState = {
  items: [],
};

const itemReducers = (state: mainState = initialState, action: requests) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};

export default itemReducers;
