import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Transaction, TransactionError} from '../../types/Transaction';
import {fetchTransactions} from './transactionsAPI';

interface TransactionsState {
  transactions: Transaction[];
  loading: boolean;
  error: string | null;
  lastFetched: number | null;
}

const initialState: TransactionsState = {
  transactions: [],
  loading: false,
  error: null,
  lastFetched: null,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTransactions.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchTransactions.fulfilled,
        (state, action: PayloadAction<Transaction[]>) => {
          state.loading = false;
          state.transactions = action.payload;
        },
      )
      .addCase(
        fetchTransactions.rejected,
        (state, action: PayloadAction<TransactionError>) => {
          state.loading = false;
          state.error = action.payload.message;
        },
      );
  },
});

export default transactionsSlice.reducer;
