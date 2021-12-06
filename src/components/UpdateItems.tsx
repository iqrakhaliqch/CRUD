import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
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
import {RootNavigations} from '../../App';
import {update_request} from '../redux/actions/Item-action/Item-action';

type ScreenProp = StackNavigationProp<RootNavigations>;

interface Props {
  productName: any;
  id: any;
}

const UpdateItems: React.FC<Props> = ({productName, id}) => {
  const [item, setItem] = useState(productName.item);
  const [quantity, setQuantity] = useState(productName.quantity);
  const dispatch = useDispatch();
  const navigation = useNavigation<ScreenProp>();

  const updatingItems = () => {
    dispatch(update_request(id, item, quantity));
    navigation.navigate('Home');
    setItem('');
    setQuantity('');
  };

  return (
    <View style={styles.main}>
      <Text style={styles.mainHeading}>Update Items</Text>
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
      <TouchableOpacity style={styles.btn} onPress={updatingItems}>
        <Text style={styles.btnTxt}>Update</Text>
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

export default UpdateItems;
