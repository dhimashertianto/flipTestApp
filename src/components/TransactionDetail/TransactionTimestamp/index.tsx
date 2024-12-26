import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {formatDate} from '../../../utils/helper';

/**
 * A component that displays the transaction creation timestamp.
 *
 * @param {{createdAt: string}} props
 *   The timestamp to display.
 * @returns A React component for the timestamp.
 */
const TransactionTimestamp = ({createdAt}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleHeader}>WAKTU DIBUAT</Text>
      <Text>{formatDate(createdAt)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  titleHeader: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TransactionTimestamp;
