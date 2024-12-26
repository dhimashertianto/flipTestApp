import React, {useMemo, useState, useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import SortModal from '../../components/Transaction/Modal';
import SearchBar from '../../components/Transaction/Searchbar';
import useTransactions from '../../hooks/useTransactions';
import TransactionList from '../../components/TransactionDetail/TransactionList/TransactionList';
import styles from './TransactionListPage.syles';

/**
 * A page component that displays a list of transactions with search and sort functionalities.
 */
const TransactionListPage = ({navigation}: any) => {
  const {transactions, loading, error} = useTransactions();
  const [search, setSearch] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState<'date' | 'beneficiary_name' | null>(
    null,
  );
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {}, [modalVisible]);

  const filteredAndSortedTransactions = useMemo(() => {
    if (!transactions) return [];

    const lowerCaseSearch = search.toLowerCase();
    const transactionsArray = Object.values(transactions);
    const filteredTransactions = transactionsArray.filter(transaction => {
      const lowerCaseTransaction = JSON.stringify(transaction).toLowerCase();
      return lowerCaseTransaction.includes(lowerCaseSearch);
    });

    const sortedTransactions =
      sortBy === null
        ? filteredTransactions
        : filteredTransactions.sort((a, b) => {
            const valueA =
              sortBy === 'date' ? a.created_at : a.beneficiary_name;
            const valueB =
              sortBy === 'date' ? b.created_at : b.beneficiary_name;

            return sortOrder === 'asc'
              ? valueA.localeCompare(valueB)
              : valueB.localeCompare(valueA);
          });

    return sortedTransactions;
  }, [transactions, search, sortBy, sortOrder]);

  const handleTransactionPress = (transactionId: string) => {
    navigation.navigate('TransactionDetail', {transactionId});
  };

  const handleSort = (
    type: 'date' | 'beneficiary_name',
    order: 'asc' | 'desc',
  ) => {
    setSortBy(type);
    setSortOrder(order);
    setModalVisible(false);
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error}</Text>;

  return (
    <SafeAreaView style={styles.container()}>
      <SearchBar
        search={search}
        setSearch={setSearch}
        setModalVisible={setModalVisible}
      />
      <TransactionList
        transactions={filteredAndSortedTransactions}
        onTransactionPress={handleTransactionPress}
      />
      <SortModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        handleSortByDate={order => handleSort('date', order)}
        handleSortByBeneficiaryName={order =>
          handleSort('beneficiary_name', order)
        }
      />
    </SafeAreaView>
  );
};

export default TransactionListPage;
