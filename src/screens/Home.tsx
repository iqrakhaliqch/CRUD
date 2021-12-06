import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import AddItems from '../components/AddItems';
import Header from '../components/Header';
import ListItems from '../components/ListItems';

import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

const Home: React.FC = () => {
  const [data, setData] = useState<FirebaseFirestoreTypes.DocumentData[]>();
  //   const {items} = useSelector((state: ApplicationStates) => state.itemReducer);

  useEffect(() => {
    firestore()
      .collection('Items')
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot) {
          console.log('Data ==>', documentSnapshot.docs);
          setData(documentSnapshot.docs);
        }
      });
  }, [data]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header title={'CRUD APP'} />
      <View>
        <AddItems />
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <ListItems item={item} />}
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
