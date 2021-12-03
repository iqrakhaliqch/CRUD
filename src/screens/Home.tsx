import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import AddItems from '../components/AddItems';
import Header from '../components/Header';
import ListItems from '../components/ListItems';
import {ApplicationStates} from '../redux/reducers';
import {useSelector} from 'react-redux';

const Home = () => {
  //   const [items, setItems] = useState<Items[]>([]);
  const {items} = useSelector((state: ApplicationStates) => state.itemReducer);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header title={'CRUD APP'} />
      <View>
        <AddItems />
      </View>
      <FlatList
        data={items}
        keyExtractor={(item, index) => `${item.item}-${index}`}
        renderItem={({item}) => (
          <ListItems item={item.item} quanity={item.quantity} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Home;
