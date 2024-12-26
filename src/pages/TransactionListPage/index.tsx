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

  // Log the modal visibility for debugging
  useEffect(() => {
    console.log('Modal visibility:', modalVisible);
  }, [modalVisible]);

  const filteredAndSortedTransactions = useMemo(() => {
    if (!transactions) return [];

    const lowerCaseSearch = search.toLowerCase();
    const transactionsArray = Object.values(transactions).filter(
      transaction => {
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
      },
    );

    return transactionsArray.sort((a, b) => {
      if (sortBy === 'date') {
        const dateA = new Date(a.created_at).getTime();
        const dateB = new Date(b.created_at).getTime();
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
      }
      if (sortBy === 'beneficiary_name') {
        const nameA = a.beneficiary_name.toLowerCase();
        const nameB = b.beneficiary_name.toLowerCase();
        return sortOrder === 'asc'
          ? nameA.localeCompare(nameB)
          : nameB.localeCompare(nameA);
      }
      return 0;
    });
  }, [transactions, search, sortBy, sortOrder]);

  const handleTransactionPress = (transactionId: string) => {
    navigation.navigate('TransactionDetail', {transactionId});
  };

  const handleSort = (
    type: 'date' | 'beneficiary_name',
    order: 'asc' | 'desc',
  ) => {
    console.log('Setting sort order for', type, order);
    setSortBy(type);
    setSortOrder(order);
    setModalVisible(false); // Close the modal after sorting
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
