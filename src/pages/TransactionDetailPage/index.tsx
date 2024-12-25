import React, {useMemo} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import useTransactions from '../../hooks/useTransactions';

/**
 * A page that displays the details of a transaction.
 *
 * This page is rendered when the user navigates to `/transaction/:id`.
 * It shows the sender bank, beneficiary bank, amount, and date of the transaction.
 * If the transaction is not found, it shows "Transaction not found."
 *
 * @param {{route: {params: {transactionId: string}}, navigation: any}} props
 *   The route and navigation props.
 *
 * @returns A React component that displays the transaction details.
 */
const TransactionDetailPage = ({route, navigation}: any) => {
  const {transactionId} = route.params;
  const {transactions} = useTransactions();
  const transaction = useMemo(
    () => transactions[transactionId],
    [transactions, transactionId],
  );

  if (!transaction) return <Text>Transaction not found.</Text>;

  return (
    <View style={styles.container}>
      <Text>Sender Bank: {transaction.sender_bank}</Text>
      <Text>Beneficiary Bank: {transaction.beneficiary_bank}</Text>
      <Text>Amount: {transaction.amount}</Text>
      <Text>Date: {new Date(transaction.created_at).toLocaleDateString()}</Text>
      <Button title="Back" onPress={navigation.goBack} />
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
