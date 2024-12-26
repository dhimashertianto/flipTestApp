import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import styles from '../TransactionHeader/TransactionHeader.style';

/**
 * A header component for transaction details.
 *
 * @param {{transactionId: string, onCopy: () => void, onClose: () => void}} props
 *   The transactionId to display and functions for copy and close.
 * @returns A React component for the header.
 */
const TransactionHeader = ({transactionId, onCopy, onClose}: any) => {
  return (
    <View style={styles.header()}>
      <Text style={styles.titleHeader()}>ID Transaction: #{transactionId}</Text>
      <Pressable onPress={onCopy}>
        <Text style={styles.titleButton()}>Copy</Text>
      </Pressable>
    </View>
  );
};

export default TransactionHeader;
