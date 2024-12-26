import React from 'react';
import {Pressable, Text, View, StyleSheet} from 'react-native';

/**
 * A header component for transaction details.
 *
 * @param {{transactionId: string, onCopy: () => void, onClose: () => void}} props
 *   The transactionId to display and functions for copy and close.
 * @returns A React component for the header.
 */
const TransactionHeader = ({transactionId, onCopy, onClose}: any) => {
  return (
    <View style={styles.header}>
      <Text style={styles.titleHeader}>ID Transaction: #{transactionId}</Text>
      <Pressable onPress={onCopy}>
        <Text style={styles.titleButton}>Copy</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 16,
    borderBottomColor: 'lightblue',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleHeader: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleButton: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default TransactionHeader;
