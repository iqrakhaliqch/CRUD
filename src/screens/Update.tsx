import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {RootNavigations} from '../../App';
import UpdateItems from '../components/UpdateItems';

const Update: React.FC<RootNavigations> = ({route}) => {
  const product = route.params?.item;
  return (
    <SafeAreaView style={styles.main}>
      <UpdateItems productName={product} id={route.params?.id} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Update;
