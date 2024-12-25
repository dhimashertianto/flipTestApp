import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StatusBar} from 'react-native';
import TransactionDetailPage from './pages/TransactionDetailPage';
import TransactionListPage from './pages/TransactionListPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator initialRouteName="TransactionList">
        <Stack.Screen
          name="TransactionList"
          component={TransactionListPage}
          options={{title: 'Transaction List'}}
        />
        <Stack.Screen
          name="TransactionDetail"
          component={TransactionDetailPage}
          options={{title: 'Transaction Detail'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
