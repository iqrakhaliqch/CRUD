import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {Items} from './AddItems';
import {useDispatch} from 'react-redux';
import {delete_request} from '../redux/actions/Item-action/Item-action';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootNavigations} from '../../App';
import {useNavigation} from '@react-navigation/core';

type ScreenProp = StackNavigationProp<RootNavigations>;

const ListItems: React.FC<Items> = ({item}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<ScreenProp>();

  const deleteItem = () => {
    console.log('Delete', item.id);
    dispatch(delete_request(item.id));
  };

  const confirmation = () => {
    Alert.alert('Confirmation', 'Are you want to Delete the Item', [
      {
        text: 'Cancel',
        onPress: () => {
          console.log('Cancel Pressed');
        },
        style: 'cancel',
      },
      {
        text: 'Okay',
        onPress: () => {
          console.log('Okay Pressed');
          deleteItem();
        },
      },
    ]);
  };

  const updateItem = () => {
    console.log('Update', item.id);
    // navigation.navigate('Update', {item: item});
    navigation.navigate('Update', {item: item._data, id: item.id});
    navigation.setParams({item: item._data, id: item.id});
  };

  return (
    <TouchableOpacity onPress={updateItem} onLongPress={confirmation}>
      <View style={styles.mainContainer}>
        <Text style={styles.itemTxt}>{item._data.item}</Text>
        <Text style={styles.quantityTxt}>x{item._data.quantity}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    backgroundColor: 'gray',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    marginVertical: 2,
  },
  itemTxt: {
    fontSize: 20,
    fontFamily: 'monospace',
    color: 'white',
    marginRight: 5,
  },
  quantityTxt: {
    fontSize: 18,
    fontFamily: 'monospace',
    color: 'white',
  },
});

export default ListItems;
