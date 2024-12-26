import Clipboard from '@react-native-clipboard/clipboard';
import React, {useMemo} from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import useTransactions from '../../hooks/useTransactions';
import TransactionDetailSection from '../../components/TransactionDetail/TransactionDetailSection.tsx/index.tsx';
import TransactionTimestamp from '../../components/TransactionDetail/TransactionTimestamp/index.tsx';
import TransactionHeader from '../../components/TransactionDetail/TransactionHeader/index.tsx';
import TransactionSubHeader from '../../components/TransactionDetail/TransactionSubheader/index.tsx';
import styles from './TransactionDetailPage.style.tsx';

/**
 * A page that displays the details of a transaction.
 * This page is rendered when the user navigates to `/transaction/:id`.
 *
 * @param {{route: {params: {transactionId: string}}, navigation: any}} props
 *   The route and navigation props.
 * @returns A React component that displays the transaction details.
 */
const TransactionDetailPage = ({route, navigation}: any) => {
  const {transactionId} = route.params;
  const {transactions} = useTransactions();
  const transaction = useMemo(
    () => transactions[transactionId],
    [transactions, transactionId],
  );

  if (!transaction)
    return <Text style={styles.text()}>Transaction not found.</Text>;

  const {
    sender_bank,
    beneficiary_bank,
    beneficiary_name,
    account_number,
    amount,
    remark,
    unique_code,
    created_at,
  } = transaction;

  const copyToClipboard = () => {
    Clipboard.setString(transactionId);
    Alert.alert('ID Transaction berhasil disalin');
  };

  return (
    <SafeAreaView style={styles.container()}>
      <TransactionHeader
        transactionId={transactionId}
        onCopy={copyToClipboard}
        onClose={navigation.goBack}
      />
      <TransactionSubHeader
        title="DETAIL TRANSAKSI"
        onClose={navigation.goBack}
      />
      <TransactionDetailSection
        sender_bank={sender_bank}
        beneficiary_bank={beneficiary_bank}
        beneficiary_name={beneficiary_name}
        account_number={account_number}
        amount={amount}
        remark={remark}
        unique_code={unique_code}
      />
      <TransactionTimestamp createdAt={created_at} />
    </SafeAreaView>
  );
};

export default TransactionDetailPage;
