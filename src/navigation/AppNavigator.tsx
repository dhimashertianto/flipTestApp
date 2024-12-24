import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TransactionListPage from '../pages/TransactionListPage';
import TransactionDetailPage from '../pages/TransactionDetailPage';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="TransactionList">
      <Stack.Screen name="TransactionList" component={TransactionListPage} />
      <Stack.Screen
        name="TransactionDetail"
        component={TransactionDetailPage}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
