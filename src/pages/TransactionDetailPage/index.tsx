import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import useTransactions from '../../hooks/useTransactions';

const TransactionDetailPage = ({route, navigation}: any) => {
  const {transactionId} = route.params;
  const {transactions, loading, error} = useTransactions();
  // const transaction = transactions.find(t => t.id === transactionId);
  // Assuming you have the transactions object and you want to find a transaction by its ID
  const transaction = transactions[transactionId];

  // console.log('transactionId', transactionId);
  // console.log('transaction', transaction);
  // console.log('transaction all', transactions);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error}</Text>;
  if (!transaction) return <Text>Transaction not found.</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{transaction.name}</Text>
      <Text>Sender Bank: {transaction.senderBank}</Text>
      <Text>Beneficiary Bank: {transaction.beneficiaryBank}</Text>
      <Text>Amount: {transaction.amount}</Text>
      <Text>Date: {new Date(transaction.date).toLocaleDateString()}</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default TransactionDetailPage;
