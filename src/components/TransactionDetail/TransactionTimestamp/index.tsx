import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {formatDate} from '../../../utils/helper';
import styles from './TransactionTimestamp.style';
/**
 * A component that displays the transaction creation timestamp.
 *
 * @param {{createdAt: string}} props
 *   The timestamp to display.
 * @returns A React component for the timestamp.
 */
const TransactionTimestamp = ({createdAt}: any) => {
  return (
    <View style={styles.container()}>
      <Text style={styles.titleHeader()}>WAKTU DIBUAT</Text>
      <Text>{formatDate(createdAt)}</Text>
    </View>
  );
};

export default TransactionTimestamp;
