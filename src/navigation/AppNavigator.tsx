import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import TransactionDetailPage from '../pages/TransactionDetailPage';
import TransactionListPage from '../pages/TransactionListPage';

const Stack = createStackNavigator();

/**
 * The main app navigator.
 *
 * This is a stack navigator that contains two screens: `TransactionList` and
 * `TransactionDetail`. The `TransactionList` screen is the default screen, and it
 * displays a list of transactions. Tapping on a transaction navigates to the
 * `TransactionDetail` screen, which shows a detailed view of the selected
 * transaction.
 */
const AppNavigator = () => (
  <Stack.Navigator initialRouteName="TransactionList">
    <Stack.Screen name="TransactionList" component={TransactionListPage} />
    <Stack.Screen name="TransactionDetail" component={TransactionDetailPage} />
  </Stack.Navigator>
);

export default AppNavigator;
