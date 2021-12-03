import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//defines structure of props
interface Props {
  title: string;
}

const Header: React.FC<Props> = ({title}) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    padding: 5,
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  textStyle: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'monospace',
    fontWeight: '500',
  },
});

export default Header;
