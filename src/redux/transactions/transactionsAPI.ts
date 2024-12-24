import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async () => {
    const response = await axios.get(
      'https://recruitment-test.flip.id/frontend-test',
    );
    return response.data;
  },
);
