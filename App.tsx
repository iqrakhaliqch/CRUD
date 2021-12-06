import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Update from './src/screens/Update';

const Stack = createStackNavigator<RootNavigations>();

export type RootNavigations = {
  Home: undefined;
  Update: {item: any; id: any};
};

const App: React.FC<RootNavigations> = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'Home'}
          screenOptions={{
            headerStyle: {backgroundColor: 'gray'},
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontFamily: 'monospace',
              fontWeight: '500',
              fontSize: 25,
            },
          }}>
          <Stack.Screen
            component={Home}
            name={'Home'}
            options={{headerShown: false}}
          />
          <Stack.Screen component={Update} name={'Update'} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
