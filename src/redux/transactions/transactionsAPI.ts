import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

interface Transaction {
  id: number;
  description: string;
  amount: number;
}

interface TransactionError {
  message: string;
}

export const fetchTransactions = createAsyncThunk<
  Transaction[],
  void,
  {rejectValue: TransactionError}
>('transactions/fetchTransactions', async (_, {rejectWithValue}) => {
  try {
    const response = await axios.get(
      'https://recruitment-test.flip.id/frontend-test',
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      return rejectWithValue({
        message: error.response?.data || 'An error occurred',
      });
    }
    return rejectWithValue({message: 'An unknown error occurred'});
  }
});
