import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../redux/store';
import {fetchTransactions} from '../redux/transactions/transactionsAPI';

/**
 * A hook that fetches transactions from the API and returns the state of the
 * transaction reducer.
 *
 * @returns An object containing the transactions, loading state, and error.
 */
const useTransactions = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {transactions, loading, error} = useSelector(
    (state: RootState) => state.transactions,
  );

  useEffect(() => {
    if (transactions.length === 0) {
      dispatch(fetchTransactions());
    }
  }, [dispatch, transactions.length]);

  return {transactions, loading, error};
};

export default useTransactions;
