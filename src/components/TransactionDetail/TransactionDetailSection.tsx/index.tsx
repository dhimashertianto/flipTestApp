import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {formatToRupiah} from '../../../utils/helper';
import styles from './TransactionDetailSection.style';

/**
 * A section that displays the main transaction details.
 *
 * @param {{sender_bank: string, beneficiary_bank: string, beneficiary_name: string, account_number: string, amount: number, remark: string, unique_code: string}} props
 *   The transaction details to display.
 * @returns A React component for the transaction detail section.
 */
const TransactionDetailSection = ({
  sender_bank,
  beneficiary_bank,
  beneficiary_name,
  account_number,
  amount,
  remark,
  unique_code,
}: any) => {
  return (
    <View style={styles.content()}>
      <Text style={[styles.titleHeader(), styles.marginBottom()]}>
        {`${sender_bank.toUpperCase()} -> ${beneficiary_bank.toUpperCase()}`}
      </Text>

      <View style={styles.contentRow()}>
        <View style={styles.transactionInfo()}>
          <Text style={styles.titleHeader()}>{beneficiary_name}</Text>
          <Text>{account_number}</Text>
        </View>
        <View style={styles.transactionAmount()}>
          <Text style={styles.titleHeader()}>NOMINAL</Text>
          <Text>{formatToRupiah(amount)}</Text>
        </View>
      </View>

      <View style={styles.contentRow()}>
        <View style={styles.transactionInfo()}>
          <Text style={styles.titleHeader()}>BERITA TRANSFER</Text>
          <Text>{remark}</Text>
        </View>
        <View style={styles.transactionAmount()}>
          <Text style={styles.titleHeader()}>KODE UNIK</Text>
          <Text>{unique_code}</Text>
        </View>
      </View>
    </View>
  );
};

export default TransactionDetailSection;
