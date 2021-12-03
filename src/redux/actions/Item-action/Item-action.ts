import {Dispatch} from 'react';

interface addRequest {
  readonly type: 'ADD_ITEM';
  payload: any;
}

export const add_request = (item: string, quantity: string) => {
  return async (dispatch: Dispatch<requests>) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        // value: {
        item: item,
        quantity: quantity,
        // },
      },
    });
  };
};

export type requests = addRequest;
