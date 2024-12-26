import React from 'react';
import {FlatList, Text, View} from 'react-native';
import TransactionItem from '../TransactionItem';
import {STATUS_MESSAGE} from '../../../utils/constants';

type TransactionListProps = {
  transactions: any[];
  onTransactionPress: (transactionId: string) => void;
};

/*************  ✨ Codeium Command ⭐  *************/
/**
 * A component that renders a list of transactions.
 *
 * If there are no transactions, it renders a "No transactions available" message.
 *
 * Otherwise, it renders a FlatList of TransactionItem components, with each
 * item's press event handled by the onTransactionPress callback.
 *
 * The TransactionItem components are rendered with a green color if the
 * transaction's status is "success", and orange otherwise.
 *
 * @param {{transactions: any[], onTransactionPress: (transactionId: string) => void}} props
 *   The transactions to render and a callback to handle transaction presses.
 *
 * @returns A React component that renders a list of transactions.
 */
/******  b0b29c18-3478-4591-90ad-89c058395fb7  *******/
const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
  onTransactionPress,
}) => {
  if (transactions.length === 0) {
    return (
      <View>
        <Text>No transactions available</Text>
      </View>
    );
  }

  const renderItem = ({item}: {item: any}) => (
    <TransactionItem
      transaction={item}
      onPress={() => onTransactionPress(item.id)}
      color={item.status === STATUS_MESSAGE.SUCCESS ? 'green' : 'orange'}
    />
  );

  return (
    <FlatList
      style={{paddingHorizontal: 16}}
      data={transactions}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      initialNumToRender={10}
    />
  );
};

export default TransactionList;
