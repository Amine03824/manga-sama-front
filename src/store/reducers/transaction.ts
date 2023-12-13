import { createSlice } from '@reduxjs/toolkit';

type TransactionState = {
  isLoading: boolean;
  error: string;
};

const initialState: TransactionState = {
  isLoading: false,
  error: '',
};

const transactionReducer = createSlice({
  name: 'transaction',
  initialState,
  reducers: {},
});

export default transactionReducer.reducer;
