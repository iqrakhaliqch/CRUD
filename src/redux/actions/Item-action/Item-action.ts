import {Dispatch} from 'react';
import firestore from '@react-native-firebase/firestore';

interface addRequest {
  readonly type: 'ADD_ITEM';
  payload: any;
}

interface deleteRequest {
  readonly type: 'DELETE_ITEM';
  payload: any;
}

interface updateRequest {
  readonly type: 'UPDATE_ITEM';
  payload: any;
}

const itemsCollection = firestore().collection('Items');

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
    itemsCollection.add({
      item: item,
      quantity: quantity,
    });
  };
};

export const delete_request = (id: string) => {
  return async (dispatch: Dispatch<requests>) => {
    dispatch({
      type: 'DELETE_ITEM',
      payload: {id: id},
    });
    itemsCollection.doc(id).delete();
  };
};

export const update_request = (id: string, item: string, quantity: string) => {
  return async (dispatch: Dispatch<requests>) => {
    dispatch({
      type: 'UPDATE_ITEM',
      payload: {id: id, item: item, quantity: quantity},
    });
    itemsCollection.doc(id).update({item: item, quantity: quantity});
  };
};

export type requests = addRequest | deleteRequest | updateRequest;
