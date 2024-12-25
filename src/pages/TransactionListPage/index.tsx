import React, {useMemo, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SortModal from '../../components/Modal';
import SearchBar from '../../components/Searchbar';
import useTransactions from '../../hooks/useTransactions';
import TransactionList from '../../components/TransactionList/TransactionList';
import styles from './TransactionListPage.syles';

/**
 * A page component that displays a list of transactions with search and sort functionalities.
 *
 * This component fetches transactions using the `useTransactions` hook and allows users to search
 * transactions by beneficiary name, sender bank, beneficiary bank, or amount. It also provides
 * sorting options by date or beneficiary name.
 *
 * @param {{navigation: any}} props - The navigation prop used to navigate between screens.
 *
 * The component renders a search bar, a transaction list, and a sort modal. The list of transactions
 * is filtered based on the search input and sorted based on the selected criteria.
 *
 * - `handleTransactionPress`: Navigates to the TransactionDetail page when a transaction is selected.
 * - `handleSort`: Sets the sort criteria and order for the transactions.
 *
 * Displays loading and error messages based on the state of the transaction fetching process.
 */

const TransactionListPage = ({navigation}: any) => {
  const {transactions, loading, error} = useTransactions();
  const [search, setSearch] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState<'date' | 'beneficiary_name' | null>(
    null,
  );
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

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
    setSortBy(type);
    setSortOrder(order);
    setModalVisible(false);
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error}</Text>;

  return (
    <View style={styles.container()}>
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
    </View>
  );
};

export default TransactionListPage;
