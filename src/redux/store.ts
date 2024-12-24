import {configureStore} from '@reduxjs/toolkit';
import transactionsReducer from './transactions/transactionsSlice';

const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
