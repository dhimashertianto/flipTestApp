import React from 'react';
import {NavigationContainer} from '@react-navigation/native'; // Import the navigation container
import {createStackNavigator} from '@react-navigation/stack'; // Import stack navigation
import TransactionListPage from './pages/TransactionListPage'; // Import the Transaction List screen
import TransactionDetailPage from './pages/TransactionDetailPage'; // Import the Transaction Detail screen
import {StatusBar} from 'react-native'; // Optional: For controlling the status bar appearance

const Stack = createStackNavigator(); // Create a stack navigator

const App = () => {
  return (
    // The NavigationContainer is the root component that holds the navigator tree
    <NavigationContainer>
      {/* Add a StatusBar configuration (optional, customize as needed) */}
      <StatusBar barStyle="dark-content" />

      {/* Define your navigation stack */}
      <Stack.Navigator initialRouteName="TransactionList">
        {/* The TransactionListPage will be the first screen when the app starts */}
        <Stack.Screen
          name="TransactionList"
          component={TransactionListPage}
          options={{title: 'Transaction List'}} // Customize the header title
        />

        {/* The TransactionDetailPage will show when a user clicks on a transaction item */}
        <Stack.Screen
          name="TransactionDetail"
          component={TransactionDetailPage}
          options={{title: 'Transaction Detail'}} // Customize the header title
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
