import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Items} from './AddItems';

const ListItems: React.FC<Items> = ({item, quanity}) => {
  return (
    <TouchableOpacity
      onPress={() => console.log('Update')}
      onLongPress={() => console.log('Delete')}>
      <View style={styles.mainContainer}>
        <Text style={styles.itemTxt}>{item}</Text>
        <Text style={styles.quantityTxt}>x{quanity}</Text>
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