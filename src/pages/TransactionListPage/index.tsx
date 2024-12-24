import React, {useState, useMemo} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import useTransactions from '../../hooks/useTransactions';
import TransactionItem from '../../components/TransactionItem';

const TransactionListPage = ({navigation}: any) => {
  const {transactions, loading, error} = useTransactions();
  const [search, setSearch] = useState('');

  // Memoize filtered transactions to avoid recalculating on every render
  const filteredTransactions = useMemo(() => {
    if (!transactions) return [];

    const transactionsArray = Object.values(transactions);

    // If search term is provided, filter by multiple fields
    if (search) {
      return transactionsArray.filter(transaction => {
        const lowerCaseSearch = search.toLowerCase();

        return (
          transaction.beneficiary_name
            .toLowerCase()
            .includes(lowerCaseSearch) ||
          transaction.sender_bank.toLowerCase().includes(lowerCaseSearch) ||
          transaction.beneficiary_bank
            .toLowerCase()
            .includes(lowerCaseSearch) ||
          transaction.amount.toString().includes(lowerCaseSearch)
        );
      });
    }

    return transactionsArray;
  }, [transactions, search]);

  const handleTransactionPress = (transactionId: string) => {
    navigation.navigate('TransactionDetail', {transactionId});
  };

  const handleClearSearch = () => {
    setSearch('');
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error}</Text>;

  const renderEmptyState = () => (
    <View style={styles.container}>
      <Text>{search ? 'Not found' : 'No transactions'}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Transactions"
          value={search}
          onChangeText={setSearch}
        />
        <TouchableOpacity
          onPress={handleClearSearch}
          style={styles.clearButton}>
          <Text style={styles.clearButtonText}>clear</Text>
        </TouchableOpacity>
      </View>
      {filteredTransactions.length === 0 ? (
        renderEmptyState()
      ) : (
        <FlatList
          data={filteredTransactions}
          renderItem={({item}) => (
            <TransactionItem
              transaction={item}
              onPress={() => handleTransactionPress(item.id)}
            />
          )}
          keyExtractor={item => item.id}
          windowSize={5}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    flex: 1,
    paddingHorizontal: 8,
  },
  clearButton: {
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
  },
  clearButtonText: {
    fontSize: 18,
    color: 'gray',
  },
});

export default TransactionListPage;
