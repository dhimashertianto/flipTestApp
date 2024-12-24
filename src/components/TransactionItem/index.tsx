import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Transaction} from '../../types/Transaction';

interface TransactionItemProps {
  transaction: Transaction;
  onPress: () => void;
}

const TransactionItem: React.FC<TransactionItemProps> = ({
  transaction,
  onPress,
}) => {
  return (
    <Pressable style={styles.itemContainer} onPress={onPress}>
      {/* Left Color Indicator */}
      <View style={styles.colorContainer} />

      {/* Transaction Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.itemText}>
          {`${transaction.sender_bank} -> ${transaction.beneficiary_bank}`}
        </Text>
        <Text style={styles.itemText}>{transaction.beneficiary_name}</Text>
        <Text style={styles.itemText}>
          Rp {transaction.amount} | {transaction.created_at}
        </Text>
      </View>

      {/* Status Section */}
      <View style={styles.statusContainer}>
        <Text style={styles.itemText}>{transaction.status}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 8,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    flexDirection: 'row',
    backgroundColor: 'white', // Set background color to white
    padding: 8, // Add padding around the entire item
    alignItems: 'center',
  },
  colorContainer: {
    width: 8,
    backgroundColor: 'blue', // Example color for the left indicator (can be dynamic)
    height: '100%', // Fill the full height of the container
  },
  detailsContainer: {
    flex: 1, // This section takes up the remaining space
    paddingLeft: 16, // Padding for the transaction details
  },
  statusContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 16, // Padding for the status container
  },
  itemText: {
    fontSize: 16,
    color: 'black',
  },
});

export default TransactionItem;
