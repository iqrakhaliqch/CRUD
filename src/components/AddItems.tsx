import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  StyleSheet,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {add_request} from '../redux/actions/Item-action/Item-action';
// import firestore from '@react-native-firebase/firestore';

//export because we need to use it in another components
export interface Items {
  item: any;
  // quanity: string;
  // id: any;
}

// interface Props {
// addItems: Items[];
// setAddItems: React.Dispatch<React.SetStateAction<Items[]>>;
// }

const AddItems: React.FC = () => {
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const dispatch = useDispatch();

  // const itemsCollection = firestore().collection('Items');

  const addingItems = () => {
    if (!item) {
      Alert.alert('No Item Found :(');
    } else {
      // setAddItems([
      //   ...addItems,
      //   {
      //     item,
      //     quanity: quantity || '1',
      //   },
      // ]);
      if (!quantity) {
        dispatch(add_request(item, '1'));
      } else {
        dispatch(add_request(item, quantity));
        // itemsCollection.add({
        //   item: item,
        //   quantity: quantity,
        // });
      }
      setItem('');
      setQuantity('');
    }
  };

  return (
    <View style={styles.main}>
      <Text style={styles.mainHeading}>Add Items</Text>
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Enter Item: </Text>
        <TextInput
          placeholder={'Enter Item'}
          keyboardType={'default'}
          value={item}
          onChangeText={val => setItem(val)}
          style={styles.itemInput}
        />
        <TextInput
          placeholder={'Enter Quantity'}
          keyboardType={'number-pad'}
          value={quantity}
          onChangeText={val => setQuantity(val)}
          style={styles.quantityInput}
        />
      </View>
      <TouchableOpacity style={styles.btn} onPress={addingItems}>
        <Text style={styles.btnTxt}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    padding: 5,
    alignItems: 'center',
  },
  subContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  mainHeading: {
    fontSize: 35,
    fontFamily: 'monospace',
    color: 'gray',
    marginVertical: 15,
  },
  heading: {
    fontSize: 20,
    fontFamily: 'monospace',
    paddingVertical: 0,
    alignSelf: 'center',
    color: 'gray',
  },
  itemInput: {
    paddingVertical: 0,
    fontSize: 15,
    fontFamily: 'monospace',
    width: 120,
    borderColor: 'gray',
    borderWidth: 2,
    marginRight: 15,
    color: 'gray',
  },
  quantityInput: {
    paddingVertical: 0,
    fontSize: 15,
    fontFamily: 'monospace',
    width: 120,
    borderColor: 'gray',
    borderWidth: 2,
    color: 'gray',
  },
  btn: {
    backgroundColor: 'gray',
    alignItems: 'center',
    marginVertical: 30,
    width: 120,
    padding: 2,
  },
  btnTxt: {
    fontSize: 28,
    fontFamily: 'monospace',
    color: 'white',
  },
});

export default AddItems;
