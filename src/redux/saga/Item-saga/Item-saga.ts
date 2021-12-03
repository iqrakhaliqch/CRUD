// import {all, call, put, takeLatest} from 'redux-saga/effects';
// import {add_request, requests} from '../../actions/Item-action/Item-action';
// import firestore from '@react-native-firebase/firestore';
// import {addData} from '../../actions/types';

// export function* itemsRequests() {
//   yield takeLatest(addData, addMethod);
// }

// function* addMethod(item: string, quantity: string) {
//   const itemsCollection = firestore().collection('Items');
//   itemsCollection.add({
//     item: item,
//     quantity: quantity,
//   });
// }
// //   return async (dispatch: Dispatch<requests>) => {
// //     dispatch({
// //       type: 'ADD_ITEM',
// //       payload: {
// //         // value: {
// //         item: item,
// //         quantity: quantity,
// //         // },
// //       },
// //     });
// //   };
// // }
