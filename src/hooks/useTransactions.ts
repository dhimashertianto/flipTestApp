import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {RootState, AppDispatch} from '../redux/store';
import {fetchTransactions} from '../redux/transactions/transactionsAPI';

const useTransactions = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {transactions, loading, error} = useSelector(
    (state: RootState) => state.transactions,
  );

  useEffect(() => {
    if (transactions.length === 0) {
      dispatch(fetchTransactions()); // Dispatching the async thunk action
    }
  }, [dispatch, transactions.length]);

  return {transactions, loading, error};
};

export default useTransactions;
